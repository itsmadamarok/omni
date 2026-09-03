'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { CONSTANTS } from '@/lib/seo';
import { 
  PlayCircle, 
  ShieldCheck, 
  MonitorPlay, 
  Zap, 
  Download, 
  CreditCard, 
  CheckCircle2, 
  MonitorSmartphone, 
  Tv2, 
  Globe, 
  Cpu, 
  ArrowRight, 
  Award, 
  Lock, 
  ThumbsUp, 
  Users, 
  Server, 
  Film, 
  Trophy, 
  Calendar, 
  Database, 
  Tv, 
  Volume2, 
  Activity, 
  BarChart, 
  Medal, 
  Settings, 
  LifeBuoy,
  Shield
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './components/AnimatedSection';
import AnimatedCounter from './components/AnimatedCounter';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { blogPosts } from '@/lib/blog';
import TargetCountries from './components/TargetCountries';
import ShareButtons from './components/ShareButtons';

// Lazy load below-the-fold components for optimal Core Web Vitals
const PricingSection = dynamic(() => import('./components/PricingSection'), {
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#CA1421] border-t-transparent" />
    </div>
  ),
});

const MovieSlider = dynamic(() => import('./components/MovieSlider'), {
  loading: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="aspect-[2/3] bg-[#1A1A1D] rounded-xl animate-pulse" />
      ))}
    </div>
  ),
});

const PartnerSlider = dynamic(() => import('./components/PartnerSlider'), {
  loading: () => <div className="h-32 bg-transparent max-w-7xl mx-auto" />,
});

