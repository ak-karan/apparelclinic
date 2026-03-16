import { Link } from 'react-router-dom'
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
                  </Link>
                </li>
              ))}
            </ul>
          </div>

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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            © 2024 Apparel Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/terms" className="text-xs hover:text-blue-600 transition-colors text-gray-500">Terms & Conditions</Link>
            <Link to="/faq" className="text-xs hover:text-blue-600 transition-colors text-gray-500">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}