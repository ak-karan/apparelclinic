import { motion } from 'framer-motion'
import { useRef, useEffect, useState, useCallback, useMemo } from 'react'
import ServiceCard from './ServiceCard'
import ServiceCardSkeleton from './ServiceCardSkeleton'
import { SERVICES } from '../data'
import leftbuble from '../assets/images/decor-cloud-left.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay }
})

function OneStop() {
  const scrollContainerRef = useRef(null)
  const [showScrollHint, setShowScrollHint] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  
  const services = useMemo(() => SERVICES, [])
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])
  
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current
        setShowScrollHint(scrollWidth > clientWidth)
      }
    }
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [services])
  
  const scroll = useCallback((direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const cardWidth = window.innerWidth < 640 ? 280 : 350
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }, [])

  if (isLoading) {
    return (
      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container-app">
          <div className="text-center mb-10 lg:mb-14">
            <div className="h-6 w-32 bg-blue-100 rounded-full mx-auto animate-pulse" />
            <div className="h-10 w-96 bg-blue-100 rounded-lg mx-auto mt-4 animate-pulse" />
            <div className="h-16 w-full max-w-2xl bg-blue-50 rounded-lg mx-auto mt-4 animate-pulse" />
          </div>
          <div className="overflow-x-auto pb-6">
            <div className="flex flex-nowrap gap-5">
              {[1, 2, 3, 4].map((n) => (
                <ServiceCardSkeleton key={n} />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className='absolute top-1/4 left-0 z-auto w-[180px]'>
        <img src={leftbuble} alt='Bubls' className='w-full' />
      </div>
    <section className="section-pad relative" style={{ background: 'var(--bg)' }}>
      <div className="container-app">
        <motion.div {...fadeUp()} className="text-center mb-10 lg:mb-14">
          <span className="section-label">
            🏆 Our Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
            One Stop Solution for<br />
            <span className="gradient-text">
              Laundry & Dry Clean
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl sm:text-base text-gray-600">
            From delicate silk sarees to heavy winter coats, shoes to sofas — we care for everything with 25 years of expertise.
          </p>
        </motion.div>

        {showScrollHint && (
          <div className="hidden lg:flex justify-end gap-2 mb-4">
            <button onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400">
              ←
            </button>
            <button onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400">
              →
            </button>
          </div>
        )}

        <div ref={scrollContainerRef}
          className="overflow-x-auto pb-6 hide-scrollbar scroll-smooth">
          <div className="flex flex-nowrap gap-4 md:gap-5">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} delay={0.07} />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: showScrollHint ? 0.6 : 0, y: 0 }}
          className="text-center mt-6 text-xl md:hidden">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600">
            <span>←</span>
            <span>Swipe to explore more services</span>
            <span>→</span>
          </span>
        </motion.div>

        <motion.div {...fadeUp(0.3)}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200">
          {[
            { label: 'Services', value: '25+' },
            { label: 'Customers', value: '50K+' },
            { label: 'Experience', value: '25 Years' },
            { label: 'Satisfaction', value: '98%' }
          ].map((stat, i) => (
            <motion.div key={i} className="text-center" whileHover={{ scale: 1.05 }}>
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
    
  )
}

export default OneStop