const GlobalServerMap = dynamic(() => import('./components/GlobalServerMap'), {
  loading: () => <div className="h-[400px] bg-[#1A1A1D] rounded-2xl animate-pulse max-w-7xl mx-auto" />,
});

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#CA1421] border-t-transparent" />
    </div>
  ),
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1D] text-[#F1E8DB] overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative px-6 py-45 overflow-hidden flex flex-col items-center justify-center text-center min-h-screen w-full">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/background.webp"
            alt={`OmnIPTV 4K Ultra HD IPTV streaming achtergrond Nederland`}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center brightness-[0.25]"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-[#1A1A1D]/60" />
        </div>
        
        <FadeIn className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center my-auto w-full">
          <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6">
            <Award className="w-4 h-4 text-[#F1E8DB]" />
            <span className="text-[#F1E8DB] font-bold text-xs uppercase tracking-widest">
              #1 IPTV Provider van Nederland & België
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[#F1E8DB] mb-6 leading-none whitespace-normal break-words">
            {CONSTANTS.BRAND_NAME} - BESTE <br className="hidden md:block" />
            <span className="text-[#CA1421]">IPTV NEDERLAND</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-[#F1E8DB]/80 max-w-3xl mx-auto mb-10 font-medium leading-relaxed px-2">
            Ontdek waarom positieve omni iptv ervaringen en sterke <strong>OmnIPTV</strong> reviews onze service tot de nummer 1 keuze maken. Stream 20.000+ live zenders in 4K zonder haperingen met <strong>OmnIPTV</strong>.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md sm:max-w-xl mx-auto px-4">
            <Link 
              href="/pakketten" 
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 sm:px-8 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-base sm:text-lg hover:bg-[#DB4439] transition-transform hover:scale-105 uppercase tracking-wider shrink-0 shadow-lg"
            >
              Bekijk Alle Pakketten
            </Link>
            <Link 
              href="#channels" 
              className="w-full sm:w-auto text-center whitespace-nowrap px-6 sm:px-8 py-4 rounded-full bg-[#F1E8DB] text-[#CA1421] font-black text-base sm:text-lg hover:bg-[#FCA9FE] transition-transform hover:scale-105 uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 shadow-lg"
            >
              <PlayCircle className="w-5 h-5 shrink-0" /> Bekijk Zenderaanbod
            </Link>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-[#F1E8DB] font-bold uppercase tracking-widest bg-[#1A1A1D]/40 backdrop-blur-sm px-8 py-4 rounded-3xl border border-white/5">
            <span className="flex items-center gap-2"><Zap className="w-5 h-5 text-[#CA1421]" /> 4K & Full HD Beeld</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-[#CA1421]" /> 99.9% Server Uptime</span>
            <span className="flex items-center gap-2"><Activity className="w-5 h-5 text-[#CA1421]" /> Anti-Freeze Servers</span>
          </div>
        </FadeIn>
      </section>

      {/* Partner Slider Section */}
      <div className="min-h-[128px]">
        {isMounted ? <PartnerSlider /> : <div className="h-32 bg-transparent" />}
      </div>

      {/* 3-Step Setup Section */}
      <section className="py-24 bg-[#CA1421] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-20">
               <span className="text-[#1A1A1D] bg-[#F1E8DB] px-4 py-1 rounded-full font-black uppercase tracking-widest text-xs mb-4">
                 Eenvoudige Installatie
               </span>
               <h2 className="text-4xl md:text-6xl font-black text-[#F1E8DB] tracking-tighter uppercase leading-none">
                 BEGIN MET KIJKEN IN <br/><span className="text-[#1A1A1D]">3 SIMPELE STAPPEN</span>
               </h2>
               <p className="text-[#F1E8DB] text-lg mt-6 font-bold">
                 Lees onze handleiding over hoe werkt omni iptv en configureer uw <strong>OmnIPTV</strong> afspeellijst binnen 5 minuten na bestelling.
               </p>
            </div>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#1A1A1D] p-8 rounded-3xl border border-white/5 hover:border-[#F1E8DB] transition-all hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-[#CA1421] flex items-center justify-center mb-6 relative">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#F1E8DB] text-[#1A1A1D] font-black flex items-center justify-center text-sm shadow-lg">1</div>
                <CreditCard className="w-10 h-10 text-[#F1E8DB]" />
              </div>
              <h3 className="text-2xl font-black text-[#F1E8DB] mb-4 tracking-tighter uppercase">1. Kies Uw Pakket</h3>
              <p className="text-[#FCA9FE] text-base font-bold leading-relaxed">
                Selecteer de gewenste abonnementsduur en het aantal schermen voor uw huishouden bij <strong>OmnIPTV</strong>.
              </p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#1A1A1D] p-8 rounded-3xl border border-white/5 hover:border-[#F1E8DB] transition-all hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-[#CA1421] flex items-center justify-center mb-6 relative">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#F1E8DB] text-[#1A1A1D] font-black flex items-center justify-center text-sm shadow-lg">2</div>
                <Download className="w-10 h-10 text-[#F1E8DB]" />
              </div>
              <h3 className="text-2xl font-black text-[#F1E8DB] mb-4 tracking-tighter uppercase">2. Ontvang Gegevens</h3>
              <p className="text-[#FCA9FE] text-base font-bold leading-relaxed">
                Ontvang binnen 5 minuten uw M3U-link en Xtream codes direct via WhatsApp en e-mail om <strong>OmnIPTV</strong> te activeren.
              </p>
            </FadeInItem>

            <FadeInItem className="relative flex flex-col items-center text-center z-10 group bg-[#1A1A1D] p-8 rounded-3xl border border-white/5 hover:border-[#F1E8DB] transition-all hover:-translate-y-2">
              <div className="w-20 h-20 rounded-full bg-[#CA1421] flex items-center justify-center mb-6 relative">
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#F1E8DB] text-[#1A1A1D] font-black flex items-center justify-center text-sm shadow-lg">3</div>
                <Tv2 className="w-10 h-10 text-[#F1E8DB]" />
              </div>
              <h3 className="text-2xl font-black text-[#F1E8DB] mb-4 tracking-tighter uppercase">3. Direct Kijken</h3>
              <p className="text-[#FCA9FE] text-base font-bold leading-relaxed">
                Voer uw inloggegevens in op uw Smart TV, Firestick of IPTV app en geniet direct van <strong>OmnIPTV</strong> in 4K.
              </p>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Living Room Section */}
      <section className="w-full bg-[#1A1A1D] py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl px-4 text-center mb-8">
          <span className="mb-4 inline-flex rounded-full bg-[#CA1421] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#F1E8DB]">
            ULTIEME KIJKERVARING
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#F1E8DB] leading-none">
            HAAL DE BIOSCOOP NAAR UW <span className="text-[#FCA9FE]">WOONKAMER</span>
          </h2>
        </div>

        <div className="w-full bg-black/20 py-8 flex justify-center items-center transition-all duration-300 hover:drop-shadow-[0_0_50px_rgba(252,169,254,0.15)]">
          <div className="w-full max-w-[1100px] px-6 h-auto aspect-[5/2] flex justify-center items-center">
            <Image
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
          <p className="text-base md:text-lg leading-relaxed text-[#FCA9FE] font-bold">
            Geniet van ongecomprimeerde 4K livestreams en uw favoriete series vanuit uw eigen bank. Vraag direct een gratis omni iptv test aan via WhatsApp om <strong>OmnIPTV</strong> zelf te ervaren.
          </p>
          <div className="w-full flex justify-center mt-8">
            <Link 
              href="/pakketten" 
              className="bg-[#F1E8DB] px-10 py-4 text-sm font-black uppercase tracking-widest text-[#CA1421] hover:bg-[#CA1421] hover:text-[#F1E8DB] transition duration-300 rounded-full shadow-xl"
            >
              Activeer Uw Abonnement Direct
            </Link>
          </div>
        </div>
      </section>

      {/* Media Grid Section */}
      <section id="channels" className="pt-24 bg-[#CA1421] max-w-[100vw] overflow-hidden relative min-h-[400px]">
        <FadeIn className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-between items-start mb-12 gap-6 relative z-10 w-full">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-4 uppercase tracking-tighter leading-none">
              HET MEEST COMPLETE ZENDERAANBOD
            </h2>
            <p className="text-[#141417] font-bold text-lg">
              Toegang tot meer dan 20.000 live televisiezenders en 60.000+ VOD films en series met Nederlandse ondertiteling bij <strong>OmnIPTV</strong>.
            </p>
          </div>
        </FadeIn>
        {isMounted ? (
          <MovieSlider />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-[#1A1A1D] rounded-xl" />
            ))}
          </div>
        )}
      </section>

        <section className="max-w-7xl mx-auto px-4 w-full">
          <TargetCountries />
        </section>

      {/* Pricing Section */}
      <div className="min-h-[600px] bg-[#1A1A1D]">
        {isMounted ? <PricingSection /> : <div className="h-[600px] bg-transparent" />}
      </div>

      {/* Trust Badges */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F1E8DB] rounded-3xl p-8 md:p-12">
          <FadeInStagger className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1D] flex items-center justify-center shrink-0">
                <Lock className="w-8 h-8 text-[#F1E8DB]" />
              </div>
              <div>
                <div className="font-black text-[#1A1A1D] text-xl uppercase tracking-tight">Veilige Betaling</div>
                <p className="text-[#CA1421] font-bold text-sm">Beveiligde transacties via iDEAL, PayPal en Crypto</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1D] flex items-center justify-center shrink-0">
                <ThumbsUp className="w-8 h-8 text-[#F1E8DB]" />
              </div>
              <div>
                <div className="font-black text-[#1A1A1D] text-xl uppercase tracking-tight">Niet Goed, Geld Terug</div>
                <p className="text-[#CA1421] font-bold text-sm">7 dagen volledige tevredenheidsgarantie</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1D] flex items-center justify-center shrink-0">
                <LifeBuoy className="w-8 h-8 text-[#F1E8DB]" />
              </div>
              <div>
                <div className="font-black text-[#1A1A1D] text-xl uppercase tracking-tight">24/7 Ondersteuning</div>
                <p className="text-[#CA1421] font-bold text-sm">Direct persoonlijk contact via WhatsApp & E-mail</p>
              </div>
            </FadeInItem>
            <FadeInItem className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#1A1A1D] flex items-center justify-center shrink-0">
                <Medal className="w-8 h-8 text-[#F1E8DB]" />
              </div>
              <div>
                <div className="font-black text-[#1A1A1D] text-xl uppercase tracking-tight">Beste Serverkwaliteit</div>
                <p className="text-[#CA1421] font-bold text-sm">Hoogste score van Nederlandse IPTV gebruikers</p>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="py-24 bg-[#CA1421] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-4 uppercase tracking-tighter">
              {CONSTANTS.BRAND_NAME} IN CIJFERS
            </h3>
            <p className="text-[#FCA9FE] text-base font-bold mt-4">
              Bewezen betrouwbaarheid en tevreden kijkers door heel Nederland en België met <strong>OmnIPTV</strong>.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-[#F1E8DB] mb-2">
                <AnimatedCounter value={15} suffix="K+" />
              </span>
              <span className="text-sm text-[#1A1A1D] font-black uppercase tracking-widest mt-2">Actieve Abonnees</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-[#F1E8DB] mb-2">
                <AnimatedCounter value={20} suffix="K+" />
              </span>
              <span className="text-sm text-[#1A1A1D] font-black uppercase tracking-widest mt-2">Live Zenders</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-[#F1E8DB] mb-2">
                <AnimatedCounter value={60} suffix="K+" />
              </span>
              <span className="text-sm text-[#1A1A1D] font-black uppercase tracking-widest mt-2">VOD Titels</span>
            </FadeInItem>
            <FadeInItem className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-[#F1E8DB] mb-2">
                <AnimatedCounter value={99.9} decimals={1} suffix="%" />
              </span>
              <span className="text-sm text-[#1A1A1D] font-black uppercase tracking-widest mt-2">Server Uptime</span>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Global Server Map */}
      <div className="min-h-[400px] bg-[#1A1A1D]">
        {isMounted ? <GlobalServerMap /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Benefits Section */}
      <section className="py-24 bg-[#CA1421] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-6 uppercase tracking-tighter leading-none">
              WAAROM KIEZEN VOOR {CONSTANTS.BRAND_NAME}?
            </h2>
            <p className="text-[#FCA9FE] font-bold text-lg max-w-3xl mx-auto">
              Ontdek waarom duizenden Nederlandse huishoudens overstappen naar onze stabiele <strong>OmnIPTV</strong> service.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {[
              { 
                icon: Database, 
                title: "Enorme Content Bibliotheek", 
                desc: `Elk OmnIPTV abonnement biedt meer dan 20.000 live tv-zenders en 60.000+ films en series die dagelijks worden bijgewerkt.` 
              },
              { 
                icon: Activity, 
                title: "Anti-Freeze Technologie", 
                desc: "Onze geavanceerde OmnIPTV servers voorkomen automatisch buffering en haperingen tijdens populaire live sportwedstrijden." 
              },
              { 
                icon: Server, 
                title: "Europese Supersnelle Servers", 
                desc: "Dedicated high-speed servers in Nederland en Duitsland garanderen een razendsnelle zaptijd en constante 4K kwaliteit voor OmnIPTV." 
              },
              { 
                icon: Trophy, 
                title: "Alle Sportkanalen Inbegrepen", 
                desc: "Bekijk de Eredivisie, Champions League, Formule 1, Viaplay, Ziggo Sport en alle grote vechtsport PPV evenementen via OmnIPTV." 
              },
              { 
                icon: Calendar, 
                title: "Elektronische TV-Gids (EPG)", 
                desc: "Volg gemakkelijk het actuele programmaoverzicht en kijk gemiste uitzendingen tot 7 dagen terug met catch-up." 
              },
              { 
                icon: Users, 
                title: "Multi-Screen Verbindingen", 
                desc: "Koppel eenvoudig 1, 2 of 3 apparaten tegelijkertijd zodat iedereen in huis naar zijn eigen favoriete zender kan kijken." 
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#1A1A1D] rounded-3xl p-8 border border-white/5 hover:border-[#F1E8DB] transition-all group">
                  <div className="w-14 h-14 rounded-xl bg-[#CA1421] flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#F1E8DB]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F1E8DB] mb-3 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[#FCA9FE] font-medium">{item.desc}</p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-24 bg-[#1A1A1D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-6 uppercase tracking-tighter leading-none">
              ZENDERCATEGORIEËN
            </h2>
            <p className="text-[#FCA9FE] font-bold text-lg max-w-3xl mx-auto">
              Ons OmnIPTV aanbod dekt al uw favoriete live sport, Nederlandse televisie en internationale kanalen.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { cat: "Live Sport", channels: "Viaplay, Ziggo Sport, ESPN, DAZN, Formule 1 & Eredivisie", icon: Trophy },
              { cat: "Nederlandse Zenders", channels: "NPO 1/2/3, RTL 4/5/7/8, SBS6, Veronica, Net5 in 4K", icon: Tv },
              { cat: "Films & Series (VOD)", channels: "Nieuwste releases, Netflix, HBO Max & Disney+ content", icon: Film },
              { cat: "Kids & Familie", channels: "Nickelodeon, Disney Channel, Cartoon Network, Telekids", icon: Shield },
              { cat: "Internationaal", channels: "België, Turkije, Marokko, VK, Duitsland, Frankrijk, Spanje", icon: Globe },
              { cat: "Muziek Zenders", channels: "MTV, XITE, Slam! TV, 100% NL TV, Club Dance zenders", icon: Volume2 },
              { cat: "Documentaires", channels: "Discovery Channel, National Geographic, History, Animal Planet", icon: Globe },
              { cat: "PPV & Evenementen", channels: "Alle UFC Main Cards, Glory Kickboxing, Boksen & WWE", icon: Trophy }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#F1E8DB] rounded-xl p-4 border border-3 border-[#CA1421] hover:border-[#F1E8DB] transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#CA1421]" />
                    <h3 className="font-bold text-[#CA1421] text-sm sm:text-base uppercase tracking-wider">{item.cat}</h3>
                  </div>
                  <p className="text-[#1A1A1D] font-medium text-xs">{item.channels}</p>
                </div>
              );
            })}
          </FadeInStagger>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="bg-[#1A1A1D] py-20">
        <div className="mx-auto max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
          
          {/* Block 1 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-1 overflow-hidden rounded-3xl bg-[#CA1421] p-3 rotate-2 transition-transform hover:rotate-0 duration-500">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/image-1.webp"
                  alt={`OmnIPTV 4K Ultra HD streaming kwaliteit op Smart TV`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#1A1A1D] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#F1E8DB]">
                  4K Ultra HD Kwaliteit
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#1A1A1D] p-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[320px]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#CA1421] text-[#F1E8DB] shrink-0">
                      <PlayCircle className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-[#F1E8DB]">Haarscherpe Streams</p>
                      <p className="text-xs font-bold text-[#FCA9FE]">
                        Geniet van ongecomprimeerde 4K resolutie en 60fps vloeiende live uitzendingen met OmnIPTV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FadeIn className="order-2">
              <span className="mb-4 inline-flex rounded-full bg-[#CA1421] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#F1E8DB]">
                PREMIUM STREAMING ERVARING
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#F1E8DB] leading-none mb-4">
                ERVAAR ONGEËVENAARDE <span className="text-[#CA1421]">4K BEELDKWALITEIT</span>
              </h3>
              <p className="mt-6 text-base leading-relaxed text-[#FCA9FE] font-bold">
                Dankzij onze krachtige servers heeft u direct toegang tot stabiele digitale televisiekanalen. <strong>OmnIPTV</strong> levert naadloze streams op al uw apparaten zonder kwaliteitsverlies.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Anti-freeze technologie zonder buffering', 
                  'Alle Nederlandse zenders in 4K & Full HD', 
                  'Dagelijks geüpdatete VOD bibliotheek', 
                  'Geschikt voor Smart TV, Firestick en Android'
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#DB4439] px-4 py-3 text-sm font-bold uppercase text-[#F1E8DB]">✓ {item}</div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8 px-1">
                <Link 
                  href="/pakketten" 
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#F1E8DB] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#CA1421] hover:bg-[#CA1421] hover:text-[#F1E8DB] transition duration-300 rounded-full shrink-0 shadow-lg"
                >
                  Bestel Direct Uw Toegang
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Block 2 */}
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <span className="mb-4 inline-flex rounded-full bg-[#DB4439] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#1A1A1D]">
                LIVE SPORT & PPV EVENEMENTEN
              </span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#F1E8DB] leading-none mb-4">
                MIS GEEN ENKELE <span className="text-[#DB4439]">LIVE WEDSTRIJD</span>
              </h3>
              <p className="mt-6 text-base leading-relaxed text-[#FCA9FE] font-bold">
                Sportliefhebbers kijken onbeperkt naar de Eredivisie, Champions League, Formule 1, UFC en Premier League. Met een actief <strong>OmnIPTV</strong> abonnement streamt u alle live evenementen in 50/60fps met minimale vertraging.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Alle Viaplay & Ziggo Sport kanalen', 
                  'UFC & Glory Kickboxing PPV inbegrepen', 
                  'Lage latency en minimale vertraging', 
                  'Constante hoge bitrate streams'
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#CA1421] px-4 py-3 text-sm font-bold uppercase text-[#F1E8DB]">✓ {item}</div>
                ))}
              </div>
              
              <div className="w-full flex sm:inline-flex mt-8 px-1">
                <Link 
                  href="/pakketten" 
                  className="w-full sm:w-auto text-center whitespace-nowrap bg-[#DB4439] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#1A1A1D] hover:bg-[#F1E8DB] hover:text-[#1A1A1D] transition duration-300 rounded-full shrink-0 shadow-lg"
                >
                  Ontgrendel Alle Sportkanalen
                </Link>
              </div>
            </FadeIn>
            <div className="relative order-1 overflow-hidden rounded-3xl bg-[#DB4439] p-3 lg:order-2 -rotate-2 transition-transform hover:rotate-0 duration-500">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-video lg:aspect-[5/4]">
                <Image
                  src="/img/bg-1.webp"
                  alt={`OmnIPTV live sport Eredivisie en Formule 1 uitzendingen`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#1A1A1D] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#F1E8DB]">
                  Live Sport Streams
                </div>
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#1A1A1D] p-4">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#DB4439] text-[#1A1A1D]">
                      <Trophy className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-black uppercase text-[#F1E8DB]">VIP Sport Pass</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#FCA9FE]">Alle Wedstrijden Live</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#CA1421]/10 px-4 py-2 rounded-full border border-[#CA1421]/20 mb-6">
              <BarChart className="w-4 h-4 text-[#FCA9FE]" />
              <span className="text-[#FCA9FE] font-bold text-sm uppercase tracking-wider">Vergelijking</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-6 uppercase tracking-tight">
              OmnIPTV VS TRADITIONELE KABEL
            </h2>
            <p className="text-[#F1E8DB]/60 text-lg max-w-3xl mx-auto">
              Ontdek waarom duizenden overstappen op <strong>OmnIPTV</strong>: voordeliger, flexibeler en véél meer zenders dan kabel-tv.
            </p>
          </FadeIn>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <div className="bg-gradient-to-br from-[#1A1A1D]/80 to-black/80 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-6 border-b border-r border-white/10 bg-white/5"><h3 className="text-xl font-bold text-white">Functies</h3></div>
                <div className="p-6 border-b border-r border-white/10 bg-gradient-to-r from-[#CA1421]/10 to-transparent"><h3 className="text-xl font-bold text-[#FCA9FE]">OmnIPTV</h3></div>
                <div className="p-6 border-b border-white/10"><h3 className="text-xl font-bold text-white/40">Traditionele Kabel</h3></div>
                
                {[
                  { feature: "Maandelijkse Kosten", us: "Vanaf €4,08 / maand", cable: "€60 - €120 per maand", highlight: true },
                  { feature: "Contractduur", us: "Geen contract (Geheel flexibel)", cable: "12 tot 24 maanden vast" },
                  { feature: "Aantal Live Zenders", us: "20.000+ Kanalen", cable: "60 - 150 Kanalen", highlight: true },
                  { feature: "VOD Films & Series", us: "60.000+ Titels (Wekelijks nieuw)", cable: "Beperkt / Extra betalen per film" },
                  { feature: "4K & FHD Kwaliteit", us: "Inbegrepen", cable: "Zelden / Alleen duur pluspakket", usIcon: true },
                  { feature: "Multi-Scherm Ondersteuning", us: "Tot 3 apparaten tegelijk", cable: "Extra kosten per decoder", usIcon: true },
                  { feature: "Live Sport & PPV", us: "Volledig Inbegrepen", cable: "€15 - €30 extra per sportpakket", usIcon: true },
                  { feature: "Internationale Kanalen", us: "100+ Landen beschikbaar", cable: "Alleen lokaal", highlight: true }
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 gap-0 contents">
                    <div className={`p-6 border-r border-white/5 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                      <span className="text-white/80 font-medium">{row.feature}</span>
                    </div>
                    <div className={`p-6 border-r border-white/5 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                      {row.usIcon ? (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#FCA9FE]" />
                          <span className="text-[#FCA9FE] font-bold">{row.us}</span>
                        </div>
                      ) : (
                        <span className={`${row.highlight ? 'text-[#FCA9FE] font-bold' : 'text-white/80'}`}>{row.us}</span>
                      )}
                    </div>
                    <div className={`p-6 ${idx % 2 === 0 ? 'bg-white/5' : ''}`}>
                      <span className="text-white/40">{row.cable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {[
              { feature: "Maandelijkse Kosten", us: "Vanaf €4,08 / mnd", cable: "€60 - €120/mnd" },
              { feature: "Contractduur", us: "Geen contract", cable: "12-24 maanden vast" },
              { feature: "Live Zenders", us: "20.000+", cable: "60-150" },
              { feature: "VOD Bibliotheek", us: "60.000+ films & series", cable: "Beperkt" },
              { feature: "4K Streaming", us: "Inbegrepen", cable: "Zelden" },
              { feature: "Multi-Scherm", us: "Tot 3 schermen", cable: "Extra kosten" },
              { feature: "Sport & PPV", us: "Inbegrepen", cable: "Extra €15-30/mnd" },
              { feature: "Internationale Zenders", us: "100+ landen", cable: "Alleen lokaal" }
            ].map((row, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/[0.01] to-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/5 p-6">
                <div className="text-center mb-4">
                  <span className="text-white/60 text-sm uppercase tracking-wider">{row.feature}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <div className="text-[#CA1421] font-bold text-lg">{row.us}</div>
                    <div className="text-[#CA1421]/60 text-xs">OmnIPTV</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/40 line-through text-lg">{row.cable}</div>
                    <div className="text-white/20 text-xs">Kabel TV</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl mx-auto px-4 my-8 flex justify-center items-center">
        <ShareButtons />
      </section>

      {/* Dutch Testimonials Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-6 uppercase tracking-tight">
            VERTROUWD DOOR MEER DAN <span className="text-[#CA1421]">20.000+ KLANTEN</span>
          </h2>
          <p className="text-[#FCA9FE] text-lg font-bold max-w-2xl mx-auto">
            Lees authentieke <strong>OmnIPTV</strong> ervaringen en reviews van tevreden IPTV kijkers in Nederland en België.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              name: "Daan V.", 
              text: "Eindelijk een IPTV aanbieder die niet hapert tijdens de Klassieker of Formule 1 races. De 4K beeldkwaliteit op mijn OLED TV is geweldig scherp met OmnIPTV.", 
              role: "Amsterdam" 
            },
            { 
              name: "Sanne K.", 
              text: "Mijn dure kabelabonnement direct opgezegd. Binnen 5 minuten geïnstalleerd op mijn Samsung Smart TV dankzij de snelle OmnIPTV service.", 
              role: "Rotterdam" 
            },
            { 
              name: "Lars B.", 
              text: "Enorm aanbod aan Nederlandse en buitenlandse zenders. Films hebben actuele Nederlandse ondertitels en OmnIPTV werkt perfect.", 
              role: "Utrecht" 
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-[#F1E8DB] rounded-3xl p-8 border-4 border-[#CA1421] shadow-2xl transition-transform hover:-translate-y-2 duration-300">
              <div className="flex gap-2 mb-6 items-center">
                <div className="w-12 h-12 rounded-full bg-[#CA1421] flex items-center justify-center shrink-0">
                  <MonitorPlay className="w-6 h-6 text-[#F1E8DB]" />
                </div>
                <div className="h-1 w-full bg-[#1A1A1D]/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#CA1421] w-[85%]" />
                </div>
              </div>
              <p className="text-[#1A1A1D] font-bold text-lg leading-relaxed mb-8 italic">"{testimonial.text}"</p>
              <div className="border-t border-[#1A1A1D]/20 pt-4">
                <div className="font-black text-[#1A1A1D] text-xl uppercase tracking-tight">{testimonial.name}</div>
                <div className="text-[#CA1421] text-sm font-black uppercase tracking-wider mt-1">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </FadeInStagger>
      </section>

      {/* Supported Devices Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full relative">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-6 uppercase tracking-tight">
            COMPATIBEL MET ELKE OMNI IPTV PLAYER
          </h2>
          <p className="text-[#F1E8DB]/60 text-lg max-w-3xl mx-auto mb-16">
            <strong>OmnIPTV</strong> werkt soepel op al uw favoriete schermen. Configureer eenvoudig een player app en begin direct met streamen.
          </p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
          {[
            { tag: "Smart TV (Samsung & LG)", icon: Tv2 },
            { tag: "Android TV & Boxen", icon: Cpu },
            { tag: "Apple TV & iOS", icon: MonitorSmartphone },
            { tag: "Amazon Firestick", icon: Zap },
            { tag: "Windows PC & Mac", icon: MonitorPlay },
            { tag: "MAG & Formuler Boxen", icon: ShieldCheck },
          ].map((device) => {
            const Icon = device.icon;
            return (
              <div key={device.tag} className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:border-[#FCA9FE]/40 hover:bg-white/[0.04] hover:-translate-y-2 transition-all cursor-pointer group">
                <Icon className="w-12 h-12 text-white/20 group-hover:text-[#FCA9FE] group-hover:scale-110 transition-all" />
                <span className="text-sm font-bold text-[#F1E8DB]/80 group-hover:text-[#F1E8DB] text-center">{device.tag}</span>
              </div>
            );
          })}
        </FadeInStagger>
      </section>

      {/* FAQ Section */}
      <div className="min-h-[400px] bg-[#1A1A1D]">
        {isMounted ? <FAQ /> : <div className="h-[400px] bg-transparent" />}
      </div>

      {/* Blog Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#F1E8DB] mb-4 uppercase tracking-tight">
              LAATSTE <span className="text-[#CA1421]">ARTIKELEN & HANDLEIDINGEN</span>
            </h2>
            <p className="text-[#FCA9FE] text-lg font-bold">
              Lees onze handige tips over OmnIPTV installatie, app-instellingen en de nieuwste updates.
            </p>
          </div>
          
          <div className="flex shrink-0">
            <Link 
              href="/kennisbank" 
              className="whitespace-nowrap px-6 py-3 rounded-full border border-white/10 text-[#F1E8DB] font-bold hover:bg-white/5 transition-colors flex items-center gap-2 group shrink-0"
            >
              <span>Bekijk Kennisbank</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FCA9FE]" />
            </Link>
          </div>
        </FadeIn>
        
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <Link href={`/kennisbank/${post.slug}`} className="block">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-white/[0.01] border border-white/5 shadow-lg group-hover:border-[#DB4439]/40 transition-colors duration-300">
                  <Image 
                    src={post.image} 
                    alt={`${post.title} - OmnIPTV Handleiding`} 
                    width={800} 
                    height={450} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw" 
                  />
                  <div className="absolute inset-0 bg-[#1A1A1D]/40" />
                  <div className="absolute bottom-6 left-6">
                    <span className="px-3 py-1 bg-[#CA1421] text-[#F1E8DB] text-[10px] font-black uppercase tracking-widest rounded-lg inline-block">
                      {post.author}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#F1E8DB] mb-3 group-hover:text-[#CA1421] transition-colors tracking-tight line-clamp-2 uppercase">
                  {post.title}
                </h3>
                <p className="text-[#F1E8DB]/60 text-sm md:text-base mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold text-[#FCA9FE] uppercase tracking-widest group-hover:gap-3 transition-all">
                  Lees Artikel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          ))}
        </FadeInStagger>
      </section>
        
      {/* Final CTA Section */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#1A1A1D]">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#CA1421]/20 bg-black shadow-[0_0_80px_rgba(202,20,33,0.08)] lg:rounded-[3rem]">
            <Image
              src="/img/bg-2.webp"
              alt={`OmnIPTV stabiele verbinding en directe activatie`}
              width={1400}
              height={600}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-30 brightness-[0.4]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#CA1421]/15 blur-[110px]" />

            <FadeIn className="relative z-10 px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 lg:px-20 lg:py-24">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CA1421]/30 bg-[#CA1421]/10 px-4 py-2 backdrop-blur-md">
                <svg className="h-4 w-4 text-[#FCA9FE]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L13 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7 7L10 2Z" />
                </svg>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#FCA9FE]">
                  Premium 4K Kwaliteit
                </span>
              </div>
              <h2 className="mx-auto max-w-5xl text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase text-[#F1E8DB] leading-none mb-6">
                UPGRADE UW <br/><span className="text-[#CA1421]">TV ERVARING VANDAAG</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#F1E8DB]/70 md:text-lg">
                Krijg direct toegang tot alle sportkanalen, films en live televisie in 4K Ultra HD kwaliteit met <strong>OmnIPTV</strong>. Snelle activatie binnen 5 minuten op al uw apparaten.
              </p>
              <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {[
                  ['20K+', 'Live Zenders'],
                  ['4K Ultra', 'Beeldkwaliteit'],
                  ['99.9%', 'Server Uptime'],
                  ['24/7', 'WhatsApp Support'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/5 bg-black/60 p-4 backdrop-blur-md">
                    <div className="text-2xl font-black text-[#CA1421] sm:text-3xl">{value}</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-[#F1E8DB]/50">{label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4">
                <Link 
                  href="/pakketten" 
                  className="w-full sm:w-auto text-center whitespace-nowrap rounded-full bg-[#CA1421] px-10 py-4 text-sm font-black uppercase tracking-widest text-[#F1E8DB] shadow-[0_0_30px_rgba(202,20,33,0.35)] hover:bg-[#DB4439] transition-all hover:scale-105 shrink-0"
                >
                  Kies Uw Abonnement
                </Link>
                <Link 
                  href="/installatie" 
                  className="w-full sm:w-auto text-center whitespace-nowrap inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-[#F1E8DB] backdrop-blur-md hover:bg-white/10 transition-all shrink-0"
                >
                  <Settings className="h-5 w-5 text-[#FCA9FE] shrink-0" /> Installatie Handleiding
                </Link>
              </div>
              
              <p className="mt-8 text-sm font-medium text-[#F1E8DB]/50">
                Veilig Betalen • Geen Vast Contract • Directe Activatie Binnen 5 Minuten
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}