import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function DryCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Dry Clean Service — Premium Perc Dry Cleaning Faridabad"
      seoDesc="Professional dry cleaning in Faridabad. 25 years of premium PERC dry cleaning experience. Suits, sherwanis, coats, curtains and more."
      seoKeywords="dry cleaning faridabad, suit dry cleaning, sherwani dry clean, coat dry clean, perc dry cleaning"
      canonical="/services/dry-cleaning"
      badge="✨ Premium PERC"
      icon="✨"
      title="Dry Clean Service"
      tagline="Premium Perc Dry Cleaning — 25 Years Specialist"
      description="Apparel Clinic is a certified Premium Perc & Laundry Specialist. Our perchloroethylene (PERC) dry cleaning process is the industry gold-standard — effective on grease, oil, and stubborn stains without water-based shrinkage or colour bleed."
      heroImage="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=70"
      highlights={[
        { icon:'🏆', title:'PERC Certified Specialists', desc:'25+ years of professional perchloroethylene dry cleaning expertise.' },
        { icon:'👔', title:'Suits & Formal Wear', desc:'Blazers, suits, safari suits — crisply cleaned and pressed.' },
        { icon:'👘', title:'Heavy Ethnic Wear', desc:'Sherwanis, achkans, bandhgalas — no fabric damage guaranteed.' },
        { icon:'🧥', title:'Coats & Overcoats', desc:'Heavy winter coats, velvet coats, overcoats — deep-cleaned.' },
        { icon:'💎', title:'Stain Removal Expert', desc:'Oil, grease, ink, wine, curry — professional stain treatment.' },
        { icon:'🌡️', title:'Precise Temperature', desc:'Each fabric type treated at optimal temperature for best results.' },
      ]}
      processSteps={[
        { icon:'🔍', title:'Inspection', desc:'Check stains & fabric type' },
        { icon:'🏷️', title:'Tag & Sort', desc:'Unique ID for every garment' },
        { icon:'🧪', title:'Pre-Treatment', desc:'Targeted stain remover applied' },
        { icon:'⚙️', title:'PERC Dry Clean', desc:'Industrial dry clean machine' },
        { icon:'♨️', title:'Steam Press', desc:'Professional steam finish' },
        { icon:'📦', title:'Pack & Deliver', desc:'Hygienic, odour-free packing' },
      ]}
      pricing={[
        { item:'Shirt (Dry Clean)', price:60 },
        { item:'Trouser / Jeans', price:78 },
        { item:'Blazer', price:150 },
        { item:'Suit (2 Piece)', price:250 },
        { item:'Safari Suit (Coat)', price:310 },
        { item:'Over Coat', price:350 },
        { item:'Velvet Coat', price:160 },
        { item:'Gents Sherwani', price:385 },
        { item:'Gents Sherwani (Heavy)', price:700 },
        { item:'Dry Clean @ kg rate', price:'160/kg', note:'For regular garments only' },
      ]}
      faqs={[
        { q:'How often should I dry clean a suit?', a:'Ideally after every 4–5 wears, or whenever visibly soiled. Over-dry-cleaning can weaken fabric fibres.' },
        { q:'Do you dry clean curtains?', a:'Yes. Curtain dry cleaning is available. Window curtains from ₹115, door curtains from ₹170.' },
        { q:'What is PERC dry cleaning?', a:'Perchloroethylene (PERC) is the professional-grade solvent used in premium dry cleaning worldwide. It removes oil and grease-based stains without using water — preventing shrinkage and colour distortion.' },
      ]}
   
      servicePrice="160"
      servicePriceUnit="KGM"
    />
  )
}
