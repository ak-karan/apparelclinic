import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import SEO, { buildBreadcrumb } from '../components/SEO'
import { PRICE_CATEGORIES } from '../data'

const fadeUp = (d = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: d } })

// Build ItemList schema from all price items
const buildPriceListSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Apparel Clinic Complete Price List',
  description: 'Full price list for laundry, dry cleaning, and garment care services',
  itemListElement: PRICE_CATEGORIES.flatMap((cat, ci) =>
    cat.items.map((item, ii) => ({
      '@type': 'ListItem',
      position: ci * 100 + ii + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        category: cat.name,
        offers: {
          '@type': 'Offer',
          price: typeof item.price === 'number' ? item.price : item.price.toString().replace(/[^\d]/g, ''),
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'LocalBusiness', name: 'Apparel Clinic' },
        },
      },
    }))
  ),
})

const pricingSchemas = [
  buildBreadcrumb([{ name: 'Price List', path: '/pricing' }]),
  buildPriceListSchema(),
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Apparel Clinic Price List — Laundry & Dry Cleaning Rates',
    url: 'https://apparelclinic.in/pricing',
    description: 'Complete price list for all laundry and dry cleaning services at Apparel Clinic Faridabad.',
    mainEntity: {
      '@type': 'Table',
      about: 'Laundry and dry cleaning service prices',
    },
  },
]

export default function Pricing() {
  const [search, setSearch] = useState('')
  const [cat, setCat] = useState('all')

  const filtered = PRICE_CATEGORIES
    .filter(c => cat === 'all' || c.name === cat)
    .map(c => ({ ...c, items: c.items.filter(i => i.name.toLowerCase().includes(search.toLowerCase())) }))
    .filter(c => c.items.length > 0)

  return (
    <>
      <SEO
        title="Complete Price List — Laundry & Dry Cleaning Rates"
        description="Full price list for all laundry & dry cleaning services. Organic wash ₹110/kg, normal wash ₹75/kg, pressing ₹10/pcs. Transparent pricing — no hidden charges."
        keywords="laundry price list faridabad, dry cleaning rates, organic wash price, pressing charges, garment cleaning rates"
        canonical="/pricing"
        schemas={pricingSchemas}
      />

      <section className="pt-32 pb-16" style={{ background: 'var(--bg-2)' }}>
        <div className="container-app text-center">
          <span className="section-label">💰 Transparent Pricing</span>
          <h1 className="font-heading text-5xl font-bold mt-3 mb-4">Complete <span className="gradient-text">Price List</span></h1>
          <p style={{ color: 'var(--text)' }}>No hidden charges — what you see is what you pay</p>
        </div>
      </section>

      <section className="py-12" style={{ background: 'var(--bg)' }}>
        <div className="container-app">
          {/* Base rates */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { name: 'Organic Wash', rate: '₹110/kg', color: 'var(--green)' },
              { name: 'Normal Wash', rate: '₹75/kg', color: '#4a9eff' },
              { name: 'Steam Press', rate: '₹10/pcs', color: '#f59e0b' },
              { name: 'Dry Clean', rate: '₹160/kg', color: '#a78bfa' },
            ].map((r, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="card p-5 text-center">
                <div className="font-heading text-2xl font-bold mb-1" style={{ color: r.color }}>{r.rate}</div>
                <div className="text-sm font-medium" style={{ color: 'var(--heading)' }}>{r.name}</div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl p-4 text-sm mb-10"
            style={{ background: 'rgba(84,185,99,0.08)', border: '1px solid var(--border)', color: 'var(--text)' }}>
            ℹ️ <strong style={{ color: 'var(--heading)' }}>Dry clean @ ₹160/kg</strong> to make it economical.
            * Only regular garments (excluding embellished/coat/saree/heavy bridal/lehenga/blazer/sherwani).
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2" size={16} style={{ color: 'var(--text)' }} />
              <input className="input-field pl-11" placeholder="Search garment..."
                value={search} onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', ...PRICE_CATEGORIES.map(c => c.name)].map(c => (
                <button key={c} onClick={() => setCat(c)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{ background: cat === c ? 'var(--green)' : 'var(--card-bg)', color: cat === c ? 'var(--bg)' : 'var(--text)', border: '1px solid var(--border)' }}>
                  {c === 'all' ? 'All' : c}
                </button>
              ))}
            </div>
          </div>

          {/* Price tables */}
          {filtered.map((category, ci) => (
            <motion.div key={ci} {...fadeUp(ci * 0.05)} className="mb-8">
              <h2 className="font-heading text-2xl font-bold mb-4" style={{ color: 'var(--heading)' }}>{category.name}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {category.items.map((item, ii) => (
                  <div key={ii} className="flex justify-between items-center px-4 py-3 rounded-xl text-sm"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
                    <span style={{ color: 'var(--text)' }}>{item.name}</span>
                    <span className="font-bold" style={{ color: 'var(--green)' }}>₹{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
