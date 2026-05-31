import fs from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

function loadDotEnv() {
  try {
    const envPath = path.resolve(process.cwd(), '.env')
    const raw = fs.readFileSync(envPath, 'utf8')
    raw.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) return
      const eq = trimmed.indexOf('=')
      if (eq === -1) return
      const key = trimmed.slice(0, eq).trim()
      const val = trimmed.slice(eq + 1).trim()
      if (key && process.env[key] === undefined) process.env[key] = val
    })
  } catch (err) {
    // ignore
  }
}

loadDotEnv()

const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS
const MAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com'
const MAIL_PORT = Number(process.env.EMAIL_PORT || 465)
const MAIL_SECURE = String(process.env.EMAIL_SECURE || 'true').toLowerCase() === 'true'

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error('EMAIL_USER or EMAIL_PASS is missing in environment or .env')
  process.exit(2)
}

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: MAIL_SECURE,
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
  logger: false,
  debug: false,
})

;(async () => {
  try {
    await transporter.verify()
    console.log('SMTP OK — credentials valid')
    process.exit(0)
  } catch (err) {
    console.error('SMTP verify failed:')
    console.error(err && err.message ? err.message : err)
    process.exit(1)
  }
})()
