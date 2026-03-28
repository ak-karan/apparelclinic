import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function OrganicDryCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Organic Dry Clean Service — Eco-Friendly Garment Care"
      seoDesc="Premium organic dry cleaning in Faridabad. Chemical-free, eco-friendly solvent dry cleaning for delicate fabrics. Safe for all garment types."
      seoKeywords="organic dry cleaning, eco-friendly dry clean, chemical-free dry clean faridabad"
      canonical="/services/organic-dry-cleaning"
      badge="🌿 Eco-Friendly"
      icon="🌿"
      title="Organic Dry Clean"
      tagline="Chemical-Free Dry Cleaning — Safe, Gentle & Effective"
      description="Our organic dry cleaning uses plant-based, non-toxic solvents — a modern, eco-conscious alternative to traditional perchloroethylene (PERC) dry cleaning. Perfect for highly delicate fabrics, silks, and embellished garments."
      heroImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=70"
      highlights={[
        { icon:'🌱', title:'Plant-Based Solvents', desc:'Uses GreenEarth or hydrocarbon solvents — safe for the environment and your health.' },
        { icon:'💎', title:'Ideal for Delicates', desc:'Perfect for silk, cashmere, velvet, chiffon, and embellished ethnic wear.' },
        { icon:'🌡️', title:'Temperature Controlled', desc:'Precise temperature ensures no shrinkage or colour bleed for any fabric.' },
        { icon:'♻️', title:'Zero Toxic Waste', desc:'Our process produces no harmful chemical waste — 100% eco-responsible.' },
        { icon:'🌸', title:'No Harsh Odour', desc:'No chemical smell after cleaning — fresh, clean scent naturally.' },
        { icon:'🧵', title:'Preserves Fabric Life', desc:'Organic solvents are gentler on fibres — your clothes last longer.' },
      ]}
      processSteps={[
        { icon:'🔍', title:'Fabric Inspection', desc:'Assess fabric type & stains' },
        { icon:'🧪', title:'Organic Pre-treat', desc:'Plant-based stain remover' },
        { icon:'🌿', title:'Eco Solvent Wash', desc:'Green solvent dry cleaning' },
        { icon:'💨', title:'Steam Finishing', desc:'Professional steam pressing' },
        { icon:'📦', title:'Eco Packaging', desc:'Biodegradable packaging used' },
      ]}
      pricing={[
        { item:'Saree (Regular)', price:135, note:'Cotton, synthetic sarees' },
        { item:'Saree (Silk)', price:180, note:'Pure silk, Banarasi' },
        { item:'Saree (Bordered/Embellished)', price:230, note:'Zari, embroidery work' },
        { item:'Lehnga/Ghagra (Regular)', price:400, note:'Regular ethnic wear' },
        { item:'Lehnga Heavy (Bridal)', price:1350, note:'Heavy embroidery, mirror work' },
        { item:'Gents Sherwani', price:385, note:'Achkan, Bandhgala style' },
        { item:'Suit (2 piece)', price:'per piece', note:'Ask for bundle rate' },
      ]}
      faqs={[
        { q:'Is organic dry cleaning better than regular dry cleaning?', a:'Yes, for delicate fabrics. Organic solvents are gentler on fibres, safer for embellishments, and produce no toxic waste.' },
        { q:'Can you clean bridal lehenga with organic method?', a:'Absolutely. We recommend organic dry cleaning for all bridal and heavy embellished wear to preserve the fabric and embroidery.' },
      ]}
   
      servicePrice="110"
      servicePriceUnit="KGM"
    />
  )
}
