import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const REVIEWS_FILE = path.resolve(__dirname, '..', '..', 'data', 'reviews.json')
const GITHUB_API_BASE = 'https://api.github.com'

function getCorsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

function sendJson(res, statusCode, payload) {
  Object.entries(getCorsHeaders()).forEach(([key, value]) => {
    res.setHeader(key, value)
  })
  res.status(statusCode).json(payload)
}

async function parseRequestBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  const chunks = []
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }

  if (!chunks.length) {
    return {}
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
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

function ensureLocalReviewsFile() {
  const directory = path.dirname(REVIEWS_FILE)

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true })
  }

  if (!fs.existsSync(REVIEWS_FILE)) {
    fs.writeFileSync(REVIEWS_FILE, '[]', 'utf8')
  }
}

function readLocalReviews() {
  ensureLocalReviewsFile()

  try {
    const raw = fs.readFileSync(REVIEWS_FILE, 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeLocalReviews(reviews) {
  ensureLocalReviewsFile()
  fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2), 'utf8')
}

function getGitHubConfig() {
  const token = process.env.GITHUB_TOKEN
  const repo = process.env.GITHUB_REPO
  const branch = process.env.GITHUB_BRANCH || 'master'
  const filePath = process.env.GITHUB_REVIEWS_PATH || 'data/reviews.json'

  if (!token || !repo) {
    return null
  }

  return { token, repo, branch, filePath }
}

function createGitHubHeaders(token) {
  return {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'User-Agent': 'apparelclinic-reviews',
  }
}

async function fetchGitHubReviewsFile(config) {
  const url = `${GITHUB_API_BASE}/repos/${config.repo}/contents/${config.filePath}?ref=${encodeURIComponent(config.branch)}`
  const response = await fetch(url, {
    headers: createGitHubHeaders(config.token),
  })

  if (response.status === 404) {
    return {
      reviews: [],
      sha: null,
    }
  }

  if (!response.ok) {
    throw new Error(`GitHub read failed with status ${response.status}.`)
  }

  const payload = await response.json()
  const content = Buffer.from(payload.content || '', 'base64').toString('utf8')
  const parsed = JSON.parse(content || '[]')

  return {
    reviews: Array.isArray(parsed) ? parsed : [],
    sha: payload.sha || null,
  }
}

async function writeGitHubReviews(config, reviews, currentSha) {
  const url = `${GITHUB_API_BASE}/repos/${config.repo}/contents/${config.filePath}`
  const content = Buffer.from(JSON.stringify(reviews, null, 2), 'utf8').toString('base64')

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      ...createGitHubHeaders(config.token),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Add review via website on ${new Date().toISOString()}`,
      content,
      branch: config.branch,
      sha: currentSha || undefined,
    }),
  })

  if (!response.ok) {
    throw new Error(`GitHub write failed with status ${response.status}.`)
  }
}

async function readReviews() {
  const githubConfig = getGitHubConfig()

  if (githubConfig) {
    const payload = await fetchGitHubReviewsFile(githubConfig)
    return payload.reviews
  }

  return readLocalReviews()
}

async function addReview(data) {
  const review = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: String(data.name).trim(),
    text: String(data.text).trim(),
    rating: Number(data.rating),
    date: new Date().toISOString(),
    verified: true,
  }

  const githubConfig = getGitHubConfig()

  if (githubConfig) {
    const payload = await fetchGitHubReviewsFile(githubConfig)
    const reviews = [review, ...payload.reviews]
    await writeGitHubReviews(githubConfig, reviews, payload.sha)
    return { review, reviews }
  }

  if (process.env.VERCEL) {
    throw new Error('Review storage is not configured for production.')
  }

  const reviews = readLocalReviews()
  reviews.unshift(review)
  writeLocalReviews(reviews)
  return { review, reviews }
}

export {
  addReview,
  getCorsHeaders,
  parseRequestBody,
  readReviews,
  sendJson,
  validateReviewPayload,
}
