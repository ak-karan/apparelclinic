import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import ReviewCard from './ReviewCard'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.5, delay },
})

const REVIEWS = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Excellent service! My silk sarees came back looking like new. The staff is very professional and careful with delicate fabrics.',
    date: '2 days ago',
    verified: true,
  },
  {
    name: 'Rahul Verma',
    rating: 5,
    text: 'Best laundry service in Faridabad. They picked up and delivered on time. My formal shirts are perfectly ironed.',
    date: '1 week ago',
    verified: true,
  },
  {
    name: 'Neha Gupta',
    rating: 4,
    text: 'Very happy with the dry cleaning service. They removed tough stains from my curtains. Reasonable prices.',
    date: '3 days ago',
    verified: true,
  },
  {
    name: 'Amit Kumar',
    rating: 5,
    text: 'Regular customer for 2 years now. Never disappointed. Their shoe cleaning service is amazing!',
    date: '5 days ago',
    verified: true,
  },
  {
    name: 'Sneha Reddy',
    rating: 5,
    text: 'Great experience! They even fixed a loose button on my shirt for free. Will definitely recommend.',
    date: '1 day ago',
    verified: false,
  },
  {
    name: 'Vikram Singh',
    rating: 4,
    text: 'Good quality service. Scheduling is convenient and delivery was right on time. Keep it up!',
    date: '2 weeks ago',
    verified: true,
  },
]

const BASE_REVIEW_COUNT = 50
const REVIEWS_ENDPOINT = import.meta.env.VITE_REVIEWS_ENDPOINT?.trim() || '/api/reviews'

