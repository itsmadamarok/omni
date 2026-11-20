'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { blogPosts } from '@/lib/blog';
import {
  PlayCircle,
  UserCheck,
  BookOpen,
  Star,
  ShieldCheck,
  Zap,
  Download,
  CreditCard,
  CheckCircle2,
  MonitorSmartphone,
  Tv2,
  Cpu,
  ArrowRight,
  Lock,
  ThumbsUp,
  Trophy,
  Medal,
  LifeBuoy,
  Settings,
  Check,
  Smartphone,
  BarChart,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import ShareButtons from './components/ShareButtons';
import TargetCountries from './components/TargetCountries';
import { useState, useEffect } from 'react';

/* =========================================================
   OMNIPTV — CLONED TEMPLATE STRUCTURE + DESIGN SYSTEM (50/50 LIGHT & DARK)
   Dark BG / Card : #1B1B1F / #232329
   Light BG / Card: #F7F7F7 / #FFFFFF (flat cards)
   Accent Red     : #E3182B
   Important CTA  : #FFD700 (gold + #1B1B1F text)
   Muted Slate    : #6B7280
   Success        : #10B981
   Soft Blush    : #F4A7A7
   ========================================================= */

const LoadingSpinner = () => (
  <div className="min-h-[600px] flex items-center justify-center bg-[#F7F7F7]">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E3182B] border-t-transparent" />
  </div>
);

