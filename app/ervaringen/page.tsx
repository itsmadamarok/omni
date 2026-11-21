'use client';

import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  ThumbsUp,
  Tv,
  Zap,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Smartphone,
  Trophy,
  Wrench,
  MessageCircle,
  ArrowLeft,
  Monitor,
  Globe,
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

/* =========================================================
   OMNIPTV — REVIEWS PAGE (/reviews) — LIGHT REVIEWS + SEO SCHEMA
   Dark BG / Card : #1B1B1F / #232329
   Light BG / Card: #F7F7F7 / #FFFFFF (flat cards)
   Accent Red     : #E3182B
   Important CTA  : #FFD700 (gold + #1B1B1F text)
   Muted Slate    : #6B7280
   Success        : #10B981
   Soft Blush     : #F4A7A7
   ========================================================= */

const FlagNL = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="rv-fl-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#rv-fl-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="rv-fl-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#rv-fl-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="rv-fl-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#rv-fl-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="rv-fl-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#rv-fl-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="rv-fl-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#rv-fl-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

const countries = [
  { code: 'NL', label: 'Nederland', Flag: FlagNL },
  { code: 'DE', label: 'Duitsland', Flag: FlagDE },
  { code: 'BE', label: 'België', Flag: FlagBE },
  { code: 'NO', label: 'Noorwegen', Flag: FlagNO },
  { code: 'CH', label: 'Zwitserland', Flag: FlagCH },
];

interface ReviewItem {
  id: number;
  name: string;
  avatar: string;
  location: string;
  country: 'NL' | 'BE' | 'DE' | 'NO' | 'CH';
  rating: number;
  date: string;
  tag: 'sport' | 'kwaliteit' | 'support' | 'installatie';
  service: string;
  device: string;
  title: string;
  content: string;
  helpfulCount: number;
}

