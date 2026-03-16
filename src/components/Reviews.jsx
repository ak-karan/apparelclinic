import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { REVIEWS } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay }
})

export default function Reviews() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
      <div className="container-app">
        <motion.div {...fadeUp()} className="text-center mb-10 lg:mb-14">
          <span className="section-label">
            ⭐ Client Reviews
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl sm:text-base text-gray-600">
            50,000+ satisfied customers across Faridabad & Premium Park
          </p>
        </motion.div>

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