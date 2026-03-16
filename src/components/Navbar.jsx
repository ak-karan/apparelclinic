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

  useEffect(() => { setOpen(false); setServicesOpen(false) }, [location])

  const navLinks = [
    { to:'/', label:'Home' },
    { to:'/about', label:'About' },
    { to:'/pricing', label:'Pricing' },
    { to:'/prepaid-plans', label:'Prepaid Plans' },
    { to:'/faq', label:'FAQ' },
    { to:'/contact', label:'Contact' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="container-app">
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
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600' : 'text-gray-600'
                  }`
                }>
                {link.label}
              </NavLink>
            ))}

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
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="px-4 pt-2 flex gap-3">
                  <a href={`tel:${CONTACT.phone1}`} className="flex-1 text-center py-3 bg-blue-600 text-white rounded-xl text-xs font-medium">
                    <Phone size={12} className="inline mr-1" /> {CONTACT.phone1}
                  </a>
                  <a href={`tel:${CONTACT.phone2}`} className="flex-1 text-center py-3 border border-gray-300 text-gray-700 rounded-xl text-xs font-medium">
                    {CONTACT.phone2}
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