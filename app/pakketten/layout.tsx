// app/pakketten/layout.tsx
import type { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `${CONSTANTS.FOCUS_KEYWORD} - Beste IPTV Pakketten 2026 | 4K Streaming | Officiële Website`,
    template: `%s | ${CONSTANTS.BRAND_NAME} - Officiële Tarieven`,
  },
  description: `${CONSTANTS.FOCUS_KEYWORD}: Multi-device IPTV abonnementen vanaf €14,99. 20.000+ live zenders, 60.000+ VODs, 4K & 60FPS kwaliteit. 7 dagen geld-terug-garantie. Officiële website - Bestel direct!`,
  authors: [{ name: `${CONSTANTS.BRAND_NAME} Team` }],
  creator: CONSTANTS.BRAND_NAME,
  publisher: CONSTANTS.BRAND_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/pakketten`,
    languages: {
      'nl-NL': `https://${CONSTANTS.DOMAIN}/pakketten`,
      'nl-BE': `https://${CONSTANTS.DOMAIN}/pakketten`,
    },
  },
  openGraph: {
    title: `${CONSTANTS.FOCUS_KEYWORD} - Beste IPTV Pakketten 2026 | Officiële Website`,
    description: `Abonneer op ${CONSTANTS.FOCUS_KEYWORD} vanaf €14,99. 20.000+ zenders, 60.000+ VODs, 4K kwaliteit. Multi-device ondersteuning. Officiële website.`,
    url: `https://${CONSTANTS.DOMAIN}/pakketten`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.FOCUS_KEYWORD} Tarieven & Pakketten - Beste IPTV Abonnement Officiële Website`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.FOCUS_KEYWORD} - Beste IPTV Pakketten 2026 | Officiële Website`,
    description: `Vanaf €14,99. 20.000+ zenders, 60.000+ VODs, 4K kwaliteit. Multi-device opties beschikbaar.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.webp`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  verification: {
    google: 'G-6NR51QZXKL',
  },
  category: 'entertainment',
  keywords: [
    `${CONSTANTS.FOCUS_KEYWORD} pricing`,
    `${CONSTANTS.FOCUS_KEYWORD} plans`,
    `${CONSTANTS.FOCUS_KEYWORD} subscription`,
    `${CONSTANTS.FOCUS_KEYWORD} cost`,
    `${CONSTANTS.FOCUS_KEYWORD} review`,
    `${CONSTANTS.FOCUS_KEYWORD} guide`,
    `${CONSTANTS.FOCUS_KEYWORD} service`,
    `${CONSTANTS.FOCUS_KEYWORD} official website`,
    'OmniIPTV',
    'omni iptv reviews',
    'omni iptv ervaringen',
    'omni iptv test',
    'IPTV subscription cost',
    'best IPTV price',
    'cheap IPTV subscription',
    'IPTV 4K pricing',
    'sports IPTV package',
    'IPTV service',
    'best IPTV provider',
    '4K streaming',
    'live TV streaming',
    'sports PPV',
    'premium IPTV',
    'international channels',
    'IPTV 2026',
    'iptv free trial',
    'IPTV abonnement Nederland',
    'IPTV kopen iDEAL',
    'IPTV abonnement België',
    'goedkoop IPTV abonnement 2026',
    'Viaplay Ziggo Sport IPTV'
  ],
};

// JSON-LD Pricing Page Schema with Full Multi-Tier Offers
const PricingPageSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-page-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${CONSTANTS.BRAND_NAME} IPTV Subscription Plans`,
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        "description": `Premium IPTV service met multi-device abonnementen vanaf €14,99. Krijg toegang tot 20.000+ live zenders en 60.000+ VODs in 4K & Full HD. OmniIPTV biedt de beste waarde voor digitale entertainment.`,
        "brand": {
          "@type": "Brand",
          "name": CONSTANTS.BRAND_NAME
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "1 Scherm - 3 Maanden",
            "price": "25.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `3 maanden OmniIPTV toegang op 1 apparaat met 20.000+ live zenders en 60.000+ VODs`
          },
          {
            "@type": "Offer",
            "name": "1 Scherm - 6 Maanden",
            "price": "35.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `6 maanden OmniIPTV toegang op 1 apparaat met 20.000+ live zenders en 60.000+ VODs`
          },
          {
            "@type": "Offer",
            "name": "1 Scherm - 12 Maanden",
            "price": "49.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `12 maanden OmniIPTV toegang op 1 apparaat met 20.000+ live zenders en 60.000+ VODs`
          },
          {
            "@type": "Offer",
            "name": "2 Schermen - 12 Maanden",
            "price": "110.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `12 maanden OmniIPTV toegang op 2 apparaten met 20.000+ live zenders en 60.000+ VODs`
          },
          {
            "@type": "Offer",
            "name": "3 Schermen - 12 Maanden",
            "price": "150.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `12 maanden OmniIPTV toegang op 3 apparaten met 20.000+ live zenders en 60.000+ VODs`
          }
        ]
      })
    }}
  />
);

// FAQ JSON-LD Schema
const PricingFAQSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Welke betaalmethoden accepteert OmniIPTV?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `OmniIPTV accepteert iDEAL, Bancontact, alle grote creditcards (Visa, Mastercard), PayPal en cryptovaluta via een beveiligde SSL-verbinding.`
            }
          },
          {
            "@type": "Question",
            "name": `Zit ik vast aan een contract bij OmniIPTV?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Nee, er zijn geen contracten of automatische verlengingen bij OmniIPTV. Alle abonnementen zijn eenmalig prepaid zonder verborgen kosten.`
            }
          },
          {
            "@type": "Question",
            "name": `Biedt OmniIPTV een terugbetalingsgarantie?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Ja, OmniIPTV biedt een 7 dagen niet-goed-geld-terug-garantie op alle pakketten.`
            }
          }
        ]
      })
    }}
  />
);

// Organization Schema
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": CONSTANTS.BRAND_NAME,
        "alternateName": "OmniIPTV",
        "url": `https://${CONSTANTS.DOMAIN}`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        "description": `OmniIPTV is de toonaangevende IPTV provider in Nederland en België met 20.000+ zenders en 60.000+ VODs in 4K kwaliteit zonder buffering.`
      })
    }}
  />
);

// Website Schema
const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": CONSTANTS.BRAND_NAME,
        "alternateName": "OmniIPTV",
        "url": `https://${CONSTANTS.DOMAIN}`,
        "description": `Beste IPTV abonnement in Nederland en België met meer dan 20.000 zenders, anti-freeze servers en 24/7 ondersteuning.`
      })
    }}
  />
);

// WebPage Schema
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `OmniIPTV - Tarieven & Pakketten | Officiële Website`,
        "description": `Kies uw OmniIPTV abonnement. 20.000+ zenders, 60.000+ VODs, 4K kwaliteit. Officiële website.`,
        "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          "width": "1200",
          "height": "630"
        }
      })
    }}
  />
);

export default function PkgLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <WebPageSchema />
      <PricingPageSchema />
      <PricingFAQSchema />
      {children}
    </>
  );
}