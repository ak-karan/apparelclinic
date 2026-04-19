import http from 'node:http'
import fs from 'node:fs'
import process from 'node:process'
import path from 'node:path'
import { URL } from 'node:url'
import nodemailer from 'nodemailer'

function loadEnvFile() {
  const envPath = path.resolve(process.cwd(), '.env')
  if (!fs.existsSync(envPath)) {
    return
  }

  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/)
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) {
      continue
    }

    const separatorIndex = trimmed.indexOf('=')
    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    let value = trimmed.slice(separatorIndex + 1).trim()

    if (!key || process.env[key]) {
      continue
    }

    const commentIndex = value.search(/\s+#/)
    if (commentIndex !== -1) {
      value = value.slice(0, commentIndex).trim()
    }

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }

    process.env[key] = value
  }
}

loadEnvFile()

const PORT = Number(process.env.PORT || 3001)
function readEnv(name) {
  return process.env[name]?.trim()
}

const EMAIL_USER = readEnv('EMAIL_USER')
const EMAIL_PASS = readEnv('EMAIL_PASS')
const EMAIL_TO = readEnv('EMAIL_TO') || EMAIL_USER
const REVIEWS_FILE = path.resolve(process.cwd(), 'data', 'reviews.json')

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  res.end(JSON.stringify(payload))
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function createTransporter() {
  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error('EMAIL_USER or EMAIL_PASS is missing.')
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  })
}

function buildPickupEmail(data) {
  const text = [
    'New pickup request',
    '',
    `Name: ${data.name || '-'}`,
    `Phone: ${data.phone || '-'}`,
    `Address: ${data.pickup_address || '-'}`,
    `Service: ${data.service_type || '-'}`,
    `Preferred date: ${data.preferred_date || '-'}`,
    `Instructions: ${data.special_instructions || '-'}`,
  ].join('\n')

  const html = `
    <h2>New pickup request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name || '-')}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || '-')}</p>
    <p><strong>Address:</strong> ${escapeHtml(data.pickup_address || '-')}</p>
    <p><strong>Service:</strong> ${escapeHtml(data.service_type || '-')}</p>
    <p><strong>Preferred date:</strong> ${escapeHtml(data.preferred_date || '-')}</p>
    <p><strong>Instructions:</strong> ${escapeHtml(data.special_instructions || '-')}</p>
  `

  return {
    subject: `Pickup Request from ${data.name || 'Website Visitor'}`,
    text,
    html,
  }
}

function buildContactEmail(data) {
  const text = [
    'New contact enquiry',
    '',
    `Name: ${data.name || '-'}`,
    `Phone: ${data.phone || '-'}`,
    `Service: ${data.service_required || '-'}`,
    `Message: ${data.message || '-'}`,
  ].join('\n')

  const html = `
    <h2>New contact enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name || '-')}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || '-')}</p>
    <p><strong>Service:</strong> ${escapeHtml(data.service_required || '-')}</p>
    <p><strong>Message:</strong> ${escapeHtml(data.message || '-')}</p>
  `

  return {
    subject: `Contact Enquiry from ${data.name || 'Website Visitor'}`,
    text,
    html,
  }
}

function validatePayload(pathname, data) {
  if (!data || typeof data !== 'object') {
    return 'Invalid request body.'
  }

  if (data.botcheck) {
    return 'Spam rejected.'
  }

  if (!data.name || !data.phone) {
    return 'Name and phone are required.'
  }

  if (pathname === '/api/pickup' && !data.pickup_address) {
    return 'Pickup address is required.'
  }

  return null
}

function ensureReviewsFile() {
  const directory = path.dirname(REVIEWS_FILE)
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }

  if (!fs.existsSync(REVIEWS_FILE)) {
    fs.writeFileSync(REVIEWS_FILE, '[]', 'utf8')
  }
}

function readReviews() {
  ensureReviewsFile()

  try {
    const raw = fs.readFileSync(REVIEWS_FILE, 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeReviews(reviews) {
  ensureReviewsFile()
  fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2), 'utf8')
}

function validateReviewPayload(data) {
  if (!data || typeof data !== 'object') {
    return 'Invalid request body.'
  }

  const name = String(data.name || '').trim()
  const text = String(data.text || '').trim()
  const rating = Number(data.rating)

  if (!name) {
    return 'Name is required.'
  }

  if (!text) {
    return 'Review description is required.'
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return 'Rating must be between 1 and 5.'
  }

  return null
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`)

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {})
    return
  }

  if (req.method === 'GET' && url.pathname === '/api/reviews') {
    sendJson(res, 200, {
      success: true,
      reviews: readReviews(),
    })
    return
  }

  if (req.method === 'POST' && url.pathname === '/api/reviews') {
    try {
      let rawBody = ''
      for await (const chunk of req) {
        rawBody += chunk
      }

      const data = rawBody ? JSON.parse(rawBody) : {}
      const validationError = validateReviewPayload(data)
      if (validationError) {
        sendJson(res, 400, { success: false, message: validationError })
        return
      }

      const reviews = readReviews()
      const review = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        name: String(data.name).trim(),
        text: String(data.text).trim(),
        rating: Number(data.rating),
        date: new Date().toISOString(),
        verified: true,
      }

      reviews.unshift(review)
      writeReviews(reviews)

      sendJson(res, 201, {
        success: true,
        message: 'Review submitted successfully.',
        review,
        reviews,
      })
    } catch (error) {
      console.error('Review server error:', error)
      sendJson(res, 500, {
        success: false,
        message: 'Review could not be saved. Please try again.',
      })
    }
    return
  }

  if (req.method !== 'POST' || !['/api/pickup', '/api/contact'].includes(url.pathname)) {
    sendJson(res, 404, { success: false, message: 'Not found.' })
    return
  }

  try {
    let rawBody = ''
    for await (const chunk of req) {
      rawBody += chunk
    }

    const data = rawBody ? JSON.parse(rawBody) : {}
    const validationError = validatePayload(url.pathname, data)
    if (validationError) {
      sendJson(res, 400, { success: false, message: validationError })
      return
    }

    const transporter = createTransporter()
    const email = url.pathname === '/api/pickup' ? buildPickupEmail(data) : buildContactEmail(data)

    await transporter.sendMail({
      from: `"Apparel Clinic Website" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: EMAIL_USER,
      subject: email.subject,
      text: email.text,
      html: email.html,
    })

    sendJson(res, 200, {
      success: true,
      message: 'Request sent successfully.',
    })
  } catch (error) {
    console.error('Mail server error:', error)
    const detail = error instanceof Error ? error.message : 'Unknown server error.'
    sendJson(res, 500, {
      success: false,
      message: process.env.NODE_ENV === 'production'
        ? 'Email could not be sent. Please try again.'
        : `Email could not be sent. ${detail}`,
    })
  }
})

server.listen(PORT, () => {
  console.log(`Mail server listening on http://localhost:${PORT}`)
})
