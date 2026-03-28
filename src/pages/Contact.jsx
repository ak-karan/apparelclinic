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
    if (ok) {
      setForm({ name: '', phone: '', service: '', message: '' })
    }
  }

  const set = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))

  return (
    <>
      <SEO
        title="Contact Us - Book Pickup or Enquire"
        description="Contact Apparel Clinic for laundry & dry cleaning services in Faridabad. Call 9599057984 or 9818715642. Tower 20, Royal Heritage, Premium Park."
        keywords="contact apparel clinic, book laundry pickup faridabad, laundry near me, dry cleaning near me faridabad"
        canonical="/contact"
        schemas={contactSchemas}
      />

      <section className="pt-32 pb-16" style={{ background: 'var(--bg-2)' }}>
        <div className="container-app text-center">
          <span className="section-label">Get In Touch</span>
          <h1 className="font-heading mt-3 mb-4 text-5xl font-bold">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p style={{ color: 'var(--text)' }}>We're available 24/7, call or WhatsApp us anytime.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container-app">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp()}>
              <h2 className="font-heading mb-8 text-3xl font-bold" style={{ color: 'var(--heading)' }}>
                We're Here to Help
              </h2>
              <div className="mb-10 space-y-4">
                {[
                  { icon: Phone, label: 'Call Us', lines: [CONTACT.phone1, CONTACT.phone2, '24/7 Available'], href: `tel:${CONTACT.phone1}` },
                  { icon: MessageCircle, label: 'WhatsApp', lines: ['Chat for fastest response', 'Usually replies in 5 mins'], href: CONTACT.whatsapp },
                  { icon: MapPin, label: 'Visit Us', lines: ['Tower 20, Royal Heritage', 'Premium Park, Faridabad, Haryana'], href: '#' },
                  { icon: Clock, label: 'Working Hours', lines: ['Open 24/7', 'Including all holidays'], href: '#' },
                ].map(({ icon: Icon, label, lines, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    {...fadeUp(i * 0.08)}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="card flex items-start gap-4 rounded-2xl p-5 transition-all"
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                      style={{ background: 'rgba(84,185,99,0.15)' }}
                    >
                      <Icon size={20} style={{ color: 'var(--green)' }} />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-semibold" style={{ color: 'var(--heading)' }}>
                        {label}
                      </div>
                      {lines.map((line, j) => (
                        <div key={j} className="text-sm" style={{ color: 'var(--text)' }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <div className="card p-8">
                <h2 className="font-heading mb-2 text-2xl font-bold" style={{ color: 'var(--heading)' }}>
                  Send Us a Message
                </h2>
                <p className="mb-6 text-sm" style={{ color: 'var(--text)' }}>
                  We'll reply within 30 minutes
                </p>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm"
                    style={{
                      background: 'rgba(84,185,99,0.1)',
                      border: '1px solid rgba(84,185,99,0.4)',
                      color: 'var(--green)',
                    }}
                  >
                    <CheckCircle size={15} /> {successMsg || 'Message sent! Hum jald hi contact karenge.'}
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 flex items-center gap-2 rounded-xl px-4 py-3 text-sm"
                    style={{
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      color: '#f87171',
                    }}
                  >
                    <AlertCircle size={15} /> {errMsg}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-xs" style={{ color: 'var(--text)' }}>
                        Name *
                      </label>
                      <input className="input-field" placeholder="Apna naam" required value={form.name} onChange={set('name')} />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs" style={{ color: 'var(--text)' }}>
                        Phone *
                      </label>
                      <input className="input-field" type="tel" placeholder="Mobile number" required value={form.phone} onChange={set('phone')} />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs" style={{ color: 'var(--text)' }}>
                      Service Required
                    </label>
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
                    <label className="mb-1 block text-xs" style={{ color: 'var(--text)' }}>
                      Message
                    </label>
                    <textarea
                      className="input-field resize-none"
                      rows={4}
                      placeholder="Apni requirement describe karein..."
                      value={form.message}
                      onChange={set('message')}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl py-3.5 text-sm font-semibold disabled:opacity-60"
                    style={{ background: 'var(--green)', color: 'var(--bg)' }}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  <p className="text-center text-xs" style={{ color: 'var(--text)' }}>
                    Ya directly call karein{' '}
                    <a href={`tel:${CONTACT.phone1}`} style={{ color: 'var(--green)' }}>
                      {CONTACT.phone1}
                    </a>
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
