import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function BagCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Bag Cleaning Service — Handbag, Backpack & Purse Care Faridabad"
      seoDesc="Professional bag cleaning in Faridabad. Leather handbags, designer purses, backpacks — deep clean, condition & restore."
      seoKeywords="bag cleaning faridabad, handbag cleaning, leather bag cleaning, purse cleaning"
      canonical="/services/bag-cleaning"
      badge="👜 Professional Service"
      icon="👜"
      title="Bag Cleaning Service"
      tagline="Restore Your Bags to Their Former Glory"
      description="Bags are used daily and collect dirt, stains, and wear. Our professional bag cleaning service covers all types — leather handbags, fabric totes, designer purses, backpacks, and trolley bags."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70"
      highlights={[
        { icon:"👜", title:"Leather Handbags", desc:"Deep clean, conditioning & colour restoration for all leather handbags" },
        { icon:"💎", title:"Designer Bag Care", desc:"LV, Gucci, Coach — handled with white-glove care" },
        { icon:"🎒", title:"Backpacks & Totes", desc:"Canvas, nylon, polyester — all fabric types covered" },
        { icon:"🧴", title:"Interior Deep Clean", desc:"Lining cleaned, odours removed, pockets sanitized" },
        { icon:"🛡️", title:"Stain Protection", desc:"Protective coating applied after cleaning" },
        { icon:"🔧", title:"Hardware Check", desc:"Loose stitching and hardware identified" },
      ]}
      processSteps={[
        { icon:"🔍", title:"Assess", desc:"Fabric, hardware & stains checked" },
        { icon:"🧹", title:"Surface Clean", desc:"Brush off dirt & debris" },
        { icon:"🧴", title:"Deep Clean", desc:"Interior + exterior treatment" },
        { icon:"✨", title:"Condition", desc:"Leather/fabric conditioner" },
        { icon:"📦", title:"Deliver", desc:"Wrapped in protective cover" },
      ]}
      pricing={[
        { item:"Fabric Backpack / Tote", price:"200", note:"Canvas, nylon, polyester" },
        { item:"Leather Handbag (Small)", price:"350", note:"Deep clean + condition" },
        { item:"Leather Handbag (Large)", price:"500", note:"Deep clean + condition" },
        { item:"Designer Bag (Luxury)", price:"500+", note:"Call for exact quote" },
        { item:"Trolley / Travel Bag", price:"400", note:"Interior + exterior" },
      ]}
      faqs={[
        { q:"Can you clean a Louis Vuitton / Gucci bag?", a:"Yes! We handle designer bags with extreme care using brand-specific cleaning solutions. Please inform us of the brand at booking." },
        { q:"How do you clean the bag lining?", a:"We spot-clean or hand-wash fabric linings with mild detergent. Leather-lined bags get a conditioner treatment." },
      ]}
      servicePrice="200"
    />
  )
}
