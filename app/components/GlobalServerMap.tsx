'use client';

import { FadeIn } from './AnimatedSection';
import { Wifi, Server, ShieldCheck, Zap } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export default function GlobalServerMap() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#1B1B1F] py-16 sm:py-20 lg:py-28 border-y border-white/10 text-white"
      aria-label="Wereldwijde IPTV serverdekking kaart"
    >
      {/* Square-grid background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Soft Ambient Glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(227,24,43,0.12),_transparent_65%)] pointer-events-none z-0"
        aria-hidden="true"
      />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FFD700]/35 bg-[#232329] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#FFD700]">
            <Wifi className="h-4 w-4 text-[#FFD700]" />
            Wereldwijd IPTV Servernetwerk
          </div>

          <h2 className="text-3xl font-black uppercase leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Wereldwijde Dekking In <span className="text-[#FFD700]">100+ Landen</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base font-medium">
            Geniet van ultrasnelle 4K IPTV streams met {CONSTANTS.BRAND_NAME}. Onze
            anti-freeze servers garanderen 99.9% uptime, razendsnel zappen en stabiele
            livestreams zonder haperingen.
          </p>
        </div>

        {/* Global Map Graphic */}
        <div className="relative mx-auto my-8 max-w-5xl px-2 sm:px-4">
          <div className="rounded-3xl bg-[#232329]/80 border border-white/10 p-3 sm:p-6 shadow-2xl">
            <img
              src="/img/global.png"
              alt={`Wereldwijde IPTV servernetwerk dekking kaart voor ${CONSTANTS.BRAND_NAME}`}
              width={1400}
              height={787}
              className="w-full h-auto max-h-[600px] object-contain block mx-auto opacity-95"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-[#232329] p-6 rounded-2xl border border-white/10 shadow-md hover:border-[#FFD700]/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B1B1F] border border-[#FFD700]/30 text-[#FFD700]">
                <Zap className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-base font-black uppercase text-white">Lage Latentie</h3>
            <p className="text-xs text-white/70 mt-1.5 font-medium leading-relaxed">
              Geoptimaliseerde serverrouting voor vloeiende live sport en direct zappen.
            </p>
          </div>

          <div className="bg-[#232329] p-6 rounded-2xl border border-white/10 shadow-md hover:border-[#FFD700]/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B1B1F] border border-[#FFD700]/30 text-[#FFD700]">
                <Server className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-base font-black uppercase text-white">Redundante Servers</h3>
            <p className="text-xs text-white/70 mt-1.5 font-medium leading-relaxed">
              Automatische failover systemen zorgen voor stabiele streams zonder onderbreking.
            </p>
          </div>

          <div className="bg-[#232329] p-6 rounded-2xl border border-white/10 shadow-md hover:border-[#10B981]/50 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300">
            <div className="flex justify-center mb-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1B1B1F] border border-[#10B981]/30 text-[#10B981]">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>
            <h3 className="text-base font-black uppercase text-white">99.9% Uptime</h3>
            <p className="text-xs text-white/70 mt-1.5 font-medium leading-relaxed">
              Continue serverbewaking voor een betrouwbare kijkervaring dag en nacht.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}