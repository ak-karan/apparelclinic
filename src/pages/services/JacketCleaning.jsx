import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function JacketCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Jacket Cleaning Service — Leather, Down & Winter Jacket Care"
      seoDesc="Professional jacket cleaning in Faridabad. Light jacket ₹150, heavy jacket ₹220. Leather, bomber, down-filled, biker jackets — all types handled."
      seoKeywords="jacket cleaning faridabad, leather jacket cleaning, winter jacket dry clean, biker jacket cleaning"
      canonical="/services/jacket-cleaning"
      badge="🧥 Jacket Specialist"
      icon="🧥"
      title="Jacket Cleaning"
      tagline="Expert Jacket Care — All Types, All Seasons"
      description="Jackets are tricky to clean at home — wrong method can shrink the shell, damage the insulation, or ruin the leather. Our jacket cleaning specialists use the right method for every jacket type: dry clean, hand wash, or machine wash at precise settings."
      heroImage="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=70"
      highlights={[
        { icon:'🏍️', title:'Leather & Biker Jackets', desc:'Professional leather conditioning, stitching check, and restoration for leather jackets.' },
        { icon:'❄️', title:'Down-Filled Jackets', desc:'Special process to clean and re-fluff down jackets without damaging insulation.' },
        { icon:'🧶', title:'Woolen & Fleece', desc:'Safe wet or dry cleaning for heavy woolen and fleece jackets.' },
        { icon:'🌂', title:'Windbreakers & Shells', desc:'Restore DWR (water-repellent) coating during cleaning.' },
        { icon:'💨', title:'Odour Removal', desc:'Deep de-odorization for smoke, sweat, or mildew odours.' },
        { icon:'🔧', title:'Minor Repairs', desc:'Button re-stitching and zip check included in premium service.' },
      ]}
      processSteps={[
        { icon:'🔍', title:'Type Identify', desc:'Leather / down / wool / synthetic' },
        { icon:'🧪', title:'Pre-treat', desc:'Stains treated with right solution' },
        { icon:'⚙️', title:'Clean', desc:'Dry clean or controlled wash' },
        { icon:'💨', title:'Dry & Re-fluff', desc:'Proper drying, no heat damage' },
        { icon:'✅', title:'QC & Deliver', desc:'Inspect, pack and deliver' },
      ]}
      pricing={[
        { item:'Jacket (Half)', price:150, note:'Light jacket, thin lining' },
        { item:'Jacket (Full)', price:220, note:'Full-length, thick jacket' },
        { item:'Leather Jacket', price:350, note:'Premium leather care + condition' },
        { item:'Down/Puffer Jacket', price:280, note:'Re-fluff process included' },
        { item:'Blazer', price:150, note:'Formal blazer dry clean' },
        { item:'Overcoat', price:350, note:'Long heavy overcoat' },
      ]}
      faqs={[
        { q:'Can you clean a leather jacket?', a:'Yes! We offer professional leather jacket cleaning with conditioning treatment to keep the leather supple and prevent cracking.' },
        { q:'Will a down jacket lose its fluff after cleaning?', a:'No — we use a special tumble-dry process with tennis balls to re-fluff down jackets after washing, restoring the loft completely.' },
        { q:'How to maintain jackets between cleanings?', a:'Use a fabric brush for surface dust, spot-clean small stains promptly, and hang in a ventilated space. Dry clean once per season.' },
      ]}
   
      servicePrice="150"
    />
  )
}
