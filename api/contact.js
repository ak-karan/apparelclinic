import {
  handleServerError,
  parseRequestBody,
  sendEmail,
  sendJson,
  validateContactPayload,
} from './_lib/mail.js'

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.status(204).end()
    return
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { success: false, message: 'Method not allowed.' })
    return
  }

  try {
    const data = await parseRequestBody(req)
    const validationError = validateContactPayload(data)

    if (validationError) {
      sendJson(res, 400, { success: false, message: validationError })
      return
    }

    await sendEmail('contact', data)
    sendJson(res, 200, { success: true, message: 'Request sent successfully.' })
  } catch (error) {
    console.error('Vercel contact mail error:', error)
    handleServerError(res, error)
  }
}
