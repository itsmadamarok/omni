import type { Metadata, Viewport } from 'next';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import { CONSTANTS } from '@/lib/seo';
import { GoogleAnalytics } from '@next/third-parties/google';
import Loading from './components/loading';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Strictest character counts for Google Desktop & Mobile snippet rendering
export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: 'OMNI IPTV - Beste IPTV Provider Nederland | 4K 2026',
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description:
    'Koop OMNI IPTV in Nederland: 20.000+ live zenders en VOD in 4K zonder haperingen. Test nu 24 uur gratis via WhatsApp!',
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
    canonical: `https://${CONSTANTS.DOMAIN}/`,
    languages: {
      'nl-NL': `https://${CONSTANTS.DOMAIN}/`,
      'nl-BE': `https://${CONSTANTS.DOMAIN}/`,
    },
  },
  openGraph: {
    title: 'OMNI IPTV - Beste IPTV Provider Nederland | 4K 2026',
    description:
      'Koop OMNI IPTV in Nederland: 20.000+ live zenders en VOD in 4K zonder haperingen. Test nu 24 uur gratis via WhatsApp!',
    url: `https://${CONSTANTS.DOMAIN}/`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: 'OMNI IPTV - Beste IPTV Abonnement Kopen Nederland 4K',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMNI IPTV - Beste IPTV Provider Nederland | 4K 2026',
    description:
      'Koop OMNI IPTV in Nederland: 20.000+ live zenders en VOD in 4K zonder haperingen. Test nu 24 uur gratis via WhatsApp!',
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.webp`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
  },
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
      { url: '/img/favicons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/img/favicons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/img/favicons/favicon.ico',
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/img/favicons/safari-pinned-tab.svg',
        color: '#CA1421',
      },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: CONSTANTS.BRAND_NAME,
    statusBarStyle: 'black-translucent',
  },
  other: {
    'msapplication-TileColor': '#1A1A1D',
    'msapplication-TileImage': '/img/favicons/mstile-144x144.png',
    'msapplication-config': '/img/favicons/browserconfig.xml',
  },
  verification: {
    google: 'G-6NR51QZXKL',
  },
  category: 'entertainment',
  keywords: [
    'OMNI IPTV',
    'Beste IPTV',
    'IPTV Kopen',
    'IPTV Nederland',
    'Beste IPTV Provider',
    'IPTV Abonnement',
    'Stabiele IPTV 4K',
    'IPTV Test Gratis',
    'Nederlandse Zenders IPTV',
    'Smart TV IPTV App',
    'Eredivisie Viaplay IPTV',
    'Ziggo Sport IPTV',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1A1A1D',
};

// Localized Organization Schema
const OrganizationSchema = () => (
  <script
    type="application/ld+json"
    id="organization-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: CONSTANTS.BRAND_NAME,
        alternateName: `${CONSTANTS.BRAND_NAME} Nederland`,
        url: `https://${CONSTANTS.DOMAIN}`,
        logo: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        image: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        description:
          'OMNI IPTV is de toonaangevende IPTV provider in Nederland en België met 20.000+ zenders en 60.000+ VOD films en series in 4K kwaliteit zonder buffering.',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: CONSTANTS.CONTACT.phone,
          contactType: 'klantenservice',
          availableLanguage: ['Dutch', 'English'],
          contactOption: 'TollFree',
        },
      }),
    }}
  />
);

// Localized Website Schema
const WebsiteSchema = () => (
  <script
    type="application/ld+json"
    id="website-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: CONSTANTS.BRAND_NAME,
        alternateName: `${CONSTANTS.BRAND_NAME} - Beste IPTV Provider Nederland`,
        url: `https://${CONSTANTS.DOMAIN}`,
        description:
          'Beste IPTV abonnement in Nederland en België met meer dan 20.000 zenders, anti-freeze servers en 24/7 ondersteuning.',
        inLanguage: 'nl-NL',
        potentialAction: {
          '@type': 'SearchAction',
          target: `https://${CONSTANTS.DOMAIN}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }),
    }}
  />
);

// Localized Product Schema with exact EUR pricing tiers
const ProductSchema = () => (
  <script
    type="application/ld+json"
    id="product-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: `${CONSTANTS.BRAND_NAME} Premium IPTV Abonnement`,
        image: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        description:
          'OMNI IPTV levert premium 4K live televisie en on-demand media zonder haperingen met directe activatie binnen 5 minuten.',
        brand: {
          '@type': 'Brand',
          name: CONSTANTS.BRAND_NAME,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '5000',
          bestRating: '5',
          worstRating: '1',
        },
        offers: [
          {
            '@type': 'Offer',
            name: '1 Scherm - 3 Maanden',
            priceCurrency: 'EUR',
            price: '25.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: `https://${CONSTANTS.DOMAIN}/`,
          },
          {
            '@type': 'Offer',
            name: '1 Scherm - 6 Maanden',
            priceCurrency: 'EUR',
            price: '35.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: `https://${CONSTANTS.DOMAIN}/`,
          },
          {
            '@type': 'Offer',
            name: '1 Scherm - 12 Maanden',
            priceCurrency: 'EUR',
            price: '49.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: `https://${CONSTANTS.DOMAIN}/`,
          },
          {
            '@type': 'Offer',
            name: '2 Schermen - 12 Maanden',
            priceCurrency: 'EUR',
            price: '110.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: `https://${CONSTANTS.DOMAIN}/`,
          },
          {
            '@type': 'Offer',
            name: '3 Schermen - 12 Maanden',
            priceCurrency: 'EUR',
            price: '150.00',
            priceValidUntil: '2027-12-31',
            availability: 'https://schema.org/OnlineOnly',
            url: `https://${CONSTANTS.DOMAIN}/`,
          },
        ],
      }),
    }}
  />
);

