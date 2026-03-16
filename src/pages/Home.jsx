import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
<<<<<<< HEAD
  Phone, ChevronDown, ChevronUp, CheckCircle, ArrowRight, 
  Truck, Clock, Shield, Award, Star, ThumbsUp, Users, 
  Calendar, Droplets, Wind, Sparkles, Heart, Leaf,
  Zap, RefreshCw, Package, CheckSquare, Shirt, Watch
} from 'lucide-react'
import SEO, { buildBreadcrumb, buildFAQSchema, buildReviewSchema } from '../components/SEO'
import topbanner from '../assets/images/topbanner.webp'
import { CONTACT, SERVICES, REVIEWS, TEN_STEPS, WHY_US, FAQS, PRICE_CATEGORIES, PREPAID_PLANS } from '../data'
=======
  Phone, ChevronDown, ChevronUp,
  CheckCircle, ArrowRight, Truck, Clock, Shield, Award
} from 'lucide-react'
import SEO, { buildBreadcrumb, buildFAQSchema, buildReviewSchema } from '../components/SEO'
import topbanner from '../assets/images/topbanner.webp'
import { CONTACT, SERVICES, REVIEWS, TEN_STEPS, WHY_US, FAQS, PRICE_CATEGORIES } from '../data'
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
import OneStop from '../components/OneStop'
import Reviews from '../components/Reviews'
import PickupForm from '../components/PickupForm'

<<<<<<< HEAD
// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}
=======
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a

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

<<<<<<< HEAD
// ===== HERO SECTION =====
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-200 via-transparent to-transparent opacity-30" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Hero Image Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden xl:block">
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
        <img 
          src={topbanner} 
          alt="Laundry Service" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container-app relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <span className="section-label">
                <Sparkles size={18} />
                25 Years of Excellence
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="section-title">
              Premium <span className="gradient-text">Laundry</span> &<br />
              Dry Cleaning Services
            </motion.h1>
            
            <motion.p variants={fadeUp} className="section-subtitle text-left mx-0 text-xl mb-8">
              We deal to heal the life of your outfits. Industrial-grade care with 
              enzyme-based organic chemicals and steam technology.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
                <Phone size={20} />
                Book Free Pickup
              </a>
              <a href={`tel:${CONTACT.phone1}`} className="btn-outline">
                <Phone size={20} />
                {CONTACT.phone1}
              </a>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6">
              {[
                { icon: Users, label: '50K+', desc: 'Happy Customers' },
                { icon: Calendar, label: '25+', desc: 'Years Experience' },
                { icon: Star, label: '4.9', desc: 'Google Rating' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                      <Icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">{item.label}</div>
                      <div className="text-xl text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Pickup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <PickupForm />
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
          </motion.div>
        </div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
// ===== STATS BANNER =====
function StatsBanner() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Customers' },
    { icon: Calendar, value: '25+', label: 'Years Experience' },
    { icon: Package, value: '5L+', label: 'Garments Cleaned' },
    { icon: Star, value: '4.9/5', label: 'Customer Rating' },
  ]
  
  return (
    <section className="bg-gradient-to-r from-blue-600 to-green-600 py-12">
      <div className="container-app">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <Icon size={40} className="mx-auto mb-4 opacity-90" />
                <div className="font-heading text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ===== SERVICES GRID =====
function ServicesGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="section-header"
        >
          <motion.span variants={fadeUp} className="section-label">
            <Sparkles size={18} />
            Our Services
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Complete <span className="gradient-text">Garment Care</span> Solutions
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            From everyday laundry to specialized dry cleaning, we handle everything with 25 years of expertise
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="card group cursor-pointer"
            >
              <Link to={`/services/${service.slug}`}>
                <div className="icon-large">{service.icon}</div>
                <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">{service.desc}</p>
                
                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features?.slice(0, 3).map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xl font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-600 font-semibold text-lg">
                  Learn More <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </Link>
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
// ===== ABOUT PREVIEW =====
function AboutPreview() {
  const features = [
    { icon: Droplets, text: 'Enzyme-based organic wash' },
    { icon: Wind, text: 'Steam technology, no heat damage' },
    { icon: Shield, text: 'Industrial-grade machines' },
    { icon: Heart, text: 'Gentle on delicate fabrics' },
    { icon: Leaf, text: 'Eco-friendly, bio-degradable' },
    { icon: Award, text: '25 years of expertise' },
  ]
  
  return (
    <section className="section-pad bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-app">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="section-label">
              <Heart size={18} />
              About Us
            </motion.span>
            <motion.h2 variants={fadeUp} className="section-title text-left">
              We Don't Just Clean —<br />
              <span className="gradient-text">We Heal Your Outfits</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-gray-600 mb-8">
              Apparel Clinic was founded with a simple mission: provide industrial-grade 
              garment care to every household. Today, we serve 50,000+ satisfied customers 
              across Faridabad.
            </motion.p>
            
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-green-600" size={20} />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                )
              })}
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <Link to="/about" className="btn-primary">
                Read Our Story
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '1999', label: 'Founded' },
              { number: '50K+', label: 'Customers' },
              { number: '25+', label: 'Services' },
              { number: '98%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="card text-center p-8">
                <div className="stat-number text-5xl">{stat.number}</div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
            
            <div className="col-span-2 card bg-gradient-to-r from-blue-600 to-green-600 text-white p-8">
              <div className="text-3xl font-bold mb-2">Free Pickup</div>
              <div className="text-xl opacity-90">For orders above 6kg</div>
              <div className="mt-4 text-lg">⬇️ Same-day collection</div>
            </div>
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
          </motion.div>
        </div>
      </div>
    </section>
  )
}
<<<<<<< HEAD

