'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PricingSection from '../components/PricingSection';
import ShareButtons from '../components/ShareButtons';
import {
  ShieldCheck,
  Zap,
  ChevronDown,
  CreditCard,
  Award,
  Globe,
  Server,
  Trophy,
  Tv,
  Film,
  MonitorPlay,
  Wifi,
  Calendar,
  Lock,
  ThumbsUp,
  LifeBuoy,
  Sparkles,
  Check,
  Monitor,
  Smartphone,
  Sliders,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '../components/AnimatedSection';

/* =========================================================
   OMNIPTV — PRICING PAGE (/pakketten) — REVERSED & REORDERED
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
    <clipPath id="p-fl-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagDE = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="p-fl-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagBE = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="p-fl-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagNO = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="p-fl-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCH = () => (
  <svg className="w-5 h-5 rounded-full shadow-sm shrink-0 ring-1 ring-white/25" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="p-fl-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#p-fl-ch)">
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

const comparisonRows = [
  { feature: 'Live Kanalen', basic: '25.000+', vip: '25.000+ VIP', mid: '25.000+' },
  { feature: 'VOD Films & Series', basic: '60.000+', vip: '60.000+ (Dagelijks Nieuw)', mid: '60.000+' },
  { feature: '4K & 60FPS Streaming', basic: 'Ja', vip: 'Ja (Ultra Bitrate)', mid: 'Ja' },
  { feature: 'Live Sport & PPV', basic: 'Inbegrepen', vip: 'Alle PPV + VIP Feeds', mid: 'Inbegrepen' },
  { feature: 'EPG & Terugkijken', basic: 'Standaard EPG', vip: '7 Dagen Catch-Up + EPG', mid: 'Volledige EPG' },
  { feature: 'Anti-Freeze Technologie', basic: 'Standaard', vip: 'VIP Prioriteit Routing', mid: 'Geavanceerd' },
  { feature: 'VPN Compatibel', basic: 'Ja (Niet Verplicht)', vip: '100% Compatibel', mid: 'Ja' },
  { feature: 'Aantal Schermen', basic: '1 of 2 Schermen', vip: '1, 2 of 3 Schermen', mid: '1 of 2 Schermen' },
  { feature: 'Klantenservice', basic: 'WhatsApp Support', vip: '24/7 VIP Prioriteit', mid: 'Prioriteit Support' },
];

const screenProfiles = [
  {
    icon: Monitor,
    badge: '1 Scherm',
    title: 'Solo Kijker',
    speed: 'Advies: 25+ Mbps',
    desc: 'Ideaal voor één hoofdtelevisie in de woonkamer of slaapkamer met volledige toegang tot live zenders en VOD.',
  },
  {
    icon: Smartphone,
    badge: '2 Schermen',
    title: 'Duo & Gezin',
    speed: 'Advies: 50+ Mbps',
    desc: 'Gelijktijdig kijken op twee schermen, bijvoorbeeld live sport op TV terwijl op tablet of tweede TV een film start.',
  },
  {
    icon: Sliders,
    badge: '3 Schermen',
    title: 'Multi-Room Thuis',
    speed: 'Advies: 100+ Mbps',
    desc: 'Geschikt voor grotere huishoudens die tegelijkertijd op meerdere kamers in 4K en 60FPS willen streamen.',
  },
];

const includedFeatures = [
  {
    icon: Tv,
    title: '25.000+ Live Zenders',
    desc: 'Sport, nieuws, entertainment en nationale zenders uit meer dan 50 landen via OmniIPTV.',
    tag: 'Live TV',
  },
  {
    icon: Film,
    title: '60.000+ VOD Bibliotheek',
    desc: 'De nieuwste films, series en documentaires dagelijks automatisch bijgewerkt op OmniIPTV.',
    tag: 'On-Demand',
  },
  {
    icon: MonitorPlay,
    title: '4K & 60FPS Kwaliteit',
    desc: 'Kristalheldere streaming op compatibele kanalen en apparaten zonder haperingen via OmniIPTV.',
    tag: 'Ultra HD',
  },
  {
    icon: Wifi,
    title: 'Anti-Freeze Technologie',
    desc: 'Buffervrij kijken dankzij geavanceerde streaming-optimalisatie en dedicated loadbalancers.',
    tag: 'Stabiel',
  },
  {
    icon: Calendar,
    title: 'Volledige EPG TV-Gids',
    desc: '7-daagse interactieve elektronische programmagids voor alle Nederlandse en Europese zenders.',
    tag: '7 Dagen EPG',
  },
  {
    icon: Trophy,
    title: 'PPV Evenementen Inbegrepen',
    desc: 'Alle grote UFC, Glory Kickboxing en boks Pay-Per-View gala’s zonder extra kosten.',
    tag: 'Inclusief PPV',
  },
  {
    icon: Globe,
    title: 'Wereldwijde Dekking',
    desc: 'Dedicated servers in Europese datacenters voor minimale vertraging bij live sportuitzendingen.',
    tag: 'EU Routing',
  },
  {
    icon: Server,
    title: '99.9% Server Uptime',
    desc: 'Enterprise-infrastructuur met redundante back-up servers voor gegarandeerde stabiliteit.',
    tag: '99.9% Uptime',
  },
];

const activationSteps = [
  {
    step: '01',
    title: 'Kies Looptijd & Schermen',
    desc: 'Selecteer 3, 6 of 12 maanden en geef aan op hoeveel apparaten u tegelijk wilt streamen.',
  },
  {
    step: '02',
    title: 'Veilig Afrekenen',
    desc: 'Betaal direct via iDEAL, Bancontact, creditcard of crypto zonder doorlopend contract.',
  },
  {
    step: '03',
    title: 'Binnen 5 Minuten Live',
    desc: 'Ontvang uw Xtream of M3U gegevens plus handleiding voor Smart TV, Firestick, Android of Apple.',
  },
];

const trustPillars = [
  {
    icon: ShieldCheck,
    iconColor: 'text-[#10B981]',
    title: 'Veilig Betalen',
    desc: 'Veilige transacties via iDEAL, Bancontact, Creditcard en Crypto met SSL-versleuteling.',
  },
  {
    icon: Zap,
    iconColor: 'text-[#E3182B]',
    title: 'Directe Activatie',
    desc: 'Ontvang uw inloggegevens en installatie-instructies binnen 5 minuten per e-mail en WhatsApp.',
  },
  {
    icon: CreditCard,
    iconColor: 'text-[#10B981]',
    title: 'Geld-Terug-Garantie',
    desc: '7 dagen niet-goed-geld-terug garantie op al onze actieve streamingabonnementen.',
  },
  {
    icon: LifeBuoy,
    iconColor: 'text-[#E3182B]',
    title: '24/7 Ondersteuning',
    desc: 'Deskundig Nederlandstalig ondersteuningsteam staat altijd direct voor u klaar via WhatsApp.',
  },
];

const faqItems = [
  {
    question: 'Welke betaalmethoden accepteert OmniIPTV?',
    answer:
      'OmniIPTV accepteert iDEAL, Bancontact, alle grote creditcards (Visa, Mastercard, American Express), PayPal en cryptovaluta (Bitcoin, Ethereum, USDT). Alle betalingen worden veilig verwerkt via versleutelde 256-bit SSL-verbindingen.',
  },
  {
    question: 'Kan ik mijn abonnement later upgraden of aanpassen?',
    answer:
      'Ja, u kunt uw streamingabonnement op elk gewenst moment upgraden naar meerdere schermen of een langere periode. Neem eenvoudig contact op met onze WhatsApp helpdesk en wij passen uw account direct aan.',
  },
  {
    question: 'Zit ik vast aan een contract of automatische verlenging?',
    answer:
      "Nee, absoluut niet. Er zijn geen langlopende contracten of automatische incasso's. Alle pakketten zijn eenmalig prepaid en stoppen automatisch na afloop van de gekozen periode.",
  },
  {
    question: 'Wat gebeurt er als mijn abonnement afloopt?',
    answer:
      'Voor het verlopen van uw periode ontvangt u van ons een herinnering. U kunt vervolgens eenvoudig zelf verlengen. Verlengt u niet? Dan stopt de verbinding automatisch zonder verdere verplichtingen.',
  },
  {
    question: 'Bieden jullie een geld-terug-garantie?',
    answer:
      'Ja, wij bieden een volledige 7 dagen niet-goed-geld-terug garantie op alle pakketten. Mocht u aanhoudende serverproblemen ervaren die wij niet kunnen verhelpen, dan storten wij het volledige aankoopbedrag direct terug.',
  },
  {
    question: 'Kan ik de dienst op meerdere apparaten tegelijk gebruiken?',
    answer:
      'Ja, afhankelijk van uw gekozen pakket. Ons standaardabonnement is voor 1 gelijktijdige stream, maar u kunt tijdens het bestellen kiezen voor een 2- of 3-schermen multi-room optie om gelijktijdig in meerdere kamers te kijken.',
  },
  {
    question: 'Zijn er kortingen voor langere abonnementen?',
    answer:
      'Ja, onze 12-maanden pakketten bieden de allerhoogste besparing (tot wel 58% korting ten opzichte van losse maandcontracten) inclusief VIP-serverroutering en prioriteitssupport.',
  },
];

function FAQAccordionCard({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div
      className={`rounded-3xl transition-colors duration-200 ${
        isOpen
          ? 'bg-[#232329] border-2 border-[#FFD700]'
          : 'bg-[#232329]/85 border border-white/10 hover:border-white/25'
      }`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
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
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-sm sm:text-base font-black uppercase tracking-tight text-white leading-snug">
            {question}
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
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#1B1B1F] text-white flex flex-col overflow-x-clip">
      {/* =========================================================
          1. HERO BAND [DARK #1B1B1F]
          ========================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/bg-2.webp"
            alt="OmniIPTV premium IPTV abonnementen - Beste OmniIPTV Deals"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B1B1F]/80 via-[#1B1B1F]/85 to-[#1B1B1F]" />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[340px] w-[720px] rounded-full bg-[#E3182B]/15 blur-[145px] z-[1]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[220px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px] z-[1]"
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <FadeInStagger className="flex flex-col items-center w-full">
            <FadeInItem>
              <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 rounded-full mb-6 shadow-md">
                <Sparkles className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
                  Beste Waarde Pakketten 2026
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-5 leading-[1.05]">
                OmniIPTV Pakketten &amp;{' '}
                <span className="text-[#FFD700]">Beste Deals</span>
              </h1>
            </FadeInItem>

            <FadeInItem>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed mb-7">
                Geniet overal van live tv, films en sport met een snelle, betrouwbare{' '}
                <strong className="text-white">OmniIPTV</strong> streamingervaring in 4K &amp; 60FPS.
              </p>
            </FadeInItem>

            <FadeInItem className="w-full flex justify-center mb-7">
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
            </FadeInItem>

            <FadeInItem className="w-full">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs font-extrabold uppercase tracking-wider text-white mb-8">
                <span className="inline-flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
                  <Lock className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> Geen Contract
                </span>
                <span className="inline-flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
                  <Zap className="w-4 h-4 text-[#10B981]" aria-hidden="true" /> Directe Activatie
                </span>
                <span className="inline-flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
                  <ThumbsUp className="w-4 h-4 text-[#E3182B]" aria-hidden="true" /> 7 Dagen Garantie
                </span>
              </div>
            </FadeInItem>

            <FadeInItem>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
                <Link
                  href="#pricing-section"
                  className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-all hover:scale-105 shadow-lg"
                >
                  Bekijk Pakketten
                </Link>
                <Link
                  href="#vergelijking"
                  className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-[#232329] text-white border border-white/15 hover:border-[#FFD700] font-black text-xs sm:text-sm uppercase tracking-widest transition-all"
                >
                  Vergelijk Opties
                </Link>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          2. PRICING PLANS BAND [LIGHT #F7F7F7]
          ========================================================= */}
      <div className="w-full relative z-10 bg-[#F7F7F7] text-[#1B1B1F]" id="pricing-section">
        <PricingSection />
      </div>

      {/* =========================================================
          3. COMPARISON, MULTI-SCREEN & 7-DAY GUARANTEE [DARK #1B1B1F]
          ========================================================= */}
      <section
        id="vergelijking"
        className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-t border-white/10 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[280px] w-[660px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#232329] border border-[#FFD700]/40 text-[#FFD700] text-xs font-black uppercase tracking-widest mb-3">
              Looptijden &amp; Specificaties
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Vergelijk <span className="text-[#FFD700]">OmniIPTV Pakketten</span>
            </h2>
            <p className="text-white/75 text-sm sm:text-base font-medium mt-3">
              Bekijk direct de verschillen tussen 3, 6 en 12 maanden en kies het pakket dat bij uw huishouden past.
            </p>
          </FadeIn>

          {/* Desktop Comparison Table */}
          <div className="hidden md:block overflow-hidden bg-[#232329] border border-white/10 rounded-3xl shadow-xl">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 bg-[#1B1B1F]">
                  <th className="py-4 px-6 text-white font-black uppercase tracking-wider text-xs sm:text-sm">
                    Specificatie
                  </th>
                  <th className="py-4 px-5 text-center text-white/80 font-black uppercase tracking-wider text-xs sm:text-sm">
                    3 Maanden
                  </th>
                  <th className="py-4 px-5 text-center bg-[#FFD700] text-[#1B1B1F] font-black uppercase tracking-wider text-xs sm:text-sm">
                    12 Maanden (VIP)
                  </th>
                  <th className="py-4 px-5 text-center text-white/80 font-black uppercase tracking-wider text-xs sm:text-sm">
                    6 Maanden
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 px-6 text-white font-extrabold uppercase text-xs tracking-wide">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 text-center text-white/75 font-medium">
                      {row.basic}
                    </td>
                    <td className="py-4 px-5 text-center bg-[#FFD700]/10 text-[#FFD700] font-black border-x border-[#FFD700]/20">
                      {row.vip}
                    </td>
                    <td className="py-4 px-5 text-center text-white/75 font-medium">
                      {row.mid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Comparison Cards */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="bg-[#232329] border border-white/10 rounded-2xl p-4"
              >
                <div className="text-xs font-black uppercase tracking-wider text-white pb-2.5 mb-3 border-b border-white/10">
                  {row.feature}
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-[#1B1B1F] rounded-xl p-2.5">
                    <span className="block text-[10px] font-black uppercase text-white/55 mb-1">
                      3 Mnd
                    </span>
                    <span className="font-semibold text-white/85">{row.basic}</span>
                  </div>
                  <div className="bg-[#1B1B1F] rounded-xl p-2.5 border border-[#FFD700]">
                    <span className="block text-[10px] font-black uppercase text-[#FFD700] mb-1">
                      12 Mnd VIP
                    </span>
                    <span className="font-black text-[#FFD700]">{row.vip}</span>
                  </div>
                  <div className="bg-[#1B1B1F] rounded-xl p-2.5">
                    <span className="block text-[10px] font-black uppercase text-white/55 mb-1">
                      6 Mnd
                    </span>
                    <span className="font-semibold text-white/85">{row.mid}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Multi-Screen Guidance Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {screenProfiles.map(({ icon: Icon, badge, title, speed, desc }) => (
              <div
                key={title}
                className="bg-[#232329] border border-white/10 hover:border-[#FFD700]/60 rounded-3xl p-6 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] border border-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#1B1B1F] text-[#FFD700] border border-[#FFD700]/30 text-[10px] font-black uppercase tracking-widest">
                      {badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 font-medium leading-relaxed">
                    {desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-black uppercase tracking-wider text-[#10B981]">
                  {speed}
                </div>
              </div>
            ))}
          </div>

          {/* 7-Day Guarantee Callout */}
          <div className="mt-10 bg-[#232329] border-2 border-[#FFD700]/50 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#1B1B1F] border border-[#FFD700]/40 text-[#FFD700] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-3">
                <Award className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
                <span>100% Zonder Risico</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                7 Dagen Kwaliteitsgarantie
              </h3>
              <p className="text-white/75 text-sm sm:text-base font-medium mt-2 leading-relaxed">
                Probeer <strong className="text-white">OmniIPTV</strong> 7 dagen zonder risico. Ervaart u aanhoudende haperingen die wij niet kunnen verhelpen? Dan ontvangt u uw aankoopbedrag direct terug.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto bg-[#1B1B1F] border border-white/10 rounded-2xl px-5 py-4 text-center">
              <span className="inline-flex items-center justify-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#10B981]">
                <Check className="w-4 h-4 stroke-[3]" aria-hidden="true" /> Geld-Terug-Garantie
              </span>
              <span className="block text-white/60 text-xs font-medium mt-1">
                Binnen 7 Dagen Na Aankoop
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. INCLUDED FEATURES, ACTIVATION & TRUST [LIGHT #F7F7F7 + WHITE CARDS]
          ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] border-t border-[#6B7280]/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[620px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white border border-[#6B7280]/20 text-[#E3182B] text-xs font-black uppercase tracking-widest mb-4 shadow-sm">
              Standaard Inbegrepen
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1B1B1F] uppercase tracking-tight leading-tight">
              Alles Inbegrepen In <span className="text-[#E3182B]">Elk Pakket</span>
            </h2>
            <p className="text-[#6B7280] text-sm sm:text-lg font-medium mt-3 leading-relaxed">
              Alle <strong className="text-[#1B1B1F]">OmniIPTV</strong> abonnementen worden standaard geleverd met deze functies, snelle activatie en ondersteuning.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includedFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <FadeInItem
                  key={idx}
                  className="bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] rounded-3xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#1B1B1F] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6 text-[#FFD700]" aria-hidden="true" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#F7F7F7] text-[#10B981] border border-[#6B7280]/15">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="font-black text-[#1B1B1F] uppercase tracking-tight text-lg mb-2 group-hover:text-[#E3182B] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#6B7280] text-sm font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>

          {/* 3-Step Activation Flow */}
          <div className="mt-16 pt-14 border-t border-[#6B7280]/15">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-4xl font-black text-[#1B1B1F] uppercase tracking-tight">
                In 3 Stappen <span className="text-[#E3182B]">Direct Live</span>
              </h3>
              <p className="text-[#6B7280] text-sm sm:text-base font-medium mt-2">
                Geen ingewikkelde instellingen of wachttijden na uw bestelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activationSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 shadow-sm"
                >
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#1B1B1F] text-[#FFD700] text-xs font-black uppercase tracking-widest mb-4">
                    Stap {item.step}
                  </span>
                  <h4 className="text-lg font-black text-[#1B1B1F] uppercase tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#6B7280] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Strip */}
          <div className="mt-16 pt-14 border-t border-[#6B7280]/15">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-4xl font-black text-[#1B1B1F] uppercase tracking-tight">
                Waarom Kiezen Voor <span className="text-[#E3182B]">OmniIPTV</span>
              </h3>
              <p className="text-[#6B7280] text-sm sm:text-base font-medium mt-2">
                Vertrouwd door meer dan 25.000 tevreden klanten in Nederland en België.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {trustPillars.map(({ icon: Icon, iconColor, title, desc }) => (
                <div
                  key={title}
                  className="bg-white border-2 border-[#6B7280]/20 rounded-3xl p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#1B1B1F] flex items-center justify-center mb-4">
                      <Icon className={`w-5 h-5 ${iconColor}`} aria-hidden="true" />
                    </div>
                    <h4 className="text-base font-black text-[#1B1B1F] uppercase tracking-tight mb-1.5">
                      {title}
                    </h4>
                    <p className="text-[#6B7280] text-xs sm:text-sm font-medium leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. FAQ ACCORDION BAND [DARK #1B1B1F + #232329 CARDS]
          ========================================================= */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-t border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[640px] rounded-full bg-[#E3182B]/15 blur-[150px]"
        />

        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn className="text-center mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#232329] border border-[#FFD700]/40 text-[#FFD700] text-xs font-black uppercase tracking-widest mb-4">
              Veelgestelde Vragen
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
              Alles Over <span className="text-[#FFD700]">Pakketten &amp; Betaling</span>
            </h2>
            <p className="text-white/75 font-medium text-sm sm:text-lg mt-3">
              Duidelijke antwoorden over abonnementen, schermen, verlengen en onze garantie.
            </p>
          </FadeIn>

          <FadeInStagger className="space-y-3.5">
            {faqItems.map((item, idx) => (
              <FadeInItem key={item.question}>
                <FAQAccordionCard
                  index={idx}
                  question={item.question}
                  answer={item.answer}
                />
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          6. FINAL CTA & SHARE BAND [LIGHT #F7F7F7 + DARK CTA CARD]
          ========================================================= */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] border-t border-[#6B7280]/15 overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[240px] w-[580px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="rounded-[2rem] sm:rounded-[2.5rem] bg-[#1B1B1F] text-white border-2 border-[#FFD700]/50 p-8 sm:p-12 shadow-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
                Klaar om te beginnen met <span className="text-[#FFD700]">streamen?</span>
              </h2>
              <p className="text-white/75 font-medium text-sm sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Sluit u aan bij meer dan 25.000 tevreden klanten en geniet vandaag nog van premium digitale televisie.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center w-full max-w-md mx-auto">
                <Link
                  href="#pricing-section"
                  className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black uppercase tracking-widest text-xs sm:text-sm transition-transform hover:scale-105 shadow-lg"
                >
                  Kies Uw Pakket
                </Link>
                <Link
                  href="/installatie"
                  className="w-full sm:w-auto text-center whitespace-nowrap px-8 py-4 rounded-full bg-white text-[#1B1B1F] font-black uppercase tracking-widest text-xs sm:text-sm transition-transform hover:scale-105 shadow-lg"
                >
                  Installatie Handleiding
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/75 text-xs font-bold uppercase tracking-widest">
                <span className="inline-flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" /> Directe Activatie
                </span>
                <span className="inline-flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-[#FFD700]" aria-hidden="true" /> Veilig Afrekenen
                </span>
                <span className="inline-flex items-center gap-2">
                  <CreditCard className="w-3.5 h-3.5 text-[#E3182B]" aria-hidden="true" /> iDEAL, Bancontact &amp; Crypto
                </span>
              </div>
            </FadeIn>
          </div>

          <div className="w-full flex justify-center items-center mt-10">
            <ShareButtons />
          </div>
        </div>
      </section>
    </div>
  );
}