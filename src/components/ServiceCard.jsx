import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

function ServiceCard({ service, index, delay = 0.07 }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * delay }}
      className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] flex-shrink-0"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <Link to={`/services/${service.slug}`} 
        className="card group flex items-start gap-4 p-6 block bg-white hover:bg-blue-50 transition-all">
        <span className="text-3xl">{service.icon}</span>
        <div>
          <h3 className="font-heading font-semibold mb-1 group-hover:text-blue-600 transition-colors text-gray-900">
            {service.title}
          </h3>
          <p className="text-sm text-gray-600">{service.desc}</p>
          <motion.div 
            animate={{ x: isHovered ? 5 : 0 }}
            className="flex items-center gap-1 mt-3 text-xs font-medium text-blue-600">
            Learn more <ArrowRight size={12} />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard