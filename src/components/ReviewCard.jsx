import { motion } from 'framer-motion'
import { CheckCircle2, Star } from 'lucide-react'

function ReviewCard({ review, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="min-w-[280px] snap-start sm:min-w-[320px] lg:min-w-[360px]"
    >
      <div
        className="h-full rounded-[28px] border p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
          borderColor: 'rgba(37, 99, 235, 0.12)',
          boxShadow: '0 18px 50px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-1.5">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <Star
                  key={starIndex}
                  size={16}
                  className={
                    starIndex < review.rating
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-transparent text-slate-300'
                  }
                />
              ))}
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.2em]" style={{ color: 'var(--primary)' }}>
              Customer Review
            </p>
          </div>

          <div
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
            }}
          >
            {review.name.charAt(0)}
          </div>
        </div>

        <p className="mb-6 text-sm leading-7 sm:text-[15px]" style={{ color: 'var(--text)' }}>
          "{review.text}"
        </p>

        <div
          className="flex items-center justify-between gap-3 border-t pt-4"
          style={{ borderColor: 'rgba(148, 163, 184, 0.18)' }}
        >
          <div>
            <div className="text-sm font-semibold" style={{ color: 'var(--heading)' }}>
              {review.name}
            </div>
            <div className="mt-1 text-xs" style={{ color: 'var(--text-light)' }}>
              {review.date}
            </div>
          </div>

          {review.verified && (
            <div
              className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold"
              style={{
                background: 'rgba(37, 99, 235, 0.1)',
                color: 'var(--primary-dark)',
              }}
            >
              <CheckCircle2 size={12} />
              Verified
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ReviewCard
