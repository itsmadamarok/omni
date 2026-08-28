'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

const faqs = [
  { 
    q: 'Wat is IPTV en hoe werkt het precies?', 
    a: `IPTV staat voor Internet Protocol Television. Hiermee kijkt u live televisiezenders, sport en on-demand films via uw internetverbinding in plaats van via een traditionele kabel- of satellietaansluiting. Met ${CONSTANTS.BRAND_NAME} streamt u direct in 4K op uw Smart TV of mobiele apparaten.` 
  },
  { 
    q: `Wat maakt ${CONSTANTS.BRAND_NAME} de beste IPTV provider?`, 
    a: `${CONSTANTS.BRAND_NAME} levert maximale streamstabiliteit met meer dan 20.000 zenders en 60.000+ films en series. Dankzij onze anti-freeze servertechnologie geniet u van live sport (Eredivisie, Viaplay, Ziggo Sport) zonder buffering of haperingen.` 
  },
  { 
    q: 'Op welke apparaten kan ik IPTV kijken?', 
    a: `Onze IPTV service is compatibel met vrijwel elk apparaat: Samsung & LG Smart TV's, Android TV, Google TV, Amazon Firestick, Apple TV, iPhone, iPad, Windows PC, Mac en MAG- of Formuler-boxen.` 
  },
  { 
    q: 'Hoe snel wordt mijn IPTV abonnement geactiveerd?', 
    a: 'Direct na het afronden van uw bestelling worden uw M3U-link en Xtream Codes automatisch gegenereerd. U ontvangt uw inloggegevens binnen 5 minuten via WhatsApp en e-mail inclusief duidelijke installatie-instructies.' 
  },
  { 
    q: 'Kan ik eerst een gratis 24-uurs IPTV test aanvragen?', 
    a: `Ja, absoluut! U kunt via onze website direct contact opnemen via WhatsApp om een gratis, vrijblijvende 24-uurs proefperiode aan te vragen om onze 4K zenders en serverstabiliteit zelf te testen.` 
  },
  { 
    q: 'Hoe installeer ik de IPTV app op mijn Smart TV?', 
    a: 'Download een aanbevolen IPTV app zoals IBO Player, TiviMate, Smart IPTV of IPTV Smarters via de app store van uw TV. Voer vervolgens uw M3U-afspeellijst of inloggegevens in om direct te beginnen met kijken.' 
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section 
      className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-white/5 mt-16 relative" 
      aria-label={`Veelgestelde vragen over ${CONSTANTS.BRAND_NAME}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 bg-[#CA1421]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <FadeIn className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#CA1421] px-4 py-2 rounded-full mb-6 shadow-md">
          <span className="text-[#F1E8DB] font-black text-xs uppercase tracking-widest">FAQ</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#F1E8DB] mb-6 uppercase tracking-tighter leading-none">
          VEELGESTELDE <span className="text-[#CA1421]">VRAGEN</span>
        </h2>
        <p className="text-[#FCA9FE] font-bold text-lg max-w-2xl mx-auto mt-4">
          Alles wat u moet weten over onze {CONSTANTS.BRAND_NAME} abonnementen, installatie en zenders.
        </p>
      </FadeIn>
      
      <FadeInStagger className="space-y-4 relative z-10">
        {faqs.map((faq, i) => (
          <FadeInItem key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full text-left bg-[#F1E8DB] border-4 ${
                openIndex === i ? 'border-[#CA1421]' : 'border-white/5'
              } rounded-2xl p-6 hover:border-[#CA1421]/60 transition-all duration-300 group`}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors ${
                  openIndex === i ? 'text-[#CA1421]' : 'text-[#1A1A1D] group-hover:text-[#CA1421]'
                } flex items-center gap-3`}>
                  <span className={`${openIndex === i ? 'text-[#CA1421]' : 'text-[#1A1A1D]/30'} font-black text-2xl`}>
                    V.
                  </span> 
                  {faq.q}
                </h3>
                <ChevronDown className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? 'rotate-180 text-[#CA1421]' : 'text-[#1A1A1D]/30 group-hover:text-[#CA1421]/50'
                }`} />
              </div>
              <div 
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
                role="region"
              >
                <p className="text-[#1A1A1D]/80 font-medium leading-relaxed pl-10 md:pl-12 border-l-4 border-[#CA1421] ml-2 py-2">
                  {faq.a}
                </p>
              </div>
            </button>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </section>
  );
}