// ===== PRICING PREVIEW =====
function PricingPreview() {
  const plans = [
    {
      name: 'Organic Wash',
      price: '110',
      unit: '/kg',
      features: ['Enzyme-based', 'Chemical-free', 'Safe for skin', 'Eco-friendly'],
      icon: '🌿',
      popular: false
    },
    {
      name: 'Normal Wash',
      price: '75',
      unit: '/kg',
      features: ['Standard wash', 'Quick turnaround', 'Machine wash', 'Quality assured'],
      icon: '💧',
      popular: false
    },
    {
      name: 'Steam Press',
      price: '5',
      unit: '/piece',
      features: ['Industrial steam', 'Wrinkle-free', 'All garments', 'No scorch'],
      icon: '♨️',
      popular: true
    },
  ]
  
  return (
    <section className="section-pad bg-white">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="section-header"
        >
          <motion.span variants={fadeUp} className="section-label">
            <Droplets size={18} />
            Transparent Pricing
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Simple, <span className="gradient-text">Fair</span> Pricing
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            No hidden charges — what you see is what you pay
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`price-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="price-badge">Most Popular</div>
              )}
              <div className="icon-large">{plan.icon}</div>
              <h3 className="font-heading text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="price-amount">
                ₹{plan.price}
                <span className="price-currency">{plan.unit}</span>
              </div>
              
              <ul className="feature-list">
                {plan.features.map((feature, j) => (
                  <li key={j} className="feature-item">
                    <CheckCircle className="feature-icon" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link to="/pricing" className="btn-outline w-full justify-center">
                View Details
              </Link>
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
            </motion.div>
          ))}
        </div>
        
<<<<<<< HEAD
        <div className="text-center">
          <Link to="/prepaid-plans" className="btn-green btn-primary inline-flex">
            <Zap size={20} />
            Check Prepaid Plans & Save More
          </Link>
=======
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/pricing" className="btn-primary justify-center">View Full Price List</Link>
          <Link to="/prepaid-plans" className="btn-outline justify-center">Prepaid Plans</Link>
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
        </div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
// ===== PROCESS STEPS =====
function ProcessSteps() {
  return (
    <section className="section-pad bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="section-header"
        >
          <motion.span variants={fadeUp} className="section-label">
            <RefreshCw size={18} />
            Our Process
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            10-Step <span className="gradient-text">Quality</span> Process
          </motion.h2>
          <motion.p variants={fadeUp} className="section-subtitle">
            Every garment goes through our rigorous 10-step process for perfect results
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {TEN_STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500" />
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-blue-600">
                {step.step}
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ===== WHY CHOOSE US =====
function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="section-header"
        >
          <motion.span variants={fadeUp} className="section-label">
            <ThumbsUp size={18} />
            Why Choose Us
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            The <span className="gradient-text">Apparel Clinic</span> Difference
          </motion.h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_US.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card"
            >
              <div className="icon-large">{item.icon}</div>
              <h3 className="font-heading text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
// ===== FAQ SECTION =====
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  
  return (
    <section className="section-pad bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-app max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="section-header"
        >
          <motion.span variants={fadeUp} className="section-label">
            <HelpCircle size={18} />
            Frequently Asked Questions
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title">
            Got <span className="gradient-text">Questions?</span>
          </motion.h2>
        </motion.div>
        
        <div className="space-y-4">
          {FAQS.slice(0, 6).map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left flex items-center justify-between"
              >
                <span className="font-heading text-xl font-bold">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="text-blue-600" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400" size={24} />
                )}
              </button>
              
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-lg text-gray-600 border-t pt-4"
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                >
                  {faq.a}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
<<<<<<< HEAD
        <div className="text-center mt-12">
          <Link to="/faq" className="btn-outline text-lg px-8 py-4">
            View All FAQs
          </Link>
=======
        <div className="text-center mt-10">
          <Link to="/faq" className="btn-outline">View All FAQs</Link>
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
        </div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
// ===== CTA BANNER =====
function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-green-600 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container-app relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="font-heading text-5xl font-bold mb-6">
            Ready to Experience Premium Care?
          </h2>
          <p className="text-2xl mb-10 opacity-90 max-w-3xl mx-auto">
            Book your free pickup now — we'll collect and deliver with 24-48 hour turnaround
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`tel:${CONTACT.phone1}`} className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all hover:-translate-y-1">
              <Phone className="inline mr-3" size={24} />
              Call {CONTACT.phone1}
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-xl hover:bg-white hover:text-blue-600 transition-all hover:-translate-y-1">
              <MessageCircle className="inline mr-3" size={24} />
              WhatsApp Us
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

<<<<<<< HEAD
// ===== MAIN HOME COMPONENT =====
=======
// Main Home Component
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
export default function Home() {
  return (
    <>
      <SEO
<<<<<<< HEAD
        title="Best Laundry & Dry Clean Service in Faridabad | Apparel Clinic"
        description="Apparel Clinic — 25 years experience. Organic wash ₹110/kg, pressing ₹5/pcs, free pickup above 6kg. Serving 50,000+ happy customers in Faridabad."
        keywords="laundry faridabad, dry cleaning faridabad, organic wash, laundry service near me, dry cleaning near me"
        canonical="/"
        schemas={homeSchemas}
      />
      
      <Hero />
      <StatsBanner />
      <ServicesGrid />
      <AboutPreview />
      <PricingPreview />
      <Reviews />
      <ProcessSteps />
      <WhyChooseUs />
=======
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
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
      <FAQSection />
      <CTABanner />
    </>
  )
<<<<<<< HEAD
}

// Missing imports
import { HelpCircle, MessageCircle } from 'lucide-react'
=======
}
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
