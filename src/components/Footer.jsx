import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { 
  Phone, MapPin, Clock, MessageCircle, Mail, 
  Instagram, Facebook, Twitter, Linkedin, 
  ArrowRight, ChevronRight, Heart, Star,
  Truck, Shield, Award, Leaf 
} from 'lucide-react'
import { CONTACT, SERVICES } from '../data'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/prepaid-plans', label: 'Prepaid Plans' },
    { to: '/faq', label: 'FAQ' },
    { to: '/terms', label: 'Terms & Conditions' },
    { to: '/contact', label: 'Contact Us' },
  ]
  
  const serviceCategories = [
    {
      title: 'Wash & Fold',
      services: SERVICES.filter(s => ['laundry', 'steam-ironing'].includes(s.slug))
    },
    {
      title: 'Dry Cleaning',
      services: SERVICES.filter(s => ['dry-cleaning', 'organic-dry-cleaning'].includes(s.slug))
    },
    {
      title: 'Special Care',
      services: SERVICES.filter(s => ['shoe-cleaning', 'jacket-cleaning', 'bag-cleaning'].includes(s.slug))
    },
    {
      title: 'Home Care',
      services: SERVICES.filter(s => ['sofa-cleaning', 'carpet-cleaning'].includes(s.slug))
    }
  ]
  
  const socialLinks = [
    { icon: Facebook, href: CONTACT.facebook, label: 'Facebook', color: '#1877f2' },
    { icon: Instagram, href: CONTACT.instagram, label: 'Instagram', color: '#e1306c' },
    { icon: Twitter, href: CONTACT.twitter || '#', label: 'Twitter', color: '#1da1f2' },
    { icon: Linkedin, href: CONTACT.linkedin || '#', label: 'LinkedIn', color: '#0077b5' },
    { icon: MessageCircle, href: CONTACT.whatsapp, label: 'WhatsApp', color: '#25d366' },
  ]
  
  const features = [
    { icon: Truck, text: 'Free pickup above 6kg' },
    { icon: Clock, text: '24-48 hr turnaround' },
    { icon: Shield, text: 'Industrial-grade care' },
    { icon: Leaf, text: 'Eco-friendly process' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200">
        <div className="container-app py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Get <span className="gradient-text">Exclusive Offers</span>
              </h3>
              <p className="text-gray-600 text-lg">
                Subscribe to get special discounts and updates on new services
              </p>
            </div>
            <div className="flex gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
              <button className="btn-primary px-8 py-4 text-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-app py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Brand Column - 3 columns */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center shadow-lg">
                <span className="font-heading font-bold text-2xl text-white">AC</span>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-gray-900">Apparel Clinic</div>
                <div className="text-xl text-blue-600 font-semibold mt-1">25 Years of Excellence</div>
              </div>
            </div>
            
            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Premium Laundry & Dry Cleaning Specialists. We deal to heal the life of your outfits with industrial-grade care since 1999.
            </p>
            
            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="flex items-center gap-2 text-xl text-gray-700">
                    <Icon size={16} className="text-blue-600 flex-shrink-0" />
                    <span>{feature.text}</span>
                  </div>
                )
              })}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-lg"
                    style={{ backgroundColor: social.color }}
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-white" />
                  </a>
                )
              })}
            </div>
          </div>
          
          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.to} 
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group text-base"
                  >
                    <ChevronRight size={16} className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                    {link.label}
=======
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { CONTACT, SERVICES } from '../data'

