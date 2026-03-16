import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone, CheckCircle } from 'lucide-react'
import SEO, { buildBreadcrumb } from '../components/SEO'
import { CONTACT, WHY_US } from '../data'

const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: d } })

const aboutSchemas = [
  buildBreadcrumb([{ name: 'About Us', path: '/about' }]),
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Apparel Clinic — 25 Years of Premium Laundry',
    url: 'https://apparelclinic.in/about',
    description: 'Apparel Clinic — Premium Perc & Laundry Specialists. 25 years industrial experience serving Faridabad.',
    mainEntity: { '@type': 'LocalBusiness', '@id': 'https://apparelclinic.in/#business' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://apparelclinic.in/#organization',
    name: 'Apparel Clinic',
    url: 'https://apparelclinic.in',
    foundingDate: '1999',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
    knowsAbout: ['Dry Cleaning', 'Laundry Service', 'Garment Care', 'Shoe Cleaning', 'Steam Ironing'],
    slogan: 'Clean, care... Kapde bole – Thank you',
    description: 'Premium Perc & Laundry Specialists with 25+ years of industrial experience in Faridabad, Haryana.',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us — 25 Years of Premium Laundry Experience"
        description="Apparel Clinic — Premium Perc & Laundry Specialists with 25 years industrial experience. Serving 50,000+ customers in Faridabad. Our story, mission & values."
        keywords="about apparel clinic, laundry specialists faridabad, 25 years experience, premium perc laundry, garment care faridabad"
        canonical="/about"
        schemas={aboutSchemas}
      />

      <section className="pt-32 pb-20" style={{ background: 'var(--bg-2)' }}>
        <div className="container-app text-center">
          <motion.span {...fadeUp()} className="section-label">💡 Our Story</motion.span>
          <motion.h1 {...fadeUp(0.1)} className="font-heading text-5xl md:text-6xl font-bold mt-3 mb-6">
            About <span className="gradient-text">Apparel Clinic</span>
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="max-w-3xl mx-auto text-lg" style={{ color: 'var(--text)' }}>
            Premium Perc & Laundry Specialists — Industrial & Domestic. We deal to heal the life of your outfits.
          </motion.p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <span className="section-label">🏭 Est. Since 25+ Years</span>
              <h2 className="font-heading text-4xl font-bold mt-3 mb-6">
                We Don't Just Clean —<br /><span className="gradient-text">We Heal Your Outfits</span>
              </h2>
              <div className="space-y-4" style={{ color: 'var(--text)' }}>
                <p>Apparel Clinic was founded over 25 years ago with a single mission: to provide industrial-grade garment care to every household. Starting from Premium Park, Faridabad, we have grown to serve 50,000+ satisfied customers.</p>
                <p>Our founder's vision was simple — treat every garment like a patient. Diagnose the problem (stain, fabric damage), apply the right treatment (organic enzymes, steam ironing), and return it healthier than before.</p>
                <p>We use <strong style={{ color: 'var(--heading)' }}>enzyme-based organic chemicals</strong> and <strong style={{ color: 'var(--heading)' }}>steam ironing technology</strong> — never coal or element heat that damages fabric fibres. Our 100% bio-degradable packaging shows our commitment to the planet.</p>
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <div className="card p-8">
                <h3 className="font-heading text-2xl font-bold mb-6" style={{ color: 'var(--heading)' }}>Our Advanced Services</h3>
                <ul className="space-y-3">
                  {['Dry Cleaning (PERC-based)', 'Silicone Softener Wash', 'Anti-Bacterial Wash', 'Enzyme (Anti-Pilling) Wash', 'Steam Ironing & Pressing', 'Shoe Spa (Branded) — ₹250', 'Bulk Commercial Laundry', 'Free Pickup & Delivery (>6kg)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'var(--text)' }}>
                      <CheckCircle size={16} style={{ color: 'var(--green)', flexShrink: 0 }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg-2)' }}>
        <div className="container-app">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold">Why We Are <span className="gradient-text">Different</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((w, i) => (
              <motion.div key={i} {...fadeUp(i * 0.07)} className="card p-6">
                <span className="text-3xl mb-3 block">{w.icon}</span>
                <h3 className="font-heading font-bold mb-2" style={{ color: 'var(--heading)' }}>{w.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text)' }}>{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--bg)' }}>
        <div className="container-app text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${CONTACT.phone1}`} className="btn-primary"><Phone size={16} /> Call Us Now</a>
              <Link to="/pricing" className="btn-outline">View Pricing</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
