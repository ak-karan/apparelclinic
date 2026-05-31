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
const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER

if (!EMAIL_USER || !EMAIL_PASS) {
  console.error('EMAIL_USER or EMAIL_PASS missing')
  process.exit(2)
}

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: Number(process.env.EMAIL_PORT || 465),
  secure: String(process.env.EMAIL_SECURE || 'true').toLowerCase() === 'true',
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
})

;(async () => {
  try {
    const info = await transporter.sendMail({
      from: `"Apparel Clinic Test" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      subject: 'Test email from apparelclinic',
      text: 'This is a test email from apparelclinic repo.',
    })
    console.log('sendMail success:', info && info.messageId)
    process.exit(0)
  } catch (err) {
    console.error('sendMail failed:')
    console.error(err && err.message ? err.message : err)
    if (err && err.response) console.error('response:', err.response)
    process.exit(1)
  }
})()
