import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${CONSTANTS.DOMAIN}`),
  title: {
    default: `${CONSTANTS.BRAND_NAME} Blog - Handleidingen & Tips 2026`,
    template: `%s | ${CONSTANTS.BRAND_NAME}`,
  },
  description: `Ontdek de nieuwste ${CONSTANTS.BRAND_NAME} handleidingen, zenderupdates en installatietips voor Smart TV, Firestick en Android in 4K.`,
  keywords: [
    `${CONSTANTS.BRAND_NAME} blog`,
    'IPTV Handleidingen',
    'IPTV Tips Nederland',
    'IPTV Installeren Smart TV',
    'Beste IPTV Kopen 2026',
    'IPTV Viaplay Ziggo Sport',
    'IPTV Smarters Handleiding',
    'TiviMate Instellen',
    '4K IPTV Streaming Tips',
  ],
  alternates: {
    canonical: `https://${CONSTANTS.DOMAIN}/kennisbank`,
    languages: {
      'nl-NL': `https://${CONSTANTS.DOMAIN}/kennisbank`,
      'nl-BE': `https://${CONSTANTS.DOMAIN}/kennisbank`,
    },
  },
  openGraph: {
    title: `${CONSTANTS.BRAND_NAME} Blog - IPTV Handleidingen & Tips 2026`,
    description: `Blijf op de hoogte met de nieuwste IPTV installatietips, zenderlijst updates en nieuws van ${CONSTANTS.BRAND_NAME}.`,
    url: `https://${CONSTANTS.DOMAIN}/kennisbank`,
    siteName: CONSTANTS.BRAND_NAME,
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
        width: 1200,
        height: 630,
        alt: `${CONSTANTS.BRAND_NAME} Blog - IPTV Handleidingen & Tips`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${CONSTANTS.BRAND_NAME} Blog - IPTV Tips & Handleidingen`,
    description: `Nieuwste IPTV handleidingen, app instellingen en zendernieuws van ${CONSTANTS.BRAND_NAME}.`,
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

const BlogListingSchema = () => (
  <script
    type="application/ld+json"
    id="blog-listing-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${CONSTANTS.BRAND_NAME} Blog`,
        description: `Het laatste nieuws, installatiehandleidingen en streamingtips voor ${CONSTANTS.BRAND_NAME} IPTV.`,
        url: `https://${CONSTANTS.DOMAIN}/kennisbank`,
        publisher: {
          '@type': 'Organization',
          name: CONSTANTS.BRAND_NAME,
          logo: {
            '@type': 'ImageObject',
            url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          },
        },
        blogPost: blogPosts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description || post.excerpt,
          url: `https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: 'nl-NL',
          author: {
            '@type': 'Person',
            name: post.author,
          },
          image: post.image,
        })),
      }),
    }}
  />
);

const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="breadcrumb-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
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
            name: `${CONSTANTS.BRAND_NAME} Kennisbank & Blog`,
            item: `https://${CONSTANTS.DOMAIN}/kennisbank`,
          },
        ],
      }),
    }}
  />
);

const WebPageSchema = () => (
  <script
    type="application/ld+json"
    id="webpage-schema"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `${CONSTANTS.BRAND_NAME} Blog - Handleidingen & Tips 2026`,
        description: `Bekijk de officiële kennisbank van ${CONSTANTS.BRAND_NAME} met duidelijke IPTV tutorials en nieuws.`,
        url: `https://${CONSTANTS.DOMAIN}/kennisbank`,
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

export default function BlogListing() {
  return (
    <>
      <WebPageSchema />
      <BlogListingSchema />
      <BreadcrumbSchema />

      <div className="flex flex-col min-h-screen bg-[#1A1A1D] px-4 sm:px-6 lg:px-8 py-24 text-[#F1E8DB]">
        {/* Header Hero */}
        <div className="max-w-7xl mx-auto text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#CA1421]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#F1E8DB] uppercase tracking-tighter mb-6 mt-16 relative z-10">
            {CONSTANTS.BRAND_NAME} <span className="text-[#CA1421]">Kennisbank</span>
          </h1>
          <p className="text-lg md:text-xl text-[#F1E8DB]/70 max-w-2xl mx-auto font-bold relative z-10 leading-relaxed">
            Blijf op de hoogte van de nieuwste installatie-instructies, app-configuraties en tips om het maximale uit uw {CONSTANTS.BRAND_NAME} abonnement te halen.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {blogPosts.map((post, index) => (
            <Link 
              href={`/kennisbank/${post.slug}`} 
              key={post.id} 
              className="group rounded-[2rem] overflow-hidden transition-all duration-500 flex flex-col relative transform hover:-translate-y-2 isolate bg-[#F1E8DB] border-4 border-[#CA1421] shadow-2xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">
                <Image
                  src={post.image}
                  alt={`${post.title} - ${CONSTANTS.BRAND_NAME} Handleiding`}
                  width={600}
                  height={750}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  priority={index < 3}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
                
                {/* Category Tags */}
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                  {post.keywords && post.keywords.slice(0, 2).map((kw: string) => (
                    <span 
                      key={kw} 
                      className="px-3 py-1.5 bg-[#1A1A1D] text-[#F1E8DB] border border-white/10 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Meta & Title */}
              <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 text-xs font-black text-[#CA1421] mb-3 uppercase tracking-widest drop-shadow-md">
                  <div className="w-8 h-8 rounded-full bg-black/80 flex items-center justify-center border border-[#CA1421] text-[#F1E8DB] flex-shrink-0 font-black">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-[#F1E8DB]">{post.author}</span>
                  <span className="text-[#F1E8DB]/50">•</span>
                  <span className="text-[#F1E8DB]/80 text-xs">
                    {new Date(post.date).toLocaleDateString('nl-NL', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-[#F1E8DB] mb-2 group-hover:text-[#CA1421] transition-colors duration-300 leading-tight drop-shadow-lg line-clamp-2 uppercase tracking-tight">
                  {post.title}
                </h2>
                
                {/* Hover Reveal Snippet */}
                <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                  <p className="text-[#F1E8DB]/90 text-sm font-bold leading-relaxed mt-2 line-clamp-3">
                    {post.description || post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#CA1421] font-black text-xs uppercase tracking-widest mt-3 group-hover:gap-3 transition-all">
                    Lees Artikel <ArrowRight className="w-3 h-3 shrink-0" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}