function formatReviewDate(value) {
  if (!value) {
    return 'Just now'
  }

  const parsedDate = new Date(value)
  if (Number.isNaN(parsedDate.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(parsedDate)
}

function Reviews() {
  const carouselRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [reviews, setReviews] = useState(REVIEWS)
  const [formData, setFormData] = useState({
    name: '',
    text: '',
    rating: 5,
  })
  const [submitState, setSubmitState] = useState({
    loading: false,
    error: '',
  })

  const updateCurrentSlide = useCallback(() => {
    if (!carouselRef.current) {
      return
    }

    const cards = carouselRef.current.querySelectorAll('[data-review-card]')
    if (!cards.length) {
      return
    }

    const containerLeft = carouselRef.current.getBoundingClientRect().left
    let nearestIndex = 0
    let nearestOffset = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const offset = Math.abs(card.getBoundingClientRect().left - containerLeft)
      if (offset < nearestOffset) {
        nearestOffset = offset
        nearestIndex = index
      }
    })

    setCurrentSlide(nearestIndex)
  }, [])

  useEffect(() => {
    updateCurrentSlide()
    window.addEventListener('resize', updateCurrentSlide)
    return () => window.removeEventListener('resize', updateCurrentSlide)
  }, [updateCurrentSlide])

  useEffect(() => {
    let ignore = false

    async function loadReviews() {
      try {
        const response = await fetch(REVIEWS_ENDPOINT)
        const result = await response.json()

        if (!response.ok || !Array.isArray(result?.reviews)) {
          return
        }

        if (!ignore) {
          const apiReviews = result.reviews.map((review) => ({
            ...review,
            date: formatReviewDate(review.date),
          }))
          setReviews([...apiReviews, ...REVIEWS])
        }
      } catch {
        // Keep static reviews when API is unavailable.
      }
    }

    loadReviews()

    return () => {
      ignore = true
    }
  }, [])

  const scrollToSlide = useCallback((index) => {
    if (!carouselRef.current) {
      return
    }

    const safeIndex = Math.max(0, Math.min(index, reviews.length - 1))
    const cards = carouselRef.current.querySelectorAll('[data-review-card]')
    const target = cards[safeIndex]

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      setCurrentSlide(safeIndex)
    }
  }, [reviews.length])

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }, [])

  const totalReviews = BASE_REVIEW_COUNT + (reviews.length - REVIEWS.length)
  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)

  const handleRatingSelect = useCallback((rating) => {
    setFormData((current) => ({
      ...current,
      rating,
    }))
  }, [])

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault()

      const name = formData.name.trim()
      const text = formData.text.trim()

      if (!name || !text) {
        return
      }

      setSubmitState({
        loading: true,
        error: '',
      })

      try {
        const response = await fetch(REVIEWS_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            text,
            rating: formData.rating,
          }),
        })

        const result = await response.json().catch(() => null)

        if (!response.ok || !result?.success || !Array.isArray(result?.reviews)) {
          throw new Error(result?.message || 'Review could not be submitted.')
        }

        setReviews([
          ...result.reviews.map((review) => ({
            ...review,
            date: formatReviewDate(review.date),
          })),
          ...REVIEWS,
        ])
        setFormData({
          name: '',
          text: '',
          rating: 5,
        })

        window.setTimeout(() => {
          scrollToSlide(0)
        }, 120)
      } catch (error) {
        setSubmitState({
          loading: false,
          error: error instanceof Error ? error.message : 'Review could not be submitted.',
        })
        return
      }

      setSubmitState({
        loading: false,
        error: '',
      })
    },
    [formData, scrollToSlide]
  )

  return (
    <section
      className="section-pad relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at top left, rgba(37,99,235,0.10), transparent 28%), radial-gradient(circle at bottom right, rgba(59,130,246,0.08), transparent 26%), var(--bg-2)',
      }}
    >
      <div className="container-app relative z-10">
        <motion.div {...fadeUp()} className="mb-10 text-center lg:mb-14">
          <span className="section-label">Client Reviews</span>
          <h2 className="mt-4 font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
            Trusted by thousands of families for premium laundry, dry cleaning, and doorstep pickup across Faridabad.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp(0.15)}
          className="mb-10 grid gap-6 rounded-[34px] border p-5 shadow-sm lg:grid-cols-[1fr_1.15fr] lg:p-7"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(147,197,253,0.24), transparent 32%), linear-gradient(135deg, rgba(255,255,255,0.97), rgba(248,250,252,0.98))',
            borderColor: 'rgba(37, 99, 235, 0.12)',
            boxShadow: '0 24px 70px rgba(15, 23, 42, 0.08)',
          }}
        >
          <div className="flex flex-col justify-between rounded-[28px] bg-slate-950 px-5 py-6 text-white lg:px-6">
            <div>
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-100">
                Customer Voice
              </div>
              <h3 className="mt-4 font-heading text-2xl font-bold md:text-3xl">Share Your Review</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                Customer jo details bharega, woh server par save hoga aur phir sab users ko review list me dikh sakega.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { label: 'Visible Reviews', value: `${reviews.length}` },
                { label: 'Average', value: averageRating },
                { label: 'Trusted Rate', value: '91%' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                  <div className="text-xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] lg:p-5"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Live Review Form</div>
                <h4 className="mt-2 text-xl font-bold text-slate-900">Tell us how we did</h4>
              </div>
              <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">Instant Add</div>
            </div>

            <div className="grid gap-4">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-800">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-800">Description</span>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  placeholder="Tell customers about your experience"
                  required
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <div className="rounded-[24px] border border-blue-100 bg-blue-50/60 p-4">
                <span className="mb-3 block text-sm font-semibold text-slate-800">Select Rating</span>
                <div className="flex flex-wrap items-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleRatingSelect(rating)}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                        rating === formData.rating
                          ? 'bg-slate-900 text-white shadow-lg'
                          : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-blue-300'
                      }`}
                      aria-label={`Give ${rating} star`}
                    >
                      <Star
                        size={16}
                        className={rating <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
                      />
                      {rating} Star
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={submitState.loading}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitState.loading ? 'Submitting...' : 'Submit Review'}
              </button>

              {submitState.error && <p className="text-sm font-medium text-rose-600">{submitState.error}</p>}
            </div>
          </form>
        </motion.div>
<motion.div
          {...fadeUp(0.1)}
          className="mb-8 flex flex-col gap-4 rounded-[32px] border p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:p-6"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.94) 0%, rgba(239,246,255,0.92) 50%, rgba(219,234,254,0.84) 100%)',
            borderColor: 'rgba(37, 99, 235, 0.12)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 22px 60px rgba(15, 23, 42, 0.08)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-blue-100">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Rated {averageRating} out of 5</div>
              <div className="text-xs text-slate-500">Based on {totalReviews}+ customer experiences</div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => scrollToSlide(currentSlide - 1)}
              disabled={currentSlide === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollToSlide(currentSlide + 1)}
              disabled={currentSlide === reviews.length - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border bg-white text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
        <div
          ref={carouselRef}
          onScroll={updateCurrentSlide}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 hide-scrollbar"
        >
          {reviews.map((review, index) => (
            <div key={`${review.name}-${index}`} data-review-card className="flex">
              <ReviewCard review={review} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollToSlide(index)}
              className={`rounded-full transition-all ${
                currentSlide === index ? 'h-2 w-8 bg-blue-600' : 'h-2 w-2 bg-slate-300 hover:bg-blue-400'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-12 grid grid-cols-2 gap-4 border-t border-gray-200 pt-8 md:grid-cols-4"
        >
          {[
            { label: 'Total Reviews', value: `${totalReviews}+` },
            { label: 'Average Rating', value: `${averageRating}/5` },
            { label: 'Repeat Customers', value: '91%' },
            { label: 'Trusted Since', value: '2026' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="rounded-3xl border bg-white/80 px-4 py-5 text-center shadow-sm"
              style={{ borderColor: 'rgba(37, 99, 235, 0.08)' }}
            >
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
