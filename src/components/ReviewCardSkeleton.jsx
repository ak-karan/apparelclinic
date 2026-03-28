import { motion } from 'framer-motion'

function ReviewCardSkeleton() {
  return (
    <div className="w-[300px] md:w-[350px] flex-shrink-0">
      <div className="card p-6 bg-white dark:bg-gray-800 rounded-xl animate-pulse">
        {/* Stars skeleton */}
        <div className="flex gap-1 mb-3">
          {[1,2,3,4,5].map((i) => (
            <div key={i} className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded" />
          ))}
        </div>
        
        {/* Text skeleton */}
        <div className="space-y-2 mb-4">
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
          <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/6" />
        </div>
        
        {/* User info skeleton */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24 mb-2" />
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16" />
          </div>
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default ReviewCardSkeleton