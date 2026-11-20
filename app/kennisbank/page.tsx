import { blogPosts } from '@/lib/blog';
import { CONSTANTS } from '@/lib/seo';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Tv2,
  Zap,
} from 'lucide-react';

/* =========================================================
   OMNIPTV — BLOG LISTING (/kennisbank) — 50/50 LIGHT & DARK
   Dark BG / Card : #1B1B1F / #232329
   Light BG / Card: #F7F7F7 / #FFFFFF (flat cards)
   Accent Red     : #E3182B
   Important CTA  : #FFD700 (gold + #1B1B1F text)
   Muted Slate    : #6B7280
   Success        : #10B981
   Soft Blush     : #F4A7A7
   ========================================================= */

const POSTS_PER_PAGE = 6;

/** Ensure URLs used in schema are absolute. */
function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `https://${CONSTANTS.DOMAIN}${
    pathOrUrl.startsWith('/') ? '' : '/'
  }${pathOrUrl}`;
}

const sanitizedHandle = CONSTANTS.BRAND_NAME.replace(/\s+/g, '').toLowerCase();

/* ---------------- Metadata ---------------- */

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
    creator: `@${sanitizedHandle}`,
    site: `@${sanitizedHandle}`,
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

/* ---------------- JSON-LD ---------------- */

