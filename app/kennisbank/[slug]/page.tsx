import { blogPosts } from '@/lib/blog';
import { CONSTANTS, generateSEOMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Clock,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Headphones,
  MessageCircle,
  Flame,
  BookOpen,
} from 'lucide-react';
import ShareButtons from '../../components/ShareButtons';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  if (!post) return generateSEOMetadata('Artikel Niet Gevonden');

  const shortTitle = post.title.length > 55 ? post.title.substring(0, 52) + '...' : post.title;

  return {
    title: `${shortTitle} | ${CONSTANTS.BRAND_NAME} Kennisbank`,
    description:
      post.description ||
      post.excerpt ||
      `Lees de volledige ${CONSTANTS.BRAND_NAME} handleiding en tips.`,
    keywords: post.keywords ? post.keywords.join(', ') : CONSTANTS.PRIMARY_KEYWORDS.join(', '),
    alternates: {
      canonical: `https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`,
      languages: {
        'nl-NL': `https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`,
        'nl-BE': `https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`,
      },
    },
    openGraph: {
      title: `${shortTitle} | ${CONSTANTS.BRAND_NAME} Blog`,
      description:
        post.description ||
        post.excerpt ||
        `Lees de volledige ${CONSTANTS.BRAND_NAME} handleiding.`,
      url: `https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`,
      type: 'article',
      locale: 'nl_NL',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${shortTitle} | ${CONSTANTS.BRAND_NAME}`,
      description:
        post.description ||
        post.excerpt ||
        `Lees de volledige ${CONSTANTS.BRAND_NAME} handleiding.`,
      images: [post.image || `https://${CONSTANTS.DOMAIN}/img/structer.webp`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));

  const displayCategory =
    post.keywords && post.keywords.length > 0 ? post.keywords[0] : 'IPTV Handleiding';

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description || post.excerpt,
    keywords: post.keywords ? post.keywords.join(', ') : '',
    image: [post.image || `https://${CONSTANTS.DOMAIN}/img/structer.webp`],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'nl-NL',
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: CONSTANTS.BRAND_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `https://${CONSTANTS.DOMAIN}/img/structer.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`,
    },
  };

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
        name: 'Kennisbank',
        item: `https://${CONSTANTS.DOMAIN}/kennisbank`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`,
      },
    ],
  };

  const whatsappIboMsg = encodeURIComponent('Hey i want to get subscription to iboplayer');
  const whatsappSubMsg = encodeURIComponent('Hey i want to get iptv subscription');

  return (
    <article className="flex flex-col min-h-screen bg-[#1B1B1F] text-white selection:bg-[#FFD700] selection:text-[#1B1B1F]">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        id="article-schema-data"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        id="breadcrumb-schema-data"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Styled Article Blocks, Unique Headings, Lists & Markdown Elements */}
      <style>{`
        .omni-article-content h1,
        .omni-article-content h2,
        .omni-article-content h3,
        .omni-article-content h4 {
          color: #0B132B !important;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.015em;
        }

        .omni-article-content h2 {
          position: relative;
          margin-top: 2.5rem !important;
          margin-bottom: 1.15rem !important;
          padding: 0.35rem 0 0.65rem 1rem !important;
          border-left: 4px solid #E3182B;
          border-bottom: 1px solid rgba(11, 19, 43, 0.14);
          font-size: 1.35rem !important;
          line-height: 1.25 !important;
        }

        .omni-article-content h2::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 4.5rem;
          height: 3px;
          border-radius: 999px;
          background: #FFD700;
        }

        .omni-article-content h3 {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          margin-top: 1.75rem !important;
          margin-bottom: 0.75rem !important;
          padding-bottom: 0.25rem;
          border-bottom: 3px solid #FFD700;
          font-size: 1.05rem !important;
          line-height: 1.35 !important;
        }

        .omni-article-content h4 {
          margin-top: 1.25rem !important;
          margin-bottom: 0.5rem !important;
          padding-left: 0.65rem;
          border-left: 3px solid #0B132B;
          font-size: 0.92rem !important;
        }

        .omni-article-content p {
          color: #1E293B !important;
          font-weight: 600;
          line-height: 1.72;
          margin-bottom: 1.25rem !important;
        }

        .omni-article-content strong,
        .omni-article-content b {
          color: #0B132B !important;
          font-weight: 900;
        }

        .omni-article-content ul,
        .omni-article-content ol {
          margin: 1.4rem 0 1.75rem 0 !important;
          padding: 1.15rem 1.25rem 1.15rem 2.35rem !important;
          background: #F7F7F7;
          border: 1px solid rgba(11, 19, 43, 0.12);
          border-left: 4px solid #0B132B;
          border-radius: 1rem;
          color: #1E293B !important;
          font-weight: 600;
        }

        .omni-article-content ul {
          list-style-type: none !important;
          padding-left: 1.25rem !important;
        }

        .omni-article-content ul > li {
          position: relative;
          padding-left: 1.35rem;
          margin-bottom: 0.65rem;
          color: #1E293B !important;
          line-height: 1.62;
        }

        .omni-article-content ul > li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.52em;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 999px;
          background: #E3182B;
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.55);
        }

        .omni-article-content ul > li:last-child,
        .omni-article-content ol > li:last-child {
          margin-bottom: 0;
        }

        .omni-article-content ol {
          list-style-type: decimal !important;
          counter-reset: omni-step;
        }

        .omni-article-content ol > li {
          margin-bottom: 0.7rem;
          padding-left: 0.35rem;
          color: #1E293B !important;
          line-height: 1.62;
        }

        .omni-article-content ol > li::marker {
          color: #0B132B;
          font-weight: 900;
        }

        .omni-article-content blockquote {
          margin: 1.75rem 0 !important;
          padding: 1.15rem 1.4rem !important;
          background: #F7F7F7 !important;
          border: 1px solid rgba(11, 19, 43, 0.14) !important;
          border-left: 4px solid #E3182B !important;
          border-radius: 0 1rem 1rem 0 !important;
          color: #0B132B !important;
          font-style: normal !important;
          font-weight: 700 !important;
        }

        .omni-article-content code {
          background: #F7F7F7 !important;
          color: #0B132B !important;
          border: 1px solid rgba(11, 19, 43, 0.18);
          border-bottom: 2px solid #FFD700;
          padding: 0.15rem 0.45rem;
          border-radius: 0.4rem;
          font-weight: 700;
        }

        .omni-article-content pre {
          margin: 1.75rem 0 !important;
          padding: 1.25rem !important;
          background: #0B132B !important;
          color: #FFFFFF !important;
          border-radius: 1rem !important;
          border-left: 4px solid #FFD700 !important;
          overflow-x: auto;
        }

        .omni-article-content pre code {
          background: transparent !important;
          color: #FFFFFF !important;
          border: none !important;
          padding: 0 !important;
        }

        .omni-article-content hr {
          border: 0 !important;
          height: 2px !important;
          background: linear-gradient(90deg, #E3182B 0%, #FFD700 45%, rgba(11, 19, 43, 0.12) 100%) !important;
          margin: 2.25rem 0 !important;
          border-radius: 999px;
        }

        .omni-article-content .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.25rem;
          margin: 2rem 0;
        }

        .omni-article-content .feature-card {
          position: relative;
          background: #F7F7F7;
          border-radius: 1.25rem;
          padding: 1.5rem;
          border: 2px solid rgba(11, 19, 43, 0.14);
          box-shadow: 0 6px 18px rgba(11, 19, 43, 0.05);
          transition: transform 0.25s ease, border-color 0.25s ease;
          color: #0B132B;
        }

        .omni-article-content .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 1.5rem;
          right: 1.5rem;
          height: 3px;
          border-radius: 999px;
          background: linear-gradient(90deg, #E3182B, #FFD700);
          opacity: 0.9;
          transition: opacity 0.25s ease;
        }

        .omni-article-content .feature-card:hover {
          transform: translateY(-2px);
          border-color: #E3182B;
        }

        .omni-article-content .feature-card h3 {
          color: #0B132B !important;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-top: 0.25rem !important;
          margin-bottom: 0.5rem !important;
          font-size: 1.05rem !important;
        }

        .omni-article-content .feature-card p {
          color: #1E293B !important;
          font-weight: 600;
          line-height: 1.65;
          font-size: 0.92rem !important;
          margin: 0 !important;
        }

        .omni-article-content .comparison-table {
          overflow-x: auto;
          margin: 2rem 0;
          border-radius: 1.25rem;
          border: 2px solid rgba(11, 19, 43, 0.15);
          background: #FFFFFF;
          box-shadow: 0 8px 24px rgba(11, 19, 43, 0.05);
        }

        .omni-article-content .comparison-table table {
          width: 100%;
          min-width: 560px;
          border-collapse: collapse;
          background: #FFFFFF;
          margin: 0;
        }

        .omni-article-content .comparison-table th,
        .omni-article-content .comparison-table td {
          padding: 1rem 1.15rem;
          text-align: left;
          border-bottom: 1px solid rgba(11, 19, 43, 0.12);
          color: #1E293B;
          font-weight: 600;
          font-size: 0.92rem;
        }

        .omni-article-content .comparison-table th {
          background: #0B132B;
          color: #FFD700;
          font-weight: 900;
          font-size: 0.78rem;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-bottom: 2px solid #E3182B;
        }

        .omni-article-content .comparison-table tbody tr:nth-child(even) {
          background: #F7F7F7;
        }

        .omni-article-content .comparison-table tbody tr:hover {
          background: rgba(244, 167, 167, 0.18);
        }

        .omni-article-content .comparison-table tbody tr:last-child td {
          border-bottom: none;
        }

        .omni-article-content .article-image {
          border-radius: 1.25rem;
          margin: 1.75rem 0;
          width: 100%;
          height: auto;
          border: 2px solid rgba(11, 19, 43, 0.15);
          box-shadow: 0 10px 24px rgba(11, 19, 43, 0.08);
          display: block;
        }

        .omni-article-content .internal-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: #E3182B !important;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.85em;
          letter-spacing: 0.05em;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .omni-article-content .internal-link:hover {
          color: #0B132B !important;
        }

        .omni-article-content .highlight {
          color: #E3182B !important;
          font-weight: 800;
        }

        .omni-article-content .info-box {
          background: #F7F7F7;
          border: 2px solid rgba(11, 19, 43, 0.14);
          border-left: 4px solid #E3182B;
          padding: 1.25rem 1.4rem;
          border-radius: 1rem;
          margin: 1.75rem 0;
          color: #0B132B;
          font-weight: 600;
          line-height: 1.65;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 lg:pt-44 pb-14 sm:pb-16 overflow-hidden border-b border-white/10">
        {/* Subtle Grid Overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient Accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[820px] rounded-full bg-[#E3182B]/15 blur-[145px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-28 right-10 h-64 w-64 rounded-full bg-[#FFD700]/8 blur-[120px]"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Trail */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-widest text-white/60 mb-6"
          >
            <Link href="/" className="hover:text-[#FFD700] transition-colors">
              Home
            </Link>
            <span className="text-white/25">/</span>
            <Link href="/kennisbank" className="hover:text-[#FFD700] transition-colors">
              Kennisbank
            </Link>
            <span className="text-white/25">/</span>
            <span className="text-[#FFD700] truncate max-w-[180px] sm:max-w-xs">
              {displayCategory}
            </span>
          </nav>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#232329] border border-[#FFD700]/35 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.18em] text-[#FFD700] shadow-md mb-5">
            <BookOpen className="w-3.5 h-3.5 text-[#E3182B]" />
            <span>{displayCategory}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] font-black text-white uppercase tracking-tight leading-[1.07] max-w-4xl mx-auto">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/75 font-medium max-w-2xl mx-auto leading-relaxed">
            {post.description || post.excerpt}
          </p>

          {/* Metadata Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-bold uppercase tracking-wider">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#232329] border border-white/10 px-4 py-2 text-white/85 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>
                {new Date(post.date).toLocaleDateString('nl-NL', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#232329] border border-white/10 px-4 py-2 text-white/85 shadow-sm">
              <User className="w-3.5 h-3.5 text-[#FFD700]" />
              <span>{post.author}</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#232329] border border-[#10B981]/35 px-4 py-2 text-[#10B981] shadow-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>{readTime} min leestijd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar Grid (Light Mode #F7F7F7 for Main Article Section) */}
      <div className="relative bg-[#F7F7F7] text-[#0B132B] overflow-x-clip">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 h-[320px] w-[720px] rounded-full bg-[#F4A7A7]/35 blur-[145px]"
        />

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/kennisbank"
              className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-[#0B132B]/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#0B132B] hover:border-[#E3182B] hover:text-[#E3182B] transition-all shadow-sm group"
            >
              <ArrowLeft className="w-4 h-4 text-[#E3182B] group-hover:-translate-x-0.5 transition-transform" />
              <span>Terug naar alle artikelen</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
            {/* Article Body Column (8 Cols) — Light Mode */}
            <div className="lg:col-span-8 space-y-8">
              {/* Featured Cover */}
              {post.image && (
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-white border-2 border-[#0B132B]/15 shadow-md">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1F]/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#1B1B1F]/90 backdrop-blur-md border border-white/15 px-3.5 py-1.5 text-[11px] font-black uppercase tracking-wider text-[#FFD700]">
                    <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                    <span>{CONSTANTS.BRAND_NAME} Guide</span>
                  </div>
                </div>
              )}

              {/* Prose Container — Deep Dark Navy/Near-Black Text on White Card */}
              <div
                className="omni-article-content rounded-3xl bg-white text-[#0B132B] border-2 border-[#0B132B]/15 p-6 sm:p-8 lg:p-10 shadow-md prose prose-base md:prose-lg max-w-none
                  [&>h1]:text-2xl [&>h1]:md:text-3xl [&>h1]:font-black [&>h1]:text-[#0B132B] [&>h1]:mb-5 [&>h1]:tracking-tight [&>h1]:uppercase
                  [&>p]:text-[#1E293B] [&>p]:text-sm [&>p]:md:text-base [&>p]:font-semibold [&>p]:leading-relaxed [&>p]:mb-5
                  [&>a]:text-[#E3182B] [&>a]:font-bold [&>a]:underline-offset-4 [&>a]:hover:underline
                  [&>img]:rounded-2xl [&>img]:my-7 [&>img]:border [&>img]:border-[#0B132B]/15 [&>img]:w-full [&>img]:h-auto
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Module */}
              <div className="rounded-3xl bg-white text-[#0B132B] border-2 border-[#0B132B]/15 p-5 sm:p-6 shadow-md">
                <ShareButtons
                  title={`${post.title} - ${CONSTANTS.BRAND_NAME}`}
                  url={`https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`}
                />
              </div>

              {/* Topic Tags */}
              {post.keywords && post.keywords.length > 0 && (
                <div className="rounded-3xl bg-white text-[#0B132B] border-2 border-[#0B132B]/15 p-6 shadow-md">
                  <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b border-[#0B132B]/10">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1B1B1F] border border-[#FFD700]/30 text-[#FFD700]">
                      <Tag className="w-4 h-4" />
                    </div>
                    <h2 className="text-sm font-black uppercase tracking-widest text-[#0B132B] pl-3 border-l-4 border-[#E3182B]">
                      Gerelateerde Onderwerpen
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.slice(0, 8).map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-[#0B132B]/15 text-xs font-bold text-[#0B132B] hover:border-[#E3182B] hover:text-[#E3182B] transition-colors cursor-default"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio Card */}
              <div className="rounded-3xl bg-white text-[#0B132B] border-2 border-[#0B132B]/15 p-6 sm:p-8 shadow-md">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B1B1F] border border-[#FFD700]/45 flex items-center justify-center text-[#FFD700] font-black text-2xl uppercase shrink-0 shadow-sm">
                    {post.author[0]}
                  </div>
                  <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F7F7] border border-[#10B981]/35 px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-[#10B981]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                      <span>Geverifieerde Auteur</span>
                    </div>
                    <h3 className="text-xl font-black text-[#0B132B] uppercase tracking-tight inline-block border-b-3 border-[#FFD700] pb-0.5">
                      {post.author}
                    </h3>
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#E3182B]">
                      Streaming &amp; IPTV Specialist • {CONSTANTS.BRAND_NAME}
                    </p>
                    <p className="text-sm text-[#1E293B] font-semibold leading-relaxed pt-1">
                      Gespecialiseerd in streamingprotocollen, app-configuraties en
                      netwerkoptimalisaties. Helpt gebruikers dagelijks om het beste uit hun 4K IPTV
                      abonnement en Smart TV installaties te halen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar (4 Cols) — Untouched Logic & Sticky Structure */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 text-white">
              {/* Sidebar Card 1: IBO Player Support */}


              {/* Sidebar Card 2: Featured Plans */}
              <div className="rounded-3xl bg-[#232329] border border-white/10 p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#FFD700]">
                      <Zap className="w-3.5 h-3.5" /> {CONSTANTS.BRAND_NAME}
                    </span>
                    <h2 className="mt-1 text-lg font-black text-white uppercase tracking-tight">
                      Populaire Pakketten
                    </h2>
                  </div>
                  <span className="rounded-full bg-[#1B1B1F] border border-white/10 px-2.5 py-1 text-[10px] font-extrabold uppercase text-white/75">
                    4K FHD
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Standard Plan */}
                  <div className="rounded-2xl bg-[#1B1B1F] border border-white/10 p-4 hover:border-white/25 transition-colors">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-white">
                        Standaard Pakket
                      </span>
                      <span className="text-lg font-black text-white">€25</span>
                    </div>
                    <p className="text-[11px] text-white/60 font-medium mb-3">
                      Tot 3 schermen • Directe levering binnen 5 min
                    </p>
                    <a
                      href={`http://support-tv.online/?text=${whatsappSubMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center rounded-xl bg-[#232329] border border-white/15 px-3.5 py-2.5 text-[11px] font-black uppercase tracking-wider text-white hover:border-[#FFD700] hover:text-[#FFD700] transition-colors"
                    >
                      Bestel Nu
                    </a>
                  </div>

                  {/* VIP Plan */}
                  <div className="rounded-2xl bg-[#1B1B1F] border border-[#FFD700]/60 p-4 relative shadow-[0_14px_32px_rgba(0,0,0,0.38)]">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="inline-flex items-center rounded-full bg-[#FFD700] px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#1B1B1F]">
                        Meest Gekozen
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#10B981]">
                        Anti-Freeze
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="text-sm font-black uppercase tracking-wider text-white">
                        12 Maanden VIP
                      </span>
                      <span className="text-xl font-black text-[#FFD700]">€59</span>
                    </div>
                    <p className="text-[11px] text-white/65 font-medium mb-3.5">
                      25.000+ zenders • 60.000+ VOD • 7 dagen garantie
                    </p>
                    <a
                      href={`http://support-tv.online/?text=${whatsappSubMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center rounded-xl bg-[#FFD700] px-4 py-2.5 text-[11px] font-black uppercase tracking-wider text-[#1B1B1F] hover:brightness-95 transition-all"
                    >
                      Kies 12 Maanden VIP
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 text-center">
                  <Link
                    href="/pakketten"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#FFD700] hover:underline"
                  >
                    <span>Alle pakketten vergelijken</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

                            <div className="rounded-3xl bg-[#232329] border border-white/10 overflow-hidden shadow-xl">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#E3182B] via-[#FFD700] to-[#10B981]" />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1B1B1F] border border-[#E3182B]/40 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#FFD700]">
                      <Flame className="w-3.5 h-3.5 text-[#E3182B]" /> Speler Hulp
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold text-[#10B981] uppercase tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                      <span>24/7 Live</span>
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg font-black text-white uppercase tracking-tight">
                      IBO Player Activeren
                    </h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-white/70 font-medium leading-relaxed">
                      Hulp nodig met het instellen of activeren van IBO Player op uw Smart TV of
                      mediabox? Ons team helpt u direct.
                    </p>
                  </div>

                  <a
                    href={`http://support-tv.online/?text=${whatsappIboMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ffd700] px-4 py-3.5 text-xs font-black uppercase tracking-wider text-[#1B1B1F] hover:brightness-95 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Direct Contact via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Sidebar Card 3: Related Articles */}
              <div className="rounded-3xl bg-[#232329] border border-white/10 p-6 shadow-xl">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/10">
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  <h2 className="text-sm font-black uppercase tracking-widest text-white">
                    Meer uit de Kennisbank
                  </h2>
                </div>

                <div className="space-y-3">
                  {relatedPosts.map((relPost) => (
                    <Link
                      key={relPost.slug}
                      href={`/kennisbank/${relPost.slug}`}
                      className="flex items-center gap-3.5 group rounded-2xl bg-[#1B1B1F] border border-white/10 p-3 hover:border-[#FFD700]/45 transition-all"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-[#232329]">
                        <Image
                          src={relPost.image}
                          alt={relPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="64px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs font-black text-white group-hover:text-[#FFD700] transition-colors uppercase line-clamp-2 leading-snug">
                          {relPost.title}
                        </h3>
                        <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-white/55 group-hover:text-white/80">
                          <span>Lees artikel</span>
                          <ArrowRight className="w-3 h-3 text-[#FFD700]" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Bottom Trust Strip */}
      <div className="border-t border-white/10 mt-auto py-8 bg-[#141418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white/70 text-xs font-extrabold uppercase tracking-widest">
            <span className="inline-flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FFD700]" /> 4K Ultra HD
            </span>
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" /> 99.9% Server Uptime
            </span>
            <span className="inline-flex items-center gap-2">
              <Headphones className="w-4 h-4 text-[#FFD700]" /> 24/7 WhatsApp Support
            </span>
          </div>
          <p className="text-center text-white/45 text-xs mt-5 font-bold">
            &copy; 2026 {CONSTANTS.BRAND_NAME}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </article>
  );
}