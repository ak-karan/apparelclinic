import { motion } from 'framer-motion'
import { CheckCircle, Phone } from 'lucide-react'
import SEO, { buildBreadcrumb } from '../components/SEO'
import { PREPAID_PLANS, CONTACT } from '../data'

const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: d } })

const prepaidSchemas = [
  buildBreadcrumb([{ name: 'Prepaid Plans', path: '/prepaid-plans' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Apparel Clinic Prepaid Laundry Plans',
    description: 'Monthly prepaid subscription plans for regular laundry customers',
    itemListElement: PREPAID_PLANS.map((plan, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: `${plan.name} Laundry Plan`,
        description: `${plan.washKg}kg wash + ${plan.pressing} pressing pieces, valid ${plan.validity}`,
        offers: {
          '@type': 'Offer',
          price: plan.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'LocalBusiness', name: 'Apparel Clinic' },
        },
      },
    })),
  },
]

export default function PrepaidPlans() {
  return (
    <>
      <SEO
        title="Prepaid Plans — Save More on Laundry"
        description="Monthly prepaid laundry plans starting ₹999. Save big with subscription plans including free pickup, pressing credits, and extended validity. Apparel Clinic Faridabad."
        keywords="prepaid laundry plan faridabad, monthly laundry subscription, laundry package faridabad, apparel clinic plans"
        canonical="/prepaid-plans"
        schemas={prepaidSchemas}
      />

      <section className="pt-32 pb-16" style={{ background: 'var(--bg-2)' }}>
        <div className="container-app text-center">
          <span className="section-label">💳 Save More</span>
          <h1 className="font-heading text-5xl font-bold mt-3 mb-4">Prepaid <span className="gradient-text">Plans</span></h1>
          <p className="max-w-xl mx-auto" style={{ color: 'var(--text)' }}>
            Regular customers ka special deal — plan lo, save karo, priority service pao.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container-app">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {PREPAID_PLANS.map((plan, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="card p-8 relative overflow-hidden"
                style={plan.badge ? { border: '1px solid rgba(84,185,99,0.5)', boxShadow: '0 0 30px rgba(84,185,99,0.12)' } : {}}>
                {plan.badge && (
                  <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-bold"
                    style={{ background: 'var(--green)', color: 'var(--bg)' }}>{plan.badge}</div>
                )}
                <h3 className="font-heading text-2xl font-bold mb-2" style={{ color: 'var(--heading)' }}>{plan.name}</h3>
                <div className="font-heading text-5xl font-bold mb-1" style={{ color: 'var(--green)' }}>
                  ₹{plan.price.toLocaleString()}
                </div>
                <p className="text-xs mb-6" style={{ color: 'var(--text)' }}>Validity: {plan.validity}</p>
                <ul className="space-y-3 mb-8">
                  {[`${plan.washKg} kg wash credits`, `${plan.pressing} pressing pieces`, 'Free pickup & delivery', 'Priority scheduling', 'WhatsApp order tracking'].map((f, j) => (
<<<<<<< HEAD
                    <li key={j} className="flex items-center gap-3 text-xl" style={{ color: 'var(--text)' }}>
=======
                    <li key={j} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text)' }}>
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                      <CheckCircle size={15} style={{ color: 'var(--green)', flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
                <a href={`${CONTACT.whatsapp}?text=I want to buy ${plan.name} Plan ₹${plan.price}`}
                  target="_blank" rel="noreferrer"
<<<<<<< HEAD
                  className="block text-center py-3 rounded-xl font-semibold text-xl transition-all"
=======
                  className="block text-center py-3 rounded-xl font-semibold text-sm transition-all"
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
                  style={plan.badge
                    ? { background: 'var(--green)', color: 'var(--bg)', textDecoration: 'none' }
                    : { background: 'var(--card-bg)', border: '1px solid var(--border)', color: 'var(--heading)', textDecoration: 'none' }}>
                  Buy {plan.name} Plan
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp()} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-12">How Prepaid Plans <span className="gradient-text">Work?</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mb-12">
            {[
              { step: '01', title: 'Plan Choose Karo', desc: 'Apne monthly laundry needs ke hisab se plan select karo' },
              { step: '02', title: 'Pay & Activate', desc: 'UPI/cash se payment karo — plan turant activate ho jata hai' },
              { step: '03', title: 'Pickup Book Karo', desc: 'Call ya WhatsApp karke free doorstep pickup schedule karo' },
              { step: '04', title: 'Credits Deduct', desc: 'Har delivery ke baad wash credits automatically deduct hote hain' },
            ].map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="card p-6 text-center">
                <div className="font-heading text-4xl font-bold mb-3" style={{ color: 'rgba(84,185,99,0.3)' }}>{s.step}</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--heading)' }}>{s.title}</h3>
<<<<<<< HEAD
                <p className="text-xl" style={{ color: 'var(--text)' }}>{s.desc}</p>
=======
                <p className="text-sm" style={{ color: 'var(--text)' }}>{s.desc}</p>
>>>>>>> c7196ace7f15e8d0bf9a368520ebf09835ded31a
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="mb-4" style={{ color: 'var(--text)' }}>Bulk ya commercial order ke liye custom plan chahiye?</p>
            <a href={`tel:${CONTACT.phone1}`} className="btn-primary"><Phone size={16} /> Call for Custom Quote</a>
          </div>
        </div>
      </section>
    </>
  )
}
