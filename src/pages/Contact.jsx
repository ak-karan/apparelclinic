import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import SEO, { buildBreadcrumb } from '../components/SEO'
import { CONTACT } from '../data'
import { useForm } from '../hooks/useForm'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

const contactSchemas = [
  buildBreadcrumb([{ name: 'Contact Us', path: '/contact' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Apparel Clinic',
    url: 'https://apparelclinic.in/contact',
    description: 'Contact Apparel Clinic for laundry & dry cleaning pickup in Faridabad.',
    mainEntity: {
      '@type': 'LocalBusiness',
      '@id': 'https://apparelclinic.in/#business',
    },
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const { submit, loading, status, errMsg, successMsg } = useForm('contact')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const ok = await submit({
      name: form.name,
      phone: form.phone,
      service_required: form.service || 'Not specified',
      message: form.message || 'No message',
    })
    if (ok) setForm({ name: '', phone: '', service: '', message: '' })
  }

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }))

  return (
    <>
      <SEO
        title="Contact Us — Book Pickup or Enquire"
        description="Contact Apparel Clinic for laundry & dry cleaning services in Faridabad. Call 9599057984 or 9818715642. Tower 20, Royal Heritage, Premium Park."
        keywords="contact apparel clinic, book laundry pickup faridabad, laundry near me, dry cleaning near me faridabad"
        canonical="/contact"
        schemas={contactSchemas}
      />

      <section className="pt-32 pb-16" style={{ background: 'var(--bg-2)' }}>
        <div className="container-app text-center">
          <span className="section-label">📞 Get In Touch</span>
          <h1 className="font-heading text-5xl font-bold mt-3 mb-4">Contact <span className="gradient-text">Us</span></h1>
          <p style={{ color: 'var(--text)' }}>We're available 24/7 — call or WhatsApp us anytime!</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <motion.div {...fadeUp()}>
              <h2 className="font-heading text-3xl font-bold mb-8" style={{ color: 'var(--heading)' }}>We're Here to Help</h2>
              <div className="space-y-4 mb-10">
                {[
                  { icon: Phone, label: 'Call Us', lines: [CONTACT.phone1, CONTACT.phone2, '24/7 Available'], href: `tel:${CONTACT.phone1}` },
                  { icon: MessageCircle, label: 'WhatsApp', lines: ['Chat for fastest response', 'Usually replies in 5 mins'], href: CONTACT.whatsapp },
                  { icon: MapPin, label: 'Visit Us', lines: ['Tower 20, Royal Heritage', 'Premium Park, Faridabad, Haryana'], href: '#' },
                  { icon: Clock, label: 'Working Hours', lines: ['Open 24/7', 'Including all holidays'], href: '#' },
                ].map(({ icon: Icon, label, lines, href }, i) => (
                  <motion.a key={i} href={href} {...fadeUp(i * 0.08)}
                    target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                    className="flex items-start gap-4 p-5 rounded-2xl transition-all card" style={{ textDecoration: 'none' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(84,185,99,0.15)' }}>
                      <Icon size={20} style={{ color: 'var(--green)' }} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-1" style={{ color: 'var(--heading)' }}>{label}</div>
                      {lines.map((l, j) => (
                        <div key={j} className="text-sm" style={{ color: 'var(--text)' }}>{l}</div>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="card p-6">
                <h3 className="font-heading font-bold mb-4" style={{ color: 'var(--heading)' }}>Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {['Premium Park', 'Royal Heritage', 'Faridabad Sec 75–89', 'Hotels & Resorts',
                    'Restaurants', 'Corporate Offices', 'Industrial Units', 'Residential Societies'].map((a, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs" style={{ color: 'var(--text)' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', flexShrink: 0, display: 'block' }} />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeUp(0.2)}>
              <div className="card p-8">
                <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: 'var(--heading)' }}>Send Us a Message</h2>
                <p className="text-sm mb-6" style={{ color: 'var(--text)' }}>We'll reply within 30 minutes</p>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="mb-4 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
                    style={{ background: 'rgba(84,185,99,0.1)', border: '1px solid rgba(84,185,99,0.4)', color: 'var(--green)' }}>
                    <CheckCircle size={15} /> {successMsg || 'Message sent! Hum jald hi contact karenge.'}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="mb-4 px-4 py-3 rounded-xl text-sm flex items-center gap-2"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', color: '#f87171' }}>
                    <AlertCircle size={15} /> {errMsg}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: 'var(--text)' }}>Name *</label>
                      <input className="input-field" placeholder="Apna naam" required
                        value={form.name} onChange={set('name')} />
                    </div>
                    <div>
                      <label className="text-xs mb-1 block" style={{ color: 'var(--text)' }}>Phone *</label>
                      <input className="input-field" type="tel" placeholder="Mobile number" required
                        value={form.phone} onChange={set('phone')} />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs mb-1 block" style={{ color: 'var(--text)' }}>Service Required</label>
                    <select className="input-field" value={form.service} onChange={set('service')}>
                      <option value="">Select a service</option>
                      <option>Laundry</option>
                      <option>Dry Cleaning</option>
                      <option>Shoe Cleaning</option>
                      <option>Jacket Cleaning</option>
                      <option>Bag Cleaning</option>
                      <option>Sofa Cleaning</option>
                      <option>Carpet Cleaning</option>
                      <option>Steam Ironing</option>
                      <option>Commercial / Bulk Order</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs mb-1 block" style={{ color: 'var(--text)' }}>Message</label>
                    <textarea className="input-field resize-none" rows={4}
                      placeholder="Apni requirement describe karein..."
                      value={form.message} onChange={set('message')} />
                  </div>

                  <motion.button type="submit" disabled={loading}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm disabled:opacity-60"
                    style={{ background: 'var(--green)', color: 'var(--bg)' }}
                    whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}>
                    {loading ? '⏳ Sending...' : 'Send Message'}
                  </motion.button>

                  <p className="text-center text-xs" style={{ color: 'var(--text)' }}>
                    Ya directly call karein:{' '}
                    <a href={`tel:${CONTACT.phone1}`} style={{ color: 'var(--green)' }}>{CONTACT.phone1}</a>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