export default function Footer() {
  return (
    <footer style={{ background:'white', borderTop:'1px solid #e2e8f0' }}>
      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm bg-blue-600 text-white">
                AC
              </div>
              <div>
                <div className="font-heading font-bold text-gray-900">Apparel Clinic</div>
                <div className="text-xs text-blue-600">25 Years of Excellence</div>
              </div>
            </div>
            <p className="text-sm mb-6 text-gray-600">
              Premium Laundry & Dry Cleaning Specialists. We deal to heal the life of your outfits.
            </p>
            <div className="flex gap-3">
              {[
                { href:CONTACT.facebook, label:'FB',  bg:'#1877f2' },
                { href:CONTACT.whatsapp, label:'WA',  bg:'#25d366' },
                { href:CONTACT.instagram,label:'IG', bg:'#e1306c' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: s.bg }}>{s.label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to:'/', l:'Home' }, { to:'/about', l:'About Us' },
                { to:'/pricing', l:'Pricing' }, { to:'/prepaid-plans', l:'Prepaid Plans' },
                { to:'/faq', l:'FAQ' }, { to:'/terms', l:'Terms & Conditions' },
                { to:'/contact', l:'Contact Us' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm transition-colors hover:text-blue-600 text-gray-600">
                    {link.l}
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          
          {/* Services - 4 columns (split into two 2-col sections) */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-6">Our Services</h4>
            <div className="grid grid-cols-2 gap-6">
              {serviceCategories.map((category, idx) => (
                <div key={idx}>
                  <h5 className="font-semibold text-xl text-blue-600 uppercase tracking-wider mb-3">
                    {category.title}
                  </h5>
                  <ul className="space-y-2">
                    {category.services.map(service => (
                      <li key={service.slug}>
                        <Link 
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group text-base"
                        >
                          <span className="text-lg">{service.icon}</span>
                          <span>{service.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Info - 3 columns */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-lg text-gray-900 mb-6">Contact Us</h4>
            <div className="space-y-4">
              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Call Us 24/7</div>
                  <a href={`tel:${CONTACT.phone1}`} className="text-gray-600 hover:text-blue-600 block text-lg">
                    {CONTACT.phone1}
                  </a>
                  <a href={`tel:${CONTACT.phone2}`} className="text-gray-600 hover:text-blue-600 block text-lg">
                    {CONTACT.phone2}
                  </a>
                </div>
              </div>
              
              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
                  <a 
                    href={CONTACT.whatsapp} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-gray-600 hover:text-green-600 block text-lg"
                  >
                    Chat with us
                  </a>
                  <span className="text-xl text-gray-500">Usually replies in 5 mins</span>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Email</div>
                  <a 
                    href={`mailto:${CONTACT.email}`}
                    className="text-gray-600 hover:text-purple-600 block text-lg"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Visit Us</div>
                  <address className="text-gray-600 not-italic text-base leading-relaxed">
                    {CONTACT.address}
                  </address>
                  <a 
                    href={CONTACT.googleMaps} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-xl mt-2 inline-flex items-center gap-1"
                  >
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">Working Hours</div>
                  <div className="text-gray-600 text-base">Open 24/7</div>
                  <div className="text-xl text-gray-500">Including all holidays</div>
                </div>
=======

          <div>
            <h4 className="font-heading font-semibold mb-4 text-gray-900">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map(s => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm transition-colors hover:text-blue-600 text-gray-600">
                    {s.icon} {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-gray-900">Contact Us</h4>
            <div className="space-y-4">
              {[
                { icon:Phone, text:CONTACT.phone1, href:`tel:${CONTACT.phone1}` },
                { icon:Phone, text:CONTACT.phone2, href:`tel:${CONTACT.phone2}` },
                { icon:MessageCircle, text:'WhatsApp us now', href:CONTACT.whatsapp },
              ].map(({ icon:Icon, text, href }, i) => (
                <a key={i} href={href} className="flex items-center gap-3 text-sm transition-colors hover:text-blue-600 text-gray-600"
                  target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <Icon size={15} className="text-blue-600 flex-shrink-0" />{text}
                </a>
              ))}
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={15} className="text-blue-600 flex-shrink-0 mt-1" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Clock size={15} className="text-blue-600 flex-shrink-0" />
                Open 24/7 · Including Holidays
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-xl text-gray-500">
              © {currentYear} Apparel Clinic. All rights reserved. | 
              <span className="inline-flex items-center gap-1 ml-1">
                Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Faridabad
              </span>
            </p>
            
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-xl text-gray-500 hover:text-blue-600 transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/faq" className="text-xl text-gray-500 hover:text-blue-600 transition-colors">
                FAQ
              </Link>
              <Link to="/privacy" className="text-xl text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </Link>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-xl text-gray-500">We Accept:</span>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-700">UPI</span>
                <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-700">GPay</span>
                <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-700">PhonePe</span>
                <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-700">Paytm</span>
                <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-semibold text-gray-700">Cash</span>
              </div>
            </div>
=======

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © 2024 Apparel Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-xs hover:text-blue-600 transition-colors text-gray-500">Terms & Conditions</Link>
            <Link to="/faq" className="text-xs hover:text-blue-600 transition-colors text-gray-500">FAQ</Link>
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
          </div>
        </div>
      </div>
    </footer>
  )
}