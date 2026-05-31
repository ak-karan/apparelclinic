import nodemailer from 'nodemailer'

function readEnv(name) {
  return process.env[name]?.trim()
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
  const EMAIL_USER = readEnv('EMAIL_USER')
  const EMAIL_PASS = readEnv('EMAIL_PASS')

  if (!EMAIL_USER || !EMAIL_PASS) {
    throw new Error('EMAIL_USER or EMAIL_PASS is missing.')
  }

  // Gmail often works best with explicit SMTP config (especially in Vercel/serverless)
  // and with an App Password (BadCredentials otherwise).
  const MAIL_HOST = readEnv('EMAIL_HOST') || 'smtp.gmail.com'
  const MAIL_PORT = Number(readEnv('EMAIL_PORT') || 465)
  const MAIL_SECURE = String(readEnv('EMAIL_SECURE') || 'true').toLowerCase() === 'true'
  const MAIL_DEBUG = String(readEnv('MAIL_DEBUG') || '').toLowerCase() === 'true'

  return nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: MAIL_SECURE,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
    logger: MAIL_DEBUG,
    debug: MAIL_DEBUG,
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

function validatePickupPayload(data) {
  if (!data || typeof data !== 'object') {
    return 'Invalid request body.'
  }

  if (data.botcheck) {
    return 'Spam rejected.'
  }

  if (!data.name || !data.phone) {
    return 'Name and phone are required.'
  }

  if (!data.pickup_address) {
    return 'Pickup address is required.'
  }

  return null
}

function validateContactPayload(data) {
  if (!data || typeof data !== 'object') {
    return 'Invalid request body.'
  }

  if (data.botcheck) {
    return 'Spam rejected.'
  }

  if (!data.name || !data.phone) {
    return 'Name and phone are required.'
  }

  return null
}

async function sendEmail(kind, data) {
  const EMAIL_USER = readEnv('EMAIL_USER')
  const EMAIL_TO = readEnv('EMAIL_TO') || EMAIL_USER
  const transporter = createTransporter()
  const email = kind === 'pickup' ? buildPickupEmail(data) : buildContactEmail(data)

  await transporter.sendMail({
    from: `"Apparel Clinic Website" <${EMAIL_USER}>`,
    to: EMAIL_TO,
    replyTo: EMAIL_USER,
    subject: email.subject,
    text: email.text,
    html: email.html,
  })
}

async function parseRequestBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  const chunks = []
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }

  if (chunks.length === 0) {
    return {}
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

function sendJson(res, statusCode, payload) {
  res.status(statusCode).json(payload)
}

function handleServerError(res, error) {
  const detail = error instanceof Error ? error.message : 'Unknown server error.'
  sendJson(res, 500, {
    success: false,
    message: process.env.NODE_ENV === 'production'
      ? 'Email could not be sent. Please try again.'
      : `Email could not be sent. ${detail}`,
  })
}

export {
  handleServerError,
  parseRequestBody,
  sendEmail,
  sendJson,
  validateContactPayload,
  validatePickupPayload,
}
