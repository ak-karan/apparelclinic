import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function SofaCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Sofa Cleaning Service — Deep Upholstery Cleaning Faridabad"
      seoDesc="Professional sofa & upholstery cleaning in Faridabad. Remove stains, dust mites, and allergens. Fabric, leather, velvet — all types."
      seoKeywords="sofa cleaning faridabad, upholstery cleaning, sofa deep clean, fabric sofa cleaning"
      canonical="/services/sofa-cleaning"
      badge="🛋️ Professional Service"
      icon="🛋️"
      title="Sofa Cleaning Service"
      tagline="Deep Upholstery Cleaning — Fresh & Allergen-Free"
      description="Your sofa accumulates dust, dead skin, pet dander, food stains, and bacteria every day. Our professional sofa cleaning uses industrial-grade steam cleaning and dry extraction to deep-clean every fibre."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70"
      highlights={[
        { icon:"💨", title:"Hot Water Extraction", desc:"Industrial steam cleaning to lift deep-set dirt and stains" },
        { icon:"🦠", title:"Anti-Bacterial Sanitization", desc:"Kill dust mites, bacteria, and allergens safely" },
        { icon:"🛋️", title:"All Sofa Types", desc:"Fabric, velvet, microfiber, leather, rexine — all covered" },
        { icon:"💧", title:"Stain Removal", desc:"Curry, juice, coffee, oil, ink — all treated" },
        { icon:"🌸", title:"Deodorization", desc:"Neutralize pet odours and food smells completely" },
        { icon:"🏠", title:"At-Home Service", desc:"We come to you with professional equipment" },
      ]}
      processSteps={[
        { icon:"🔍", title:"Inspect", desc:"Fabric type & stains identified" },
        { icon:"🧹", title:"Vacuum", desc:"Dry vacuum all surfaces" },
        { icon:"💨", title:"Steam Clean", desc:"Hot water extraction" },
        { icon:"🧪", title:"Stain Treat", desc:"Targeted stain solutions" },
        { icon:"💨", title:"Dry", desc:"Quick-dry fans used" },
      ]}
      pricing={[
        { item:"Single Seat Sofa", price:"500", note:"Per seat" },
        { item:"2-Seater Sofa", price:"900", note:"Full clean" },
        { item:"3-Seater Sofa", price:"1200", note:"Full deep clean" },
        { item:"L-Shape Sofa", price:"1800", note:"Complete L-shape set" },
        { item:"Leather Sofa (add-on)", price:"300", note:"Per seating unit — conditioning" },
      ]}
      faqs={[
        { q:"How long does sofa cleaning take?", a:"1–2 hours depending on size. Drying takes 2–4 hours. We recommend not sitting on it for 4 hours post-cleaning." },
        { q:"Is it safe for kids and pets?", a:"Yes! We use non-toxic, eco-friendly agents completely safe for children, elderly, and pets." },
      ]}
      servicePrice="900"
    />
  )
}
