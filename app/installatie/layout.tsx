import { Metadata } from 'next';
import { CONSTANTS } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `IPTV Installatie Handleiding 2026 | Eenvoudige Setup voor Alle Apparaten`,
    template: `%s | ${CONSTANTS.BRAND_NAME} - Officiële Handleiding`,
  },
  description: `Volledige stappenplan handleiding voor het installeren van IPTV op Firestick, Smart TV, Android, Apple TV, PC en Mac. Binnen 5 minuten klaar voor gebruik. 24/7 ondersteuning.`,
  keywords: [
    'IPTV installatie handleiding',
    'Firestick IPTV instellen',
    'Smart TV IPTV tutorial',
    'Android TV IPTV installeren',
    'Apple TV IPTV gids',
    'TiviMate installeren Nederland',
    'IBO Player Smart TV setup',
    'IPTV Smarters Pro handleiding',
    'IPTV configuratie',
    'beste IPTV installatie gids',
    'snelle IPTV setup',
    'IPTV abonnement Nederland en België',
    'IPTV 2026'
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/installatie`,
    languages: {
      'nl-NL': `https://${CONSTANTS.DOMAIN}/installatie`,
      'nl-BE': `https://${CONSTANTS.DOMAIN}/installatie`,
    },
  },
  openGraph: {
    title: `IPTV Installatie Handleiding 2026 | Eenvoudige Setup`,
    description: `Installeer IPTV op Firestick, Smart TV, Android, iOS, Apple TV en PC. Eenvoudige stappenplan handleiding met 24/7 support.`,
    url: `https://${CONSTANTS.DOMAIN}/installatie`,
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `IPTV Installatie Handleiding voor alle apparaten`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `IPTV Installatie & Setup Handleiding`,
    description: `Eenvoudige handleiding voor alle apparaten. Binnen 5 minuten geïnstalleerd met 24/7 support.`,
    images: [`https://${CONSTANTS.DOMAIN}/img/structer.webp`],
    creator: `@${CONSTANTS.BRAND_NAME}`,
    site: `@${CONSTANTS.BRAND_NAME}`,
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

// JSON-LD HowTo Schema (Dutch)
const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="setup-howto-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Hoe IPTV installeren op elk gewenst apparaat",
        "description": "Volledige stappenplan installatiehandleiding voor IPTV op alle ondersteunde Smart TV en mediaspeler apparaten.",
        "totalTime": "PT5M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "EUR",
          "value": "14.99"
        },
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        "step": [
          {
            "@type": "HowToStep",
            "name": "Kies uw IPTV abonnement",
            "text": "Selecteer het gewenste pakket en ontvang uw inloggegevens binnen enkele minuten direct per e-mail.",
            "position": 1
          },
          {
            "@type": "HowToStep",
            "name": "Onbekende bronnen inschakelen (Firestick)",
            "text": "Ga naar Instellingen > Mijn Fire TV > Opties voor ontwikkelaars en zet Apps van onbekende bronnen AAN.",
            "position": 2
          },
          {
            "@type": "HowToStep",
            "name": "Downloader app installeren",
            "text": "Zoek naar 'Downloader' in de App Store van uw mediaspeler en installeer de applicatie.",
            "position": 3
          },
          {
            "@type": "HowToStep",
            "name": "Voer de installatiecode in",
            "text": "Open de Downloader app en voer installatiecode 83492 in om de IPTV speler te downloaden.",
            "position": 4
          },
          {
            "@type": "HowToStep",
            "name": "Inloggen met Xtream Codes API",
            "text": "Open de speler en log in met uw gebruikersnaam, wachtwoord en server-URL.",
            "position": 5
          },
          {
            "@type": "HowToStep",
            "name": "Start met streamen",
            "text": "Geniet direct van 20.000+ live zenders en 60.000+ VOD films in haarscherpe 4K kwaliteit.",
            "position": 6
          }
        ],
        "supply": [
          "Smart TV, Firestick of Android TV apparaat",
          "Stabiele internetverbinding (minimaal 15 Mbps)",
          "Actief IPTV abonnement"
        ],
        "tool": [
          "Downloader app",
          "TiviMate of IBO Player"
        ]
      })
    }}
  />
);

