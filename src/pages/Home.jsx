import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Phone, ChevronDown, ChevronUp,
  CheckCircle, ArrowRight, Truck, Clock, Shield, Award
} from 'lucide-react'
import SEO, { buildBreadcrumb, buildFAQSchema, buildReviewSchema } from '../components/SEO'
import topbanner from '../assets/images/topbanner.webp'
import { CONTACT, SERVICES, REVIEWS, TEN_STEPS, WHY_US, FAQS, PRICE_CATEGORIES } from '../data'
import OneStop from '../components/OneStop'
import Reviews from '../components/Reviews'
import PickupForm from '../components/PickupForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

// Home schemas
const homeSchemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Apparel Clinic Laundry & Dry Cleaning Services',
    itemListElement: [
      { '@type': 'Offer', name: 'Organic Wash', price: '110', priceCurrency: 'INR' },
      { '@type': 'Offer', name: 'Normal Wash', price: '75', priceCurrency: 'INR' },
      { '@type': 'Offer', name: 'Steam Pressing', price: '5', priceCurrency: 'INR' },
      { '@type': 'Offer', name: 'Shoe Spa', price: '250', priceCurrency: 'INR' },
    ],
  },
  buildFAQSchema(FAQS),
  buildReviewSchema(REVIEWS),
]

