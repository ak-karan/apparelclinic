import { Helmet } from 'react-helmet-async'

const SITE = {
  name: 'Apparel Clinic',
  url: 'https://apparelclinic.in',
  phone1: '+91-9599057984',
  phone2: '+91-9818715642',
  address: 'Tower 20, Royal Heritage, Premium Park, Faridabad, Haryana 121007',
  email: 'akashkaran83@gmail.com',
  logo: 'https://apparelclinic.in/favicon.svg',
  image: 'https://apparelclinic.in/og-image.svg',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  description:
    'Premium perc and laundry specialists with 25 years of experience in dry cleaning, organic wash, shoe cleaning, and garment care.',
  url: SITE.url,
  telephone: [SITE.phone1, SITE.phone2],
  email: SITE.email,
  logo: SITE.logo,
  image: SITE.image,
  foundingDate: '1999',
  priceRange: 'INR',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer',
  openingHours: 'Mo-Su 00:00-23:59',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tower 20, Royal Heritage, Premium Park',
    addressLocality: 'Faridabad',
    addressRegion: 'Haryana',
    postalCode: '121007',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.4089',
    longitude: '77.3178',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '320',
    bestRating: '5',
  },
  sameAs: [
    'https://wa.me/919599057984',
    'https://facebook.com/apparelclinic',
    'https://instagram.com/apparelclinic',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: 'Best laundry and dry clean service in Faridabad',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/pricing?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const buildBreadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  ],
})

export const buildFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
})

export const buildServiceSchema = ({
  name,
  description,
  url,
  price,
  priceCurrency = 'INR',
  priceUnit,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${SITE.url}${url}`,
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
  },
  areaServed: {
    '@type': 'City',
    name: 'Faridabad',
  },
  ...(price
    ? {
        offers: {
          '@type': 'Offer',
          price,
          priceCurrency,
          ...(priceUnit
            ? {
                priceSpecification: {
                  '@type': 'UnitPriceSpecification',
                  unitCode: priceUnit,
                },
              }
            : {}),
        },
      }
    : {}),
})

export const buildReviewSchema = (reviews) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: reviews.map((review, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Review',
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
      },
      author: {
        '@type': 'Person',
        name: review.name,
      },
      itemReviewed: {
        '@type': 'LocalBusiness',
        '@id': `${SITE.url}/#business`,
      },
    },
  })),
})

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  schemas = [],
  noindex = false,
}) => {
  const fullTitle = `${title} | Apparel Clinic - Faridabad`
  const canonicalUrl = canonical ? `${SITE.url}${canonical}` : SITE.url
  const image = ogImage || SITE.image
  const allSchemas = [localBusinessSchema, websiteSchema, ...schemas]

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <meta name="author" content={SITE.name} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${title} | ${SITE.name}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title} | ${SITE.name}`} />

      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Faridabad" />
      <meta name="geo.position" content="28.4089;77.3178" />
      <meta name="ICBM" content="28.4089, 77.3178" />

      {allSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

export default SEO
export { buildBreadcrumb, SITE }
