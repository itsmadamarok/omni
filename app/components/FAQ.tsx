'use client';

import { useState } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import { ChevronDown, HelpCircle, ShieldCheck, Tv2, Zap, Sparkles } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

/* =========================================================
   OMNIPTV — DESIGN SYSTEM (MATCHED TO PRICING SECTION)
   Section bg   : #F7F7F7 (Warm White) + subtle grid & #F4A7A7 glow
   Closed cards : #FFFFFF (White) — flat with #6B7280/25 border
   Open card    : #1B1B1F (Charcoal) — flat with #FFD700 gold border
   Accent       : #E3182B (Dutch Red)
   Muted        : #6B7280 (Slate Gray)
   Soft accent  : #F4A7A7 (Tulip Blush)
   Success      : #10B981
   Highlight    : #FFD700 (Gold) + #1B1B1F text
   NO GRADIENTS ON CARD BACKGROUNDS
   ========================================================= */

interface FaqItem {
  id: string;
  category: string;
  q: string;
  a: string;
  highlight?: string;
}

const faqs: FaqItem[] = [
  {
    id: 'wat-is-iptv',
    category: 'Basis & Werking',
    q: 'Wat is IPTV en hoe werkt het precies in Nederland?',
    a: `IPTV (Internet Protocol Television) levert live televisie, sport en on-demand content via een stabiele glasvezel- of breedbandverbinding in plaats van verouderde kabel- of schotelverbindingen. Bij ${CONSTANTS.BRAND_NAME} streamt u direct in 4K Ultra HD en Full HD op uw Smart TV, mediaspeler, tablet of smartphone met snelle kanaalschakeling en een uitgebreide elektronische tv-gids (EPG).`,
    highlight: '4K Ultra HD & Full HD streaming via internet',
  },
  {
    id: 'beste-iptv-provider',
    category: 'Kwaliteit & Stabiliteit',
    q: `Waarom kiezen kijkers voor ${CONSTANTS.BRAND_NAME} als betrouwbare IPTV aanbieder?`,
    a: `${CONSTANTS.BRAND_NAME} combineert geoptimaliseerde servers, anti-freeze technologie en een actueel aanbod van meer dan 25.000 nationale en internationale zenders plus 60.000+ films en series met dagelijkse updates. Of u nu live Eredivisie, Formule 1 via Viaplay, Ziggo Sport of ESPN volgt, onze infrastructuur is ingericht op vloeiende weergave tijdens piekmomenten.`,
    highlight: '25.000+ zenders, 60.000+ VOD-titels & anti-freeze servers',
  },
  {
    id: 'ondersteunde-apparaten',
    category: 'Apparaten',
    q: 'Op welke apparaten en Smart TVs kan ik IPTV kijken?',
    a: `De dienst van ${CONSTANTS.BRAND_NAME} werkt op vrijwel alle moderne schermen en set-top boxes: Samsung en LG Smart TV's, Android TV en Google TV, Amazon Fire TV Stick, Apple TV, iPhone, iPad, Windows, macOS, Enigma2, MAG en Formuler. U kunt bovendien kiezen voor 1, 2 of 3 gelijktijdige schermen voor het hele gezin.`,
    highlight: 'Geschikt voor Smart TV, Firestick, Android, iOS & Formuler',
  },
  {
    id: 'activatie-snelheid',
    category: 'Activatie',
    q: 'Hoe snel wordt mijn IPTV abonnement geactiveerd na betaling?',
    a: `Na het plaatsen van uw bestelling wordt uw account vlot ingericht zodat u direct aan de slag kunt. U ontvangt uw M3U-afspeellijst en Xtream Codes API-gegevens overzichtelijk via WhatsApp en e-mail, inclusief heldere stappen om uw apparaat binnen enkele minuten werkend te krijgen.`,
    highlight: 'Snelle levering van M3U & Xtream Codes + support',
  },
  {
    id: 'gratis-24-uurs-test',
    category: 'Proefperiode',
    q: 'Kan ik eerst een gratis 24-uurs IPTV test aanvragen?',
    a: `Ja, u kunt vrijblijvend een 24-uurs test aanvragen via WhatsApp om de beeldkwaliteit, het zenderaanbod, de Nederlandse en internationale sportkanalen en de stabiliteit op uw eigen internetverbinding en apparaat te beoordelen voordat u een 3-, 6- of 12-maandenpakket kiest.`,
    highlight: '24 uur vrijblijvend testen op uw eigen apparaat',
  },
  {
    id: 'smart-tv-installatie',
    category: 'Installatie',
    q: 'Hoe installeer en configureer ik IPTV op mijn Smart TV?',
    a: `Installeer een geschikte IPTV-speler zoals IBO Player, TiviMate, Smart IPTV of IPTV Smarters Pro via de app-winkel van uw televisie of mediaspeler. Vul daarna de ontvangen Xtream Codes (server-URL, gebruikersnaam en wachtwoord) of M3U-link in, laad de zenderlijst en EPG in, en u kunt direct kijken.`,
    highlight: 'Ondersteuning voor TiviMate, IBO Player & IPTV Smarters',
  },
  {
    id: 'multiroom-en-korting',
    category: 'Abonnementen',
    q: 'Hoe werkt kijken op meerdere schermen en welke kortingen gelden er?',
    a: `Met de schermkeuze bij ${CONSTANTS.BRAND_NAME} kunt u tegelijkertijd kijken op 1, 2 of 3 schermen zonder dat streams elkaar onderbreken. Langere looptijden zoals 12 maanden bieden extra voordeel, inclusief toegang tot onze VIP-lijn en een gratis player app gedurende de looptijd.`,
    highlight: 'Tot 3 gelijktijdige schermen & extra voordeel op jaarplannen',
  },
  {
    id: 'internetsnelheid-en-epg',
    category: 'Techniek & EPG',
    q: 'Welke internetsnelheid heb ik nodig voor 4K IPTV en werkt de TV-gids (EPG)?',
    a: `Voor soepele Full HD-weergave adviseren wij minimaal 15-25 Mbps en voor 4K Ultra HD bij voorkeur 30+ Mbps via een stabiele wifi- of bekabelde Ethernet-verbinding. Daarnaast ondersteunt de dienst een uitgebreide EPG (tv-gids) en catch-up/terugkijkfuncties waar beschikbaar per zender en speler.`,
    highlight: 'Advies vanaf 25-30+ Mbps stabiel internet voor HD/4K',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq-section"
      className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20 bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden border-t border-[#6B7280]/15"
      aria-label={`Veelgestelde vragen over ${CONSTANTS.BRAND_NAME}`}
    >
      {/* Soft blush glow (outside card backgrounds) */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[640px] h-[300px] bg-[#F4A7A7]/35 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle design-system grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(107,114,128,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(107,114,128,0.10) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 border border-[#E3182B]/40 bg-white px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <HelpCircle className="w-4 h-4 text-[#E3182B]" aria-hidden="true" />
            <span className="text-[#E3182B] font-black text-xs uppercase tracking-widest">
              Kennisbank &amp; Support
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1B1B1F] mb-4 uppercase tracking-tight leading-tight">
            VEELGESTELDE <span className="text-[#E3182B]">VRAGEN</span>
          </h2>

          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-[#E3182B]" />

          <p className="text-base sm:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-medium">
            Praktische antwoorden over {CONSTANTS.BRAND_NAME} IPTV, 4K streams, Smart TV en Firestick installatie, M3U en Xtream Codes, meerdere schermen en de gratis 24-uurs test.
          </p>

          {/* Compact trust strip */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#6B7280]/20 text-xs font-extrabold text-[#1B1B1F] shadow-sm">
              <Zap className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
              Snelle Activatie
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#6B7280]/20 text-xs font-extrabold text-[#1B1B1F] shadow-sm">
              <Tv2 className="w-3.5 h-3.5 text-[#E3182B]" aria-hidden="true" />
              Alle Apparaten &amp; Apps
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#6B7280]/20 text-xs font-extrabold text-[#1B1B1F] shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
              24-Uurs Test Mogelijk
            </span>
          </div>
        </FadeIn>

        {/* FAQ Accordion Cards */}
        <FadeInStagger className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <FadeInItem key={faq.id}>
                <div
                  className={`rounded-3xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-[#1B1B1F] text-white border-2 border-[#FFD700] shadow-xl'
                      : 'bg-white text-[#1B1B1F] border-[#6B7280]/25 hover:border-[#E3182B] shadow-md'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full text-left p-6 sm:p-7 flex items-start sm:items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3182B] rounded-3xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                            isOpen
                              ? 'bg-[#FFD700] text-[#1B1B1F]'
                              : 'bg-[#F7F7F7] text-[#E3182B] border border-[#E3182B]/25'
                          }`}
                        >
                          {faq.category}
                        </span>
                        <span
                          className={`text-xs font-black tracking-wider uppercase ${
                            isOpen ? 'text-[#FFD700]' : 'text-[#6B7280]'
                          }`}
                        >
                          Vraag {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3
                        className={`text-base sm:text-xl font-black tracking-tight leading-snug ${
                          isOpen ? 'text-white' : 'text-[#1B1B1F]'
                        }`}
                      >
                        {faq.q}
                      </h3>
                    </div>

                    <span
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#FFD700] text-[#1B1B1F] rotate-180'
                          : 'bg-[#F7F7F7] text-[#1B1B1F] border border-[#6B7280]/20'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-5 h-5" strokeWidth={2.75} />
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${faq.id}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-1">
                      <div
                        className={`pt-4 border-t ${
                          isOpen ? 'border-white/15' : 'border-[#6B7280]/15'
                        }`}
                      >
                        <p
                          className={`text-sm sm:text-base leading-relaxed font-medium ${
                            isOpen ? 'text-white/90' : 'text-[#6B7280]'
                          }`}
                        >
                          {faq.a}
                        </p>

                        {faq.highlight && (
                          <div
                            className={`mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-extrabold ${
                              isOpen
                                ? 'bg-white/10 text-[#FFD700] border border-[#FFD700]/40'
                                : 'bg-[#F7F7F7] text-[#1B1B1F] border border-[#6B7280]/20'
                            }`}
                          >
                            <Sparkles
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isOpen ? 'text-[#FFD700]' : 'text-[#10B981]'
                              }`}
                              aria-hidden="true"
                            />
                            <span>{faq.highlight}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}