// JSON-LD FAQ Schema (Dutch)
const SetupFAQSchema = () => (
  <script
    type="application/ld+json"
    id="setup-faq-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Welke apparaten zijn compatibel met jullie IPTV service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Onze service werkt op Amazon Firestick, Android TV, Samsung & LG Smart TV, Apple TV, iPhone, iPad, Windows PC, Mac en MAG boxen."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe lang duurt de installatie van IPTV?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "De installatie duurt gemiddeld 5 minuten van begin tot eind, inclusief het downloaden van de app en het invoeren van de inloggegevens."
            }
          },
          {
            "@type": "Question",
            "name": "Heb ik een VPN nodig om te streamen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Een VPN is niet verplicht omdat al onze verbindingen versleuteld zijn. Mocht u liever via een VPN kijken, dan is onze dienst 100% compatibel met alle grote VPN-aanbieders."
            }
          },
          {
            "@type": "Question",
            "name": "Welke internetsnelheid heb ik minimaal nodig?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wij adviseren minimaal 15 Mbps voor Full HD streams en 25 tot 30 Mbps voor vloeiende 4K Ultra HD sportstreams. Een bekabelde LAN-verbinding heeft de voorkeur."
            }
          },
          {
            "@type": "Question",
            "name": "Kan ik het abonnement op meerdere schermen gebruiken?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, u kunt de app op meerdere apparaten installeren. Gelijktijdig streamen is afhankelijk van uw gekozen pakket (1 of 2 schermen tegelijk)."
            }
          },
          {
            "@type": "Question",
            "name": "Wat moet ik doen als ik installatiehulp nodig heb?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Onze Nederlandstalige klantenservice is 24/7 bereikbaar via WhatsApp om u direct te helpen bij de installatie."
            }
          },
          {
            "@type": "Question",
            "name": "Wat is de Downloader installatiecode?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "De officiële installatiecode voor de Downloader app is 83492."
            }
          }
        ]
      })
    }}
  />
);

// JSON-LD Breadcrumb Schema
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="breadcrumb-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `https://${CONSTANTS.DOMAIN}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Installatie Handleiding",
            "item": `https://${CONSTANTS.DOMAIN}/installatie`
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
        "url": `https://${CONSTANTS.DOMAIN}`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        "description": `Officiële installatiehandleiding voor ${CONSTANTS.BRAND_NAME}. Eenvoudige stappenplan voor al uw apparaten met 24/7 ondersteuning.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["Dutch", "English"]
        }
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
        "name": "IPTV Installatie Handleiding | Officiële Website",
        "description": "Volledige handleiding voor het instellen van IPTV op Firestick, Smart TV, Android en Apple TV.",
        "url": `https://${CONSTANTS.DOMAIN}/installatie`,
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

// Article Schema
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "IPTV Installatie Handleiding 2026 | Eenvoudige Setup",
        "image": [
          `https://${CONSTANTS.DOMAIN}/img/structer.webp`
        ],
        "datePublished": "2026-01-01T00:00:00+00:00",
        "dateModified": new Date().toISOString(),
        "author": {
          "@type": "Person",
          "name": `${CONSTANTS.BRAND_NAME} Team`
        },
        "publisher": {
          "@type": "Organization",
          "name": CONSTANTS.BRAND_NAME,
          "logo": {
            "@type": "ImageObject",
            "url": `https://${CONSTANTS.DOMAIN}/img/structer.webp`
          }
        }
      })
    }}
  />
);

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <OrganizationSchema />
      <WebPageSchema />
      <ArticleSchema />
      <HowToSchema />
      <SetupFAQSchema />
      <BreadcrumbSchema />
      {children}
    </>
  );
}