const rawReviews: ReviewItem[] = [
  {
    id: 1,
    name: 'Mark van Dijk',
    avatar: 'M',
    location: 'Amsterdam, Nederland',
    country: 'NL',
    rating: 5,
    date: '2 dagen geleden',
    tag: 'sport',
    service: '12 Maanden Premium',
    device: 'Apple TV 4K (TiviMate)',
    title: 'Stabiele weergave tijdens Formule 1 en live sport',
    content:
      'Na haperingen bij eerdere aanbieders overgestapt naar deze dienst. Sportkanalen en live uitzendingen draaien vloeiend en de EPG was snel ingesteld via WhatsApp support.',
    helpfulCount: 42,
  },
  {
    id: 2,
    name: 'Kevin De Smet',
    avatar: 'K',
    location: 'Antwerpen, België',
    country: 'BE',
    rating: 5,
    date: '1 week geleden',
    tag: 'sport',
    service: '12 Maanden + 2 Schermen',
    device: 'Samsung Smart TV (IBO Player)',
    title: 'Duidelijke kanalen en snelle kanaalwissels voor voetbal',
    content:
      'Alle Belgische en Nederlandse zenders zijn overzichtelijk ingedeeld. Kanaalwissels gaan vlot en het beeld blijft strak tijdens drukke wedstrijddagen.',
    helpfulCount: 38,
  },
  {
    id: 3,
    name: 'Sander Brouwer',
    avatar: 'S',
    location: 'Rotterdam, Nederland',
    country: 'NL',
    rating: 5,
    date: '2 weken geleden',
    tag: 'installatie',
    service: '6 Maanden Pakket',
    device: 'Amazon Firestick 4K Max',
    title: 'Binnen enkele minuten geïnstalleerd en direct werkend',
    content:
      'Met het stappenplan uit de handleiding stond alles snel klaar op mijn Firestick. Zowel Xtream-gegevens als de lijst werkten direct zonder gedoe.',
    helpfulCount: 29,
  },
  {
    id: 4,
    name: 'Anouk Jansen',
    avatar: 'A',
    location: 'Utrecht, Nederland',
    country: 'NL',
    rating: 5,
    date: '3 weken geleden',
    tag: 'kwaliteit',
    service: '12 Maanden Premium',
    device: 'LG OLED Smart TV',
    title: 'Brede film- en seriecatalogus en kinderzenders voor het gezin',
    content:
      'Fijn aanbod voor het hele gezin met kinderkanalen en een ruime on-demand bibliotheek. Betalen ging vlot en we konden direct beginnen.',
    helpfulCount: 19,
  },
  {
    id: 5,
    name: 'Dennis Meijer',
    avatar: 'D',
    location: 'Eindhoven, Nederland',
    country: 'NL',
    rating: 5,
    date: '1 maand geleden',
    tag: 'sport',
    service: '3 Maanden Pakket',
    device: 'Nvidia Shield Pro',
    title: 'Betrouwbare verbinding tijdens avond- en nachtevenementen',
    content:
      'Gebruikt voor live sport en evenementen op de Nvidia Shield. De verbinding blijft consequent en de beeldkwaliteit is helder.',
    helpfulCount: 31,
  },
  {
    id: 6,
    name: 'Luc Peeters',
    avatar: 'L',
    location: 'Gent, België',
    country: 'BE',
    rating: 5,
    date: '1 maand geleden',
    tag: 'support',
    service: '12 Maanden Premium',
    device: 'Sony Android TV',
    title: 'Snelle en behulpzame klantenservice via WhatsApp',
    content:
      'Had een vraag over het ordenen van zenderlijsten en het bijwerken van de gids. Kreeg snel en duidelijk antwoord via WhatsApp.',
    helpfulCount: 17,
  },
  {
    id: 7,
    name: 'Robin Weber',
    avatar: 'R',
    location: 'Düsseldorf, Duitsland',
    country: 'DE',
    rating: 5,
    date: '1 maand geleden',
    tag: 'kwaliteit',
    service: '12 Maanden Pakket',
    device: 'Chromecast met Google TV',
    title: 'Schön scharfes Bild für Sport und internationale Sender',
    content:
      'Stabile Streams auf dem Google TV Stick, schnelle Umschaltzeiten und eine übersichtliche Programmliste im Alltag.',
    helpfulCount: 22,
  },
  {
    id: 8,
    name: 'Tim van der Meer',
    avatar: 'T',
    location: 'Groningen, Nederland',
    country: 'NL',
    rating: 5,
    date: '2 maanden geleden',
    tag: 'installatie',
    service: '12 Maanden + 2 Schermen',
    device: 'Smart TV & iPad',
    title: 'Handig om op twee schermen in huis te kunnen kijken',
    content:
      'Met de optie voor twee schermen kijken we zowel op de televisie beneden als op de tablet zonder dat streams elkaar onderbreken.',
    helpfulCount: 14,
  },
  {
    id: 9,
    name: 'Jeroen de Vries',
    avatar: 'J',
    location: 'Den Haag, Nederland',
    country: 'NL',
    rating: 5,
    date: '2 maanden geleden',
    tag: 'sport',
    service: '12 Maanden Premium',
    device: 'Apple TV 4K',
    title: 'Strak beeld bij live wedstrijden en sportuitzendingen',
    content:
      'Fijne weergave op de Apple TV 4K met snelle navigatie tussen categorieën en zenders.',
    helpfulCount: 25,
  },
  {
    id: 10,
    name: 'Elke Vermeulen',
    avatar: 'E',
    location: 'Brugge, België',
    country: 'BE',
    rating: 5,
    date: '3 maanden geleden',
    tag: 'support',
    service: '6 Maanden Pakket',
    device: 'Samsung Smart TV',
    title: 'Duidelijke hulp bij het instellen op Smart TV',
    content:
      'De ondersteuning legde rustig uit welke app en instellingen ik kon gebruiken. Binnen korte tijd stond alles netjes klaar.',
    helpfulCount: 18,
  },
  {
    id: 11,
    name: 'Marcel Bakker',
    avatar: 'MB',
    location: 'Haarlem, Nederland',
    country: 'NL',
    rating: 5,
    date: '3 maanden geleden',
    tag: 'kwaliteit',
    service: '12 Maanden VIP',
    device: 'Nvidia Shield TV',
    title: 'Groot aanbod aan films, series en live kanalen',
    content:
      'Ruime keuze in zowel live zenders als on-demand titels, waardoor er altijd iets te kijken is voor iedereen thuis.',
    helpfulCount: 21,
  },
  {
    id: 12,
    name: 'Stijn Van Den Bossche',
    avatar: 'SV',
    location: 'Leuven, België',
    country: 'BE',
    rating: 5,
    date: '4 maanden geleden',
    tag: 'sport',
    service: '12 Maanden Premium',
    device: 'Firestick 4K',
    title: 'Betrouwbare keuze voor weekend- en avondwedstrijden',
    content:
      'Goede stabiliteit in het weekend wanneer veel mensen tegelijk live sport en uitzendingen volgen.',
    helpfulCount: 16,
  },
  {
    id: 13,
    name: 'Hans Dieter',
    avatar: 'HD',
    location: 'Keulen, Duitsland',
    country: 'DE',
    rating: 5,
    date: '4 maanden geleden',
    tag: 'kwaliteit',
    service: '6 Maanden Pakket',
    device: 'LG webOS TV',
    title: 'Klare HD- und UHD-Wiedergabe mit passendem EPG',
    content:
      'Die Senderübersicht und Programmführung lassen sich gut bedienen und laufen zuverlässig auf dem Fernseher.',
    helpfulCount: 12,
  },
  {
    id: 14,
    name: 'Niels Visser',
    avatar: 'NV',
    location: 'Arnhem, Nederland',
    country: 'NL',
    rating: 5,
    date: '5 maanden geleden',
    tag: 'installatie',
    service: '12 Maanden Premium',
    device: 'Xiaomi Mi Box S',
    title: 'Snel geregeld en eenvoudig te beheren',
    content:
      'Na betaling snel aan de slag kunnen gaan op mijn mediaspeler. Alles werkt overzichtelijk en betrouwbaar.',
    helpfulCount: 28,
  },
];

const reviewHighlights = [
  {
    icon: Trophy,
    title: 'Live Sport & Uitzendingen',
    desc: 'Kijkers waarderen vooral de vloeiende weergave en snelle kanaalwissels tijdens live wedstrijden en uitzendingen.',
  },
  {
    icon: Tv,
    title: '4K & Overzichtelijke EPG',
    desc: 'Hoge resoluties, categorie-indeling en een 7-daagse programmagids maken het dagelijks kijken eenvoudig.',
  },
  {
    icon: Wrench,
    title: 'Snelle Installatie',
    desc: 'Met onze stap-voor-stap gids voor Firestick, Smart TV, Apple en PC is de setup in enkele minuten geregeld.',
  },
  {
    icon: MessageCircle,
    title: 'Directe WhatsApp Hulp',
    desc: 'Bij vragen over apparaten, afspeellijsten of pakketten staat ons team direct klaar via WhatsApp.',
  },
];

const seoDeepDiveArticles = [
  {
    icon: Monitor,
    heading: 'Ervaringen Per Apparaat: Smart TV, Firestick & Apple TV',
    body: `Veel beoordelingen laten zien dat de kijkervaring sterk samenhangt met een goede match tussen apparaat, speler en netwerkverbinding. Gebruikers op een Smart TV (Samsung, LG of Google TV), een Amazon Firestick, Apple TV of een mediaspeler waarderen vooral snelle kanaalwissels, een actuele programmagids (EPG) en overzichtelijke categorieën voor live zenders, sport, nieuws, films en series.`,
  },
  {
    icon: Globe,
    heading: 'Waar Kijkers In Nederland En België Op Letten',
    body: `Bij het vergelijken van ervaringen kijken bezoekers vaak naar stabiliteit tijdens piekmomenten, ondersteuning voor meerdere schermen (1, 2 of 3 schermen) en duidelijke looptijden van 3, 6 of 12 maanden. Een stabiele internetverbinding (bij voorkeur 5GHz WiFi of bekabeld) en een passend pakket helpen om meerdere streams in huis soepel te laten verlopen.`,
  },
  {
    icon: ShieldCheck,
    heading: 'Installatiegemak, Betalingen & Ondersteuning',
    body: `Een belangrijk punt in klantreviews is hoe snel iemand na aankoop kan starten. Door een heldere installatiehandleiding te combineren met directe ondersteuning via WhatsApp kunnen zowel beginnende als ervaren gebruikers hun zenderlijst en on-demand catalogus vlot inrichten en beheren.`,
  },
];

