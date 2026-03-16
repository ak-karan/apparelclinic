
import { motion } from 'framer-motion'

function ServiceCardSkeleton() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] flex-shrink-0"
    >
      <div className="card flex items-start gap-4 p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 animate-pulse">
        {/* Icon skeleton */}
        <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex-shrink-0 mt-1" />
        
        <div className="flex-1">
          {/* Title skeleton */}
          <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
          
          {/* Description skeleton - 2 lines */}
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3" />
          </div>
          
          {/* Tags skeleton */}
          <div className="flex gap-2 mt-3">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-12" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full w-12" />
          </div>
          
          {/* Learn more link skeleton */}
          <div className="flex items-center gap-1 mt-4">
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCardSkeleton