import ServicePageTemplate from '../../components/ServicePageTemplate'

export function BagCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Bag Cleaning Service — Handbag, Backpack & Purse Care"
      seoDesc="Professional bag cleaning in Faridabad. Leather handbags, canvas backpacks, designer purses — deep clean, condition & restore."
      seoKeywords="bag cleaning faridabad, handbag cleaning, leather bag cleaning, purse cleaning"
      canonical="/services/bag-cleaning"
      badge="👜 Bag Spa"
      icon="👜"
      title="Bag Cleaning Service"
      tagline="Restore Your Bags to Their Former Glory"
      description="Bags are used daily and collect dirt, stains, and wear. Our professional bag cleaning service covers all types — leather handbags, fabric totes, designer purses, backpacks, and trolley bags. We clean, condition, and protect every type."
      highlights={[
        { icon:'👜', title:'Leather Handbags', desc:'Deep clean, conditioning and colour restoration for all leather handbags.' },
        { icon:'🎒', title:'Backpacks & Totes', desc:'Machine or hand clean based on fabric type — canvas, nylon, polyester.' },
        { icon:'💎', title:'Designer Bag Care', desc:'LV, Gucci, Coach, Michael Kors — handled with white-glove care.' },
        { icon:'🧴', title:'Interior Deep Clean', desc:'Lining cleaned, odours removed, pockets sanitized.' },
        { icon:'🛡️', title:'Stain Protection', desc:'Protective coating applied after cleaning to prevent future stains.' },
        { icon:'🔧', title:'Handle & Strap Check', desc:'Hardware checked, loose stitching identified.' },
      ]}
      processSteps={[
        { icon:'🔍', title:'Assess', desc:'Fabric, hardware & stains checked' },
        { icon:'🧹', title:'Surface Clean', desc:'Brush off dirt & debris' },
        { icon:'🧴', title:'Deep Clean', desc:'Interior + exterior treatment' },
        { icon:'✨', title:'Condition', desc:'Leather/fabric conditioner' },
        { icon:'📦', title:'Deliver', desc:'Wrapped in protective cover' },
      ]}
      pricing={[
        { item:'Fabric Backpack / Tote', price:200, note:'Canvas, nylon, polyester' },
        { item:'Leather Handbag (Small)', price:350, note:'Deep clean + condition' },
        { item:'Leather Handbag (Large)', price:500, note:'Deep clean + condition' },
        { item:'Designer Bag (Luxury)', price:'500+', note:'Call for exact quote' },
        { item:'Trolley / Travel Bag', price:400, note:'Interior + exterior' },
      ]}
      faqs={[
        { q:'Can you clean a Louis Vuitton / Gucci bag?', a:'Yes! We handle designer and luxury bags with extreme care using brand-specific cleaning solutions. Please inform us of the brand at booking.' },
        { q:'How do you clean the bag lining?', a:'We spot-clean or hand-wash fabric linings with mild detergent. Leather-lined bags get a conditioner treatment.' },
      ]}
    />
  )
}

export function SofaCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Sofa Cleaning Service — Deep Upholstery Cleaning Faridabad"
      seoDesc="Professional sofa & upholstery cleaning in Faridabad. Deep clean for fabric, leather & velvet sofas. Remove stains, dust mites, and allergens."
      seoKeywords="sofa cleaning faridabad, upholstery cleaning, sofa deep clean, fabric sofa cleaning"
      canonical="/services/sofa-cleaning"
      badge="🛋️ Upholstery Care"
      icon="🛋️"
      title="Sofa Cleaning Service"
      tagline="Deep Upholstery Cleaning — Fresh, Clean & Allergen-Free"
      description="Your sofa accumulates dust, dead skin, pet dander, food stains, and bacteria every day. Our professional sofa cleaning service uses industrial-grade steam cleaning and dry extraction methods to deep-clean every fibre."
      highlights={[
        { icon:'💨', title:'Hot Water Extraction', desc:'Industrial steam cleaning to lift deep-set dirt and stains from fabric fibres.' },
        { icon:'🦠', title:'Anti-Bacterial Sanitization', desc:'Kill dust mites, bacteria, and allergens — safe for children and pets.' },
        { icon:'🛋️', title:'All Sofa Types', desc:'Fabric, velvet, microfiber, leather, rexine — all upholstery types covered.' },
        { icon:'💧', title:'Stain Removal', desc:'Curry, juice, coffee, oil, ink — our specialists treat every type of stain.' },
        { icon:'🌸', title:'Deodorization', desc:'Neutralize pet odours, musty smells, and food odours completely.' },
        { icon:'🏠', title:'At-Home Service', desc:'We come to your home with professional equipment. No logistics for you.' },
      ]}
      processSteps={[
        { icon:'🔍', title:'Inspect', desc:'Fabric type & stains identified' },
        { icon:'🧹', title:'Vacuum', desc:'Dry vacuum all surfaces' },
        { icon:'💨', title:'Steam Clean', desc:'Hot water extraction' },
        { icon:'🧪', title:'Stain Treat', desc:'Targeted stain solutions' },
        { icon:'💨', title:'Dry', desc:'Quick-dry fans used' },
      ]}
      pricing={[
        { item:'Single Seat Sofa', price:500, note:'Per seat' },
        { item:'2-Seater Sofa', price:900, note:'Full clean' },
        { item:'3-Seater Sofa', price:1200, note:'Full deep clean' },
        { item:'L-Shape Sofa', price:1800, note:'Complete L-shape set' },
        { item:'Leather Sofa (add-on condition)', price:300, note:'Per seating unit' },
      ]}
      faqs={[
        { q:'How long does sofa cleaning take?', a:'1–2 hours depending on size. Drying takes 2–4 hours. We recommend not sitting on it for 4 hours post-cleaning.' },
        { q:'Is it safe for kids and pets?', a:'Yes! We use non-toxic, eco-friendly cleaning agents that are completely safe for children, elderly, and pets.' },
      ]}
    />
  )
}

export function CarpetCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Carpet Cleaning Service — Deep Carpet & Rug Wash Faridabad"
      seoDesc="Professional carpet and rug cleaning in Faridabad. Doormat, area rugs, wall-to-wall carpets — deep clean using hot water extraction. Allergen removal."
      seoKeywords="carpet cleaning faridabad, rug cleaning, deep carpet wash, carpet shampoo service"
      canonical="/services/carpet-cleaning"
      badge="🏠 Carpet Expert"
      icon="🏠"
      title="Carpet Cleaning"
      tagline="Deep Carpet & Rug Cleaning — Dust-Free & Allergen-Free"
      description="Carpets trap up to 4x their weight in dust, dirt, allergens, and bacteria. Our professional carpet cleaning uses hot water extraction and dry powder methods to deep-clean every fibre — removing stains, odours, and allergens."
      highlights={[
        { icon:'💨', title:'Hot Water Extraction', desc:'Deep-cleaning method that lifts embedded dirt and bacteria from carpet fibres.' },
        { icon:'🦠', title:'Allergen Removal', desc:'Remove dust mites, pet dander, pollen, and allergens — safe for allergy sufferers.' },
        { icon:'💧', title:'Stain Removal', desc:'Tea, coffee, juice, mud, oil — professional stain treatment for all types.' },
        { icon:'🌸', title:'Odour Neutralization', desc:'Remove pet odours, musty smells, and food odours from deep carpet fibres.' },
        { icon:'🏠', title:'All Carpet Types', desc:'Area rugs, Persian rugs, synthetic carpets, wall-to-wall carpets, doormats.' },
        { icon:'🚚', title:'Pickup Available', desc:'Small rugs and carpets collected, cleaned in our facility, delivered back.' },
      ]}
      processSteps={[
        { icon:'🔍', title:'Inspect & Test', desc:'Fibre type & dye fastness test' },
        { icon:'🌬️', title:'Dry Vacuum', desc:'Remove loose surface dirt' },
        { icon:'🧪', title:'Pre-Spray', desc:'Stain remover & shampoo' },
        { icon:'💨', title:'Hot Extraction', desc:'Industrial hot water extraction' },
        { icon:'🌬️', title:'Fast Dry', desc:'Air movers for quick drying' },
      ]}
      pricing={[
        { item:'Doormat', price:'20/sqft', note:'Minimum 1 sqft charge' },
        { item:'Small Area Rug (upto 4x6 ft)', price:400 },
        { item:'Medium Rug (upto 6x9 ft)', price:700 },
        { item:'Large Rug (above 6x9 ft)', price:1000, note:'Call for exact size quote' },
        { item:'Wall-to-Wall Carpet', price:'15/sqft', note:'On-site service' },
      ]}
      faqs={[
        { q:'Can you clean a silk or Persian rug?', a:'Yes, but silk and Persian rugs require specialised dry-cleaning. Please inform us — these are priced separately.' },
        { q:'How often should carpets be professionally cleaned?', a:'Every 6–12 months for regular carpets. More frequently in homes with pets or children, or high-traffic areas.' },
      ]}
    />
  )
}

export function SteamIroning() {
  return (
    <ServicePageTemplate
      seoTitle="Steam Ironing Service — Professional Press at ₹5/piece Faridabad"
      seoDesc="Professional steam ironing service in Faridabad. ₹5/piece. Industrial steam press for crisp, wrinkle-free finish on all garments. Fast turnaround."
      seoKeywords="steam ironing faridabad, pressing service, professional ironing, steam press clothes"
      canonical="/services/steam-ironing"
      badge="♨️ Steam Press"
      icon="♨️"
      title="Steam Ironing Service"
      tagline="Professional Steam Press — Crisp, Wrinkle-Free, Perfect Finish"
      description="Our industrial steam pressing service delivers a crisp, professional finish on every garment at just ₹5/piece. We use steam (not dry heat) — which nourishes fabric fibres instead of scorching them like coal or electric irons at home."
      highlights={[
        { icon:'♨️', title:'Industrial Steam Press', desc:'Commercial steam press delivers consistent, crisp results on every garment.' },
        { icon:'🌡️', title:'No Scorch Damage', desc:'Steam (not dry heat) — safe for all fabrics including silk, chiffon, and velvet.' },
        { icon:'💧', title:'Removes All Wrinkles', desc:'High-pressure steam penetrates deep into fabric for lasting wrinkle removal.' },
        { icon:'👔', title:'All Garment Types', desc:'Shirts, trousers, sarees, kurtas, suits, salwar kameez — all garments pressed.' },
        { icon:'⚡', title:'Same-Day Service', desc:'Drop off and collect on the same day for pressing-only orders.' },
        { icon:'💰', title:'Just ₹5/Piece', desc:'Most affordable professional pressing in Faridabad — no hidden charges.' },
      ]}
      processSteps={[
        { icon:'🏷️', title:'Tag Items', desc:'Each piece tagged for return' },
        { icon:'💨', title:'Steam Prep', desc:'Machine heated to right temp' },
        { icon:'♨️', title:'Steam Press', desc:'Industrial press on each item' },
        { icon:'✅', title:'Inspect', desc:'Check for quality finish' },
        { icon:'📦', title:'Pack & Return', desc:'Folded & packed neatly' },
      ]}
      pricing={[
        { item:'Pressing (All garments)', price:'5/pcs', note:'Shirts, trousers, kurtas, etc.' },
        { item:'Saree Pressing', price:20, note:'Includes folding' },
        { item:'Suit (2 piece)', price:30, note:'Blazer + trouser' },
        { item:'Sherwani Press', price:50, note:'Full length sherwani' },
        { item:'Curtain Pressing', price:'per piece', note:'Call for size-based rate' },
      ]}
      faqs={[
        { q:'What is the difference between steam ironing and dry ironing?', a:'Steam ironing uses pressurized water vapour that relaxes fabric fibres gently — giving a better, longer-lasting result with zero scorch risk. Dry ironing (coal/electric) can scorch delicate fabrics.' },
        { q:'Can I just drop off clothes for pressing only?', a:'Yes! Pressing-only orders are welcome. Minimum 10 pieces recommended for a separate drop-off. Otherwise combine with wash order.' },
      ]}
    />
  )
}
