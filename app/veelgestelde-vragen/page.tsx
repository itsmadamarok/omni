'use client';

import { useState, useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import {
  HelpCircle,
  Tv,
  Zap,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Search,
  ChevronDown,
  ArrowRight,
  LifeBuoy,
  Wrench,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Wifi,
  Globe,
  ArrowLeft,
} from 'lucide-react';
import ShareButtons from '../components/ShareButtons';

/* =========================================================
   OMNIPTV — FAQ PAGE (/faq) — LIGHT FAQ + SEO CONTENT
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
    <clipPath id="fq-fl-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="fq-fl-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="fq-fl-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="fq-fl-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="fq-fl-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#fq-fl-ch)">
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

interface FAQItem {
  id: string;
  category: 'algemeen' | 'sport' | 'apparaten' | 'betaling';
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  // 1. Algemeen & Service
  {
    id: 'alg-1',
    category: 'algemeen',
    q: 'Wat is IPTV en hoe verschilt dit van traditionele kabeltelevisie?',
    a: 'IPTV staat voor Internet Protocol Television. In plaats van een coaxkabel, glasvezelontvanger of schotelantenne van traditionele kabelaanbieders worden de televisiesignalen rechtstreeks via het internet gestreamd. Hierdoor heeft u geen fysieke tv-ontvanger of kabels meer nodig en kunt u met een stabiele internetverbinding duizenden zenders bekijken in Full HD en 4K.',
  },
  {
    id: 'alg-2',
    category: 'algemeen',
    q: 'Hoe snel na de betaling ontvang ik mijn inloggegevens?',
    a: 'Uw gegevens worden na afronding van de betaling vlot verwerkt en verzonden zodat u snel kunt starten met het instellen van uw afspeellijst of Xtream Codes in uw gekozen speler.',
  },
  {
    id: 'alg-3',
    category: 'algemeen',
    q: 'Kan ik op meerdere televisies of schermen tegelijk kijken?',
    a: 'U kunt de app op meerdere apparaten installeren. Het aantal schermen dat u tegelijkertijd kunt gebruiken hangt af van uw gekozen pakket (1, 2 of 3 schermen). Zo kijkt u in huis zonder onderbrekingen.',
  },
  {
    id: 'alg-4',
    category: 'algemeen',
    q: 'Hoe werkt de 7 dagen niet-goed-geld-terug-garantie?',
    a: 'Wij streven naar een betrouwbare kijkervaring. Mocht u binnen 7 kalenderdagen na aankoop problemen ervaren die onze ondersteuning niet kan oplossen, neem dan contact op voor de voorwaarden van onze geld-terug-garantie.',
  },
  {
    id: 'alg-5',
    category: 'algemeen',
    q: 'Zit ik vast aan een stilzwijgende verlenging of abonnement?',
    a: 'Nee. U kiest een vooraf bepaalde looptijd (zoals 3, 6 of 12 maanden) zonder verplichte stilzwijgende verlenging. U bepaalt zelf wanneer en of u verlengt.',
  },
  {
    id: 'alg-6',
    category: 'algemeen',
    q: 'Kan ik eerst contact opnemen om mijn situatie te bespreken?',
    a: 'Ja! U kunt altijd vooraf contact opnemen via WhatsApp om uw apparaat, gewenste looptijd en het aantal schermen te bespreken zodat u het juiste pakket kiest.',
  },

  // 2. Sport & Zenders
  {
    id: 'sport-1',
    category: 'sport',
    q: 'Welke sport- en televisiezenders zijn onderdeel van het aanbod?',
    a: 'Ons aanbod omvat nationale en internationale zenders voor live sport, voetbal, motorsport, nieuws en entertainment, inclusief zenderlijsten voor Nederland, België en andere landen.',
  },
  {
    id: 'sport-2',
    category: 'sport',
    q: 'Zijn speciale sportevenementen of gevechten inbegrepen?',
    a: 'Geselecteerde sportkanalen en evenementen maken onderdeel uit van het beschikbare aanbod binnen uw gekozen pakket en speler.',
  },
  {
    id: 'sport-3',
    category: 'sport',
    q: 'Zijn er films, series en kinderzenders beschikbaar?',
    a: 'Ja, naast live televisiezenders is er een uitgebreide catalogus met films, series en kindercontent beschikbaar via ondersteunde spelers.',
  },
  {
    id: 'sport-4',
    category: 'sport',
    q: 'Werkt de Elektronische Programmagids (EPG)?',
    a: 'Ja, ondersteunde spelers laden de EPG-programmagids automatisch of op verzoek in zodat u kunt zien wat er nu en later op de dag wordt uitgezonden.',
  },
  {
    id: 'sport-5',
    category: 'sport',
    q: 'Kan ik zenderlijsten ordenen of categorieën verbergen?',
    a: 'Ja, in de meeste IPTV-spelers kunt u favorieten aanmaken en categorieën of landengroepen tonen of verbergen voor een overzichtelijke lijst.',
  },
  {
    id: 'sport-6',
    category: 'sport',
    q: 'Hoe zit het met de beeldkwaliteit tijdens drukke uitzendingen?',
    a: 'De weergavekwaliteit hangt af van de bronstream, uw apparaat en uw internetsnelheid. Met een stabiele verbinding (zoals 5GHz WiFi of een netwerkkabel) is de weergave het meest constant.',
  },

  // 3. Apparaten & Installatie
  {
    id: 'app-1',
    category: 'apparaten',
    q: 'Op welke televisies en apparaten kan ik IPTV installeren?',
    a: 'U kunt de dienst gebruiken op Smart TV’s (Samsung, LG, Android TV / Google TV), Amazon Firestick, Apple TV, iPhone, iPad, Android-apparaten, mediaspelers en computers (Windows en Mac).',
  },
  {
    id: 'app-2',
    category: 'apparaten',
    q: 'Welke IPTV applicaties worden vaak gebruikt?',
    a: 'Afhankelijk van uw apparaat worden spelers gebruikt zoals TiviMate, IPTV Smarters Pro, IBO Player, IPTVX en VLC Media Player op desktop.',
  },
  {
    id: 'app-3',
    category: 'apparaten',
    q: 'Welke minimale downloadsnelheid heb ik nodig voor HD en 4K?',
    a: 'Voor Full HD 1080p adviseren wij minimaal 15 Mbps en voor 4K Ultra HD minimaal 30 Mbps. Een vaste netwerkkabel of 5GHz WiFi helpt om haperingen te voorkomen.',
  },
  {
    id: 'app-4',
    category: 'apparaten',
    q: 'Wat moet ik doen als een zender even buffert of stilstaat?',
    a: 'Controleer eerst uw internetverbinding, herstart de app of uw router indien nodig, en ververs de afspeellijst of EPG in de instellingen van uw speler.',
  },
  {
    id: 'app-5',
    category: 'apparaten',
    q: 'Heb ik veel technische kennis nodig om te installeren?',
    a: 'Nee, met onze installatiehandleiding doorloopt u de stappen in enkele minuten. Daarnaast kunt u altijd om hulp vragen via WhatsApp.',
  },
  {
    id: 'app-6',
    category: 'apparaten',
    q: 'Kan ik mijn account ook gebruiken wanneer ik op reis ben?',
    a: 'U kunt uw app op geschikte apparaten gebruiken zolang u beschikt over een werkende internetverbinding en de voorwaarden van uw pakket in acht neemt.',
  },

  // 4. Betaling & Veiligheid
  {
    id: 'pay-1',
    category: 'betaling',
    q: 'Welke betaalopties worden ondersteund?',
    a: 'Afhankelijk van het pakket en de checkout kunt u betalen via gangbare online betaalmethoden zoals iDEAL, Bancontact, creditcard en crypto.',
  },
  {
    id: 'pay-2',
    category: 'betaling',
    q: 'Is het gebruik van een VPN noodzakelijk?',
    a: 'Nee, een VPN is niet verplicht. Als uw internetprovider specifieke beperkingen toepast op streamingverkeer, kunt u een VPN overwegen.',
  },
  {
    id: 'pay-3',
    category: 'betaling',
    q: 'Hoe gaan jullie om met privacy en gegevens?',
    a: 'Wij gaan zorgvuldig om met contact- en accountgegevens die nodig zijn voor ondersteuning en levering van uw gekozen pakket.',
  },
  {
    id: 'pay-4',
    category: 'betaling',
    q: 'Wat als ik mijn inlog- of verbindingsgegevens kwijt ben?',
    a: 'Neem contact op met onze WhatsApp ondersteuning met uw bestelgegevens of het gebruikte e-mailadres zodat we u verder kunnen helpen.',
  },
  {
    id: 'pay-5',
    category: 'betaling',
    q: 'Ontvang ik een bevestiging van mijn bestelling?',
    a: 'Ja, na het plaatsen en afronden van uw bestelling ontvangt u een bevestiging en de benodigde vervolginformatie.',
  },
  {
    id: 'pay-6',
    category: 'betaling',
    q: 'Zijn er onverwachte extra kosten bij het pakket?',
    a: 'De gekozen looptijd en het aantal schermen bepalen uw pakket. Eventuele opties worden vooraf duidelijk weergegeven.',
  },
];

const seoFaqArticles = [
  {
    icon: Wifi,
    title: 'Netwerk & Snelheid Voor Stabiel Streamen',
    text: 'Een stabiele internetverbinding is de basis voor vloeiende weergave. Plaats uw streamingstick of Smart TV bij voorkeur dicht bij de router, gebruik een 5GHz WiFi-band of een netwerkkabel, en beperk zware downloads op de achtergrond tijdens live uitzendingen.',
  },
  {
    icon: Tv,
    title: 'Het Juiste Aantal Schermen Kiezen',
    text: 'Kijkt u meestal op één televisie, dan volstaat een pakket voor 1 scherm. Kijken meerdere gezinsleden tegelijk in de woonkamer en op een tweede tv, tablet of laptop, dan voorkomt een pakket voor 2 of 3 schermen dat streams elkaar onderbreken.',
  },
  {
    icon: Globe,
    title: 'Spelers, Xtream Codes & M3U Overzichtelijk Gebruiken',
    text: 'De meeste moderne IPTV-spelers werken met Xtream Codes of een M3U-afspeellijst en ondersteunen een elektronische programmagids (EPG). Let bij het invoeren van gegevens altijd op hoofdletters en voorkom extra spaties aan het begin of einde.',
  },
];

const categoryTabs: Array<{
  id: 'all' | 'algemeen' | 'sport' | 'apparaten' | 'betaling';
  label: string;
  icon: typeof HelpCircle;
}> = [
  { id: 'all', label: 'Alle Vragen (24)', icon: HelpCircle },
  { id: 'algemeen', label: 'Algemeen & Service', icon: Tv },
  { id: 'sport', label: 'Sport & Zenders', icon: Zap },
  { id: 'apparaten', label: 'Smart TV & Apps', icon: Smartphone },
  { id: 'betaling', label: 'Betaling & Veiligheid', icon: CreditCard },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'algemeen' | 'sport' | 'apparaten' | 'betaling'>('all');
  const [openAccordion, setOpenAccordion] = useState<string | null>('alg-1');

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const qLower = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !qLower ||
        item.q.toLowerCase().includes(qLower) ||
        item.a.toLowerCase().includes(qLower);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: faqList.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
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
            name: 'Veelgestelde Vragen',
            item: `https://${CONSTANTS.DOMAIN}/faq`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#1B1B1F] text-white overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* =========================================================
          1. HERO & LIVE SEARCH BAND [DARK #1B1B1F]
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
            <HelpCircle className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Kennisbank &amp; Antwoorden
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-5 leading-[1.05]">
            Veelgestelde <span className="text-[#FFD700]">Vragen</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed mb-7">
            Vind direct een duidelijk antwoord op vragen over <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong>, pakketten, apparaten, installatie en ondersteuning.
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

          {/* Search Bar */}
          <div className="w-full max-w-xl relative">
            <Search
              className="w-5 h-5 text-[#E3182B] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Zoek op trefwoord (bijv. schermen, EPG, Smart TV, snelheid)..."
              aria-label="Zoek in veelgestelde vragen"
              className="w-full pl-12 pr-4 py-4 rounded-full bg-[#F7F7F7] text-[#1B1B1F] placeholder-[#6B7280] font-semibold text-sm border-2 border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#E3182B] shadow-xl transition-all"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          2. MAIN LIGHT-MODE FAQ ACCORDION [LIGHT #F7F7F7 + WHITE #FFFFFF CARDS]
          ========================================================= */}
      <section
        id="vragen-lijst"
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[640px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#6B7280]/20 text-[#E3182B] text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
              Filter Per Categorie
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1B1B1F] uppercase tracking-tight">
              Alle <span className="text-[#E3182B]">Antwoorden</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#1B1B1F] text-[#FFD700] shadow-md scale-105'
                      : 'bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] shadow-sm'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Accordion List in Light Mode */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-3.5">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openAccordion === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-3xl transition-all duration-200 ${
                      isOpen
                        ? 'bg-white border-2 border-[#E3182B] shadow-lg'
                        : 'bg-white border-2 border-[#6B7280]/20 hover:border-[#E3182B]/60 shadow-sm'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left px-5 sm:px-6 py-5 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3182B] rounded-3xl"
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-start sm:items-center gap-3.5 min-w-0">
                        <span
                          className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shrink-0 mt-0.5 sm:mt-0 ${
                            isOpen
                              ? 'bg-[#E3182B] text-white'
                              : 'bg-[#F7F7F7] text-[#1B1B1F] border border-[#6B7280]/20'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-black text-[#1B1B1F] text-sm sm:text-lg uppercase tracking-tight leading-snug">
                          {faq.q}
                        </span>
                      </span>

                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'rotate-180 bg-[#1B1B1F] text-[#FFD700]'
                            : 'bg-[#F7F7F7] text-[#1B1B1F] border border-[#6B7280]/20'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" aria-hidden="true" />
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div className="px-5 sm:px-6 pb-6 pt-1 sm:pl-[4.25rem]">
                          <p className="text-[#6B7280] text-xs sm:text-base font-medium leading-relaxed pl-4 border-l-2 border-[#E3182B]">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white border-2 border-[#6B7280]/20 rounded-3xl p-10 text-center text-[#1B1B1F] shadow-sm">
              <AlertCircle className="w-8 h-8 text-[#E3182B] mx-auto mb-2" aria-hidden="true" />
              <p className="font-black text-lg uppercase tracking-tight mb-1">
                Geen vragen gevonden
              </p>
              <p className="text-xs sm:text-sm font-medium text-[#6B7280]">
                Probeer een ander trefwoord, kies een andere categorie of stel uw vraag direct via WhatsApp.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          3. COMPATIBILITY MATRIX & TROUBLESHOOTING [DARK #1B1B1F + #232329 CARDS]
          ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-t border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[280px] w-[660px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#232329] border border-[#FFD700]/40 text-[#FFD700] text-xs font-black uppercase tracking-widest mb-3">
              Apparaten &amp; Spelers
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
              Aanbevolen <span className="text-[#FFD700]">Apparaten &amp; Apps</span>
            </h2>
            <p className="text-sm sm:text-base text-white/75 font-medium max-w-xl mx-auto">
              Overzicht van geschikte spelers en richtwaarden voor internetsnelheid per platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div className="bg-[#232329] border border-white/10 hover:border-[#FFD700]/60 rounded-3xl p-6 flex flex-col justify-between transition-colors">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                  Android &amp; Firestick
                </h3>
                <p className="text-xs text-white/65 font-medium mb-4">
                  Geschikt voor streamingsticks en Android TV boxen.
                </p>
                <ul className="space-y-2 text-xs font-medium text-white/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>TiviMate IPTV Player</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>IPTV Smarters Pro</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>XCIPTV Player</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-black uppercase tracking-wider text-[#10B981]">
                Advies: 15-25+ Mbps
              </div>
            </div>

            <div className="bg-[#232329] border border-white/10 hover:border-[#FFD700]/60 rounded-3xl p-6 flex flex-col justify-between transition-colors">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mb-4">
                  <Tv className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                  Samsung &amp; LG Smart TV
                </h3>
                <p className="text-xs text-white/65 font-medium mb-4">
                  Direct kijken op moderne Smart TV-platforms.
                </p>
                <ul className="space-y-2 text-xs font-medium text-white/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>IBO Player (webOS / Tizen)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>Smart IPTV Spelers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>SET IPTV Speler</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-black uppercase tracking-wider text-[#10B981]">
                Advies: 25-30+ Mbps
              </div>
            </div>

            <div className="bg-[#232329] border border-white/10 hover:border-[#FFD700]/60 rounded-3xl p-6 flex flex-col justify-between transition-colors">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center mb-4">
                  <Cpu className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight mb-1">
                  Apple TV, iOS &amp; PC
                </h3>
                <p className="text-xs text-white/65 font-medium mb-4">
                  Gebruik op Apple apparaten en desktopcomputers.
                </p>
                <ul className="space-y-2 text-xs font-medium text-white/85">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>IPTVX (tvOS / iOS)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>GSE Smart IPTV</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
                    <span>VLC Media Player (PC / Mac)</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-black uppercase tracking-wider text-[#10B981]">
                Advies: 25-30+ Mbps
              </div>
            </div>
          </div>

          {/* 3-Step Troubleshooting Cards in Dark Band */}
          <div className="bg-[#232329] border border-white/10 rounded-3xl p-7 sm:p-10 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center shrink-0">
                <Wrench className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Snelle Zelfhulp Bij Haperingen
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 bg-[#1B1B1F] rounded-2xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs flex items-center justify-center mb-3">
                  1
                </span>
                <h4 className="font-black text-sm text-white uppercase mb-1.5">
                  Controleer Uw Netwerk
                </h4>
                <p className="text-xs text-white/75 font-medium leading-relaxed">
                  Herstart uw router of modem indien nodig en kies bij voorkeur voor een stabiele 5GHz WiFi- of kabelverbinding.
                </p>
              </div>

              <div className="p-5 bg-[#1B1B1F] rounded-2xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs flex items-center justify-center mb-3">
                  2
                </span>
                <h4 className="font-black text-sm text-white uppercase mb-1.5">
                  Ververs De Afspeellijst
                </h4>
                <p className="text-xs text-white/75 font-medium leading-relaxed">
                  Gebruik in uw speler de optie om de afspeellijst of EPG-programmagids opnieuw te laden.
                </p>
              </div>

              <div className="p-5 bg-[#1B1B1F] rounded-2xl border border-white/10">
                <span className="w-7 h-7 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs flex items-center justify-center mb-3">
                  3
                </span>
                <h4 className="font-black text-sm text-white uppercase mb-1.5">
                  Controleer Invoer &amp; Speler
                </h4>
                <p className="text-xs text-white/75 font-medium leading-relaxed">
                  Loop de app-instellingen na of neem contact op via WhatsApp als een stream of login niet direct opent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. LOWER SEO GUIDE, SUPPORT CTA & SHARE [LIGHT #F7F7F7 + WHITE CARDS]
          ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] border-t border-[#6B7280]/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[620px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* SEO Deep-Dive Articles */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#6B7280]/20 text-[#E3182B] text-xs font-black uppercase tracking-widest mb-3 shadow-sm">
                Praktische Informatie
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1B1B1F] uppercase tracking-tight">
                Tips Voor Een <span className="text-[#E3182B]">Vlotte Kijkervaring</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {seoFaqArticles.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-[#1B1B1F] uppercase tracking-tight mb-2.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Support CTA Card */}
          <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#1B1B1F] text-white border-2 border-[#FFD700]/50 p-8 sm:p-12 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-4">
              <LifeBuoy className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
              <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
                Persoonlijke Hulp
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
              Heeft u nog een <span className="text-[#FFD700]">specifieke vraag?</span>
            </h2>

            <p className="text-white/75 font-medium text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Ons team staat klaar via WhatsApp voor hulp bij installatie, pakketkeuze en vragen over uw apparaat.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
              <a
                href={`${CONSTANTS.CONTACT.whatsappUrl}?text=${encodeURIComponent(
                  `Hallo ${CONSTANTS.BRAND_NAME}, ik heb een vraag over de service en pakketten.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#10B981] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span>WhatsApp Support</span>
              </a>
              <Link
                href="/pakketten"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-105 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <span>Bekijk Pakketten</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-10">
            <ShareButtons />
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1B1B1F] hover:text-[#E3182B] transition-colors font-black text-xs uppercase tracking-widest"
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