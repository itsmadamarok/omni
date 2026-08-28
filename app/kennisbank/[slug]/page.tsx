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
  Headphones 
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
    description: post.description || post.excerpt || `Lees de volledige ${CONSTANTS.BRAND_NAME} handleiding en tips.`,
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
      description: post.description || post.excerpt || `Lees de volledige ${CONSTANTS.BRAND_NAME} handleiding.`,
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
      description: post.description || post.excerpt || `Lees de volledige ${CONSTANTS.BRAND_NAME} handleiding.`,
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

  // Reading time calculation in Dutch context
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readTime = Math.max(3, Math.ceil(wordCount / 200));

  const displayCategory = post.keywords && post.keywords.length > 0 ? post.keywords[0] : 'IPTV Handleiding';

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

  return (
    <article className="flex flex-col min-h-screen bg-[#1A1A1D] text-[#F1E8DB]">
      
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

      {/* Hero Header Section */}
      <section className="relative min-h-fit md:min-h-[55vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image}
            alt={`${post.title} - ${CONSTANTS.BRAND_NAME} Kennisbank Artikel`}
            width={1920}
            height={1080}
            priority
            fetchPriority="high"
            className="w-full h-full object-cover scale-105 brightness-[0.2]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1A1A1D]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D] via-transparent to-[#1A1A1D]" />
        </div>
        
        <div 
          className="absolute inset-0 z-0 opacity-5"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #CA1421 1px, transparent 1px),
              linear-gradient(to bottom, #CA1421 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-[#CA1421]/10 blur-[120px] md:blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-32 sm:pt-36 md:pt-40 lg:pt-48 pb-12 md:pb-16 flex flex-col items-center justify-center">
          
          <div className="inline-block mb-4 md:mb-6">
            <span className="px-4 py-2 bg-[#CA1421] text-[#F1E8DB] text-xs font-black uppercase tracking-widest rounded-full shadow-md">
              {displayCategory}
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-[#F1E8DB] tracking-tighter uppercase mb-4 md:mb-6 leading-none">
            {post.title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-[#F1E8DB]/80 font-bold max-w-2xl mx-auto leading-relaxed mb-6">
            {post.description || post.excerpt}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-[#F1E8DB]/60 text-xs md:text-sm font-black uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#CA1421]" />
              <span>
                {new Date(post.date).toLocaleDateString('nl-NL', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#CA1421]" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#CA1421]" />
              <span>{readTime} min leestijd</span>
            </div>
          </div>
        </div>
      </section>

      {/* Return Navigation Pathway */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8 md:mt-10">
        <Link 
          href="/kennisbank" 
          className="inline-flex items-center gap-2 text-[#CA1421] hover:text-[#F1E8DB] transition-colors font-black text-xs uppercase tracking-widest group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Terug naar alle artikelen
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* Prose Body */}
        <div 
          className="prose prose-invert prose-base md:prose-lg max-w-none
            [&>h1]:text-2xl [&>h1]:md:text-3xl [&>h1]:lg:text-4xl [&>h1]:font-black [&>h1]:text-[#F1E8DB] [&>h1]:mb-4 [&>h1]:md:mb-6 [&>h1]:tracking-tight [&>h1]:uppercase
            [&>h2]:text-xl [&>h2]:md:text-2xl [&>h2]:lg:text-3xl [&>h2]:font-black [&>h2]:text-[#F1E8DB] [&>h2]:mb-4 [&>h2]:md:mb-5 [&>h2]:mt-8 [&>h2]:md:mt-12 [&>h2]:tracking-tight [&>h2]:uppercase
            [&>h3]:text-lg [&>h3]:md:text-xl [&>h3]:lg:text-2xl [&>h3]:font-black [&>h3]:text-[#F1E8DB] [&>h3]:mb-3 [&>h3]:md:mb-4 [&>h3]:mt-6 [&>h3]:md:mt-8 [&>h3]:uppercase
            [&>h4]:text-base [&>h4]:md:text-lg [&>h4]:lg:text-xl [&>h4]:font-black [&>h4]:text-[#CA1421] [&>h4]:mb-2 [&>h4]:md:mb-3 [&>h4]:mt-4 [&>h4]:md:mt-6 [&>h4]:uppercase
            [&>p]:text-[#F1E8DB]/80 [&>p]:text-sm [&>p]:md:text-base [&>p]:lg:text-lg [&>p]:font-medium [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:md:mb-6
            [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:md:pl-6 [&>ul]:mb-4 [&>ul]:md:mb-6 [&>ul]:text-[#F1E8DB]/80 [&>ul]:font-medium
            [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:md:pl-6 [&>ol]:mb-4 [&>ol]:md:mb-6 [&>ol]:text-[#F1E8DB]/80 [&>ol]:font-medium
            [&>li]:mb-1.5 [&>li]:md:mb-2 [&>li]:text-[#F1E8DB]/80
            [&>a]:text-[#CA1421] [&>a]:font-black [&>a]:hover:text-[#F1E8DB] [&>a]:transition-colors
            [&>blockquote]:border-l-4 [&>blockquote]:border-[#CA1421] [&>blockquote]:bg-[#F1E8DB]/5 [&>blockquote]:pl-4 [&>blockquote]:md:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-4 [&>blockquote]:md:my-6 [&>blockquote]:text-[#F1E8DB]/70 [&>blockquote]:italic
            [&>code]:bg-[#F1E8DB]/10 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded-lg [&>code]:text-[#CA1421] [&>code]:text-xs [&>code]:md:text-sm
            [&>pre]:bg-[#1A1A1D] [&>pre]:p-4 [&>pre]:md:p-6 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:border-2 [&>pre]:border-[#CA1421]/20
            [&>img]:rounded-2xl [&>img]:my-6 [&>img]:md:my-8 [&>img]:border-2 [&>img]:border-[#CA1421]/20 [&>img]:w-full [&>img]:h-auto
            [&>hr]:border-[#CA1421]/20 [&>hr]:my-8 [&>hr]:md:my-12
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Share Component */}
        <div className="my-8">
          <ShareButtons 
            title={`${post.title} - ${CONSTANTS.BRAND_NAME}`} 
            url={`https://${CONSTANTS.DOMAIN}/kennisbank/${post.slug}`} 
          />
        </div>

        {/* Topic Keywords Tag Cloud */}
        {post.keywords && post.keywords.length > 0 && (
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-5 h-5 text-[#CA1421]" />
              <h4 className="text-[#F1E8DB] font-black text-base md:text-lg uppercase tracking-wide">
                Onderwerpen
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {post.keywords.slice(0, 8).map((keyword) => (
                <span 
                  key={keyword} 
                  className="px-4 py-2 bg-[#F1E8DB] text-[#1A1A1D] text-xs md:text-sm font-black uppercase tracking-wider rounded-full border-4 border-[#CA1421] shadow-md hover:bg-[#CA1421] hover:text-[#F1E8DB] transition-all cursor-default"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio Card */}
        <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-3xl border-4 border-[#CA1421] bg-[#F1E8DB]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#CA1421] to-[#DB4439] flex items-center justify-center text-[#F1E8DB] font-black text-2xl md:text-3xl uppercase flex-shrink-0 shadow-lg">
              {post.author[0]}
            </div>
            <div>
              <h4 className="text-[#1A1A1D] font-black text-xl md:text-2xl mb-1 uppercase tracking-tight">
                {post.author}
              </h4>
              <p className="text-[#CA1421] text-xs md:text-sm uppercase tracking-widest font-black mb-2 md:mb-3">
                IPTV Specialist bij {CONSTANTS.BRAND_NAME}
              </p>
              <p className="text-[#1A1A1D]/80 text-sm md:text-base font-bold leading-relaxed">
                Gespecialiseerd in streamingprotocollen, app-configuraties en netwerkoptimalisaties. Helpt gebruikers dagelijks om het beste uit hun 4K IPTV abonnement en Smart TV installaties te halen.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-3xl bg-[#F1E8DB] border-4 border-[#CA1421] text-center shadow-xl">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-4 shadow-md">
            <Sparkles className="w-4 h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">
              Direct Streamen
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-[#1A1A1D] uppercase tracking-wide mb-2">
            Klaar voor stabiele 4K IPTV?
          </h3>
          <p className="text-[#CA1421] font-bold text-sm md:text-base max-w-md mx-auto mb-6">
            Sluit u aan bij 20.000+ tevreden kijkers en geniet direct van alle sportzenders, live tv en films zonder buffering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto px-4">
            <Link 
              href="/pakketten" 
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-xs uppercase tracking-widest hover:bg-[#DB4439] transition-all shadow-md"
            >
              Bekijk Tarieven
            </Link>
            <Link 
              href="/kennisbank" 
              className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-[#1A1A1D] text-[#F1E8DB] font-black text-xs uppercase tracking-widest border-2 border-[#CA1421] hover:bg-white/5 transition-all"
            >
              Meer Artikelen
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Badges Footer Area */}
      <div className="border-t border-white/5 mt-8 md:mt-12 py-6 md:py-8 bg-[#1A1A1D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[#F1E8DB]/60 text-xs font-black uppercase tracking-widest">
            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#CA1421]" /> 4K Ultra HD</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#CA1421]" /> 99.9% Server Uptime</span>
            <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[#CA1421]" /> 24/7 WhatsApp Support</span>
          </div>
          <p className="text-center text-[#F1E8DB]/40 text-xs mt-6 font-bold">
            © 2026 {CONSTANTS.BRAND_NAME}. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </article>
  );
}