const BlogListingSchema = ({ posts }: { posts: typeof blogPosts }) => (
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
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description || post.excerpt || '',
          url: `https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`,
          datePublished: post.date,
          dateModified: post.date,
          inLanguage: 'nl-NL',
          author: {
            '@type': 'Person',
            name: post.author,
          },
          image: absoluteUrl(post.image),
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

/* ---------------- Pagination UI ---------------- */

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Blog paginering"
      className="max-w-7xl mx-auto w-full flex items-center justify-center gap-2.5 mt-14 relative z-10 flex-wrap"
    >
      {currentPage > 1 && (
        <Link
          href={`/kennisbank?page=${currentPage - 1}`}
          rel="prev"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#6B7280]/25 text-[#1B1B1F] font-black uppercase tracking-widest text-xs hover:border-[#E3182B] hover:text-[#E3182B] transition-colors shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          <span>Vorige</span>
        </Link>
      )}

      {pages.map((page) => (
        <Link
          key={page}
          href={`/kennisbank?page=${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`w-10 h-10 flex items-center justify-center rounded-full font-black text-sm border transition-all ${
            page === currentPage
              ? 'bg-[#FFD700] border-[#1B1B1F]/15 text-[#1B1B1F] shadow-md'
              : 'bg-white border-[#6B7280]/25 text-[#1B1B1F] hover:border-[#E3182B] hover:text-[#E3182B]'
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={`/kennisbank?page=${currentPage + 1}`}
          rel="next"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-[#6B7280]/25 text-[#1B1B1F] font-black uppercase tracking-widest text-xs hover:border-[#E3182B] hover:text-[#E3182B] transition-colors shadow-sm"
        >
          <span>Volgende</span>
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      )}
    </nav>
  );
}

/* ---------------- Page ---------------- */

interface BlogListingProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogListing({ searchParams }: BlogListingProps) {
  const { page } = await searchParams;

  const rawPage = Number.parseInt(page ?? '1', 10);
  const currentPage = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;

  const totalPages = Math.max(
    1,
    Math.ceil(blogPosts.length / POSTS_PER_PAGE)
  );
  const safePage = Math.min(currentPage, totalPages);

  const start = (safePage - 1) * POSTS_PER_PAGE;
  const pagePosts = blogPosts.slice(start, start + POSTS_PER_PAGE);

  return (
    <>
      <WebPageSchema />
      <BlogListingSchema posts={blogPosts} />
      <BreadcrumbSchema />

      <div className="flex flex-col min-h-screen bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden">
        {/* =========================================================
            1. HERO HEADER [DARK #1B1B1F]
            ========================================================= */}
        <section className="relative w-full bg-[#1B1B1F] text-white pt-28 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
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

          <header className="max-w-4xl mx-auto text-center relative z-10">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/65 mb-5"
            >
              <Link href="/" className="hover:text-[#FFD700] transition-colors">
                Home
              </Link>
              <span className="text-white/25">/</span>
              <span className="text-[#FFD700]">Kennisbank</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#232329] border border-[#FFD700]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD700] shadow-md mb-6">
              <BookOpen className="w-3.5 h-3.5 text-[#E3182B]" aria-hidden="true" />
              <span>Handleidingen &amp; Updates</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.06]">
              {CONSTANTS.BRAND_NAME}{' '}
              <span className="text-[#FFD700]">Kennisbank</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
              Blijf op de hoogte van de nieuwste installatie-instructies,
              app-configuraties en tips om het maximale uit uw{' '}
              <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong>{' '}
              abonnement te halen.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-wider text-white">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#232329] border border-white/10">
                <Zap className="w-3.5 h-3.5 text-[#FFD700]" aria-hidden="true" />
                4K &amp; Full HD Tips
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#232329] border border-white/10">
                <Tv2 className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
                Smart TV, Firestick &amp; Apps
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#232329] border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E3182B]" aria-hidden="true" />
                M3U &amp; Xtream Codes
              </span>
            </div>
          </header>
        </section>

        {/* =========================================================
            2. ARTICLES GRID [LIGHT #F7F7F7 + WHITE FLAT CARDS]
            ========================================================= */}
        <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[260px] w-[620px] rounded-full bg-[#F4A7A7]/35 blur-[140px]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(107,114,128,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(107,114,128,0.10) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 relative z-10">
            {pagePosts.map((post, index) => (
              <Link
                href={`/kennisbank/${post.slug}`}
                key={post.id ?? post.slug}
                className="group rounded-3xl overflow-hidden transition-all duration-300 flex flex-col bg-white text-[#1B1B1F] border-2 border-[#6B7280]/20 hover:border-[#E3182B] hover:-translate-y-1.5 shadow-lg hover:shadow-[0_22px_50px_rgba(227,24,43,0.14)]"
              >
                {/* Cover Media */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1B1B1F]">
                  <Image
                    src={post.image}
                    alt={`${post.title} - ${CONSTANTS.BRAND_NAME} Handleiding`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading={index < 3 ? 'eager' : 'lazy'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1F]/70 via-transparent to-transparent" />

                  {/* Category Tags */}
                  {post.keywords && post.keywords.length > 0 && (
                    <div className="absolute top-3.5 left-3.5 z-10 flex flex-wrap gap-1.5">
                      {post.keywords.slice(0, 2).map((kw: string) => (
                        <span
                          key={kw}
                          className="px-3 py-1 bg-[#1B1B1F] text-[#FFD700] border border-white/15 text-[10px] font-black uppercase tracking-widest rounded-full shadow-sm"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div>
                    {/* Meta Row */}
                    <div className="flex items-center justify-between gap-2 text-[11px] font-bold uppercase tracking-wider text-[#6B7280] mb-3">
                      <span className="inline-flex items-center gap-1.5 text-[#1B1B1F] font-extrabold">
                        <User className="w-3.5 h-3.5 text-[#E3182B]" aria-hidden="true" />
                        <span className="truncate">{post.author}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
                        <span>
                          {new Date(post.date).toLocaleDateString('nl-NL', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-lg sm:text-xl font-black text-[#1B1B1F] group-hover:text-[#E3182B] transition-colors leading-snug line-clamp-2 uppercase tracking-tight mb-2.5">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed line-clamp-3">
                      {post.description || post.excerpt}
                    </p>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-[#6B7280]/15 flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#10B981]">
                      4K Handleiding
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#E3182B] group-hover:gap-2.5 transition-all">
                      <span>Lees Artikel</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <Pagination currentPage={safePage} totalPages={totalPages} />
        </section>

        {/* =========================================================
            3. BOTTOM CALLOUT BANNER [DARK #1B1B1F CARD ON LIGHT #F7F7F7]
            ========================================================= */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] text-[#1B1B1F] border-t border-[#6B7280]/15">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[2rem] sm:rounded-[2.5rem] border-2 border-[#FFD700]/50 bg-[#1B1B1F] text-white p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#232329] border border-[#FFD700]/40 px-3.5 py-1 text-[11px] font-black uppercase tracking-widest text-[#FFD700] mb-4">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
                  <span>Directe Activatie Binnen 5 Minuten</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-tight text-white">
                  KLAAR OM TE STREAMEN IN{' '}
                  <span className="text-[#FFD700]">4K ULTRA HD?</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/75 font-medium leading-relaxed">
                  Bekijk onze abonnementen of raadpleeg de installatiehandleiding om{' '}
                  <strong className="text-white">{CONSTANTS.BRAND_NAME}</strong> direct op uw
                  scherm te activeren.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
                <Link
                  href="/pakketten"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-[#FFD700] px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1B1B1F] hover:brightness-95 transition-all hover:scale-105 shadow-lg"
                >
                  Bekijk Pakketten
                </Link>
                <Link
                  href="/installatie"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1B1B1F] hover:bg-[#F7F7F7] transition-all hover:scale-105 shadow-lg"
                >
                  Installatie Hulp
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}