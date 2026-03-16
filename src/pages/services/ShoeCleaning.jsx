import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function ShoeCleaning() {
  return (
    <ServicePageTemplate
      seoTitle="Shoe Cleaning & Spa Service — Branded Shoe Care Faridabad"
      seoDesc="Professional shoe cleaning & spa in Faridabad. Branded shoe spa from ₹250. Nike, Adidas, Jordan, leather shoes — deep clean, polish & restore."
      seoKeywords="shoe cleaning faridabad, branded shoe spa, sneaker cleaning, leather shoe polish faridabad"
      canonical="/services/shoe-cleaning"
      badge="👟 Shoe Spa"
      icon="👟"
      title="Shoe Cleaning Service"
      tagline="Professional Shoe Spa — Restore, Clean & Protect"
      description="Give your shoes the spa treatment they deserve! Our professional shoe cleaning service covers sneakers, leather formals, boots, and all branded footwear. Deep-clean, de-odorize, condition, and restore your favourite shoes to near-new condition."
      heroImage="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=70"
      highlights={[
        { icon:'🏷️', title:'Branded Shoe Specialist', desc:'Nike, Adidas, Jordan, Puma, Reebok, New Balance — all brands handled with expertise.' },
        { icon:'👞', title:'Leather Shoe Care', desc:'Deep clean, conditioning, and polishing for formal leather shoes.' },
        { icon:'✨', title:'Sole Whitening', desc:'Yellowed soles restored to bright white using professional oxidation treatment.' },
        { icon:'🦠', title:'Anti-Bacterial Treatment', desc:'Kill odour-causing bacteria — shoes are fresh, clean and hygienic.' },
        { icon:'🛡️', title:'Protective Coating', desc:'Premium waterproof protectant applied to extend shoe life.' },
        { icon:'🎨', title:'Colour Restoration', desc:'Faded colours refreshed using professional shoe-grade dyes and pigments.' },
      ]}
      processSteps={[
        { icon:'🔍', title:'Assessment', desc:'Check sole, upper, stains' },
        { icon:'💧', title:'Deep Clean', desc:'Remove dirt & grime safely' },
        { icon:'🧴', title:'Condition', desc:'Leather conditioner applied' },
        { icon:'✨', title:'Polish & Shine', desc:'Professional finish applied' },
        { icon:'🛡️', title:'Protect', desc:'Waterproof protectant coat' },
      ]}
      pricing={[
        { item:'Shoes Spa (Branded)', price:250, note:'Nike, Adidas, Jordan, etc.' },
        { item:'Leather Formal Shoes', price:200, note:'Deep clean + polish + condition' },
        { item:'Sports / Running Shoes', price:200, note:'Deep clean + deodorize' },
        { item:'Boots (Ankle/High)', price:300, note:'Full clean + conditioning' },
        { item:'Sole Whitening (add-on)', price:50, note:'Per pair' },
        { item:'Waterproof Coating (add-on)', price:100, note:'Per pair' },
      ]}
      faqs={[
        { q:'Can you clean suede and nubuck shoes?', a:'Yes, but suede and nubuck require specialised dry-cleaning brushes and no water. Please inform us at the time of booking.' },
        { q:'Will you remove yellow sole?', a:'Yes! Sole whitening is an add-on service. We use hydrogen peroxide UV oxidation to restore yellowed soles to bright white.' },
        { q:'How long does shoe cleaning take?', a:'Typically 24–48 hours. Express service available on request.' },
      ]}
   
      servicePrice="250"
    />
  )
}
