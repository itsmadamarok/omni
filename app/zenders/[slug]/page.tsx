import { channelsData, getChannelCategoryBySlug, getAllCategorySlugs } from '@/lib/zenders-data';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Tv,
  ShieldCheck,
  Zap,
  ArrowLeft,
  Sparkles,
  HelpCircle,
  Activity,
  Cpu,
  MonitorSmartphone,
  Check,
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';

/* =========================================================
   OMNIPTV — CHANNEL CATEGORY (/zenders/[slug]) — 50/50 LIGHT & DARK
   Dark BG / Card : #1B1B1F / #232329
   Light BG / Card: #F7F7F7 / #FFFFFF (flat cards)
   Accent Red     : #E3182B
   Important CTA  : #FFD700 (gold + #1B1B1F text)
   Muted Slate    : #6B7280
   Success        : #10B981
   Soft Blush     : #F4A7A7
   ========================================================= */

// Lightweight 1-Line Circular Flag Icons
const FlagCircleNL = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#FFD700]/60" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="z-flag-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagCircleDE = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#FFD700]/60" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="z-flag-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagCircleBE = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#FFD700]/60" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="z-flag-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagCircleNO = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#FFD700]/60" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="z-flag-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCircleCH = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#FFD700]/60" viewBox="0 0 32 32" aria-hidden="true">
    <clipPath id="z-flag-ch"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-ch)">
      <path fill="#D52B1E" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
    </g>
  </svg>
);

