import { motion } from 'framer-motion'
import { CONTACT } from '../data'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl"
      style={{ backgroundColor: '#25D366' }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.737 5.47 2.023 7.773L0 32l8.516-2.031A15.933 15.933 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333a13.272 13.272 0 01-6.773-1.851l-.485-.289-5.055 1.207 1.228-4.917-.316-.504A13.267 13.267 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.277-9.85c-.399-.2-2.362-1.165-2.728-1.299-.366-.133-.632-.2-.898.2-.266.4-1.031 1.299-1.264 1.565-.233.267-.465.3-.864.1-.4-.2-1.687-.622-3.213-1.982-1.187-1.058-1.99-2.366-2.222-2.765-.234-.4-.025-.615.174-.814.179-.178.4-.466.6-.699.199-.233.266-.4.4-.666.133-.267.066-.5-.034-.7-.1-.2-.898-2.165-1.23-2.965-.325-.78-.656-.674-.897-.686l-.766-.013c-.266 0-.698.1-1.065.5-.365.4-1.396 1.364-1.396 3.33s1.43 3.863 1.629 4.13c.2.266 2.813 4.295 6.815 6.025.952.41 1.696.657 2.274.840.956.304 1.826.261 2.514.158.767-.113 2.362-.965 2.695-1.898.333-.933.333-1.733.233-1.898-.099-.166-.366-.266-.765-.466z"/>
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: '#25D366', opacity: 0.3 }} />
    </motion.a>
  )
}
