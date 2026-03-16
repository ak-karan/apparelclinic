import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { SERVICES, CONTACT } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

<<<<<<< HEAD
  useEffect(() => { 
    setOpen(false); 
    setServicesOpen(false) 
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/prepaid-plans', label: 'Prepaid Plans' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact' },
=======
  useEffect(() => { setOpen(false); setServicesOpen(false) }, [location])

  const navLinks = [
    { to:'/', label:'Home' },
    { to:'/about', label:'About' },
    { to:'/pricing', label:'Pricing' },
    { to:'/prepaid-plans', label:'Prepaid Plans' },
    { to:'/faq', label:'FAQ' },
    { to:'/contact', label:'Contact' },
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
<<<<<<< HEAD
        backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
=======
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="container-app">
<<<<<<< HEAD
        <div className="flex items-center justify-between h-20 lg:h-24">
          
          {/* Logo - Clean aur Simple */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-white text-xl lg:text-2xl shadow-lg group-hover:shadow-xl transition-all">
              AC
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-xl lg:text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                Apparel Clinic
              </div>
              <div className="text-xl text-blue-600 font-medium mt-0.5">
                25 Years of Excellence
=======
        <div className="flex items-center justify-between h-18 py-4">

          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold bg-blue-600 text-white">
              AC
            </div>
            <div>
              <div className="font-heading font-bold text-lg leading-none text-gray-900">
                Apparel Clinic
              </div>
              <div className="text-xs text-blue-600">
                Clean, care... Kapde bole – Thank you
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
              </div>
            </div>
          </Link>

<<<<<<< HEAD
          {/* Desktop Navigation - Sirf Text, No Icons */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <NavLink 
                key={link.to} 
                to={link.to}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-700'
=======
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                  }`
                }>
                {link.label}
              </NavLink>
            ))}

<<<<<<< HEAD
            {/* Services Dropdown - Clean */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 text-lg font-medium transition-colors ${
                  servicesOpen ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Services
                <ChevronDown 
                  size={18} 
                  className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2"
                    style={{ minWidth: 280 }}
                  >
                    <div className="rounded-xl bg-white border border-gray-200 shadow-xl overflow-hidden">
                      <div className="py-2">
                        {SERVICES.map(service => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="block px-5 py-3 hover:bg-blue-50 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            <div className="font-medium text-gray-900 hover:text-blue-600">
                              {service.title}
                            </div>
                            <div className="text-xl text-gray-500 mt-0.5">
                              {service.desc}
                            </div>
                          </Link>
                        ))}
                      </div>
=======
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity:0, y:8 }}
                    animate={{ opacity:1, y:0 }}
                    exit={{ opacity:0, y:8 }}
                    className="absolute top-full left-0 pt-2"
                    style={{ minWidth: 280 }}>
                    <div className="rounded-2xl p-2 shadow-xl bg-white border border-gray-200">
                      {SERVICES.map(s => (
                        <Link key={s.slug} to={`/services/${s.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-blue-50 text-gray-700">
                          <span className="text-lg">{s.icon}</span>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{s.title}</div>
                            <div className="text-xs text-gray-500">{s.desc}</div>
                          </div>
                        </Link>
                      ))}
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

<<<<<<< HEAD
            {/* Call Button - Simple aur Clean */}
            <a 
              href={`tel:${CONTACT.phone1}`} 
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-blue-700 transition-all flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              {CONTACT.phone1}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setOpen(!open)} 
            className="lg:hidden p-2 rounded-lg bg-gray-100"
          >
            {open ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu - Clean Version */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="py-4">
                {/* Mobile Navigation */}
                <div className="space-y-1">
                  {navLinks.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-lg text-base font-medium ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`
                      }
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>

                {/* Mobile Services */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="px-4 mb-2 text-xl font-semibold text-blue-600">
                    Our Services
                  </div>
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {SERVICES.map(service => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="px-3 py-2 bg-gray-100 rounded-lg text-xl text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {service.title}
=======
            <a href={`tel:${CONTACT.phone1}`} className="btn-primary text-sm bg-blue-600 text-white px-4 py-2 rounded-xl">
              <Phone size={14} /> {CONTACT.phone1}
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg bg-gray-100">
            {open ? <X size={22} className="text-gray-900" /> : <Menu size={22} className="text-gray-900" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity:0, height:0 }}
              animate={{ opacity:1, height:'auto' }}
              exit={{ opacity:0, height:0 }}
              className="lg:hidden overflow-hidden border-t border-gray-200">
              <div className="py-4 flex flex-col gap-1">
                {navLinks.map(link => (
                  <NavLink key={link.to} to={link.to}
                    className="px-4 py-3 rounded-xl text-sm font-medium"
                    style={({ isActive }) => ({
                      color: isActive ? '#2563eb' : '#374151',
                      background: isActive ? '#eff6ff' : 'transparent',
                    })}>
                    {link.label}
                  </NavLink>
                ))}

                <div className="px-4 py-2">
                  <div className="text-xs font-semibold tracking-widest uppercase mb-2 text-blue-600">Services</div>
                  <div className="grid grid-cols-2 gap-1">
                    {SERVICES.map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs bg-gray-100 text-gray-700">
                        <span>{s.icon}</span>{s.title}
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                      </Link>
                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Mobile Call Buttons */}
                <div className="mt-4 pt-4 border-t border-gray-200 px-4 space-y-2">
                  <a 
                    href={`tel:${CONTACT.phone1}`}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Phone size={16} />
                    Call {CONTACT.phone1}
                  </a>
                  <a 
                    href={`tel:${CONTACT.phone2}`}
                    className="flex items-center justify-center gap-2 w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone size={16} />
                    Call {CONTACT.phone2}
=======
                <div className="px-4 pt-2 flex gap-3">
                  <a href={`tel:${CONTACT.phone1}`} className="flex-1 text-center py-3 bg-blue-600 text-white rounded-xl text-xs font-medium">
                    <Phone size={12} className="inline mr-1" /> {CONTACT.phone1}
                  </a>
                  <a href={`tel:${CONTACT.phone2}`} className="flex-1 text-center py-3 border border-gray-300 text-gray-700 rounded-xl text-xs font-medium">
                    {CONTACT.phone2}
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}