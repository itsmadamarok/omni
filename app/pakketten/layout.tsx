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
    google: '',
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
    'iptv encoder box',
    '4k iptv encoder',
    'iptv encoder hdmi',
    'marinios iptv',
    'lexonstream iptv',
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
        "description": `Premium IPTV service met multi-device abonnementen vanaf €14,99. Krijg toegang tot 20.000+ live zenders en 60.000+ VODs in 4K & Full HD. ${CONSTANTS.FOCUS_KEYWORD} biedt de beste waarde voor digitale entertainment.`,
        "brand": {
          "@type": "Brand",
          "name": CONSTANTS.BRAND_NAME
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "5000",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": [
          // 1 Device Plans
          {
            "@type": "Offer",
            "name": "1 Device - 1 Month",
            "price": "14.99",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `1 maand ${CONSTANTS.FOCUS_KEYWORD} toegang op 1 apparaat met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "1 Device - 3 Months",
            "price": "34.99",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `3 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 1 apparaat met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "1 Device - 6 Months",
            "price": "54.99",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `6 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 1 apparaat met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "1 Device - 12 Months",
            "price": "74.99",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `12 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 1 apparaat met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },

          // 2 Devices Plans (Multi-Room)
          {
            "@type": "Offer",
            "name": "2 Devices - 1 Month",
            "price": "22.99",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `1 maand ${CONSTANTS.FOCUS_KEYWORD} toegang op 2 apparaten met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "2 Devices - 3 Months",
            "price": "49.99",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `3 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 2 apparaten met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "2 Devices - 6 Months",
            "price": "79.99",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `6 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 2 apparaten met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "2 Devices - 12 Months",
            "price": "109.99",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `12 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 2 apparaten met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },

          // 3 Devices Plans
          {
            "@type": "Offer",
            "name": "3 Devices - 3 Months",
            "price": "65.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `3 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 3 apparaten met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "3 Devices - 6 Months",
            "price": "105.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `6 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 3 apparaten met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
          },
          {
            "@type": "Offer",
            "name": "3 Devices - 12 Months",
            "price": "145.00",
            "priceCurrency": "EUR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/OnlineOnly",
            "url": `https://${CONSTANTS.DOMAIN}/pakketten`,
            "description": `12 maanden ${CONSTANTS.FOCUS_KEYWORD} toegang op 3 apparaten met 20.000+ live zenders en 60.000+ VODs`,
            "shippingDetails": {
              "@type": "OfferShippingDetails",
              "shippingRate": {
                "@type": "MonetaryAmount",
                "value": "0",
                "currency": "EUR"
              },
              "deliveryTime": {
                "@type": "ShippingDeliveryTime",
                "handlingTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 1,
                  "unitCode": "h"
                },
                "transitTime": {
                  "@type": "QuantitativeValue",
                  "minValue": 0,
                  "maxValue": 0,
                  "unitCode": "h"
                }
              }
            },
            "hasMerchantReturnPolicy": {
              "@type": "MerchantReturnPolicy",
              "applicableCountry": "NL",
              "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
              "merchantReturnDays": 7,
              "returnMethod": "https://schema.org/ReturnByMail",
              "returnFees": "https://schema.org/FreeReturn"
            }
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
            "name": `Welke betaalmethoden accepteert ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} accepteert iDEAL, Bancontact, alle grote creditcards (Visa, Mastercard, American Express), PayPal en cryptovaluta (Bitcoin, Ethereum, USDT) via een beveiligde SSL-verbinding.`
            }
          },
          {
            "@type": "Question",
            "name": `Kan ik mijn ${CONSTANTS.FOCUS_KEYWORD} pakket later upgraden of aanpassen?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Ja, u kunt uw ${CONSTANTS.FOCUS_KEYWORD} pakket op elk moment upgraden naar meerdere schermen of een langere periode. Neem contact op met onze WhatsApp helpdesk en wij passen uw account direct aan.`
            }
          },
          {
            "@type": "Question",
            "name": `Zit ik vast aan een contract bij ${CONSTANTS.FOCUS_KEYWORD}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Nee, er zijn geen contracten of automatische verlengingen bij ${CONSTANTS.FOCUS_KEYWORD}. Alle abonnementen zijn eenmalig prepaid en stoppen vanzelf zonder verborgen kosten of administratiekosten.`
            }
          },
          {
            "@type": "Question",
            "name": `Biedt ${CONSTANTS.FOCUS_KEYWORD} een terugbetalingsgarantie?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Ja, ${CONSTANTS.FOCUS_KEYWORD} biedt een 7 dagen niet-goed-geld-terug-garantie op alle pakketten. Mocht u aanhoudende serverproblemen ervaren die onze helpdesk niet kan oplossen, dan ontvangt u een volledige terugbetaling.`
            }
          },
          {
            "@type": "Question",
            "name": `Kan ik ${CONSTANTS.FOCUS_KEYWORD} op meerdere apparaten tegelijk gebruiken?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Ja, afhankelijk van uw gekozen ${CONSTANTS.FOCUS_KEYWORD} pakket. Het 1-scherm pakket ondersteunt 1 gelijktijdige stream, het 2-schermen pakket ondersteunt 2 gelijktijdige streams, en het 3-schermen pakket ondersteunt 3 schermen tegelijk.`
            }
          },
          {
            "@type": "Question",
            "name": `Wat is het verschil tussen de ${CONSTANTS.FOCUS_KEYWORD} pakketten?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Alle ${CONSTANTS.FOCUS_KEYWORD} pakketten bevatten hetzelfde volledige aanbod van 20.000+ zenders en 60.000+ VODs in 4K & 60FPS. Het enige verschil is de geldigheidsduur (1, 3, 6 of 12 maanden) en het aantal gelijktijdige schermen.`
            }
          },
          {
            "@type": "Question",
            "name": `Waar kan ik reviews over ${CONSTANTS.FOCUS_KEYWORD} vinden?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `U kunt echte reviews en ervaringen over ${CONSTANTS.FOCUS_KEYWORD} lezen op onze officiële reviewspagina (/ervaringen) en op onze sociale mediakanalen.`
            }
          },
          {
            "@type": "Question",
            "name": `Is ${CONSTANTS.FOCUS_KEYWORD} de beste IPTV provider van 2026?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `${CONSTANTS.FOCUS_KEYWORD} wordt beoordeeld met 4.9/5 sterren door meer dan 5.000 actieve gebruikers in Nederland en België dankzij onze anti-freeze technologie, 60FPS sportstreams en 24/7 WhatsApp ondersteuning.`
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
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "url": `https://${CONSTANTS.DOMAIN}`,
        "logo": `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        "image": `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        "description": `Premium IPTV streamingprovider in Nederland en België met flexibele pakketten vanaf €14,99 voor 1 maand. ${CONSTANTS.FOCUS_KEYWORD} is de toonaangevende IPTV provider van 2026.`,
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["Dutch", "English"],
          "contactOption": "TollFree",
        },
        "sameAs": [
          "https://twitter.com/realmiptv",
          "https://facebook.com/realmiptv",
          "https://instagram.com/realmiptv",
          "https://t.me/realmiptv",
          "https://reddit.com/r/realmiptv",
        ],
      }),
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
        "alternateName": CONSTANTS.FOCUS_KEYWORD,
        "url": `https://${CONSTANTS.DOMAIN}`,
        "description": `${CONSTANTS.FOCUS_KEYWORD} - Beste IPTV abonnementen vanaf €14,99. Bekijk onze ${CONSTANTS.FOCUS_KEYWORD} reviews en installatiehandleidingen.`,
        "potentialAction": {
          "@type": "SearchAction",
          "target": `https://${CONSTANTS.DOMAIN}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }),
    }}
  />
);

// WebPage Schema for better image display
const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `${CONSTANTS.FOCUS_KEYWORD} - Tarieven & Pakketten | Officiële Website`,
        "description": `Kies uw ${CONSTANTS.FOCUS_KEYWORD} abonnement vanaf €14,99. 20.000+ zenders, 60.000+ VODs, 4K kwaliteit. Officiële website.`,
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

// Article Schema for search visibility
const ArticleSchema = () => (
  <script
    type="application/ld+json"
    id="article-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${CONSTANTS.FOCUS_KEYWORD} - Beste IPTV Pakketten 2026 - 4K Streaming | Officiële Website`,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* JSON-LD Schemas */}
      <OrganizationSchema />
      <WebsiteSchema />
      <WebPageSchema />
      <ArticleSchema />
      <PricingPageSchema />
      <PricingFAQSchema />
      {children}
    </>
  );
}