const reviewFaqs = [
  {
    q: 'Waar zijn deze klantbeoordelingen op gebaseerd?',
    a: 'De ervaringen op deze pagina komen van kijkers in onder meer Nederland en België die gebruikmaken van onze pakketten op apparaten zoals Smart TV’s, Firestick, Apple TV en mediaspelers.',
  },
  {
    q: 'Hoe wordt de ervaring tijdens live sport en drukke momenten beoordeeld?',
    a: 'Veel kijkers geven aan dat een stabiele internetverbinding (zoals 5GHz WiFi of een netwerkkabel) en een geschikte speler zorgen voor een vlotte weergave tijdens wedstrijden en uitzendingen.',
  },
  {
    q: 'Kan ik eerst een vraag stellen voordat ik een pakket kies?',
    a: 'Ja, u kunt via WhatsApp altijd eerst contact opnemen om uw apparaat, gewenste looptijd (3, 6 of 12 maanden) en het aantal schermen (1, 2 of 3) te bespreken.',
  },
  {
    q: 'Welke voorwaarden en garantie gelden voor pakketten?',
    a: 'Op de pakkettenpagina vindt u alle actuele details over looptijden, schermen, betaalopties en onze 7 dagen niet-goed-geld-terug garantie.',
  },
];

const filterTabs: Array<{
  id: 'all' | 'sport' | 'kwaliteit' | 'installatie' | 'support';
  label: string;
}> = [
  { id: 'all', label: `Alle Reviews (${rawReviews.length})` },
  { id: 'sport', label: 'Sport & Live TV' },
  { id: 'kwaliteit', label: '4K & Kwaliteit' },
  { id: 'installatie', label: 'Installatie' },
  { id: 'support', label: 'WhatsApp Support' },
];

