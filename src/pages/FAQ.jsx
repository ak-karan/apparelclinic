import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Phone } from 'lucide-react'
import SEO, { buildBreadcrumb, buildFAQSchema } from '../components/SEO'
import { FAQS, CONTACT } from '../data'

const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d } })

const EXTRA_FAQS = [
  { q: 'How to book a pickup?', a: 'Call or WhatsApp on 9599057984 / 9818715642, or fill the pickup form on our website homepage. We confirm within 30 minutes.' },
  { q: 'Do you clean curtains and bedsheets?', a: 'Yes! Curtains (window ₹115, door ₹170), bedsheets (single ₹95, double ₹160), blankets, quilts, pillow covers — all available.' },
  { q: 'Can you clean bridal lehenga?', a: 'Yes. We specialize in bridal wear. Heavy/bridal lehenga cleaning starts at ₹1350 with special dry-cleaning to preserve embroidery and fabric.' },
  { q: 'What is PERC dry cleaning?', a: 'Perchloroethylene (PERC) is the gold-standard solvent used in premium dry cleaning worldwide. Removes grease/oil stains without shrinking or distorting delicate fabrics.' },
  { q: 'Do you give a receipt or tag for each item?', a: 'Yes! Every garment is tagged with a unique ID at the time of pickup — zero mix-ups and complete traceability.' },
  { q: 'Do you offer commercial laundry for hotels/restaurants?', a: 'Yes! We have special commercial packages for hotels, restaurants, hospitals, and businesses. Call for custom quote.' },
  { q: 'Is there a minimum order for pickup?', a: 'No minimum for drop-off. For free pickup service, orders above 6 kg get free collection. Below 6 kg: ₹50 nominal charge.' },
]

const allFaqs = [...FAQS, ...EXTRA_FAQS]

const faqSchemas = [
  buildBreadcrumb([{ name: 'FAQ', path: '/faq' }]),
  buildFAQSchema(allFaqs),
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <>
      <SEO
        title="FAQ — Frequently Asked Questions | Apparel Clinic"
        description="Find answers to all common questions about Apparel Clinic's laundry & dry cleaning services, pricing, pickup, delivery, and more in Faridabad."
        keywords="laundry FAQ faridabad, dry cleaning questions, pickup delivery apparel clinic, laundry service questions"
        canonical="/faq"
        schemas={faqSchemas}
      />

      <section className="pt-32 pb-16" style={{ background: 'var(--bg-2)' }}>
        <div className="container-app text-center">
          <span className="section-label">❓ Help Center</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
            FAQs | Apparel Clinic —<br />
            <span className="gradient-text">Best Laundry & Dry Clean Company</span>
          </h1>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--text)' }}>
            Sabse common questions ke answers — aapki help ke liye hamesha available.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container-app max-w-3xl">
          <div className="space-y-3 mb-14">
            {allFaqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp(i * 0.03)}>
                <button onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 rounded-2xl flex items-start justify-between gap-4 transition-all"
                  style={{ background: open === i ? 'rgba(84,185,99,0.1)' : 'var(--card-bg)', border: `1px solid ${open === i ? 'rgba(84,185,99,0.4)' : 'var(--border)'}` }}>
<<<<<<< HEAD
                  <span className="font-medium text-xl" style={{ color: 'var(--heading)' }}>{faq.q}</span>
=======
                  <span className="font-medium text-sm" style={{ color: 'var(--heading)' }}>{faq.q}</span>
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                  {open === i
                    ? <ChevronUp size={18} style={{ color: 'var(--green)', flexShrink: 0 }} />
                    : <ChevronDown size={18} style={{ color: 'var(--text)', flexShrink: 0 }} />}
                </button>
                {open === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.25 }}
<<<<<<< HEAD
                    className="px-6 py-4 -mt-2 rounded-b-2xl text-xl leading-relaxed"
=======
                    className="px-6 py-4 -mt-2 rounded-b-2xl text-sm leading-relaxed"
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                    style={{ background: 'rgba(84,185,99,0.06)', border: '1px solid var(--border)', borderTop: 'none', color: 'var(--text)' }}>
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center card p-8">
            <p className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--heading)' }}>Aur kuch poochna hai?</p>
<<<<<<< HEAD
            <p className="text-xl mb-6" style={{ color: 'var(--text)' }}>Hamari team 24/7 available hai aapki help ke liye.</p>
=======
            <p className="text-sm mb-6" style={{ color: 'var(--text)' }}>Hamari team 24/7 available hai aapki help ke liye.</p>
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${CONTACT.phone1}`} className="btn-primary"><Phone size={15} /> {CONTACT.phone1}</a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-outline">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