// Localized Service Schema
const ServiceSchema = () => (
  <script
    type="application/ld+json"
    id="service-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: `${CONSTANTS.BRAND_NAME} IPTV Streaming Service`,
        alternateName: 'Beste IPTV Kopen Nederland',
        serviceType: 'IPTV Abonnement',
        provider: {
          '@type': 'Organization',
          name: CONSTANTS.BRAND_NAME,
        },
        description:
          'Stabiele 4K IPTV streaming service voor Smart TV, Firestick, Android, iOS en MAG-boxen.',
        areaServed: [
          { '@type': 'Country', name: 'Netherlands' },
          { '@type': 'Country', name: 'Belgium' },
        ],
      }),
    }}
  />
);

// Localized FAQ Schema (Native Dutch search queries)
const FAQSchema = () => (
  <script
    type="application/ld+json"
    id="faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat is IPTV en hoe werkt het?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'IPTV (Internet Protocol Television) zendt televisieprogramma’s uit via uw internetverbinding in plaats van traditionele kabel of satelliet. Met OMNI IPTV kijkt u direct via uw Smart TV, smartphone, tablet of TV-box.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is de beste IPTV provider in Nederland?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'OMNI IPTV is de best beoordeelde provider in Nederland en België dankzij anti-freeze servertechnologie, 99.9% uptime, 4K sportzenders (Viaplay, Ziggo Sport, ESPN) en snelle WhatsApp ondersteuning.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe kan ik IPTV kopen en installeren?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Kies een abonnement op onze website. Na afronding ontvangt u binnen 5 minuten uw M3U-link en Xtream codes via WhatsApp en e-mail met een duidelijke stap-voor-stap handleiding.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik eerst een gratis 24-uurs IPTV test aanvragen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, u kunt via onze website direct een gratis 24-uurs IPTV proefperiode aanvragen via WhatsApp om alle zenders en de stabiliteit zelf te ervaren.',
            },
          },
        ],
      }),
    }}
  />
);

// Localized WebPage Schema
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'OMNI IPTV - Beste IPTV Provider Nederland | 4K 2026',
        description:
          'Koop OMNI IPTV in Nederland: 20.000+ live zenders en VOD in 4K zonder haperingen. Test nu 24 uur gratis via WhatsApp!',
        url: `https://${CONSTANTS.DOMAIN}/`,
        inLanguage: 'nl-NL',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          width: '1200',
          height: '630',
        },
      }),
    }}
  />
);

// Localized Article Schema
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'OMNI IPTV - Beste IPTV Provider Nederland | 4K 2026',
        image: [`https://${CONSTANTS.DOMAIN}/img/structer.webp`],
        inLanguage: 'nl-NL',
        datePublished: '2026-01-01T00:00:00+00:00',
        dateModified: new Date().toISOString(),
        author: {
          '@type': 'Person',
          name: `${CONSTANTS.BRAND_NAME} Team`,
        },
        publisher: {
          '@type': 'Organization',
          name: CONSTANTS.BRAND_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          },
        },
      }),
    }}
  />
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#1A1A1D" />
        <meta name="thumbnail" content={`https://${CONSTANTS.DOMAIN}/img/structer.webp`} />
      </head>
      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#1A1A1D] text-[#F1E8DB]`}
        suppressHydrationWarning
      >
        {/* Schema.org Structured Data */}
        <OrganizationSchema />
        <WebsiteSchema />
        <ProductSchema />
        <ServiceSchema />
        <FAQSchema />
        <WebPageSchema />
        <ArticleSchema />
        <Loading />

        <Header />
        <main>{children}</main>
        <Footer />

        {/* Analytics & Communication */}
        <GoogleAnalytics gaId="G-6NR51QZXKL" />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}