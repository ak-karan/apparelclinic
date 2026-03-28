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

function Reviews() {
  const carouselRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

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

  const scrollToSlide = useCallback((index) => {
    if (!carouselRef.current) {
      return
    }

    const safeIndex = Math.max(0, Math.min(index, REVIEWS.length - 1))
    const cards = carouselRef.current.querySelectorAll('[data-review-card]')
    const target = cards[safeIndex]

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      setCurrentSlide(safeIndex)
    }
  }, [])

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
          {...fadeUp(0.1)}
          className="mb-8 flex flex-col gap-4 rounded-[28px] border p-4 shadow-sm lg:flex-row lg:items-center lg:justify-between lg:p-5"
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderColor: 'rgba(37, 99, 235, 0.1)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div>
              <div className="text-sm font-semibold text-slate-900">Rated 4.8 out of 5</div>
              <div className="text-xs text-slate-500">Based on 50+ customer experiences</div>
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
              disabled={currentSlide === REVIEWS.length - 1}
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
          {REVIEWS.map((review, index) => (
            <div key={`${review.name}-${index}`} data-review-card className="flex">
              <ReviewCard review={review} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, index) => (
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
            { label: 'Total Reviews', value: '50+' },
            { label: 'Average Rating', value: '4.8/5' },
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
