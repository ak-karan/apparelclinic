import { motion } from 'framer-motion'
import SEO, { buildBreadcrumb } from '../components/SEO'

const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d } })

const termsSchemas = [
  buildBreadcrumb([{ name: 'Terms & Conditions', path: '/terms' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms & Conditions — Apparel Clinic',
    url: 'https://apparelclinic.in/terms',
    description: 'Terms and conditions for using Apparel Clinic laundry and dry cleaning services.',
    dateModified: '2024-01-01',
  },
]

const sections = [
  { title: '1. Service Agreement', content: 'By using Apparel Clinic\'s services, you agree to these terms. We reserve the right to update these terms at any time. Continued use constitutes acceptance of updated terms.' },
  { title: '2. Pickup & Delivery', content: 'Free pickup and delivery for orders above 6 kg. Below 6 kg: ₹50 nominal charge. Pickup scheduled 9 AM – 8 PM and confirmed via WhatsApp within 30 minutes of request.' },
  { title: '3. Garment Care & Liability', content: 'We exercise highest care with all garments. Apparel Clinic is not responsible for pre-existing damage, inherent fabric weakness, or items with undisclosed special requirements. Please inform us about delicate items at the time of pickup.' },
  { title: '4. Pricing', content: 'Pricing is as listed on the price list. Rates are subject to change. Embellished, bridal, or heavily embroidered garments may be charged differently. We inform customers of any additional charges before processing.' },
  { title: '5. Unclaimed Garments', content: 'Garments not collected within 30 days of delivery notification may incur ₹10/garment/day storage charge. After 90 days, Apparel Clinic reserves the right to donate or dispose of unclaimed items.' },
  { title: '6. Stain Removal', content: 'We use professional stain removal techniques, but success is not guaranteed for all stains (especially set-in, aged, or chemical stains). We will inform you if a stain cannot be removed before returning the garment.' },
  { title: '7. Payments & Refunds', content: 'Payment accepted via cash, UPI (Google Pay, PhonePe, Paytm), and bank transfer. Prepaid plan credits are non-refundable once consumed. In case of verifiable damage due to our process, we will offer a fair resolution.' },
  { title: '8. Privacy Policy', content: 'Customer information (name, phone, address) is used solely for service delivery and communication. We do not share personal data with third parties. We may send service updates via WhatsApp/SMS.' },
  { title: '9. Contact for Disputes', content: 'For any dispute or complaint, please contact us on 9599057984 or 9818715642. We aim to resolve all issues within 48 hours. Registered address: Tower 20, Royal Heritage, Premium Park, Faridabad, Haryana.' },
]

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read Apparel Clinic's terms and conditions for laundry & dry cleaning services, pickup/delivery, pricing, and garment care policies."
        keywords="apparel clinic terms and conditions, laundry service terms, dry cleaning policy"
        canonical="/terms"
        schemas={termsSchemas}
      />

      <section className="pt-32 pb-16" style={{ background: 'var(--bg-2)' }}>
        <div className="container-app text-center">
          <span className="section-label">📋 Legal</span>
          <h1 className="font-heading text-5xl font-bold mt-3 mb-4">Terms & <span className="gradient-text">Conditions</span></h1>
          <p style={{ color: 'var(--text)' }}>Last updated: January 2024</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container-app max-w-3xl">
          <div className="space-y-6">
            {sections.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.04)} className="card p-7">
                <h2 className="font-heading text-xl font-bold mb-3" style={{ color: 'var(--heading)' }}>{s.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>{s.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
