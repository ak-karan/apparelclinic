import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import SEO, { buildBreadcrumb, buildServiceSchema } from '../components/SEO'
import { CONTACT, SERVICES } from '../data'

const fadeUp = (d = 0) => ({ 
  initial: { opacity: 0, y: 30 }, 
  whileInView: { opacity: 1, y: 0 }, 
  viewport: { once: true }, 
  transition: { duration: 0.6, delay: d } 
})

export default function ServicePageTemplate({
  seoTitle, seoDesc, seoKeywords, canonical,
  badge, icon, title, tagline, description,
  heroImage,
  highlights,
  processSteps,
  pricing,
  faqs,
  servicePrice,
  servicePriceCurrency = 'INR',
  servicePriceUnit,
}) {

  const serviceSchemas = [
    buildBreadcrumb([
      { name: 'Services', path: '/services' },
      { name: title, path: canonical },
    ]),
    buildServiceSchema({
      name: title,
      description: seoDesc,
      url: canonical,
      price: servicePrice,
      priceCurrency: servicePriceCurrency,
      priceUnit: servicePriceUnit,
    }),
  ].filter(Boolean)

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDesc}
        keywords={seoKeywords}
        canonical={canonical}
        schemas={serviceSchemas}
      />

      <section className="relative pt-32 pb-20 overflow-hidden bg-blue-50">
        {heroImage && (
          <>
            <div className="absolute inset-0"
              style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.05 }} />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
          </>
        )}
        <div className="container-app relative z-10">
          <div className="max-w-2xl">
            <motion.span {...fadeUp()} className="section-label">{badge}</motion.span>
            <motion.div {...fadeUp(0.1)} className="text-6xl my-4">{icon}</motion.div>
            <motion.h1 {...fadeUp(0.15)} className="font-heading text-5xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">{title}</span>
            </motion.h1>
            <motion.p {...fadeUp(0.2)} className="text-xl font-medium mb-4 text-gray-700">
              {tagline}
            </motion.p>
            <motion.p {...fadeUp(0.25)} className="text-base mb-8 text-gray-600">
              {description}
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-primary">
                💬 Book via WhatsApp
              </a>
              <a href={`tel:${CONTACT.phone1}`} className="btn-outline">
                <Phone size={15} /> {CONTACT.phone1}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {highlights && (
        <section className="section-pad bg-white">
          <div className="container-app">
            <motion.div {...fadeUp()} className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-gray-900">Why Choose Our <span className="gradient-text">{title}?</span></h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {highlights.map((h, i) => (
                <motion.div key={i} {...fadeUp(i * 0.07)} className="card p-6 bg-white border border-gray-200">
                  <div className="text-3xl mb-3">{h.icon}</div>
                  <h3 className="font-heading font-bold mb-2 text-gray-900">{h.title}</h3>
                  <p className="text-sm text-gray-600">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {processSteps && (
        <section className="section-pad bg-blue-50">
          <div className="container-app">
            <motion.div {...fadeUp()} className="text-center mb-12">
              <h2 className="font-heading text-4xl font-bold text-gray-900">Our <span className="gradient-text">Process</span></h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {processSteps.map((s, i) => (
                <motion.div key={i} {...fadeUp(i * 0.08)} className="card p-6 relative bg-white border border-gray-200">
                  <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold bg-blue-600 text-white">
                    {i + 1}
                  </div>
                  <div className="text-2xl mb-3 mt-1">{s.icon}</div>
                  <h3 className="font-semibold mb-2 text-sm text-gray-900">{s.title}</h3>
                  <p className="text-xs text-gray-600">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {pricing && (
        <section className="section-pad bg-white">
          <div className="container-app max-w-3xl">
            <motion.div {...fadeUp()} className="text-center mb-10">
              <h2 className="font-heading text-4xl font-bold text-gray-900">Service <span className="gradient-text">Pricing</span></h2>
            </motion.div>
            <div className="space-y-3">
              {pricing.map((p, i) => (
                <motion.div key={i} {...fadeUp(i * 0.05)}
                  className="flex justify-between items-center px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200">
                  <div>
                    <div className="font-medium text-sm text-gray-900">{p.item}</div>
                    {p.note && <div className="text-xs mt-0.5 text-gray-500">{p.note}</div>}
                  </div>
                  <div className="font-heading text-xl font-bold text-blue-600">₹{p.price}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 rounded-xl px-5 py-4 text-sm bg-blue-50 border border-blue-200 text-gray-700">
              🚚 <strong className="text-blue-600">Free pickup & delivery</strong> for orders above 6kg. Call for custom/bulk pricing.
            </div>
          </div>
        </section>
      )}

      {faqs && (
        <section className="section-pad bg-blue-50">
          <div className="container-app max-w-2xl">
            <motion.div {...fadeUp()} className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold text-gray-900">Common <span className="gradient-text">Questions</span></h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <motion.div key={i} {...fadeUp(i * 0.05)} className="card p-6 bg-white border border-gray-200">
                  <h3 className="font-semibold text-sm mb-2 text-gray-900">Q: {f.q}</h3>
                  <p className="text-sm text-gray-600">A: {f.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-pad bg-white">
        <div className="container-app">
          <motion.div {...fadeUp()} className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-gray-900">Explore Other <span className="gradient-text">Services</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SERVICES.filter(s => canonical && !canonical.includes(s.slug)).slice(0, 8).map((s, i) => (
              <motion.div key={s.slug} {...fadeUp(i * 0.05)}>
                <Link to={`/services/${s.slug}`} className="card flex items-center gap-3 p-4 block bg-white border border-gray-200 hover:border-blue-400">
                  <span className="text-xl">{s.icon}</span>
                  <div className="text-xs font-medium text-gray-900">{s.title}</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600">
        <div className="container-app text-center">
          <motion.div {...fadeUp()}>
            <h2 className="font-heading text-3xl font-bold mb-6 text-white">
              Ready to Book Your {title}?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                💬 Book on WhatsApp
              </a>
              <a href={`tel:${CONTACT.phone1}`} className="border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all">
                <Phone size={15} className="inline mr-2" /> {CONTACT.phone1}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}