import { Metadata } from 'next';

const DOMAIN = 'omniptv.one';
const BRAND_NAME = 'OMNI IPTV';
const FOCUS_KEYWORD = 'OMNI IPTV';
const SECOND_FOCUS_KEYWORD = 'OmnIPTV'; // Combined variant for search coverage

export const CONSTANTS = {
  DOMAIN,
  BRAND_NAME,
  FOCUS_KEYWORD,
  SECOND_FOCUS_KEYWORD,
  SITE_URL: `https://${DOMAIN}`,
  
  // Primary Focus Keywords (Top Dutch Search Terms + Combined Brand Variation)
  PRIMARY_KEYWORDS: [
    'OMNI IPTV',
    'OmniIPTV',
    'Beste IPTV',
    'IPTV Kopen',
    'IPTV Nederland',
    'Beste IPTV Provider 2026',
    'IPTV Abonnement',
  ],

  // Secondary & High-Intent Search Terms
  SECONDARY_KEYWORDS: [
    'IPTV Kopen Nederland',
    'Stabiele IPTV zonder haperingen',
    'IPTV Test Aanvragen',
    'Goedkope IPTV Kopen',
    'Nederlandse Zenders IPTV 4K',
    'Eredivisie Ziggo Sport Viaplay IPTV',
    'Smart TV IPTV App',
  ],

  // Business Contact Details
  CONTACT: {
    email: 'support@omniptv.one',
    phone: '+44 7549 589503',
    whatsapp: 'https://wa.me/447549589503',
    supportHours: '24/7 Klantenservice via WhatsApp en E-mail',
  },

  // Major Target Cities in the Netherlands
  TARGET_REGIONS: [
    'Amsterdam',
    'Rotterdam',
    'Den Haag',
    'Utrecht',
    'Eindhoven',
    'Groningen',
    'Tilburg',
    'Almere',
    'Breda',
    'Nijmegen',
  ],

  // Value Propositions in Native Dutch
  USPS: [
    'Geen haperingen of buffering dankzij anti-freeze servers',
    'Meer dan 20.000+ zenders en 50.000+ VOD films en series',
    'Directe activatie binnen 5 minuten na bestelling',
    'Alle Nederlandse sportzenders in 4K & Full HD',
    'Ondersteunt Smart TV, Firestick, Android, iOS en MAG-boxen',
  ],
};

export const generateSEOMetadata = (
  pageName: string,
  description?: string,
  path: string = '/'
): Metadata => {
  const defaultDescription = `Ontdek ${BRAND_NAME} (${SECOND_FOCUS_KEYWORD}): de beste IPTV van Nederland. Direct IPTV kopen met 20.000+ live zenders, sport en films in 4K Ultra HD zonder haperingen.`;
  const pageTitle = `${pageName} | ${BRAND_NAME} - Beste IPTV Kopen Nederland 2026`;

  return {
    title: pageTitle,
    description: description || defaultDescription,
    keywords: [
      ...CONSTANTS.PRIMARY_KEYWORDS,
      ...CONSTANTS.SECONDARY_KEYWORDS,
    ].join(', '),
    metadataBase: new URL(`https://${DOMAIN}`),
    alternates: {
      canonical: path,
      languages: {
        'nl-NL': `https://${DOMAIN}${path}`,
        'nl-BE': `https://${DOMAIN}${path}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: description || defaultDescription,
      url: `https://${DOMAIN}${path}`,
      siteName: BRAND_NAME,
      locale: 'nl_NL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: description || defaultDescription,
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
  };
};