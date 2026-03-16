// src/data.js

export const CONTACT = {
  phone1: '+91-9599057984',
  phone2: '+91-9818715642',
  whatsapp: 'https://wa.me/919599057984',
  email: 'akashkaran83@gmail.com',
  address: 'Tower 20, Royal Heritage, Premium Park, Faridabad, Haryana 121007',
  facebook: 'https://facebook.com/apparelclinic',
  instagram: 'https://instagram.com/apparelclinic'
}

export const SERVICES = [
  {
    slug: 'laundry',
    icon: '👕',
    title: 'Laundry Service',
    desc: 'Organic wash ₹110/kg, Normal wash ₹75/kg. Free pickup above 6kg.'
  },
  {
    slug: 'dry-cleaning',
    icon: '✨',
    title: 'Dry Cleaning',
    desc: 'Premium PERC dry cleaning for suits, sherwanis, coats and more.'
  },
  {
    slug: 'organic-dry-cleaning',
    icon: '🌿',
    title: 'Organic Dry Clean',
    desc: 'Chemical-free, eco-friendly dry cleaning for delicate fabrics.'
  },
  {
    slug: 'shoe-cleaning',
    icon: '👟',
    title: 'Shoe Cleaning',
    desc: 'Branded shoe spa from ₹250. Deep clean, polish & restore.'
  },
  {
    slug: 'jacket-cleaning',
    icon: '🧥',
    title: 'Jacket Cleaning',
    desc: 'Leather, down, wool jackets — all types professionally cleaned.'
  },
  {
    slug: 'bag-cleaning',
    icon: '👜',
    title: 'Bag Cleaning',
    desc: 'Handbags, backpacks, designer purses — deep clean & condition.'
  },
  {
    slug: 'sofa-cleaning',
    icon: '🛋️',
    title: 'Sofa Cleaning',
    desc: 'Deep upholstery cleaning. Stain removal & sanitization.'
  },
  {
    slug: 'carpet-cleaning',
    icon: '🏠',
    title: 'Carpet Cleaning',
    desc: 'Area rugs, Persian rugs, wall-to-wall carpets. Hot water extraction.'
  },
  {
    slug: 'steam-ironing',
    icon: '♨️',
    title: 'Steam Ironing',
    desc: 'Professional steam press at ₹5/piece. Crisp, wrinkle-free finish.'
  }
]

export const REVIEWS = [
  {
    name: 'Priya Sharma',
    rating: 5,
    text: 'Excellent service! My silk sarees came back looking like new. The staff is very professional and careful with delicate fabrics.',
    date: '2 days ago',
    verified: true
  },
  {
    name: 'Rahul Verma',
    rating: 5,
    text: 'Best laundry service in Faridabad. They picked up and delivered on time. My formal shirts are perfectly ironed.',
    date: '1 week ago',
    verified: true
  },
  {
    name: 'Neha Gupta',
    rating: 4,
    text: 'Very happy with the dry cleaning service. They removed tough stains from my curtains. Reasonable prices.',
    date: '3 days ago',
    verified: true
  },
  {
    name: 'Amit Kumar',
    rating: 5,
    text: 'Regular customer for 2 years now. Never disappointed. Their shoe cleaning service is amazing!',
    date: '5 days ago',
    verified: true
  }
]

export const TEN_STEPS = [
  { step: 1, title: 'Free Pickup', desc: 'We collect from your doorstep at scheduled time.' },
  { step: 2, title: 'Inspection', desc: 'Each garment checked for stains, damage, and fabric type.' },
  { step: 3, title: 'Tagging', desc: 'Unique ID tag assigned to every garment for zero mix-up.' },
  { step: 4, title: 'Sorting', desc: 'Sorted by colour, fabric, and cleaning method required.' },
  { step: 5, title: 'Pre-Treatment', desc: 'Stains treated with appropriate solutions.' },
  { step: 6, title: 'Cleaning', desc: 'Washed at optimal temperature using right method.' },
  { step: 7, title: 'Quality Check', desc: '100% inspection for cleanliness and stains.' },
  { step: 8, title: 'Steam Ironing', desc: 'Professional steam press for crisp finish.' },
  { step: 9, title: 'Packaging', desc: 'Hygienic packing, ready for delivery.' },
  { step: 10, title: 'Delivery', desc: 'Free doorstep delivery at your convenience.' }
]

export const WHY_US = [
  {
    icon: '🏭',
    title: '25+ Years Experience',
    desc: 'Industrial & domestic laundry specialists with decades of expertise.'
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Process',
    desc: 'Enzyme-based chemicals and bio-degradable packaging.'
  },
  {
    icon: '🚚',
    title: 'Free Pickup/Delivery',
    desc: 'Free collection for orders above 6 kg. Scheduled at your convenience.'
  },
  {
    icon: '💧',
    title: 'Steam Ironing',
    desc: 'Professional steam press — no scorch damage, just perfect finish.'
  },
  {
    icon: '🛡️',
    title: 'Stain Removal Expert',
    desc: 'Professional stain treatment for all types of stains.'
  },
  {
    icon: '⭐',
    title: '50,000+ Happy Customers',
    desc: 'Trusted by thousands of families and businesses in Faridabad.'
  }
]

export const FAQS = [
  {
    q: 'How to book a pickup?',
    a: 'Call or WhatsApp on 9599057984 / 9818715642, or fill the pickup form on our website homepage. We confirm within 30 minutes.'
  },
  {
    q: 'Do you offer free pickup?',
    a: 'Yes! Free pickup for orders above 6 kg. Below 6 kg: ₹50 nominal charge.'
  },
  {
    q: 'What is the turnaround time?',
    a: 'Standard service takes 24–48 hours. Express same-day service available on request.'
  },
  {
    q: 'What is organic wash?',
    a: 'Organic wash uses enzyme-based, bio-degradable, chemical-free detergents. It is gentler on fabrics and safer for sensitive skin.'
  }
]

export const PREPAID_PLANS = [
  {
    name: 'Basic',
    price: 999,
    validity: '30 days',
    washKg: 10,
    pressing: 10,
    badge: null
  },
  {
    name: 'Popular',
    price: 1999,
    validity: '30 days',
    washKg: 20,
    pressing: 25,
    badge: 'Best Value'
  },
  {
    name: 'Family',
    price: 2999,
    validity: '45 days',
    washKg: 35,
    pressing: 40,
    badge: null
  }
]

export const PRICE_CATEGORIES = [
  {
    name: 'Laundry',
    items: [
      { name: 'Organic Wash', price: '110/kg' },
      { name: 'Normal Wash', price: '75/kg' },
      { name: 'Steam Pressing', price: '5/pcs' }
    ]
  },
  {
    name: 'Dry Cleaning',
    items: [
      { name: 'Shirt', price: '60' },
      { name: 'Trouser', price: '78' },
      { name: 'Blazer', price: '150' },
      { name: 'Suit (2 Piece)', price: '250' },
      { name: 'Dry Clean (kg rate)', price: '160/kg' }
    ]
  },
  {
    name: 'Sarees & Ethnic',
    items: [
      { name: 'Saree (Regular)', price: '135' },
      { name: 'Saree (Silk)', price: '180' },
      { name: 'Lehnga (Regular)', price: '400' },
      { name: 'Lehnga Heavy (Bridal)', price: '1350' },
      { name: 'Gents Sherwani', price: '385' }
    ]
  }
]