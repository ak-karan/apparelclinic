import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function CarpetCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Carpet Cleaning Service — Deep Carpet & Rug Wash Faridabad"
      seoDesc="Professional carpet and rug cleaning in Faridabad. Area rugs, Persian rugs, wall-to-wall carpets. Hot water extraction and allergen removal."
      seoKeywords="carpet cleaning faridabad, rug cleaning, deep carpet wash, carpet shampoo service"
      canonical="/services/carpet-cleaning"
      badge="🏠 Professional Service"
      icon="🏠"
      title="Carpet Cleaning"
      tagline="Deep Carpet & Rug Cleaning — Dust-Free & Allergen-Free"
      description="Carpets trap up to 4x their weight in dust, dirt, allergens, and bacteria. Our professional carpet cleaning uses hot water extraction and dry powder methods to deep-clean every fibre."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70"
      highlights={[
        { icon:"💨", title:"Hot Water Extraction", desc:"Deep-cleaning method lifting embedded dirt from carpet fibres" },
        { icon:"🦠", title:"Allergen Removal", desc:"Remove dust mites, pet dander, pollen, allergens" },
        { icon:"💧", title:"Stain Removal", desc:"Tea, coffee, mud, oil — all treated professionally" },
        { icon:"🌸", title:"Odour Neutralization", desc:"Remove pet and musty odours from deep carpet fibres" },
        { icon:"🏠", title:"All Carpet Types", desc:"Area rugs, Persian rugs, synthetic, wall-to-wall, doormats" },
        { icon:"🚚", title:"Pickup Available", desc:"Small rugs collected, cleaned, delivered back" },
      ]}
      processSteps={[
        { icon:"🔍", title:"Inspect & Test", desc:"Fibre type & dye fastness check" },
        { icon:"🌬️", title:"Dry Vacuum", desc:"Remove loose surface dirt" },
        { icon:"🧪", title:"Pre-Spray", desc:"Stain remover & shampoo" },
        { icon:"💨", title:"Hot Extraction", desc:"Industrial hot water extraction" },
        { icon:"🌬️", title:"Fast Dry", desc:"Air movers for quick drying" },
      ]}
      pricing={[
        { item:"Doormat", price:"20/sqft", note:"Minimum 1 sqft charge" },
        { item:"Small Area Rug (upto 4x6 ft)", price:"400"  },
        { item:"Medium Rug (upto 6x9 ft)", price:"700"  },
        { item:"Large Rug (above 6x9 ft)", price:"1000", note:"Call for exact quote" },
        { item:"Wall-to-Wall Carpet", price:"15/sqft", note:"On-site service" },
      ]}
      faqs={[
        { q:"Can you clean a silk or Persian rug?", a:"Yes, but silk/Persian rugs require specialised dry-cleaning. Please inform us — these are priced separately." },
        { q:"How often should carpets be cleaned?", a:"Every 6–12 months for regular carpets. More frequently in homes with pets, children, or high-traffic areas." },
      ]}
      servicePrice="400"
    />
  )
}
