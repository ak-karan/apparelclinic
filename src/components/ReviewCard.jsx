import { motion } from 'framer-motion'
import { Star } from 'lucide-react'  // ⭐ Yahan bhi import check karo
import { useState } from 'react'

function ReviewCard({ review, index, delay = 0.08 }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * delay }}
      className="w-[300px] md:w-[350px] flex-shrink-0"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="card p-6 h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700">
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-3">
          {Array.from({ length: review.rating }, (_, j) => (
            <Star 
              key={j} 
              size={16} 
              className="fill-amber-400 text-amber-400" 
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-xl mb-4 leading-relaxed line-clamp-3" style={{ color: 'var(--text)' }}>
          "{review.text}"
        </p>

        {/* User Info */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <div className="font-semibold text-xl" style={{ color: 'var(--heading)' }}>
              {review.name}
            </div>
            <div className="text-xs opacity-60">{review.date}</div>
          </div>
          
          {/* Avatar */}
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl"
            style={{ background: 'var(--green)', color: 'var(--bg)' }}
          >
            {review.name.charAt(0)}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ReviewCard