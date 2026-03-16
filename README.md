# 🏥 Apparel Clinic — Website

> **Clean, care... Kapde bole – Thank you**

React + Vite + Tailwind CSS website for Apparel Clinic, Premium Park, Faridabad.

---

## 🚀 Quick Start

```bash
# 1. Dependencies install karo
npm install

# 2. Dev server start karo
npm run dev

# 3. Production build
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx            # Sticky navbar + mobile menu + services dropdown
│   ├── Footer.jsx            # Full footer with links
│   ├── SEO.jsx               # react-helmet-async wrapper
│   ├── WhatsAppButton.jsx    # Floating WhatsApp button
│   ├── PageLoader.jsx        # Loading spinner for Suspense
│   ├── ScrollToTop.jsx       # Auto scroll top on route change
│   └── ServicePageTemplate.jsx  # Reusable service page layout
│
├── pages/
│   ├── Home.jsx              # Main homepage (all sections)
│   ├── About.jsx             # About us page
│   ├── Pricing.jsx           # Full price list with search & filter
│   ├── PrepaidPlans.jsx      # Subscription plans page
│   ├── FAQ.jsx               # FAQ accordion page
│   ├── Terms.jsx             # Terms & Conditions
│   ├── Contact.jsx           # Contact form + info
│   └── services/
│       ├── Laundry.jsx
│       ├── OrganicDryCleaning.jsx
│       ├── DryCleaning.jsx
│       ├── ShoeCleaning.jsx
│       ├── JacketCleaning.jsx
│       ├── BagCleaning.jsx
│       ├── SofaCleaning.jsx
│       ├── CarpetCleaning.jsx
│       └── SteamIroning.jsx
│
├── data/index.js             # ALL DATA — prices, services, reviews, FAQs
├── App.jsx                   # Routes + lazy loading
├── main.jsx                  # Entry point
└── index.css                 # Global styles + CSS variables
```

---

## 📧 EmailJS Setup (Pickup Form)

Abhi form ka data `mailto:` se open ho raha hai. Actual email bhejne ke liye:

1. [emailjs.com](https://emailjs.com) par free account banao
2. Email service connect karo (Gmail recommended)
3. Template banao with variables:
   - `{{from_name}}`, `{{phone}}`, `{{address}}`, `{{service}}`, `{{pickup_date}}`, `{{notes}}`
4. `Home.jsx` mein `handleSubmit` function update karo:

```js
import emailjs from '@emailjs/browser'

await emailjs.send(
  'YOUR_SERVICE_ID',      // emailjs service id
  'YOUR_TEMPLATE_ID',     // emailjs template id
  {
    from_name: form.name,
    phone: form.phone,
    address: form.address,
    service: form.service,
    pickup_date: form.date,
    notes: form.notes,
  },
  'YOUR_PUBLIC_KEY'       // emailjs public key
)
```

---

## 🎨 Color Theme

All colors are CSS variables in `src/index.css`:

| Variable     | Value     | Usage                |
|--------------|-----------|----------------------|
| `--green`    | `#54b963` | Primary accent       |
| `--bg`       | `#080a09` | Page background      |
| `--bg-2`     | `#19211e` | Section alternating  |
| `--text`     | `#b7b7b7` | Body text            |
| `--heading`  | `#ffffff` | All headings         |
| `--border`   | `rgba(84,185,99,0.2)` | Card borders |

---

## 🌐 Deployment

### Vercel (Recommended — Free)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload `dist/` folder to Netlify
```

`vercel.json` and `public/_redirects` already configured for SPA routing.

---

## ⚡ Performance Features

- Lazy loading for all pages (code splitting)
- Manual chunk splitting (vendor, motion, icons)
- Framer Motion `whileInView` for scroll animations
- Optimized images via Unsplash CDN with `?w=800&q=70`
- CSS variables instead of repeated Tailwind classes
- `react-intersection-observer` for scroll triggers

---

## 🔍 SEO Features

- `react-helmet-async` for per-page meta tags
- Schema.org `LocalBusiness` JSON-LD in `index.html`
- Open Graph + Twitter Card meta tags
- Canonical URLs per page
- `robots.txt` + `sitemap.xml` ready
- Semantic HTML headings (h1 → h2 → h3)

---

## 📞 Contact Info (Update in `src/data/index.js`)

```js
export const CONTACT = {
  phone1: '9599057984',
  phone2: '9818715642',
  whatsapp: 'https://wa.me/919599057984',
  address: 'Tower 20, Royal Heritage, Premium Park, Faridabad',
  email: 'akashkaran83@gmail.com',
}
```