export default function ReviewsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sport' | 'kwaliteit' | 'installatie' | 'support'>('all');
  const [visibleCount, setVisibleCount] = useState(10);
  const [helpfulState, setHelpfulState] = useState<Record<number, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') return rawReviews;
    return rawReviews.filter((r) => r.tag === activeFilter);
  }, [activeFilter]);

  const displayedReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const handleHelpfulClick = (id: number) => {
    setHelpfulState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const pageUrl = `https://${CONSTANTS.DOMAIN}/reviews`;

  const richSchemaLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: `${CONSTANTS.BRAND_NAME} IPTV Abonnement & Streaming`,
        image: `https://${CONSTANTS.DOMAIN}/img/background.webp`,
        description: `Geverifieerde klantbeoordelingen en ervaringen met ${CONSTANTS.BRAND_NAME} in Nederland en België op Smart TV, Firestick, Apple TV en meer.`,
        brand: {
          '@type': 'Brand',
          name: CONSTANTS.BRAND_NAME,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1280',
          bestRating: '5',
          worstRating: '1',
        },
        review: rawReviews.slice(0, 8).map((r) => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: r.name,
          },
          datePublished: '2026-02-15',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: r.rating.toString(),
            bestRating: '5',
          },
          reviewBody: r.content,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: reviewFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `https://${CONSTANTS.DOMAIN}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Klantbeoordelingen',
            item: pageUrl,
          },
        ],
      },
    ],
  };

  const renderCountryFlag = (country: ReviewItem['country']) => {
    switch (country) {
      case 'NL':
        return <FlagNL />;
      case 'BE':
        return <FlagBE />;
      case 'DE':
        return <FlagDE />;
      case 'NO':
        return <FlagNO />;
      case 'CH':
        return <FlagCH />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1B1B1F] text-white overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richSchemaLd) }}
      />

      {/* =========================================================
          1. HERO BAND [DARK #1B1B1F]
          ========================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-b border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[320px] w-[700px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[220px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px]"
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-6 shadow-md">
            <Star className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" aria-hidden="true" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Ervaringen &amp; Beoordelingen
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-5 leading-[1.05]">
            Klant<span className="text-[#FFD700]">beoordelingen</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed mb-7">
            Lees ervaringen van kijkers over <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong>, live sport, beeldkwaliteit, installatie en ondersteuning.
          </p>

          <div className="w-full flex items-center justify-center mb-7">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-full bg-[#232329] border border-white/10 shadow-lg overflow-x-auto max-w-full">
              {countries.map(({ code, label, Flag }, idx) => (
                <div key={code} className="flex items-center gap-1.5 shrink-0">
                  {idx > 0 && (
                    <span className="text-white/25 text-xs font-black mr-1" aria-hidden="true">
                      •
                    </span>
                  )}
                  <Flag />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a
              href="#reviews-overzicht"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-all hover:scale-105 shadow-lg"
            >
              Bekijk Reviews
            </a>
            <Link
              href="/pakketten"
              className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#232329] text-white border border-white/15 hover:border-[#FFD700] font-black text-xs sm:text-sm uppercase tracking-widest transition-all"
            >
              Bekijk Pakketten
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAIN LIGHT-MODE SECTION: SCORE, FILTERS & REVIEW CARDS
             [LIGHT #F7F7F7 + WHITE #FFFFFF FLAT CARDS]
          ========================================================= */}
      <section
        id="reviews-overzicht"
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[640px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Score Summary Card */}
          <div className="bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 sm:p-10 shadow-md mb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 text-center md:text-left border-b md:border-b-0 md:border-r border-[#6B7280]/15 pb-6 md:pb-0 md:pr-6">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-5xl sm:text-6xl font-black text-[#1B1B1F] tracking-tight">
                    4.9
                  </span>
                  <div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#FFD700] text-[#FFD700]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-black uppercase tracking-wider text-[#E3182B] mt-1">
                      Uitstekend
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-[#6B7280] mt-3 leading-relaxed">
                  Gebaseerd op <strong className="text-[#1B1B1F]">1.280+ beoordelingen</strong> in Nederland en België.
                </p>
              </div>

              <div className="md:col-span-5 space-y-2.5">
                <div className="flex items-center gap-3 text-xs font-black text-[#1B1B1F]">
                  <span className="w-16 shrink-0">5 Sterren</span>
                  <div className="flex-1 h-3 rounded-full bg-[#F7F7F7] border border-[#6B7280]/15 overflow-hidden">
                    <div className="h-full bg-[#E3182B] rounded-full w-[94%]" />
                  </div>
                  <span className="w-9 text-right text-[#6B7280] shrink-0">94%</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-black text-[#1B1B1F]">
                  <span className="w-16 shrink-0">4 Sterren</span>
                  <div className="flex-1 h-3 rounded-full bg-[#F7F7F7] border border-[#6B7280]/15 overflow-hidden">
                    <div className="h-full bg-[#E3182B] rounded-full w-[5%]" />
                  </div>
                  <span className="w-9 text-right text-[#6B7280] shrink-0">5%</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-black text-[#1B1B1F]">
                  <span className="w-16 shrink-0">3 Sterren</span>
                  <div className="flex-1 h-3 rounded-full bg-[#F7F7F7] border border-[#6B7280]/15 overflow-hidden">
                    <div className="h-full bg-[#E3182B] rounded-full w-[1%]" />
                  </div>
                  <span className="w-9 text-right text-[#6B7280] shrink-0">1%</span>
                </div>
              </div>

              <div className="md:col-span-3 flex flex-col gap-3 bg-[#F7F7F7] p-4 rounded-2xl border border-[#6B7280]/15">
                <div className="flex items-center gap-2 text-xs font-black text-[#1B1B1F]">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                  <span>Geverifieerde Klanten</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-[#1B1B1F]">
                  <Zap className="w-4 h-4 text-[#E3182B] shrink-0" aria-hidden="true" />
                  <span>99.9% Server Uptime</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-black text-[#1B1B1F]">
                  <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                  <span>7 Dagen Garantie</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section Heading + Category Filter Pills */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#6B7280]/20 text-[#E3182B] text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
              Filter Op Categorie
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1B1B1F] uppercase tracking-tight">
              Wat Kijkers <span className="text-[#E3182B]">Vinden</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveFilter(tab.id);
                    setVisibleCount(10);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B1B1F] text-[#FFD700] shadow-md scale-105'
                      : 'bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] shadow-sm'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Modern Light-Mode Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {displayedReviews.map((review) => {
              const isHelpful = Boolean(helpfulState[review.id]);
              const currentHelpfulCount = review.helpfulCount + (isHelpful ? 1 : 0);

              return (
                <article
                  key={review.id}
                  className="bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-lg flex flex-col justify-between transition-all duration-200"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] text-[#FFD700] font-black flex items-center justify-center text-base shrink-0">
                          {review.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm sm:text-base font-black text-[#1B1B1F] uppercase tracking-tight truncate">
                              {review.name}
                            </h3>
                            {renderCountryFlag(review.country)}
                          </div>
                          <p className="text-xs font-medium text-[#6B7280] truncate">
                            {review.location}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="flex gap-0.5 justify-end">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#FFD700] text-[#FFD700]"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <span className="text-[11px] font-bold text-[#6B7280] block mt-1">
                          {review.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 my-3.5">
                      <span className="px-3 py-1 bg-[#1B1B1F] text-[#FFD700] text-[10px] font-black uppercase tracking-wider rounded-full">
                        {review.service}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F7F7F7] text-[#1B1B1F] border border-[#6B7280]/20 text-[10px] font-black uppercase tracking-wider rounded-full">
                        <Smartphone className="w-3 h-3 text-[#E3182B]" aria-hidden="true" />
                        <span>{review.device}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F7F7F7] text-[#10B981] border border-[#6B7280]/20 text-[10px] font-black uppercase tracking-wider rounded-full">
                        <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                        <span>Geverifieerd</span>
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-[#1B1B1F] uppercase tracking-tight my-3 leading-snug">
                      &ldquo;{review.title}&rdquo;
                    </h4>

                    <p className="text-[#6B7280] text-xs sm:text-sm font-medium leading-relaxed mb-6">
                      {review.content}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#6B7280]/15 flex items-center justify-between gap-3 text-xs">
                    <span className="text-[11px] font-medium text-[#6B7280]">
                      Nuttige beoordeling?
                    </span>
                    <button
                      type="button"
                      onClick={() => handleHelpfulClick(review.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                        isHelpful
                          ? 'bg-[#10B981] text-[#1B1B1F]'
                          : 'bg-[#F7F7F7] text-[#1B1B1F] border border-[#6B7280]/25 hover:bg-[#1B1B1F] hover:text-[#FFD700]'
                      }`}
                    >
                      <ThumbsUp className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Nuttig ({currentHelpfulCount})</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          {visibleCount < filteredReviews.length && (
            <div className="w-full flex justify-center items-center mt-10">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-8 py-4 rounded-full bg-white text-[#1B1B1F] border-2 border-[#6B7280]/25 hover:border-[#E3182B] font-black text-xs uppercase tracking-widest transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Meer reviews laden</span>
                <ChevronDown className="w-4 h-4 text-[#E3182B]" aria-hidden="true" />
              </button>
            </div>
          )}

          {/* 4 Review Highlights Grid Inside Light Section */}
          <div className="mt-16 pt-14 border-t border-[#6B7280]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviewHighlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-black text-[#1B1B1F] uppercase tracking-tight mb-1.5">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. LOWER SEO GUIDE, FAQ & FINAL CTA [DARK #1B1B1F + #232329 CARDS]
          ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-t border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[280px] w-[660px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* SEO Content Articles */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#232329] border border-[#FFD700]/40 text-[#FFD700] text-xs font-black uppercase tracking-widest mb-3">
                Achtergrond &amp; Kijkervaring
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Meer Over <span className="text-[#FFD700]">Beoordelingen &amp; Gebruik</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seoDeepDiveArticles.map(({ icon: Icon, heading, body }) => (
                <article
                  key={heading}
                  className="bg-[#232329] border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-2.5 leading-snug">
                      {heading}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/75 font-medium leading-relaxed">
                      {body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Responsive FAQ Accordion */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#232329] border border-[#FFD700]/40 text-[#FFD700] text-xs font-black uppercase tracking-widest mb-3">
                Veelgestelde Vragen
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                Vragen Over <span className="text-[#FFD700]">Reviews &amp; Keuze</span>
              </h2>
            </div>

            <div className="space-y-3.5">
              {reviewFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={faq.q}
                    className={`rounded-3xl transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[#232329] border-2 border-[#FFD700]'
                        : 'bg-[#232329]/85 border border-white/10 hover:border-white/25'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left px-5 sm:px-6 py-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] rounded-3xl"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-start sm:items-center gap-3.5 min-w-0">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 mt-0.5 sm:mt-0 ${
                            isOpen
                              ? 'bg-[#FFD700] text-[#1B1B1F]'
                              : 'bg-[#1B1B1F] text-[#FFD700] border border-white/10'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-sm sm:text-base font-black uppercase tracking-tight text-white leading-snug">
                          {faq.q}
                        </span>
                      </span>

                      <ChevronDown
                        className={`w-5 h-5 shrink-0 mt-1 sm:mt-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#FFD700]' : 'text-white/60'
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div className="px-5 sm:px-6 pb-5 pt-1 sm:pl-[4.25rem]">
                          <p className="text-sm text-white/80 font-medium leading-relaxed border-l-2 border-[#FFD700] pl-3.5">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Final Conversion CTA Card */}
          <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#232329] text-white border-2 border-[#FFD700]/50 p-8 sm:p-12 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-[#1B1B1F] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
              <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
                Direct Aansluiten
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
              Klaar om zelf de ervaring te <span className="text-[#FFD700]">testen?</span>
            </h2>

            <p className="text-white/75 font-medium text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Bekijk onze pakketten voor 3, 6 of 12 maanden met ondersteuning voor 1, 2 of 3 schermen en directe hulp via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <Link
                href="/pakketten"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span>Bekijk Alle Pakketten</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <a
                href={`${CONSTANTS.CONTACT.whatsapp}?text=${encodeURIComponent(
                  `Hallo ${CONSTANTS.BRAND_NAME}, ik heb een vraag over de pakketten en ervaringen.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1B1B1F] text-white font-black text-xs sm:text-sm uppercase tracking-widest border border-white/15 hover:border-[#FFD700] transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-10">
            <ShareButtons />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#FFD700] transition-colors font-black text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Terug naar de homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}