const flagItems = [
  { name: 'Nederland', code: 'NL', component: FlagCircleNL },
  { name: 'Duitsland', code: 'DE', component: FlagCircleDE },
  { name: 'België', code: 'BE', component: FlagCircleBE },
  { name: 'Noorwegen', code: 'NO', component: FlagCircleNO },
  { name: 'Zwitserland', code: 'CH', component: FlagCircleCH },
];

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const category = getChannelCategoryBySlug(resolvedParams.slug);

  if (!category) {
    return generateSEOMetadata('Zenderpakket Niet Gevonden');
  }

  const title = `${category.name} Zenders Kijken | ${CONSTANTS.BRAND_NAME}`;
  const description = `Bekijk alle ${category.name} live kanalen in Full HD. Inclusief ${category.channels.slice(0, 4).map((c) => c.name).join(', ')} zonder buffering via ${CONSTANTS.BRAND_NAME}.`;

  return {
    title,
    description,
    keywords: category.keywords.join(', '),
    alternates: {
      canonical: `https://${CONSTANTS.DOMAIN}/zenders/${category.slug}`,
      languages: {
        'nl-NL': `https://${CONSTANTS.DOMAIN}/zenders/${category.slug}`,
        'nl-BE': `https://${CONSTANTS.DOMAIN}/zenders/${category.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://${CONSTANTS.DOMAIN}/zenders/${category.slug}`,
      type: 'article',
      locale: 'nl_NL',
      siteName: CONSTANTS.BRAND_NAME,
      images: [
        {
          url: `https://${CONSTANTS.DOMAIN}/img/background.webp`,
          width: 1200,
          height: 630,
          alt: `${category.name} IPTV Zenders Overzicht`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`https://${CONSTANTS.DOMAIN}/img/background.webp`],
    },
  };
}

export default async function ChannelCategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const category = getChannelCategoryBySlug(resolvedParams.slug);

  if (!category) {
    notFound();
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
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
        name: 'Zenderpakketten',
        item: `https://${CONSTANTS.DOMAIN}/#channels`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${category.name} Zenders`,
        item: `https://${CONSTANTS.DOMAIN}/zenders/${category.slug}`,
      },
    ],
  };

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${CONSTANTS.BRAND_NAME} ${category.name} IPTV Pakket`,
    image: `https://${CONSTANTS.DOMAIN}/img/background.webp`,
    description: category.description,
    brand: {
      '@type': 'Brand',
      name: CONSTANTS.BRAND_NAME,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '4.08',
      highPrice: '14.99',
      offerCount: '4',
      availability: 'https://schema.org/InStock',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* =========================================================
          1. HERO SECTION [DARK #1B1B1F]
          ========================================================= */}
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-[#1B1B1F] text-white border-b border-white/10 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[360px] w-[760px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-1/4 h-[240px] w-[420px] rounded-full bg-[#F4A7A7]/10 blur-[130px]"
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#232329] border border-[#FFD700]/40 px-4 py-2 rounded-full mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#FFD700]" aria-hidden="true" />
            <span className="text-[#FFD700] font-black text-xs uppercase tracking-widest">
              Live Stream Hub
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase mb-6 leading-[1.06] whitespace-normal break-words">
            {category.name} <span className="text-[#FFD700]">Zenderaanbod</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium max-w-3xl mx-auto leading-relaxed mb-6">
            {category.description}
          </p>

          {/* 1-Line Circular Flag Bar Under Description */}
          <div className="w-full max-w-2xl mx-auto my-6 px-3 py-2.5 rounded-full bg-[#232329] border border-white/10 flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar shadow-inner">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-white/60 shrink-0">
              Beschikbaar in:
            </span>
            <div className="flex items-center gap-3 sm:gap-5 shrink-0">
              {flagItems.map((flag) => {
                const FlagComp = flag.component;
                return (
                  <div
                    key={flag.code}
                    className="flex items-center gap-1.5 group cursor-default transition-transform hover:scale-105"
                    title={flag.name}
                  >
                    <FlagComp />
                    <span className="text-[11px] sm:text-xs font-black uppercase text-white group-hover:text-[#FFD700] transition-colors">
                      {flag.code}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-white font-bold uppercase tracking-widest mt-6">
            <span className="flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-[#FFD700]" aria-hidden="true" /> {category.totalChannels}+ Zenders Actief
            </span>
            <span className="flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" aria-hidden="true" /> Anti-Freeze 60FPS
            </span>
            <span className="flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-white/10">
              <Activity className="w-4 h-4 text-[#E3182B]" aria-hidden="true" /> 99.9% Server Uptime
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/pakketten"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:brightness-95 transition-transform hover:scale-105 shadow-xl"
            >
              Direct Pakket Kiezen
            </Link>
            <a
              href={`https://live-support.netlify.app/?text=${encodeURIComponent(`Hallo, ik wil graag een gratis 24-uurs test voor het ${category.name} zenderpakket.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white text-[#1B1B1F] font-black text-xs sm:text-sm uppercase tracking-widest hover:bg-[#F7F7F7] transition-transform hover:scale-105 shadow-xl"
            >
              Gratis 24-Uur Test
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CHANNELS INTERACTIVE GRID [LIGHT #F7F7F7 + WHITE FLAT CARDS]
          ========================================================= */}
      <section className="relative py-20 bg-[#F7F7F7] text-[#1B1B1F] px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[620px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#1B1B1F] uppercase tracking-tight">
                Beschikbare <span className="text-[#E3182B]">{category.name} Kanalen</span>
              </h2>
              <p className="text-[#6B7280] font-semibold text-sm sm:text-base mt-2">
                Alle onderstaande streams zijn direct beschikbaar in FHD en HD met lage latency.
              </p>
            </div>
            <div className="text-xs uppercase font-black tracking-widest text-[#1B1B1F] bg-white px-4 py-2.5 rounded-xl border border-[#6B7280]/20 shadow-sm w-fit">
              Automatische EPG TV-Gids Inbegrepen
            </div>
          </div>

          {/* Dynamic Channel Tiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {category.channels.map((channel, idx) => (
              <div
                key={idx}
                className="bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] rounded-3xl p-5 shadow-lg hover:shadow-[0_20px_45px_rgba(227,24,43,0.14)] flex flex-col justify-between hover:-translate-y-1 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-[#E3182B] text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                      {channel.quality}
                    </span>
                    <span className="text-[10px] font-black uppercase text-[#6B7280] tracking-wider">
                      {channel.genre || category.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 my-2">
                    <div className="w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center shrink-0 text-[#FFD700] group-hover:scale-105 transition-transform shadow-sm">
                      <Tv className="w-5 h-5 text-[#FFD700]" aria-hidden="true" />
                    </div>
                    <h3 className="font-black text-[#1B1B1F] text-lg uppercase tracking-tight leading-tight group-hover:text-[#E3182B] transition-colors">
                      {channel.name}
                    </h3>
                  </div>

                  <p className="text-[#6B7280] text-xs font-medium mt-2 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#6B7280]/15 flex items-center justify-between text-[11px] font-black uppercase text-[#1B1B1F]">
                  <span className="inline-flex items-center gap-1 text-[#10B981]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" aria-hidden="true" /> 50/60 FPS Vloeiend
                  </span>
                  <span className="text-[#E3182B]">Catch-Up 7 Dagen</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. DEEP DIVE, SPECS, FAQ & OTHER CATEGORIES [DARK #1B1B1F]
          ========================================================= */}
      <section className="py-20 bg-[#1B1B1F] text-white border-t border-white/10 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-0 w-96 h-96 bg-[#E3182B]/15 blur-[150px] rounded-full"
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#232329] border-2 border-white/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
              Waarom {category.name} streamen via{' '}
              <span className="text-[#FFD700]">{CONSTANTS.BRAND_NAME}</span>?
            </h2>
            <div className="text-white/80 font-medium text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Traditionele kabeltelevisie dwingt kijkers vaak tot dure aanvullende themapakketten met langlopende contracten. Met de dedicated servers van <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong> ontgrendelt u het volledige <strong className="text-white">{category.name}</strong> pakket zonder restricties.
              </p>
              <p>
                Onze streamingservers zijn rechtstreeks aangesloten op toonaangevende Europese internetknooppunten (AMS-IX). Hierdoor geniet u van stabiele verbindingen, minimale vertraging bij live sportuitzendingen en storingsvrije streamkwaliteit op elk scherm.
              </p>
            </div>
          </div>

          {/* Technical Specs Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            <div className="p-6 bg-[#232329] border border-white/10 hover:border-[#FFD700]/50 transition-colors rounded-3xl text-center">
              <Cpu className="w-8 h-8 text-[#FFD700] mx-auto mb-2" aria-hidden="true" />
              <h3 className="font-black text-sm uppercase text-white">H.265 / HEVC</h3>
              <p className="text-xs text-white/65 font-medium mt-1">Scherp beeld met minimaal dataverbruik</p>
            </div>
            <div className="p-6 bg-[#232329] border border-white/10 hover:border-[#FFD700]/50 transition-colors rounded-3xl text-center">
              <MonitorSmartphone className="w-8 h-8 text-[#10B981] mx-auto mb-2" aria-hidden="true" />
              <h3 className="font-black text-sm uppercase text-white">Universeel Compatibel</h3>
              <p className="text-xs text-white/65 font-medium mt-1">Smart TV, Firestick, Android, Apple TV &amp; PC</p>
            </div>
            <div className="p-6 bg-[#232329] border border-white/10 hover:border-[#FFD700]/50 transition-colors rounded-3xl text-center">
              <ShieldCheck className="w-8 h-8 text-[#E3182B] mx-auto mb-2" aria-hidden="true" />
              <h3 className="font-black text-sm uppercase text-white">Anti-Freeze Loadbalancing</h3>
              <p className="text-xs text-white/65 font-medium mt-1">Geen buffering tijdens drukbezochte piekuren</p>
            </div>
          </div>

          {/* Category FAQ Cards */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-8 text-center">
              Veelgestelde Vragen over <span className="text-[#FFD700]">{category.name}</span>
            </h2>

            <div className="space-y-4">
              {category.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#232329] border border-white/10 rounded-3xl p-6 shadow-xl"
                >
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#FFD700] shrink-0" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-white/75 text-sm font-medium leading-relaxed pl-7 border-l-2 border-[#E3182B] ml-2">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Centered ShareButtons Component */}
          <div className="w-full flex justify-center items-center my-10">
            <ShareButtons
              title={`${category.name} Zenders Overzicht - ${CONSTANTS.BRAND_NAME}`}
              url={`https://${CONSTANTS.DOMAIN}/zenders/${category.slug}`}
            />
          </div>

          {/* Other Categories Links */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-6 text-center">
              Bekijk Ook Onze Andere Zenderpakketten
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {channelsData
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/zenders/${cat.slug}`}
                    className="p-4 bg-[#232329] border border-white/10 rounded-2xl hover:border-[#FFD700] transition-all text-center group"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase text-white group-hover:text-[#FFD700] transition-colors block">
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-[#10B981] font-bold uppercase tracking-wider mt-1 block">
                      {cat.totalChannels}+ Kanalen
                    </span>
                  </Link>
                ))}
            </div>
          </div>

          {/* Return Pathway Link */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#FFD700] hover:text-white transition-colors font-black text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Terug naar de homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}