const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => <LoadingSpinner />,
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#232329] rounded-2xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-[#F7F7F7] max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => (
    <div className="h-[400px] bg-[#232329] rounded-3xl animate-pulse max-w-7xl mx-auto" />
  ),
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center bg-[#F7F7F7]">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#E3182B] border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden">
      {/* =========================================================
          1. HERO SECTION [DARK #1B1B1F] — two-column (content left, image right)
          ========================================================= */}
      <section className="relative px-4 pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-28 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col items-center justify-center min-h-[82vh] sm:min-h-[85vh] lg:min-h-[90vh] w-full bg-[#1B1B1F] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/background.webp"
            alt=""
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.28]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#1B1B1F]/65" />
        </div>

        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="hidden lg:block absolute bottom-0 right-0 w-[80%] h-[90%] z-[2] pointer-events-none">
          <img
            src="/img/neon.png"
            alt=""
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-bottom-right opacity-75"
            aria-hidden="true"
          />
        </div>

        <div className="absolute -top-20 left-1/3 -translate-x-1/2 w-[500px] h-[300px] bg-[#E3182B]/15 blur-[140px] rounded-full pointer-events-none z-[1]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[260px] bg-[#F4A7A7]/10 blur-[140px] rounded-full pointer-events-none z-[1]" />

        <FadeIn className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center my-auto">
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#232329]/90 border border-[#FFD700]/40 px-4 py-2 rounded-full mb-5 sm:mb-6 backdrop-blur-md shadow-md">
              <Medal className="w-4 h-4 text-[#FFD700] shrink-0" />
              <span className="text-white font-extrabold text-[10px] sm:text-xs uppercase tracking-widest">
                #1 IPTV Provider van Nederland &amp; België
              </span>
            </div>

            <h1 className="w-full text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight uppercase text-white mb-5 leading-[1.06]">
              <span className="text-[#FFD700]">OMNIPTV</span>{' '}
              <span className="text-white">- BESTE IPTV NEDERLAND</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-xl lg:max-w-lg mx-auto lg:mx-0 mb-7 sm:mb-8 font-medium leading-relaxed">
              Ontdek waarom positieve omni iptv ervaringen en sterke{' '}
              <strong className="text-white">OmnIPTV</strong> reviews onze service tot de nummer 1
              keuze maken. Stream 25.000+ live zenders in 4K zonder haperingen met{' '}
              <strong className="text-white">OmnIPTV</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center lg:justify-start w-full sm:w-auto mb-7 sm:mb-8">
              <Link
                href="/pakketten"
                className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-7 sm:px-8 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black text-xs sm:text-sm hover:brightness-95 transition-all hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg cursor-pointer"
              >
                Bekijk Pakketten
              </Link>
              <Link
                href="#channels"
                className="w-full sm:w-auto text-center whitespace-nowrap py-3.5 px-7 sm:px-8 rounded-full bg-white text-[#1B1B1F] font-black text-xs sm:text-sm hover:bg-[#F7F7F7] transition-all hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg cursor-pointer"
              >
                <PlayCircle className="w-5 h-5 text-[#E3182B] shrink-0" /> Zenderaanbod
              </Link>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap justify-center lg:justify-start gap-3 sm:gap-5 md:gap-6 text-[10px] sm:text-xs text-white font-bold uppercase tracking-widest w-full">
              <span className="flex items-center gap-1.5 whitespace-nowrap bg-[#232329]/70 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
                <Zap className="w-3.5 h-3.5 text-[#FFD700] shrink-0" /> 4K &amp; Full HD Beeld
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap bg-[#232329]/70 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" /> 99.9% Server Uptime
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap bg-[#232329]/70 sm:bg-transparent px-3 py-1.5 sm:p-0 rounded-full border border-white/10 sm:border-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700] shrink-0" /> Anti-Freeze Servers
              </span>
            </div>
          </div>

          <div className="w-full lg:col-span-6 relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[85%] h-[85%] bg-[#FFD700]/10 blur-[110px] rounded-full" />
            </div>
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto aspect-[4/3] lg:aspect-[5/4] rounded-3xl overflow-hidden">
              <img
                src="/img/hero.png"
                alt={`OmnIPTV 4K Ultra HD IPTV streaming achtergrond Nederland`}
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-contain lg:scale-110"
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* =========================================================
          2. PARTNER SLIDER [LIGHT #F7F7F7]
          ========================================================= */}
      <div className="min-h-[128px] bg-[#F7F7F7]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* =========================================================
          3. 3-STEP SETUP GUIDE [LIGHT #F7F7F7 + WHITE FLAT CARDS]
          ========================================================= */}
      <section className="py-28 bg-[#F7F7F7] text-[#1B1B1F] w-full relative overflow-hidden border-t border-[#6B7280]/15">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[560px] h-[260px] bg-[#F4A7A7]/35 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-white border border-[#E3182B]/30 px-4 py-2 rounded-full mb-6 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[#E3182B] font-black text-xs uppercase tracking-widest">
                  Eenvoudige Installatie
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1B1B1F] tracking-tight uppercase leading-[1.05]">
                BEGIN MET KIJKEN IN <br className="hidden sm:block" />
                <span className="text-[#E3182B] relative inline-block mt-1">
                  3 SIMPELE STAPPEN
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#E3182B] rounded-full" />
                </span>
              </h2>

              <p className="text-[#6B7280] text-base sm:text-lg mt-6 font-semibold max-w-2xl leading-relaxed">
                Lees onze handleiding over hoe werkt omni iptv en configureer uw{' '}
                <strong className="text-[#1B1B1F]">OmnIPTV</strong> afspeellijst binnen 5 minuten na
                bestelling.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative">
            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#1B1B1F] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#6B7280]/20 shadow-lg hover:border-[#E3182B] hover:shadow-[0_25px_50px_rgba(227,24,43,0.14)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B1B1F] text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <span className="text-5xl font-black text-[#1B1B1F] bg-[#FFD700] px-4 py-1 rounded-2xl shadow-sm tracking-tight">
                    01
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-white bg-[#E3182B] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  1. Kies Uw Pakket
                </div>

                <h3 className="text-2xl font-black text-[#1B1B1F] mb-3 uppercase tracking-tight group-hover:text-[#E3182B] transition-colors">
                  1. Kies Uw Pakket
                </h3>

                <p className="text-[#6B7280] text-sm font-medium leading-relaxed mb-6">
                  Selecteer de gewenste abonnementsduur en het aantal schermen voor uw huishouden bij{' '}
                  <strong className="text-[#1B1B1F]">OmnIPTV</strong>.
                </p>

                <ul className="text-xs font-bold text-[#1B1B1F] space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> 1, 2 of 3 Schermen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> 3, 6 of 12 Maanden
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Directe Activatie
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#6B7280]/15 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#1B1B1F] uppercase tracking-wider group-hover:text-[#E3182B] transition-colors">
                  Stap 1
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F7] text-[#1B1B1F] flex items-center justify-center group-hover:bg-[#E3182B] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#1B1B1F] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#6B7280]/20 shadow-lg hover:border-[#E3182B] hover:shadow-[0_25px_50px_rgba(227,24,43,0.14)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B1B1F] text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Download className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <span className="text-5xl font-black text-[#1B1B1F] bg-[#FFD700] px-4 py-1 rounded-2xl shadow-sm tracking-tight">
                    02
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-white bg-[#E3182B] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  2. Ontvang Gegevens
                </div>

                <h3 className="text-2xl font-black text-[#1B1B1F] mb-3 uppercase tracking-tight group-hover:text-[#E3182B] transition-colors">
                  2. Ontvang Gegevens
                </h3>

                <p className="text-[#6B7280] text-sm font-medium leading-relaxed mb-6">
                  Ontvang binnen 5 minuten uw M3U-link en Xtream codes direct via WhatsApp en e-mail
                  om <strong className="text-[#1B1B1F]">OmnIPTV</strong> te activeren.
                </p>

                <ul className="text-xs font-bold text-[#1B1B1F] space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> M3U-link &amp; Xtream Codes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Via WhatsApp &amp; E-mail
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Binnen 5 Minuten Klaar
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#6B7280]/15 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#1B1B1F] uppercase tracking-wider group-hover:text-[#E3182B] transition-colors">
                  Stap 2
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F7] text-[#1B1B1F] flex items-center justify-center group-hover:bg-[#E3182B] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>

            <FadeInItem className="group relative z-10 flex flex-col justify-between bg-white text-[#1B1B1F] rounded-[2.5rem] p-8 sm:p-10 border-2 border-[#6B7280]/20 shadow-lg hover:border-[#E3182B] hover:shadow-[0_25px_50px_rgba(227,24,43,0.14)] hover:-translate-y-2.5 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-8 relative">
                  <div className="w-16 h-16 rounded-2xl bg-[#1B1B1F] text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                    <Tv2 className="w-8 h-8 text-[#FFD700]" />
                  </div>
                  <span className="text-5xl font-black text-[#1B1B1F] bg-[#FFD700] px-4 py-1 rounded-2xl shadow-sm tracking-tight">
                    03
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-white bg-[#E3182B] px-3.5 py-1.5 rounded-full mb-4 shadow-sm">
                  3. Direct Kijken
                </div>

                <h3 className="text-2xl font-black text-[#1B1B1F] mb-3 uppercase tracking-tight group-hover:text-[#E3182B] transition-colors">
                  3. Direct Kijken
                </h3>

                <p className="text-[#6B7280] text-sm font-medium leading-relaxed mb-6">
                  Voer uw inloggegevens in op uw Smart TV, Firestick of IPTV app en geniet direct van{' '}
                  <strong className="text-[#1B1B1F]">OmnIPTV</strong> in 4K.
                </p>

                <ul className="text-xs font-bold text-[#1B1B1F] space-y-2.5 mb-8">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> Smart TV, Firestick &amp; Apps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> 4K Ultra HD Streams
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" /> 24/7 Support Beschikbaar
                  </li>
                </ul>
              </div>

              <div className="pt-5 border-t border-[#6B7280]/15 flex items-center justify-between mt-auto">
                <span className="text-xs font-black text-[#1B1B1F] uppercase tracking-wider group-hover:text-[#E3182B] transition-colors">
                  Stap 3
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#F7F7F7] text-[#1B1B1F] flex items-center justify-center group-hover:bg-[#E3182B] group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          4. MEDIA GRID / CHANNELS [DARK #1B1B1F]
          ========================================================= */}
      <section
        id="channels"
        className="pt-24 bg-[#1B1B1F] text-white max-w-[100vw] overflow-hidden relative min-h-[400px]"
      >
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-none">
              HET MEEST COMPLETE <span className="text-[#E3182B]">ZENDERAANBOD</span>
            </h2>
            <p className="text-white/75 font-medium text-lg">
              Toegang tot meer dan 25.000 live televisiezenders en 60.000+ VOD films en series met
              Nederlandse ondertiteling bij <strong className="text-white">OmnIPTV</strong>.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#232329] rounded-2xl" />
            ))}
          </div>
        )}
      </section>

      {/* =========================================================
          8. ANIMATED STATISTICS [DARK #1B1B1F]
          ========================================================= */}
      <section className="py-24 bg-[#1B1B1F] text-white relative overflow-hidden border-t border-white/10">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              {CONSTANTS.BRAND_NAME} IN CIJFERS
            </h3>
            <p className="text-[#FFD700] text-base font-bold mt-4 uppercase tracking-wider">
              Bewezen betrouwbaarheid en tevreden kijkers door heel Nederland en België met{' '}
              <strong className="text-white">OmnIPTV</strong>.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center p-6 bg-[#232329] text-white rounded-3xl border border-white/10 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-white mb-2">
                <AnimatedCounter value={15} suffix="K+" />
              </span>
              <span className="text-xs text-[#FFD700] font-extrabold uppercase tracking-widest mt-2">
                Actieve Abonnees
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#232329] text-white rounded-3xl border border-white/10 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-white mb-2">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-xs text-[#FFD700] font-extrabold uppercase tracking-widest mt-2">
                Live Zenders
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#232329] text-white rounded-3xl border border-white/10 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-white mb-2">
                <AnimatedCounter value={60} suffix="K+" />
              </span>
              <span className="text-xs text-[#FFD700] font-extrabold uppercase tracking-widest mt-2">
                VOD Titels
              </span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center p-6 bg-[#232329] text-white rounded-3xl border border-white/10 shadow-lg">
              <span className="text-5xl md:text-7xl font-black text-[#10B981] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-xs text-[#FFD700] font-extrabold uppercase tracking-widest mt-2">
                Server Uptime
              </span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          5. PRICING SECTION + TARGET COUNTRIES [LIGHT #F7F7F7]
          ========================================================= */}
      <div className="min-h-[600px] bg-[#F7F7F7]" id="pricing-section">
        {isMounted ? <PricingSection /> : <LoadingSpinner />}
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full mt-12">
        <TargetCountries />
      </div>

      {/* =========================================================
          6. TRUST BADGES [LIGHT #F7F7F7 + WHITE CARD]
          ========================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] w-full">
        <div className="bg-white text-[#1B1B1F] border border-[#6B7280]/20 rounded-3xl p-8 md:p-12 shadow-lg">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1B1B1F] flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div>
                <div className="font-black text-[#1B1B1F] text-lg uppercase tracking-tight">
                  Veilige Betaling
                </div>
                <p className="text-[#6B7280] font-medium text-xs mt-1">
                  Beveiligde transacties via iDEAL, PayPal en Crypto
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1B1B1F] flex items-center justify-center shrink-0">
                <ThumbsUp className="w-7 h-7 text-[#10B981]" />
              </div>
              <div>
                <div className="font-black text-[#1B1B1F] text-lg uppercase tracking-tight">
                  Niet Goed, Geld Terug
                </div>
                <p className="text-[#6B7280] font-medium text-xs mt-1">
                  7 dagen volledige tevredenheidsgarantie
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1B1B1F] flex items-center justify-center shrink-0">
                <LifeBuoy className="w-7 h-7 text-[#FFD700]" />
              </div>
              <div>
                <div className="font-black text-[#1B1B1F] text-lg uppercase tracking-tight">
                  24/7 Ondersteuning
                </div>
                <p className="text-[#6B7280] font-medium text-xs mt-1">
                  Direct persoonlijk contact via WhatsApp &amp; E-mail
                </p>
              </div>
            </FadeInItem>

            <FadeInItem className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1B1B1F] flex items-center justify-center shrink-0">
                <Medal className="w-7 h-7 text-[#E3182B]" />
              </div>
              <div>
                <div className="font-black text-[#1B1B1F] text-lg uppercase tracking-tight">
                  Beste Serverkwaliteit
                </div>
                <p className="text-[#6B7280] font-medium text-xs mt-1">
                  Hoogste score van Nederlandse IPTV gebruikers
                </p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          7. LIVING ROOM SECTION [DARK #1B1B1F]
          ========================================================= */}
      <section className="w-full bg-[#1B1B1F] text-white py-20 md:py-28 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#232329] border border-[#E3182B]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#F4A7A7]">
            ULTIEME KIJKERVARING
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none">
            HAAL DE BIOSCOOP NAAR UW <span className="text-[#E3182B]">WOONKAMER</span>
          </h2>
        </div>

        <div className="w-full bg-[#232329] border-y border-white/10 py-10 flex justify-center items-center transition-all duration-300">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <img
              src="/img/sofa.webp"
              alt={`OmnIPTV bioscoopkwaliteit IPTV streaming in de woonkamer`}
              width={1200}
              height={480}
              loading="lazy"
              className="h-full w-full object-contain"
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl px-4 text-center mt-10">
          <p className="text-base md:text-lg leading-relaxed text-white/75 font-medium">
            Geniet van ongecomprimeerde 4K livestreams en uw favoriete series vanuit uw eigen bank.
            Vraag direct een gratis omni iptv test aan via WhatsApp om{' '}
            <strong className="text-white">OmnIPTV</strong> zelf te ervaren.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link
              href="/pakketten"
              className="bg-[#FFD700] px-8 py-3 text-sm font-black uppercase tracking-widest text-[#1B1B1F] hover:brightness-95 transition-transform hover:scale-105 rounded-full shadow-xl"
            >
              Activeer Uw Abonnement Direct
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center bg-[#F7F7F7]">
        <ShareButtons />
      </section>

      {/* =========================================================
          9. BENEFITS SECTION [LIGHT #F7F7F7 + WHITE FLAT CARDS]
          ========================================================= */}
      <section className="py-24 bg-[#F7F7F7] text-[#1B1B1F] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white border border-[#E3182B]/30 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E3182B] animate-pulse" />
              <span className="text-[#E3182B] font-black text-xs uppercase tracking-widest">
                {CONSTANTS.BRAND_NAME} Voordelen
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1B1B1F] mb-6 uppercase tracking-tight leading-none">
              WAAROM KIEZEN VOOR <span className="text-[#E3182B]">{CONSTANTS.BRAND_NAME}?</span>
            </h2>
            <p className="text-[#6B7280] font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Ontdek waarom duizenden Nederlandse huishoudens overstappen naar onze stabiele{' '}
              <strong className="text-[#1B1B1F]">OmnIPTV</strong> service.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              {
                title: 'Enorme Content Bibliotheek',
                desc: `Elk OmnIPTV abonnement biedt meer dan 25.000 live tv-zenders en 60.000+ films en series die dagelijks worden bijgewerkt.`,
              },
              {
                title: 'Anti-Freeze Technologie',
                desc: 'Onze geavanceerde OmnIPTV servers voorkomen automatisch buffering en haperingen tijdens populaire live sportwedstrijden.',
              },
              {
                title: 'Europese Supersnelle Servers',
                desc: 'Dedicated high-speed servers in Nederland en Duitsland garanderen een razendsnelle zaptijd en constante 4K kwaliteit voor OmnIPTV.',
              },
              {
                title: 'Alle Sportkanalen Inbegrepen',
                desc: 'Bekijk de Eredivisie, Champions League, Formule 1, Viaplay, Ziggo Sport en alle grote vechtsport PPV evenementen via OmnIPTV.',
              },
              {
                title: 'Elektronische TV-Gids (EPG)',
                desc: 'Volg gemakkelijk het actuele programmaoverzicht en kijk gemiste uitzendingen tot 7 dagen terug met catch-up.',
              },
              {
                title: 'Multi-Screen Verbindingen',
                desc: 'Koppel eenvoudig 1, 2 of 3 apparaten tegelijkertijd zodat iedereen in huis naar zijn eigen favoriete zender kan kijken.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-[#1B1B1F] rounded-[2.5rem] p-8 border-2 border-[#6B7280]/20 shadow-lg hover:border-[#E3182B] hover:shadow-[0_20px_45px_rgba(227,24,43,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#1B1B1F] border border-[#1B1B1F] flex items-center justify-center mb-6 shadow-md">
                    <Zap className="w-7 h-7 text-[#FFD700]" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1B1B1F] mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] font-medium text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#6B7280]/15 flex items-center justify-between text-xs font-bold text-[#E3182B]">
                  <span className="uppercase tracking-wider">OmnIPTV</span>
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          10. GLOBAL SERVER MAP [DARK #1B1B1F]
          ========================================================= */}
      <div className="min-h-[400px] bg-[#1B1B1F] py-8">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* =========================================================
          11. CHANNEL CATEGORIES [LIGHT #F7F7F7 + WHITE FLAT CARDS]
          ========================================================= */}
      <section className="py-24 bg-[#F7F7F7] text-[#1B1B1F] relative border-t border-[#6B7280]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-[#E3182B]/30 px-4 py-2 rounded-full mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E3182B] animate-pulse" />
              <span className="text-[#E3182B] font-black text-xs uppercase tracking-widest">
                Zendercategorieën
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1B1B1F] mb-6 uppercase tracking-tight leading-none">
              ZENDER<span className="text-[#E3182B]">CATEGORIEËN</span>
            </h2>
            <p className="text-[#6B7280] font-semibold text-lg max-w-3xl mx-auto leading-relaxed">
              Ons OmnIPTV aanbod dekt al uw favoriete live sport, Nederlandse televisie en
              internationale kanalen.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { cat: 'Live Sport', channels: 'Viaplay, Ziggo Sport, ESPN, DAZN, Formule 1 & Eredivisie', footer: ['4K Streaming', 'Live Sport'] },
              { cat: 'Nederlandse Zenders', channels: 'NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5 in 4K', footer: ['4K & FHD', 'Nederland'] },
              { cat: 'Films & Series (VOD)', channels: 'Nieuwste releases, Netflix, HBO Max & Disney+ content', footer: ['60.000+ VOD', 'Dagelijks'] },
              { cat: 'Kids & Familie', channels: 'Nickelodeon, Disney Channel, Cartoon Network, Telekids', footer: ['HD Kwaliteit', 'Familie'] },
              { cat: 'Internationaal', channels: 'België, Turkije, Marokko, VK, Duitsland, Frankrijk, Spanje', footer: ['100+ Landen', 'Wereldwijd'] },
              { cat: 'Muziek Zenders', channels: 'MTV, XITE, Slam! TV, 100% NL TV, Club Dance zenders', footer: ['HD Audio', 'Muziek'] },
              { cat: 'Documentaires', channels: 'Discovery Channel, National Geographic, History, Animal Planet', footer: ['4K & HD', 'Docu'] },
              { cat: 'PPV & Evenementen', channels: 'Alle UFC Main Cards, Glory Kickboxing, Boksen & WWE', footer: ['Live PPV', 'Evenementen'] },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-[#1B1B1F] rounded-3xl p-6 border-2 border-[#6B7280]/20 shadow-md hover:border-[#E3182B] hover:shadow-[0_15px_30px_rgba(227,24,43,0.14)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1B1B1F] flex items-center justify-center shrink-0 shadow-sm">
                      <Trophy className="w-5 h-5 text-[#FFD700]" />
                    </div>
                    <h3 className="font-black text-[#1B1B1F] text-base uppercase tracking-wider">
                      {item.cat}
                    </h3>
                  </div>
                  <p className="text-[#6B7280] font-semibold text-xs leading-relaxed">
                    {item.channels}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#6B7280]/15 flex items-center justify-between text-[10px] font-extrabold uppercase text-[#E3182B] tracking-widest">
                  <span>{item.footer[0]}</span>
                  <span>{item.footer[1]}</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          12. FEATURE BLOCKS (4K + SPORTS) [DARK #1B1B1F]
          ========================================================= */}
      <section className="bg-[#1B1B1F] text-white py-24 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#E3182B]/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#F4A7A7]/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#232329] border-2 border-white/10 p-3 shadow-2xl transition-all duration-500 hover:border-[#FFD700]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <img
                  src="/img/image-1.webp"
                  alt={`OmnIPTV 4K Ultra HD streaming kwaliteit op Smart TV`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#1B1B1F]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#FFD700] border border-white/15 shadow-md">
                  4K Ultra HD Kwaliteit
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#1B1B1F]/95 backdrop-blur-md border border-white/15 p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[340px] shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD700] text-[#1B1B1F] shrink-0 shadow-md">
                      <PlayCircle className="h-6 w-6 text-[#1B1B1F]" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-white">
                        Haarscherpe Streams
                      </p>
                      <p className="text-xs font-medium text-white/75 mt-0.5">
                        Geniet van ongecomprimeerde 4K resolutie en 60fps vloeiende live
                        uitzendingen met OmnIPTV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FadeIn className="order-2">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#232329] border border-[#E3182B]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#F4A7A7]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                PREMIUM STREAMING ERVARING
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6">
                ERVAAR ONGEËVENAARDE <br />
                <span className="text-[#E3182B] relative inline-block mt-1">
                  4K BEELDKWALITEIT
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#E3182B] rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-white/75 font-medium">
                Dankzij onze krachtige servers heeft u direct toegang tot stabiele digitale
                televisiekanalen. <strong className="text-white">OmnIPTV</strong> levert naadloze
                streams op al uw apparaten zonder kwaliteitsverlies.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti-freeze technologie zonder buffering',
                  'Alle Nederlandse zenders in 4K & Full HD',
                  'Dagelijks geüpdatete VOD bibliotheek',
                  'Geschikt voor Smart TV, Firestick en Android',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#232329] text-white border border-white/10 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#FFD700] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#FFD700] text-[#1B1B1F] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="/pakketten"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#FFD700] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#1B1B1F] hover:brightness-95 transition-all hover:scale-105 rounded-full shrink-0 shadow-lg"
                >
                  Bestel Direct Uw Toegang
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#232329] border border-[#E3182B]/40 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FFD700]">
                <span className="w-2 h-2 rounded-full bg-[#E3182B] animate-pulse" />
                LIVE SPORT &amp; PPV EVENEMENTEN
              </span>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6">
                MIS GEEN ENKELE <br />
                <span className="text-[#E3182B] relative inline-block mt-1">
                  LIVE WEDSTRIJD
                  <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-[#E3182B] rounded-full" />
                </span>
              </h3>

              <p className="text-base leading-relaxed text-white/75 font-medium">
                Sportliefhebbers kijken onbeperkt naar de Eredivisie, Champions League, Formule 1,
                UFC en Premier League. Met een actief <strong className="text-white">OmnIPTV</strong>{' '}
                abonnement streamt u alle live evenementen in 50/60fps met minimale vertraging.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Alle Viaplay & Ziggo Sport kanalen',
                  'UFC & Glory Kickboxing PPV inbegrepen',
                  'Lage latency en minimale vertraging',
                  'Constante hoge bitrate streams',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#232329] text-white border border-white/10 px-4 py-3.5 text-xs font-extrabold uppercase flex items-center gap-3 shadow-md hover:border-[#FFD700] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#FFD700] text-[#1B1B1F] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-full flex sm:inline-flex mt-8">
                <Link
                  href="/pakketten"
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#232329] border-2 border-[#FFD700] px-8 py-4 text-xs font-black uppercase tracking-widest text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1B1B1F] transition-all hover:scale-105 rounded-full shrink-0 shadow-lg"
                >
                  Ontgrendel Alle Sportkanalen
                </Link>
              </div>
            </FadeIn>

            <div className="relative order-1 overflow-hidden rounded-[2.5rem] bg-[#232329] border-2 border-white/10 p-3 lg:order-2 shadow-2xl transition-all duration-500 hover:border-[#FFD700]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] sm:aspect-video lg:aspect-[5/4]">
                <img
                  src="/img/bg-1.webp"
                  alt={`OmnIPTV live sport Eredivisie en Formule 1 uitzendingen`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute left-4 top-4 rounded-full bg-[#1B1B1F]/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#FFD700] border border-white/15 shadow-md">
                  Live Sport Streams
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#1B1B1F]/95 backdrop-blur-md border border-white/15 p-4 shadow-xl">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFD700] text-[#1B1B1F] shadow-md">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-base font-black uppercase text-white">VIP Sport Pass</p>
                      <p className="text-xs font-extrabold uppercase tracking-widest text-[#10B981]">
                        Alle Wedstrijden Live
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* =========================================================
          13. COMPARISON TABLE [MODERN HIGH-CONTRAST EDITORIAL MATRIX]
          ========================================================= */}
      <section className="py-24 sm:py-28 relative overflow-hidden bg-[#F7F7F7] text-[#1B1B1F] border-t border-[#1B1B1F]/10">
        {/* Subtle ambient accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[340px] w-[680px] rounded-full bg-[#E3182B]/10 blur-[130px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 border border-[#1B1B1F]/12 shadow-sm mb-5">
              <span className="h-2 w-2 rounded-full bg-[#E3182B]" />
              <BarChart className="w-3.5 h-3.5 text-[#E3182B]" />
              <span className="text-[#1B1B1F] font-extrabold text-[11px] uppercase tracking-[0.18em]">
                Directe Vergelijking
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1B1B1F] uppercase tracking-tight leading-[1.04]">
              OmnIPTV <span className="text-[#E3182B]">VS</span> KABEL TV
            </h2>

            <p className="mt-4 text-sm sm:text-lg text-[#6B7280] max-w-2xl mx-auto font-medium leading-relaxed">
              Meer zenders, scherpere 4K streams en lagere maandlasten met{' '}
              <strong className="text-[#1B1B1F] font-extrabold">OmnIPTV</strong> — zonder
              vast contract of verborgen decoderkosten.
            </p>
          </FadeIn>

          {/* Desktop & Tablet Modern Comparison Grid */}
          <div className="hidden md:block overflow-x-auto pb-4">
            <div className="min-w-[760px] rounded-[2rem] bg-white border border-[#1B1B1F]/10 shadow-[0_24px_70px_-15px_rgba(27,27,31,0.12)] overflow-hidden">
              {/* Top Column Headers */}
              <div className="grid grid-cols-12 items-stretch border-b border-[#1B1B1F]/10">
                <div className="col-span-4 p-7 bg-[#F7F7F7]/80 flex flex-col justify-end">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#6B7280]">
                    Specificaties
                  </span>
                  <div className="mt-1 text-xl font-black uppercase tracking-tight text-[#1B1B1F]">
                    Wat krijgt u?
                  </div>
                </div>

                {/* Featured OmnIPTV Column Header */}
                <div className="col-span-4 p-7 bg-[#1B1B1F] text-white relative border-x border-[#FFD700]/30">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD700] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#1B1B1F]">
                      Beste Keuze
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#10B981]">
                      99.9% Uptime
                    </span>
                  </div>
                  <div className="text-2xl font-black uppercase tracking-tight text-white">
                    Omn<span className="text-[#FFD700]">IPTV</span>
                  </div>
                  <p className="mt-1 text-xs text-white/65 font-medium">
                    4K Anti-Freeze streaming op al uw schermen
                  </p>
                </div>

                {/* Legacy Cable Column Header */}
                <div className="col-span-4 p-7 bg-[#F2F2F5] text-[#1B1B1F] flex flex-col justify-between">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-[#1B1B1F]/8 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#6B7280]">
                      Standaard Provider
                    </span>
                  </div>
                  <div>
                    <div className="text-xl font-black uppercase tracking-tight text-[#4B5563]">
                      Traditionele Kabel
                    </div>
                    <p className="mt-1 text-xs text-[#6B7280] font-medium">
                      Vaste contracten &amp; extra pakketkosten
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison Rows */}
              <div className="divide-y divide-[#1B1B1F]/8">
                {[
                  {
                    feature: 'Maandelijkse Kosten',
                    us: 'Vanaf €4,08 / maand',
                    cable: '€60 - €120 per maand',
                    badge: 'Tot 90% Voordeel',
                  },
                  {
                    feature: 'Contractduur',
                    us: 'Geen vast contract',
                    cable: '12 tot 24 maanden vast',
                    badge: null,
                  },
                  {
                    feature: 'Live Televisie',
                    us: '25.000+ Live Zenders',
                    cable: '60 - 150 Kanalen',
                    badge: null,
                  },
                  {
                    feature: 'Films & Series (VOD)',
                    us: '60.000+ Titels + NL Subs',
                    cable: 'Beperkt / Betaald per film',
                    badge: 'Dagelijks Update',
                  },
                  {
                    feature: '4K Ultra HD & FHD',
                    us: 'Standaard Inbegrepen',
                    cable: 'Vaak extra pluspakket',
                    badge: null,
                  },
                  {
                    feature: 'Schermen Tegelijk',
                    us: 'Tot 3 Apparaten',
                    cable: 'Extra kosten per ontvanger',
                    badge: null,
                  },
                  {
                    feature: 'Sport & Live PPV',
                    us: 'Eredivisie, F1, UFC & Meer',
                    cable: '€15 - €30 extra / maand',
                    badge: 'Inbegrepen',
                  },
                  {
                    feature: 'Wereldwijd Aanbod',
                    us: '100+ Internationale Landen',
                    cable: 'Alleen lokale zenders',
                    badge: null,
                  },
                ].map((row, idx) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-12 items-stretch transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFB]'
                    }`}
                  >
                    <div className="col-span-4 px-7 py-5 flex items-center justify-between gap-3">
                      <span className="text-sm font-extrabold text-[#1B1B1F] tracking-tight">
                        {row.feature}
                      </span>
                    </div>

                    <div className="col-span-4 px-7 py-5 bg-[#1B1B1F] text-white border-x border-[#FFD700]/20 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#10B981]/15 text-[#10B981]">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </span>
                        <span className="text-sm font-black text-[#FFD700] tracking-tight truncate">
                          {row.us}
                        </span>
                      </div>
                      {row.badge && (
                        <span className="shrink-0 rounded-full bg-white/10 border border-white/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/85">
                          {row.badge}
                        </span>
                      )}
                    </div>

                    <div className="col-span-4 px-7 py-5 bg-[#F7F7F9]/60 flex items-center">
                      <span className="text-sm font-medium text-[#6B7280]">
                        {row.cable}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Strip */}
              <div className="grid grid-cols-12 items-center border-t border-[#1B1B1F]/10 bg-[#F7F7F7]">
                <div className="col-span-4 px-7 py-5 text-xs font-bold text-[#6B7280]">
                  Directe activatie binnen 5 minuten via WhatsApp &amp; e-mail.
                </div>
                <div className="col-span-4 px-7 py-5 bg-[#1B1B1F] border-x border-[#FFD700]/30 flex items-center justify-between gap-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-white/80">
                    Klaar om te besparen?
                  </span>
                  <Link
                    href="/pakketten"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#FFD700] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#1B1B1F] hover:brightness-95 transition-all shrink-0"
                  >
                    Pakketten <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="col-span-4 px-7 py-5 text-xs font-semibold text-[#6B7280]/80 line-through">
                  Hoge maandlasten &amp; lange contracten
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Sleek Comparison Cards */}
          <div className="md:hidden space-y-3.5">
            {[
              { feature: 'Maandelijkse Kosten', us: 'Vanaf €4,08 / mnd', cable: '€60 - €120/mnd' },
              { feature: 'Contractduur', us: 'Geen vast contract', cable: '12-24 mnd vast' },
              { feature: 'Live Zenders', us: '25.000+ Kanalen', cable: '60-150 Kanalen' },
              { feature: 'VOD Bibliotheek', us: '60.000+ films & series', cable: 'Beperkt / Extra' },
              { feature: '4K Streaming', us: 'Inbegrepen', cable: 'Vaak pluspakket' },
              { feature: 'Multi-Scherm', us: 'Tot 3 apparaten', cable: 'Extra per box' },
              { feature: 'Sport & PPV', us: 'Volledig inbegrepen', cable: '+€15-30/mnd' },
              { feature: 'Internationaal', us: '100+ landen', cable: 'Alleen lokaal' },
            ].map((row) => (
              <div
                key={row.feature}
                className="rounded-3xl bg-white border border-[#1B1B1F]/10 p-4 shadow-[0_10px_30px_rgba(27,27,31,0.06)]"
              >
                <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#6B7280] mb-3">
                  {row.feature}
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-2xl bg-[#1B1B1F] p-3.5 border border-[#FFD700]/30 flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#FFD700]">
                        OmnIPTV
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    </div>
                    <div className="text-xs font-black text-white leading-snug">
                      {row.us}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#F7F7F7] p-3.5 border border-[#1B1B1F]/8 flex flex-col justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#6B7280] mb-1.5">
                      Kabel TV
                    </span>
                    <div className="text-xs font-medium text-[#6B7280] line-through leading-snug">
                      {row.cable}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/pakketten"
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl bg-[#1B1B1F] border border-[#FFD700]/40 px-5 py-4 text-xs font-black uppercase tracking-widest text-[#FFD700] shadow-lg"
            >
              Bekijk OmnIPTV Pakketten <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* =========================================================
          14. CUSTOMER REVIEWS [DARK #1B1B1F]
          ========================================================= */}
      <section className="py-24 bg-[#1B1B1F] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#232329] px-4 py-2 rounded-full border border-[#10B981]/40 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span className="text-[#10B981] font-extrabold text-xs uppercase tracking-wider">
                Klantbeoordelingen
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
              VERTROUWD DOOR MEER DAN <span className="text-[#E3182B]">25.000+ KLANTEN</span>
            </h2>
            <p className="text-white/75 text-lg font-medium max-w-2xl mx-auto">
              Lees authentieke <strong className="text-white">OmnIPTV</strong> ervaringen en reviews
              van tevreden IPTV kijkers in Nederland en België.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Daan V.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
                text: 'Eindelijk een IPTV aanbieder die niet hapert tijdens de Klassieker of Formule 1 races. De 4K beeldkwaliteit op mijn OLED TV is geweldig scherp met OmnIPTV.',
                role: 'Amsterdam',
              },
              {
                name: 'Sanne K.',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
                text: 'Mijn dure kabelabonnement direct opgezegd. Binnen 5 minuten geïnstalleerd op mijn Samsung Smart TV dankzij de snelle OmnIPTV service.',
                role: 'Rotterdam',
              },
              {
                name: 'Lars B.',
                avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
                text: 'Enorm aanbod aan Nederlandse en buitenlandse zenders. Films hebben actuele Nederlandse ondertitels en OmnIPTV werkt perfect.',
                role: 'Utrecht',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#232329] text-white rounded-3xl p-8 border border-white/10 shadow-xl transition-all hover:-translate-y-2 hover:border-[#FFD700] hover:shadow-2xl duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-white/15 shadow-md shrink-0"
                      />
                      <div>
                        <div className="font-black text-white text-base uppercase tracking-tight flex items-center gap-1.5">
                          {testimonial.name}
                          <UserCheck className="w-4 h-4 text-[#10B981]" />
                        </div>
                        <div className="text-[#FFD700] text-xs font-bold uppercase tracking-wider">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-white/80 font-medium text-base leading-relaxed italic mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-black text-[#10B981] uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" /> Geverifieerde Klant
                  </span>
                  <span className="text-[11px] font-bold text-white/50 uppercase">OmnIPTV</span>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          15. SUPPORTED DEVICES [LIGHT #F7F7F7 + WHITE FLAT CARDS]
          ========================================================= */}
      <section className="py-24 bg-[#F7F7F7] text-[#1B1B1F] w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F4A7A7]/30 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E3182B]/30 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E3182B] animate-pulse" />
              <span className="text-[#E3182B] font-extrabold text-xs uppercase tracking-widest">
                Alle Apparaten
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#1B1B1F] mb-6 uppercase tracking-tight max-w-4xl mx-auto leading-tight">
              COMPATIBEL MET ELKE <span className="text-[#E3182B]">OMNI IPTV PLAYER</span>
            </h2>

            <p className="text-[#6B7280] text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              <strong className="text-[#1B1B1F]">OmnIPTV</strong> werkt soepel op al uw favoriete
              schermen. Configureer eenvoudig een player app en begin direct met streamen.
            </p>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {[
              {
                tag: 'Smart TV (Samsung & LG)',
                desc: 'Tizen OS en webOS Smart TVs',
                detail: 'Voer uw inloggegevens in op uw Smart TV en geniet direct van OmnIPTV in 4K.',
                icon: Tv2,
                code: '01',
              },
              {
                tag: 'Android TV & Boxen',
                desc: 'Android TV, Google TV & TV Boxen',
                detail: 'Vloeiende weergave en snelle kanaalwissels op al uw Android apparaten.',
                icon: Cpu,
                code: '02',
              },
              {
                tag: 'Apple TV & iOS',
                desc: 'Apple TV, iPhone & iPad',
                detail: 'Stabiele streaming op iOS en tvOS met ondersteuning voor moderne IPTV spelers.',
                icon: Smartphone,
                code: '03',
              },
              {
                tag: 'Amazon Firestick',
                desc: 'Fire TV Stick & Fire TV Cube',
                detail: 'Eenvoudig te installeren en direct klaar voor 4K Ultra HD en Full HD.',
                icon: Zap,
                code: '04',
              },
              {
                tag: 'Windows PC & Mac',
                desc: 'Windows, macOS & Laptop',
                detail: 'Stream onderweg of op uw bureau via geschikte desktop spelers.',
                icon: MonitorSmartphone,
                code: '05',
              },
              {
                tag: 'MAG & Formuler Boxen',
                desc: 'Formuler, MAG & IPTV Boxen',
                detail: 'Volledige ondersteuning met duidelijke TV-gids (EPG) en snelle navigatie.',
                icon: ShieldCheck,
                code: '06',
              },
            ].map((device) => {
              const Icon = device.icon;
              return (
                <div
                  key={device.tag}
                  className="group relative bg-white text-[#1B1B1F] border border-[#6B7280]/20 rounded-3xl p-7 flex flex-col justify-between gap-5 hover:border-[#E3182B] hover:shadow-[0_12px_35px_rgba(227,24,43,0.14)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer shadow-md overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E3182B] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#1B1B1F] flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <Icon className="w-7 h-7 text-[#FFD700] transition-all duration-300" />
                      </div>
                      <div>
                        <h3 className="text-base font-black text-[#1B1B1F] uppercase tracking-wide leading-tight">
                          {device.tag}
                        </h3>
                        <p className="text-xs font-bold text-[#6B7280] mt-0.5">{device.desc}</p>
                      </div>
                    </div>

                    <span className="text-xs font-black text-[#1B1B1F] bg-[#FFD700] px-2.5 py-1 rounded-xl shrink-0">
                      {device.code}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#6B7280] leading-relaxed pt-2 border-t border-[#6B7280]/15">
                    {device.detail}
                  </p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          16. FAQ [LIGHT #F7F7F7]
          ========================================================= */}
      <div className="py-12 w-full bg-[#F7F7F7] relative overflow-hidden">
        {isMounted ? <FAQ /> : <LoadingSpinner />}
      </div>

      {/* =========================================================
          17. BLOG SECTION [LIGHT #F7F7F7 + WHITE FLAT CARDS]
          ========================================================= */}
      <section className="py-24 bg-[#F7F7F7] text-[#1B1B1F] w-full relative overflow-hidden border-t border-[#6B7280]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E3182B]/30 shadow-sm mb-6">
                <BookOpen className="w-4 h-4 text-[#E3182B]" />
                <span className="text-[#E3182B] font-extrabold text-xs uppercase tracking-widest">
                  Kennisbank
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#1B1B1F] mb-4 uppercase tracking-tight">
                LAATSTE <span className="text-[#E3182B]">ARTIKELEN &amp; HANDLEIDINGEN</span>
              </h2>
              <p className="text-[#6B7280] text-lg font-medium max-w-2xl leading-relaxed">
                Lees onze handige tips over OmnIPTV installatie, app-instellingen en de nieuwste
                updates.
              </p>
            </div>

            <div className="flex shrink-0">
              <Link
                href="/kennisbank"
                className="whitespace-nowrap px-7 py-4 rounded-2xl bg-[#FFD700] text-[#1B1B1F] font-black hover:brightness-95 transition-all duration-300 flex items-center gap-3 group shrink-0 shadow-lg"
              >
                <span className="uppercase text-xs tracking-wider">Bekijk Kennisbank</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#1B1B1F]" />
              </Link>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="group cursor-pointer h-full">
                <Link href={`/kennisbank/${post.slug}`} className="block h-full">
                  <div className="bg-white text-[#1B1B1F] rounded-3xl p-4 border-2 border-[#6B7280]/20 shadow-md hover:border-[#E3182B] hover:shadow-[0_20px_40px_rgba(227,24,43,0.14)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full relative">
                    <div>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1B1B1F]">
                        <img
                          src={post.image}
                          alt={`${post.title} - OmnIPTV Handleiding`}
                          width={800}
                          height={450}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-[#1B1B1F]/25" />

                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span className="px-3 py-1 bg-[#E3182B] text-white text-[10px] font-black uppercase tracking-widest rounded-lg shadow-md">
                            {post.author}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 pt-6">
                        <h3 className="text-lg font-black text-[#1B1B1F] mb-2.5 group-hover:text-[#E3182B] transition-colors tracking-tight line-clamp-2 uppercase leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-[#6B7280] text-xs font-semibold line-clamp-3 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 pb-3 pt-3 border-t border-[#6B7280]/15 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-2 text-xs font-black text-[#E3182B] uppercase tracking-wider group-hover:text-[#1B1B1F] transition-colors">
                        Lees Artikel
                      </span>

                      <div className="w-9 h-9 rounded-xl bg-[#F7F7F7] border border-[#6B7280]/20 flex items-center justify-center text-[#1B1B1F] group-hover:bg-[#E3182B] group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* =========================================================
          18. FINAL CTA [DARK #1B1B1F CARD ON LIGHT #F7F7F7]
          ========================================================= */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#F7F7F7] w-full">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border-2 border-[#FFD700]/50 bg-[#1B1B1F] text-white shadow-2xl">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E3182B]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F4A7A7]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="h-2 w-full bg-[#FFD700]" />

            <FadeIn className="relative z-10 px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFD700]/40 bg-white/5 px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-[#FFD700]" />
                <span className="text-xs font-black uppercase tracking-widest text-[#FFD700]">
                  Premium 4K Kwaliteit
                </span>
              </div>

              <h2 className="mx-auto max-w-5xl text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase text-white leading-[1.05] mb-6">
                UPGRADE UW <br />
                <span className="text-[#E3182B]">TV ERVARING VANDAAG</span>
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base md:text-lg font-medium leading-relaxed text-white/75">
                Krijg direct toegang tot alle sportkanalen, films en live televisie in 4K Ultra HD
                kwaliteit met <strong className="text-white">OmnIPTV</strong>. Snelle activatie
                binnen 5 minuten op al uw apparaten.
              </p>

              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Zenders'],
                  ['4K Ultra', 'Beeldkwaliteit'],
                  ['99.9%', 'Server Uptime'],
                  ['24/7', 'WhatsApp Support'],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#232329] p-4 shadow-sm hover:border-[#FFD700] transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[#FFD700]">{value}</div>
                    <div className="mt-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white/65">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
                <Link
                  href="/pakketten"
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-2xl bg-[#FFD700] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-[#1B1B1F] hover:brightness-95 transition-all hover:scale-105 shrink-0 shadow-lg"
                >
                  Kies Uw Abonnement
                </Link>
                <Link
                  href="/installatie"
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:bg-white hover:text-[#1B1B1F] transition-all hover:scale-105 shrink-0 shadow-sm"
                >
                  <Settings className="h-4 w-4 text-[#FFD700] shrink-0" /> Installatie Handleiding
                </Link>
              </div>

              <p className="mt-8 text-[11px] sm:text-xs font-black text-[#10B981] uppercase tracking-wider">
                Veilig Betalen • Geen Vast Contract • Directe Activatie Binnen 5 Minuten
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}