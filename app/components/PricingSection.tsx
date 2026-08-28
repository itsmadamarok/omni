'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { CheckCircle2, Zap, Crown, MonitorPlay, Gift } from 'lucide-react';

export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  // Exact Euro pricing structure with accurate monthly breakdown
  const pricing = {
    1: {
      3: { total: 25, mo: (25 / 3).toFixed(2) },
      6: { total: 35, mo: (35 / 6).toFixed(2) },
      12: { total: 49, mo: (49 / 12).toFixed(2) },
    },
    2: {
      3: { total: 45, mo: (45 / 3).toFixed(2) },
      6: { total: 65, mo: (65 / 6).toFixed(2) },
      12: { total: 110, mo: (110 / 12).toFixed(2) },
    },
    3: {
      3: { total: 60, mo: (60 / 3).toFixed(2) },
      6: { total: 95, mo: (95 / 6).toFixed(2) },
      12: { total: 150, mo: (150 / 12).toFixed(2) },
    },
  };

  const currentPricing = pricing[devices] || pricing[1];

  const WHATSAPP_NUMBER = '+31612345678'; // Updated to Dutch format from CONSTANTS

  const handleWhatsAppRedirect = (months: number) => {
    const message = `Hallo OMNI IPTV, ik wil graag een abonnement van ${months} maanden bestellen voor ${devices} ${
      devices > 1 ? 'schermen' : 'scherm'
    }.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrialRedirect = () => {
    const message = `Hallo OMNI IPTV, ik wil graag een gratis 24-uurs proefperiode (IPTV Test) aanvragen om de zenders te testen.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      id="pricing-section" 
      className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 scroll-mt-20"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none md:bg-[size:48px_48px]"></div>
      
      <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6">
          <Crown className="w-4 h-4 text-[#F1E8DB]" />
          <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">
            Beste Prijs-Kwaliteitverhouding
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-6 uppercase tracking-tight">
          KIES UW <span className="text-[#CA1421]">IPTV ABONNEMENT</span>
        </h2>
        <p className="text-lg text-[#F1E8DB]/70 mb-10 max-w-2xl mx-auto leading-relaxed">
          Kies de gewenste abonnementsduur. Profiteer van maximale korting bij jaarplannen en stream tegelijkertijd op meerdere schermen in uw huishouden.
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-[#CA1421]" />
            <span className="text-sm text-[#F1E8DB] font-black uppercase tracking-widest">
              Aantal Verbindingen / Schermen
            </span>
          </div>
          <div className="inline-flex bg-[#1A1A1D] border-2 border-[#CA1421] rounded-full p-2 relative">
            {[1, 2, 3].map((d) => (
              <button 
                key={d}
                onClick={() => setDevices(d as 1 | 2 | 3)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-black tracking-wider uppercase transition-transform hover:scale-105 ${
                  devices === d 
                    ? 'bg-[#CA1421] text-[#F1E8DB]' 
                    : 'text-[#F1E8DB]/60 hover:text-[#F1E8DB]'
                }`}
              >
                {d} {d > 1 ? 'Schermen' : 'Scherm'}
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto mt-16 relative">
        
        {/* 3 Months Plan */}
        <FadeInItem className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[#CA1421] uppercase tracking-[0.2em]">Starter</h3>
              <MonitorPlay className="w-5 h-5 text-[#CA1421]" />
            </div>
            <div className="text-3xl font-black text-[#1A1A1D] mb-2 tracking-tighter uppercase">3 Maanden</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#1A1A1D] tracking-tighter">
                €{currentPricing[3]?.total || 0}
              </span>
            </div>
            <div className="text-xs font-black text-[#F1E8DB] mb-8 uppercase tracking-widest border-2 border-[#CA1421] self-start px-3 py-1.5 rounded-full inline-block bg-[#CA1421]">
              Slechts €{currentPricing[3]?.mo || 0} / mnd
            </div>
            
            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Gelijktijdige ${devices > 1 ? 'schermen' : 'verbinding'}`,
                'Haarscherpe 4K Ultra HD & Full HD',
                '20.000+ Nationale & Internationale Zenders',
                '60.000+ Films & Series (Dagelijks Bijgewerkt)',
                'Alle Sportzenders (Viaplay, Ziggo Sport, ESPN)',
                'Volledige TV-Gids (EPG) & 7 Dagen Terugkijken',
                'Anti-Freeze & Anti-Buffer VIP Servers',
                'Geschikt voor Smart TV, Firestick, Android & iOS',
                '24/7 VIP Klantenservice via WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#1A1A1D] text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#CA1421] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex">
              <button 
                onClick={() => handleWhatsAppRedirect(3)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shrink-0"
              >
                Kies 3 Maanden
              </button>
            </div>
          </div>
        </FadeInItem>

        {/* 12 Months Plan (Most Popular) */}
        <FadeInItem className="relative bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-10 flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(202,20,33,0.3)] z-20 group overflow-hidden">
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <div className="bg-[#CA1421] text-[#F1E8DB] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full flex items-center gap-1 border border-[#F1E8DB]/25">
              Meest Gekozen
            </div>
          </div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[#CA1421] uppercase tracking-[0.2em]">Beste Waarde</h3>
            </div>
            <div className="text-3xl font-black text-[#1A1A1D] mb-2 tracking-tighter uppercase">12 Maanden</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-6xl font-black text-[#1A1A1D] tracking-tighter">
                €{currentPricing[12]?.total || 0}
              </span>
            </div>
            <div className="text-xs font-black text-[#F1E8DB] mb-8 uppercase tracking-widest border-2 border-[#CA1421] self-start px-4 py-2 rounded-full inline-block bg-[#CA1421]">
              Slechts €{currentPricing[12]?.mo || 0} / mnd
            </div>

            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Gelijktijdige ${devices > 1 ? 'schermen' : 'verbinding'}`,
                'Haarscherpe 4K Ultra HD & Full HD',
                '20.000+ Nationale & Internationale Zenders',
                '60.000+ Films & Series (Dagelijks Bijgewerkt)',
                'Alle Sportzenders (Viaplay, Ziggo Sport, ESPN)',
                'Volledige TV-Gids (EPG) & 7 Dagen Terugkijken',
                'Anti-Freeze & Anti-Buffer VIP Servers',
                'Geschikt voor Smart TV, Firestick, Android & iOS',
                '24/7 VIP Klantenservice via WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#1A1A1D] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#CA1421] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex">
              <button 
                onClick={() => handleWhatsAppRedirect(12)}
                className="w-full text-center whitespace-nowrap px-6 py-5 rounded-full bg-[#1A1A1D] text-[#F1E8DB] font-black text-base uppercase tracking-widest transition-transform hover:scale-105 shrink-0"
              >
                Bestel 12 Maanden
              </button>
            </div>
          </div>
        </FadeInItem>

        {/* 6 Months Plan */}
        <FadeInItem className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-6 md:p-8 flex flex-col group relative overflow-hidden shadow-2xl">
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-[#CA1421] uppercase tracking-[0.2em]">Populair</h3>
              <MonitorPlay className="w-5 h-5 text-[#CA1421]" />
            </div>
            <div className="text-3xl font-black text-[#1A1A1D] mb-2 tracking-tighter uppercase">6 Maanden</div>
            
            <div className="flex items-baseline gap-2 mb-2 mt-4">
              <span className="text-5xl font-black text-[#1A1A1D] tracking-tighter">
                €{currentPricing[6]?.total || 0}
              </span>
            </div>
            <div className="text-xs font-black text-[#F1E8DB] mb-8 uppercase tracking-widest border-2 border-[#CA1421] self-start px-3 py-1.5 rounded-full inline-block bg-[#CA1421]">
              Slechts €{currentPricing[6]?.mo || 0} / mnd
            </div>
            
            <ul className="w-full space-y-3 flex-grow relative mb-8">
              {[
                `${devices} Gelijktijdige ${devices > 1 ? 'schermen' : 'verbinding'}`,
                'Haarscherpe 4K Ultra HD & Full HD',
                '20.000+ Nationale & Internationale Zenders',
                '60.000+ Films & Series (Dagelijks Bijgewerkt)',
                'Alle Sportzenders (Viaplay, Ziggo Sport, ESPN)',
                'Volledige TV-Gids (EPG) & 7 Dagen Terugkijken',
                'Anti-Freeze & Anti-Buffer VIP Servers',
                'Geschikt voor Smart TV, Firestick, Android & iOS',
                '24/7 VIP Klantenservice via WhatsApp',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[#1A1A1D]/70 text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#CA1421] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="w-full flex">
              <button 
                onClick={() => handleWhatsAppRedirect(6)}
                className="w-full text-center whitespace-nowrap px-6 py-4 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-sm uppercase tracking-widest transition-transform hover:scale-105 shrink-0"
              >
                Kies 6 Maanden
              </button>
            </div>
          </div>
        </FadeInItem>
      </FadeInStagger>

      {/* Standalone Horizontal Full-Width Card - Compact */}
      <FadeIn className="max-w-2xl mx-auto mt-12 relative z-30">
        <div className="bg-[#F1E8DB] border-4 border-[#CA1421] rounded-3xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="bg-[#CA1421] p-2.5 rounded-xl text-[#F1E8DB] shrink-0 hidden sm:block">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-lg font-black text-[#1A1A1D] uppercase tracking-tight">
                Gratis 24-Uurs IPTV Test Aanvragen?
              </h4>
              <p className="text-xs text-[#1A1A1D]/70 font-semibold">
                Test eerst onze zenders en 4K beeldkwaliteit geheel vrijblijvend.
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0">
            <button 
              onClick={handleFreeTrialRedirect}
              className="w-full md:w-auto text-center whitespace-nowrap px-8 py-3 rounded-full bg-[#CA1421] text-[#F1E8DB] font-black text-sm uppercase tracking-widest transition-transform hover:scale-[1.02]"
            >
              Test Nu Gratis
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}