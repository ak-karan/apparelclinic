<<<<<<< HEAD
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { REVIEWS } from '../data'
=======
import { motion, useAnimation } from 'framer-motion'
import { useRef, useEffect, useState, useCallback, useMemo } from 'react'
import { Star } from 'lucide-react'
import ReviewCard from './ReviewCard'
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay }
})

<<<<<<< HEAD
export default function Reviews() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="container-app">
=======
const REVIEWS = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Excellent service! My silk sarees came back looking like new. The staff is very professional and careful with delicate fabrics.',
    date: '2 days ago',
    verified: true
  },
  {
    name: 'Rahul Verma',
    rating: 5,
    text: 'Best laundry service in Faridabad. They picked up and delivered on time. My formal shirts are perfectly ironed.',
    date: '1 week ago',
    verified: true
  },
  {
    name: 'Neha Gupta',
    rating: 4,
    text: 'Very happy with the dry cleaning service. They removed tough stains from my curtains. Reasonable prices.',
    date: '3 days ago',
    verified: true
  },
  {
    name: 'Amit Kumar',
    rating: 5,
    text: 'Regular customer for 2 years now. Never disappointed. Their shoe cleaning service is amazing!',
    date: '5 days ago',
    verified: true
  },
  {
    name: 'Sneha Reddy',
    rating: 5,
    text: 'Great experience! They even fixed a loose button on my shirt for free. Will definitely recommend.',
    date: '1 day ago',
    verified: false
  },
  {
    name: 'Vikram Singh',
    rating: 4,
    text: 'Good quality service. The app is easy to use and scheduling is convenient. Keep it up!',
    date: '2 weeks ago',
    verified: true
  }
]

function Reviews() {
  const carouselRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const controls = useAnimation()

  const allReviews = useMemo(() => [...REVIEWS, ...REVIEWS, ...REVIEWS], [])

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    if (!isHovering && width > 0) {
      controls.start({
        x: [-width / 3, -width * 2/3],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear"
          }
        }
      })
    } else {
      controls.stop()
    }
  }, [isHovering, width, controls])

  const scrollToSlide = useCallback((index) => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 640 ? 300 : 350
      const gap = 20
      const scrollAmount = index * (cardWidth + gap)
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' })
      setCurrentSlide(index)
    }
  }, [])

  const handleScroll = useCallback(() => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft
      const cardWidth = window.innerWidth < 640 ? 300 : 350
      const gap = 20
      const slideIndex = Math.round(scrollLeft / (cardWidth + gap))
      setCurrentSlide(slideIndex % REVIEWS.length)
    }
  }, [])

  return (
    <section className="section-pad relative overflow-hidden" style={{ background: 'var(--bg-2)' }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="container-app relative z-10">
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
        <motion.div {...fadeUp()} className="text-center mb-10 lg:mb-14">
          <span className="section-label">
            ⭐ Client Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
<<<<<<< HEAD
          <p className="mt-4 max-w-2xl mx-auto text-xl sm:text-base text-gray-600">
=======
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-600">
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
            50,000+ satisfied customers across Faridabad & Premium Park
          </p>
        </motion.div>

<<<<<<< HEAD
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((review, index) => (
            <motion.div
              key={index}
              {...fadeUp(index * 0.1)}
              className="card p-6 bg-white border border-gray-200"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xl mb-4 text-gray-600">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-xl text-gray-900">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                  {review.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
=======
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button onClick={() => scrollToSlide(currentSlide - 1)}
              disabled={currentSlide === 0}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all hover:scale-110 disabled:opacity-50">
              ←
            </button>
            <button onClick={() => scrollToSlide(currentSlide + 1)}
              disabled={currentSlide >= REVIEWS.length - 1}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all hover:scale-110 disabled:opacity-50">
              →
            </button>
          </div>

          <motion.div className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} size={16} className="fill-blue-500 text-blue-500" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">4.8/5 (50k+ reviews)</span>
          </motion.div>
        </div>

        <motion.div ref={carouselRef}
          className="cursor-grab active:cursor-grabbing overflow-x-auto pb-6 hide-scrollbar"
          onScroll={handleScroll}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }} animate={controls}
            className="flex gap-5">
            {allReviews.map((review, index) => (
              <ReviewCard key={index} review={review} index={index % REVIEWS.length} />
            ))}
          </motion.div>
        </motion.div>

        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, index) => (
            <button key={index} onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index 
                  ? 'w-8 bg-blue-600' 
                  : 'w-2 bg-gray-300 hover:bg-blue-400'
              }`}
              aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>

        <motion.div {...fadeUp(0.3)}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
          {[
            { label: 'Total Reviews', value: '52.3K' },
            { label: 'Average Rating', value: '4.8 ★' },
            { label: 'Happy Clients', value: '50K+' },
            { label: 'Trusted Since', value: '2019' }
          ].map((stat, i) => (
            <motion.div key={i} className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
