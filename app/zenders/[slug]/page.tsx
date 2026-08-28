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
  MonitorSmartphone 
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';

// Lightweight 1-Line Circular Flag Icons
const FlagCircleNL = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/60" viewBox="0 0 32 32">
    <clipPath id="z-flag-nl"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-nl)">
      <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
      <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
      <path fill="#21468B" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagCircleDE = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/60" viewBox="0 0 32 32">
    <clipPath id="z-flag-de"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-de)">
      <path fill="#000" d="M0 0h32v10.7H0z" />
      <path fill="#D00" d="M0 10.7h32v10.6H0z" />
      <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
    </g>
  </svg>
);

const FlagCircleBE = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/60" viewBox="0 0 32 32">
    <clipPath id="z-flag-be"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-be)">
      <path fill="#000" d="M0 0h10.7v32H0z" />
      <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
      <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
    </g>
  </svg>
);

const FlagCircleNO = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/60" viewBox="0 0 32 32">
    <clipPath id="z-flag-no"><circle cx="16" cy="16" r="16" /></clipPath>
    <g clipPath="url(#z-flag-no)">
      <path fill="#BA0C2F" d="M0 0h32v32H0z" />
      <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
      <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
    </g>
  </svg>
);

const FlagCircleCH = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md shrink-0 ring-2 ring-[#CA1421]/60" viewBox="0 0 32 32">
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
  const description = `Bekijk alle ${category.name} live kanalen in Full HD. Inclusief ${category.channels.slice(0, 4).map(c => c.name).join(', ')} zonder buffering via ${CONSTANTS.BRAND_NAME}.`;

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

  const cleanPhone = (CONSTANTS.CONTACT.phone || '+31612345678').replace(/[^0-9]/g, '');

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
    <div className="flex flex-col min-h-screen bg-[#1A1A1D] text-[#F1E8DB] overflow-hidden">
      
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(202,20,33,0.18),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#CA142108_1px,transparent_1px),linear-gradient(to_bottom,#CA142108_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">
              Live Stream Hub
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#F1E8DB] tracking-tighter uppercase mb-6 leading-none whitespace-normal break-words">
            {category.name} <span className="text-[#CA1421]">Zenderaanbod</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-3xl mx-auto leading-relaxed mb-6">
            {category.description}
          </p>

          {/* 1-Line Circular Flag Bar Under Description */}
          <div className="w-full max-w-2xl mx-auto my-6 px-3 py-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar shadow-inner">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#F1E8DB]/60 shrink-0">
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
                    <span className="text-[11px] sm:text-xs font-black uppercase text-[#F1E8DB] group-hover:text-[#CA1421] transition-colors">
                      {flag.code}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs md:text-sm text-[#F1E8DB]/70 font-black uppercase tracking-widest mt-6">
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Zap className="w-4 h-4 text-[#CA1421]" /> {category.totalChannels}+ Zenders Actief
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#CA1421]" /> Anti-Freeze 60FPS
            </span>
            <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <Activity className="w-4 h-4 text-[#CA1421]" /> 99.9% Server Uptime
            </span>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/pakketten"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-sm uppercase tracking-widest hover:bg-[#DB4439] transition-transform hover:scale-105 shadow-xl"
            >
              Direct Pakket Kiezen
            </Link>
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hallo ${CONSTANTS.BRAND_NAME}, ik wil graag een gratis 24-uurs test voor het ${category.name} zenderpakket.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#F1E8DB] text-[#CA1421] font-black text-sm uppercase tracking-widest hover:bg-[#FCA9FE] transition-transform hover:scale-105 shadow-xl"
            >
              Gratis 24-Uur Test
            </a>
          </div>
        </div>
      </section>

      {/* Channels Interactive Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#F1E8DB] uppercase tracking-tight">
              Beschikbare <span className="text-[#CA1421]">{category.name} Kanalen</span>
            </h2>
            <p className="text-[#FCA9FE] font-bold text-sm sm:text-base mt-2">
              Alle onderstaande streams zijn direct beschikbaar in FHD en HD met lage latency.
            </p>
          </div>
          <div className="text-xs uppercase font-black tracking-widest text-[#F1E8DB]/60 bg-white/5 px-4 py-2 rounded-xl border border-white/10 w-fit">
            Automatische EPG TV-Gids Inbegrepen
          </div>
        </div>

        {/* Dynamic Channel Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {category.channels.map((channel, idx) => (
            <div
              key={idx}
              className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-2xl p-5 shadow-xl flex flex-col justify-between hover:-translate-y-1 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-[#CA1421] text-[#F1E8DB] text-[10px] font-black uppercase tracking-wider rounded-md">
                    {channel.quality}
                  </span>
                  <span className="text-[10px] font-black uppercase text-[#1A1A1D]/60 tracking-wider">
                    {channel.genre || category.name}
                  </span>
                </div>

                <div className="flex items-center gap-3 my-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1D] flex items-center justify-center shrink-0 text-[#F1E8DB] font-black text-sm group-hover:bg-[#CA1421] transition-colors">
                    <Tv className="w-5 h-5 text-[#F1E8DB]" />
                  </div>
                  <h3 className="font-black text-[#1A1A1D] text-lg uppercase tracking-tight leading-tight">
                    {channel.name}
                  </h3>
                </div>

                <p className="text-[#1A1A1D]/80 text-xs font-bold mt-2 leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1A1A1D]/15 flex items-center justify-between text-[11px] font-black uppercase text-[#CA1421]">
                <span>✓ 50/60 FPS Vloeiend</span>
                <span>Catch-Up 7 Dagen</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deep Dive Article Content */}
      <section className="py-16 bg-[#1A1A1D] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1D] uppercase tracking-tight mb-4">
              Waarom {category.name} streamen via {CONSTANTS.BRAND_NAME}?
            </h2>
            <div className="prose text-[#1A1A1D]/90 font-medium text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Traditionele kabeltelevisie dwingt kijkers vaak tot dure aanvullende themapakketten met langlopende contracten. Met de dedicated servers van <strong>{CONSTANTS.BRAND_NAME}</strong> ontgrendelt u het volledige <strong>{category.name}</strong> pakket zonder restricties.
              </p>
              <p>
                Onze streamingservers zijn rechtstreeks aangesloten op toonaangevende Europese internetknooppunten (AMS-IX). Hierdoor geniet u van stabiele verbindingen, minimale vertraging bij live sportuitzendingen en storingsvrije streamkwaliteit op elk scherm.
              </p>
            </div>
          </div>

          {/* Technical Specs Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
              <Cpu className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#F1E8DB]">H.265 / HEVC</h3>
              <p className="text-xs text-[#F1E8DB]/60 font-bold mt-1">Scherp beeld met minimaal dataverbruik</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
              <MonitorSmartphone className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#F1E8DB]">Universeel Compatibel</h3>
              <p className="text-xs text-[#F1E8DB]/60 font-bold mt-1">Smart TV, Firestick, Android, Apple TV & PC</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
              <ShieldCheck className="w-8 h-8 text-[#CA1421] mx-auto mb-2" />
              <h3 className="font-black text-sm uppercase text-[#F1E8DB]">Anti-Freeze Loadbalancing</h3>
              <p className="text-xs text-[#F1E8DB]/60 font-bold mt-1">Geen buffering tijdens drukbezochte piekuren</p>
            </div>
          </div>

          {/* Category FAQ Accordion */}
          <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-[#F1E8DB] uppercase tracking-tight mb-8 text-center">
              Veelgestelde Vragen over <span className="text-[#CA1421]">{category.name}</span>
            </h2>

            <div className="space-y-4">
              {category.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-2xl p-6 shadow-xl"
                >
                  <h3 className="text-base sm:text-lg font-black text-[#1A1A1D] uppercase tracking-tight mb-2 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#CA1421]" />
                    {faq.question}
                  </h3>
                  <p className="text-[#1A1A1D]/80 text-sm font-bold leading-relaxed pl-7 border-l-2 border-[#CA1421] ml-1">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Existing Centered ShareButtons Component */}
          <div className="w-full flex justify-center items-center my-10">
            <ShareButtons
              title={`${category.name} Zenders Overzicht - ${CONSTANTS.BRAND_NAME}`}
              url={`https://${CONSTANTS.DOMAIN}/zenders/${category.slug}`}
            />
          </div>

          {/* Other Categories Links Carousel */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="text-xl font-black text-[#F1E8DB] uppercase tracking-tight mb-6 text-center">
              Bekijk Ook Onze Andere Zenderpakketten
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {channelsData
                .filter((c) => c.slug !== category.slug)
                .map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/zenders/${cat.slug}`}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#CA1421] hover:bg-white/10 transition-all text-center group"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase text-[#F1E8DB] group-hover:text-[#CA1421] transition-colors block">
                      {cat.name}
                    </span>
                    <span className="text-[10px] text-[#F1E8DB]/50 font-bold mt-1 block">
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
              className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#F1E8DB] transition-colors font-black text-xs uppercase tracking-widest"
            >
              <ArrowLeft className="w-4 h-4" /> Terug naar de homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}