// Hero Section with PickupForm Component
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e6f0ff 50%, #f8fafc 100%)' }}
    >
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none bg-blue-500/5" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none bg-blue-500/5" />

      {/* Background Image */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute right-0 top-0 bottom-0 w-1/2"
          style={{ 
            backgroundImage: `url(${topbanner})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            opacity: 0.1 
          }} />
        <div className="absolute right-0 top-0 bottom-0 w-1/2"
          style={{ background: 'linear-gradient(to right, #f8fafc 0%, transparent 30%)' }} />
      </div>

      <div className="container-app relative z-10 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="section-label">⭐ 25 Years Industrial Experience</span>
            </motion.div>
            <motion.h1 {...fadeUp(0.1)}
              className="font-heading text-5xl md:text-6xl xl:text-7xl font-bold mt-4 mb-6 text-gray-900"
              style={{ lineHeight: 1.1 }}>
              Premium<br />
              <span className="gradient-text">Laundry</span> &<br />
              Dry Clean
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="text-lg mb-8 max-w-lg text-gray-600">
              We deal to heal the life of your outfits. Nourish your fabrics with steam ironing and organic cleaning — not harmful chemicals.
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-10">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
                <Phone size={16} /> Book Pickup Now
              </a>
              <a href={`tel:${CONTACT.phone1}`} className="btn-outline">📞 {CONTACT.phone1}</a>
            </motion.div>
            
            {/* Quick Stats */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3">
              {[
                { icon: '🌿', text: 'Organic Wash ₹110/kg' },
                { icon: '♨️', text: 'Pressing ₹5/pcs' },
                { icon: '🚚', text: 'Free Pickup above 6kg' },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-white border border-gray-200 text-gray-600">
                  <span>{b.icon}</span>{b.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Pickup Form Component */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <PickupForm />  {/* ✅ Reusable Form Component */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Stats Banner
function StatsBanner() {
  return (
    <section className="bg-blue-50 border-y border-gray-200">
      <div className="container-app py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['25+', 'Years Experience'],
            ['50K+', 'Happy Customers'],
            ['24/7', 'Service Available'],
            ['100%', 'Satisfaction']
          ].map(([num, label], i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              whileHover={{ scale: 1.05 }}
            >
              <div className="font-heading text-4xl font-bold text-blue-600">{num}</div>
              <div className="text-sm mt-1 text-gray-600">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Snapshot
function AboutSnapshot() {
  return (
    <section className="section-pad bg-white bg_rightbannr relative overflow-hidden">
      {/* Background decoration will appear via CSS */}
      <div className="container-app relative z-10"> {/* z-10 ensures content above bg */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div {...fadeUp()}>
            <span className="section-label">💡 Who We Are</span>
            <h2 className="font-heading text-4xl font-bold mt-2 mb-6 text-gray-900">
              Apparel Clinic —<br /><span className="gradient-text">Healing Your Outfits</span>
            </h2>
            <p className="mb-4 text-gray-600">
              Apparel Clinic is a Premium Laundry Specialist from Tower 20, Royal Heritage, Premium Park, Faridabad. With 25+ years of industrial experience, we serve 50,000+ customers.
            </p>
            <p className="mb-8 text-gray-600">
              We use enzyme-based organic chemicals and steam ironing technology — ensuring your clothes are nourished, not damaged.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                [Truck, 'Free Pickup upto 6kg'],
                [Clock, '24–48 hr turnaround'],
                [Shield, 'Industrial-grade'],
                [Award, '50,000+ clients']
              ].map(([Icon, text], i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                  <Icon size={16} className="text-blue-600 flex-shrink-0" />
                  {text}
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn-primary">
              Know More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>
          
          {/* Right Content - Price Cards */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
            {[
              { title: 'Organic Wash', value: '₹110/kg', sub: 'Enzyme-based' },
              { title: 'Normal Wash', value: '₹75/kg', sub: 'Standard quality' },
              { title: 'Steam Pressing', value: '₹5/pcs', sub: 'Professional finish' },
              { title: 'Shoe Spa', value: '₹250+', sub: 'Branded shoes' },
            ].map((c, i) => (
              <motion.div 
                key={i} 
                className="card p-5 text-center bg-white border border-gray-200 hover:shadow-lg transition-all" 
                whileHover={{ scale: 1.03 }}
              >
                <div className="font-heading text-2xl font-bold mb-1 text-blue-600">
                  {c.value}
                </div>
                <div className="font-semibold text-sm mb-1 text-gray-900">
                  {c.title}
                </div>
                <div className="text-xs text-gray-500">
                  {c.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
// Pricing Snapshot
function PricesSnapshot() {
  return (
    <section className="section-pad bg-blue-50">
      <div className="container-app">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="section-label">💰 Transparent Pricing</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 text-gray-900">
            Plans & Prices for<br /><span className="gradient-text">Laundry & Dry Clean</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { 
              icon: '🌿', name: 'Organic Wash', rate: '₹110', unit: '/kg', 
              features: ['Enzyme-based', 'Safe for skin', 'Eco-friendly', 'Free pickup'] 
            },
            { 
              icon: '💧', name: 'Normal Wash', rate: '₹75', unit: '/kg', 
              features: ['Standard wash', 'Quick turnaround', 'Machine wash', 'Quality assured'] 
            },
            { 
              icon: '♨️', name: 'Steam Press', rate: '₹5', unit: '/pcs', 
              features: ['Industrial steam', 'Wrinkle-free', 'All garments', 'Quick service'] 
            },
          ].map((p, i) => (
            <motion.div key={i} {...fadeUp(i * 0.1)} className="card p-7 relative overflow-hidden bg-white border border-gray-200">
              {i === 0 && (
                <div className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-semibold bg-blue-100 text-blue-600 border border-blue-200">
                  Recommended
                </div>
              )}
              <span className="text-3xl">{p.icon}</span>
              <h3 className="font-heading text-xl font-bold mt-3 mb-1 text-gray-900">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="font-heading text-4xl font-bold text-blue-600">{p.rate}</span>
                <span className="text-sm text-gray-500">{p.unit}</span>
              </div>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} className="text-blue-600 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/pricing" className="btn-primary justify-center">View Full Price List</Link>
          <Link to="/prepaid-plans" className="btn-outline justify-center">Prepaid Plans</Link>
        </div>
      </div>
    </section>
  )
}

// 10-Step Process
function TenStepProcess() {
  return (
    <section className="section-pad bg-white">
      <div className="container-app">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="section-label">🔬 Our Process</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 text-gray-900">
            10-Step Formula for<br /><span className="gradient-text">Exceptional Cleaning</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TEN_STEPS.map((step, i) => (
            <motion.div key={i} {...fadeUp(i * 0.06)} className="card p-5 relative bg-white border border-gray-200">
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-blue-600 text-white">
                {step.step}
              </div>
              <div className="text-2xl mb-3">
                {['🚗','🔍','🏷️','🗂️','🧪','🫧','💨','♨️','✅','📦'][i]}
              </div>
              <h3 className="font-semibold text-sm mb-2 text-gray-900">{step.title}</h3>
              <p className="text-xs leading-relaxed text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why Best
function WhyBest() {
  return (
    <section className="section-pad bg-blue-50">
      <div className="container-app">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="section-label">🏆 Why Choose Us</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 text-gray-900">
            Why We Are <span className="gradient-text">The Best?</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((w, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)} className="card p-7 bg-white border border-gray-200">
              <span className="text-4xl mb-4 block">{w.icon}</span>
              <h3 className="font-heading font-bold text-lg mb-2 text-gray-900">{w.title}</h3>
              <p className="text-sm text-gray-600">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function FAQSection() {
  const [open, setOpen] = useState(null)
  
  return (
    <section className="section-pad bg-white">
      <div className="container-app max-w-3xl">
        <motion.div {...fadeUp()} className="text-center mb-14">
          <span className="section-label">❓ FAQs</span>
          <h2 className="font-heading text-4xl font-bold mt-2 text-gray-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>
        
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div key={i} {...fadeUp(i * 0.04)}>
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 rounded-2xl flex items-start justify-between gap-4 transition-all bg-white border border-gray-200 hover:border-blue-300"
              >
                <span className="font-medium text-sm text-gray-900">{faq.q}</span>
                {open === i
                  ? <ChevronUp size={18} className="text-blue-600 flex-shrink-0" />
                  : <ChevronDown size={18} className="text-gray-400 flex-shrink-0" />}
              </button>
              
              {open === i && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.25 }}
                  className="px-6 pt-3 pb-5 -mt-2 rounded-b-2xl text-sm leading-relaxed bg-blue-50 border border-blue-100 text-gray-700"
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/faq" className="btn-outline">View All FAQs</Link>
        </div>
      </div>
    </section>
  )
}

// CTA Banner
function CTABanner() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container-app">
        <motion.div {...fadeUp()} className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Give Your Clothes the Care They Deserve?
          </h2>
          <p className="mb-8 max-w-xl mx-auto text-blue-100">
            Call us or book a pickup now. Free collection for orders above 6kg.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACT.phone1}`} className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all">
              <Phone size={16} className="inline mr-2" /> Call {CONTACT.phone1}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all">
              💬 WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Home Component
export default function Home() {
  return (
    <>
      <SEO
        title="Best Laundry & Dry Clean Service in Faridabad"
        description="Apparel Clinic — 25 years experience. Organic wash ₹110/kg, pressing ₹5/pcs, free pickup above 6kg. Serving Faridabad."
        keywords="laundry faridabad, dry cleaning faridabad, organic wash"
        canonical="/"
        schemas={homeSchemas}
      />
      <Hero />
      <StatsBanner />
      <OneStop />
      <AboutSnapshot />
      <PricesSnapshot />
      <Reviews />
      <TenStepProcess />
      <WhyBest />
      <FAQSection />
      <CTABanner />
    </>
  )
}
