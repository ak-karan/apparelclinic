import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function SteamIroning() {
  return (
    <ServicePageTemplate
      seoTitle="Steam Ironing Service — Professional Press at ₹5/piece Faridabad"
      seoDesc="Professional steam ironing service in Faridabad. ₹5/piece. Industrial steam press for crisp, wrinkle-free finish on all garments."
      seoKeywords="steam ironing faridabad, pressing service, professional ironing, steam press clothes faridabad"
      canonical="/services/steam-ironing"
      badge="♨️ Professional Service"
      icon="♨️"
      title="Steam Ironing Service"
      tagline="Professional Steam Press — Crisp, Wrinkle-Free, Perfect Finish"
      description="Our industrial steam pressing service delivers a crisp, professional finish on every garment at just ₹5/piece. Steam (not dry heat) nourishes fabric fibres instead of scorching them."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70"
      highlights={[
        { icon:"♨️", title:"Industrial Steam Press", desc:"Commercial steam press — consistent, crisp results" },
        { icon:"🌡️", title:"No Scorch Damage", desc:"Steam only — safe for silk, chiffon, velvet" },
        { icon:"💧", title:"Removes All Wrinkles", desc:"High-pressure steam penetrates deep into fabric" },
        { icon:"👔", title:"All Garment Types", desc:"Shirts, trousers, sarees, kurtas, suits — all pressed" },
        { icon:"⚡", title:"Same-Day Service", desc:"Drop off and collect same day for pressing-only orders" },
        { icon:"💰", title:"Just ₹5/Piece", desc:"Most affordable professional pressing in Faridabad" },
      ]}
      processSteps={[
        { icon:"🏷️", title:"Tag Items", desc:"Each piece tagged for return" },
        { icon:"💨", title:"Steam Prep", desc:"Machine heated to right temp" },
        { icon:"♨️", title:"Steam Press", desc:"Industrial press on each item" },
        { icon:"✅", title:"Inspect", desc:"Check for quality finish" },
        { icon:"📦", title:"Pack & Return", desc:"Folded & packed neatly" },
      ]}
      pricing={[
        { item:"Pressing (All garments)", price:"5/pcs", note:"Shirts, trousers, kurtas, etc." },
        { item:"Saree Pressing", price:"20", note:"Includes folding" },
        { item:"Suit (2 piece)", price:"30", note:"Blazer + trouser" },
        { item:"Sherwani Press", price:"50", note:"Full length sherwani" },
        { item:"Curtain Pressing", price:"per piece", note:"Call for size-based rate" },
      ]}
      faqs={[
        { q:"What is the difference between steam ironing and dry ironing?", a:"Steam uses pressurized water vapour that relaxes fibres gently — better, longer-lasting results with zero scorch risk. Dry ironing can scorch delicate fabrics." },
        { q:"Can I drop off clothes for pressing only?", a:"Yes! Pressing-only orders are welcome. Minimum 10 pieces for separate drop-off." },
      ]}
      servicePrice="5"
    />
  )
}
