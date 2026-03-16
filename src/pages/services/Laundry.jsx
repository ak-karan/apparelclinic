import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function Laundry() {
  return (
    <ServicePageTemplate
      seoTitle="Laundry Service — Organic & Normal Wash"
      seoDesc="Professional laundry service in Faridabad. Organic wash ₹110/kg, normal wash ₹75/kg. Free pickup above 6kg. Enzyme-based, bio-degradable cleaning."
      seoKeywords="laundry service faridabad, organic wash, normal wash, clothes washing faridabad"
      canonical="/services/laundry"
      badge="👕 Laundry Experts"
      icon="👕"
      title="Laundry Service"
      tagline="Organic & Normal Wash — Clean, Fresh & Nourished"
      description="We offer premium laundry service using enzyme-based organic chemicals that are gentle on your clothes and safe for your family. Choose between organic wash (₹110/kg) and normal wash (₹75/kg) based on your garment's needs."
      heroImage="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=70"
      highlights={[
        { icon:'🌿', title:'Enzyme-Based Organic Wash', desc:'Chemical-free, eco-friendly detergents safe for all skin types and delicate fabrics.' },
        { icon:'♻️', title:'Bio-Degradable Packaging', desc:'100% eco-friendly packaging — we care for your clothes and the environment equally.' },
        { icon:'🚚', title:'Free Doorstep Pickup', desc:'Free collection for orders above 6 kg. Scheduled at your convenience.' },
        { icon:'⏱️', title:'24–48 hr Turnaround', desc:'Standard service in 24–48 hours. Express same-day service available.' },
        { icon:'🏭', title:'Industrial-Grade Machines', desc:'Commercial washing machines with precise temperature control for optimal results.' },
        { icon:'🔬', title:'Anti-Pilling Enzyme Wash', desc:'Special enzyme wash prevents fabric pilling and extends garment life.' },
      ]}
      processSteps={[
        { icon:'🚗', title:'Free Pickup', desc:'We collect from your doorstep' },
        { icon:'🔍', title:'Sort & Tag', desc:'Items sorted by fabric & color' },
        { icon:'🧪', title:'Pre-treat Stains', desc:'Enzyme solution applied' },
        { icon:'🫧', title:'Wash & Rinse', desc:'Optimal temp washing' },
        { icon:'💨', title:'Dry & Press', desc:'Tumble dry + steam iron' },
        { icon:'📦', title:'Pack & Deliver', desc:'Hygienic packing, delivered' },
      ]}
      pricing={[
        { item:'Organic Wash', price:'110/kg', note:'Enzyme-based, chemical-free' },
        { item:'Normal Wash', price:'75/kg', note:'Standard quality wash' },
        { item:'Steam Pressing', price:'5/pcs', note:'Professional steam iron' },
        { item:'Wash + Press Combo', price:'Ask us', note:'Best value bundle' },
      ]}
      faqs={[
        { q:'What is organic wash?', a:'Organic wash uses enzyme-based, bio-degradable, chemical-free detergents. It is gentler on fabrics, safer for sensitive skin, and environment-friendly.' },
        { q:'How much weight should I estimate?', a:'Average — 5 shirts = ~1 kg, 3 jeans = ~1.5 kg, 1 jacket = ~0.8–1 kg. Provide approx weight when booking and we will weigh accurately at pickup.' },
        { q:'Do you wash embroidered/embellished clothes?', a:'Yes, but we use a gentler cycle and hand-wash for heavily embellished items. Please inform us at pickup.' },
      ]}
   
      servicePrice="110"
      servicePriceUnit="KGM"
    />
  )
}
