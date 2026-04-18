import {
  addReview,
  getCorsHeaders,
  parseRequestBody,
  readReviews,
  sendJson,
  validateReviewPayload,
} from './_lib/reviews.js'

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    Object.entries(getCorsHeaders()).forEach(([key, value]) => {
      res.setHeader(key, value)
    })
    res.status(204).end()
    return
  }

  if (req.method === 'GET') {
    try {
      const reviews = await readReviews()
      sendJson(res, 200, {
        success: true,
        reviews,
      })
    } catch (error) {
      console.error('Vercel reviews read error:', error)
      sendJson(res, 500, {
        success: false,
        message: 'Reviews could not be loaded.',
      })
    }
    return
  }

  if (req.method !== 'POST') {
    sendJson(res, 405, { success: false, message: 'Method not allowed.' })
    return
  }

  try {
    const data = await parseRequestBody(req)
    const validationError = validateReviewPayload(data)

    if (validationError) {
      sendJson(res, 400, { success: false, message: validationError })
      return
    }

    const result = await addReview(data)
    sendJson(res, 201, {
      success: true,
      message: 'Review submitted successfully.',
      review: result.review,
      reviews: result.reviews,
    })
  } catch (error) {
    console.error('Vercel reviews write error:', error)
    const detail = error instanceof Error ? error.message : 'Unknown server error.'
    const isStorageIssue = detail === 'Review storage is not configured for production.'

    sendJson(res, isStorageIssue ? 503 : 500, {
      success: false,
      message: isStorageIssue
        ? 'Live review storage is not configured yet. Add GitHub env vars on Vercel.'
        : 'Review could not be saved. Please try again.',
    })
  }
}
