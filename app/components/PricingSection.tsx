'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './AnimatedSection';
import {
  CheckCircle2,
  Zap,
  Crown,
  MonitorPlay,
  Gift,
  ShieldCheck,
  Lock,
  Tv2,
  ChevronDown,
  ChevronUp,
  Tag,
} from 'lucide-react';

/* =========================================================
   OMNIPTV — DESIGN SYSTEM
   Section bg   : #F7F7F7 (Warm White)
   3/6-mo cards : #FFFFFF (White) — flat
   12-mo card   : #1B1B1F (Charcoal / dark) — flat
   Accent       : #E3182B (Dutch Red)
   Muted        : #6B7280 (Slate Gray)
   Soft accent  : #F4A7A7 (Tulip Blush)
   Success      : #10B981
   Important CTA: #FFD700 (gold) + #1B1B1F text
   NO GRADIENTS ON CARD BACKGROUNDS
   ========================================================= */

const DEVICE_PROMOS: Record<1 | 2 | 3, number> = {
  1: 25,
  2: 33,
  3: 39,
};

// ---------------------------------------------------------------------------
// SHOPPING CART ICON
// ---------------------------------------------------------------------------
const CartIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} shrink-0`}
    aria-hidden="true"
  >
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="18" cy="20" r="1.4" />
    <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6" />
  </svg>
);

// ---------------------------------------------------------------------------
// Payment icons
// ---------------------------------------------------------------------------
const PaymentIcons = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const shellBg = variant === 'dark' ? 'rgba(255,255,255,0.08)' : '#F7F7F7';
  const shellBorder = variant === 'dark' ? 'rgba(255,215,0,0.30)' : 'rgba(107,114,128,0.20)';
  const textColor = variant === 'dark' ? '#FFFFFF' : '#1B1B1F';

  const Shell = ({ children }: { children: React.ReactNode }) => (
    <div
      className="flex items-center justify-center h-8 w-12 rounded-md overflow-hidden shrink-0 transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: shellBg, border: `1px solid ${shellBorder}` }}
    >
      {children}
    </div>
  );

  return (
    <div className="grid grid-cols-5 gap-2 items-center">
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="22" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fontStyle="italic" fill={textColor} letterSpacing="-0.5">VISA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19" cy="16" r="9" fill="#EB001B" />
          <circle cx="29" cy="16" r="9" fill="#F79E1B" />
          <path d="M24 8.5a9 9 0 000 15 9 9 0 000-15z" fill="#FF5F00" />
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="11" fontWeight="900" fontStyle="italic" fill="#003087">Pay</text>
          <text x="24" y="27" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="9" fontWeight="800" fontStyle="italic" fill="#009CDE">Pal</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="12" fontWeight="900" fill={variant === 'dark' ? '#FFFFFF' : '#E3182B'}>SEPA</text>
        </svg>
      </Shell>
      <Shell>
        <svg viewBox="0 0 48 32" className="h-5 w-auto" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="16" r="10" fill="#F7931A" />
          <text x="24" y="21" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">₿</text>
        </svg>
      </Shell>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Animated price
// ---------------------------------------------------------------------------
const AnimatedPrice = ({ value, className }: { value: number; className?: string }) => (
  <span className={`inline-flex items-baseline ${className ?? ''}`}>
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -25, scale: 0.7 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 25, scale: 0.7 }}
        transition={{ duration: 0.35, type: 'spring', stiffness: 200, damping: 18 }}
        className="inline-block"
      >
        €{value}
      </motion.span>
    </AnimatePresence>
  </span>
);

// ---------------------------------------------------------------------------
// Feature list
// ---------------------------------------------------------------------------
const FeatureList = ({
  features,
  accent,
  open,
}: {
  features: string[];
  accent: 'dark' | 'muted' | 'ondark';
  open: boolean;
}) => {
  const tone =
    accent === 'dark' ? 'text-[#1B1B1F]' : accent === 'ondark' ? 'text-white' : 'text-[#6B7280]';
  const iconTone = accent === 'ondark' ? 'text-[#FFD700]' : 'text-[#10B981]';
  return (
    <div
      className={`relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
        open ? 'max-h-[1000px]' : 'max-h-[5.5rem]'
      }`}
    >
      <ul className="w-full space-y-3.5">
        {features.map((feature) => (
          <li key={feature} className={`flex items-center gap-3 font-semibold text-sm ${tone}`}>
            <CheckCircle2 className={`w-4 h-4 shrink-0 ${iconTone}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Edge toggle
// ---------------------------------------------------------------------------
const EdgeToggle = ({
  open,
  onClick,
  accent,
  controlsId,
}: {
  open: boolean;
  onClick: () => void;
  accent: 'gold' | 'white';
  controlsId: string;
}) => {
  const isGold = accent === 'gold';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls={controlsId}
      aria-label={open ? 'Toon minder functies' : 'Toon alle functies'}
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-10 h-10 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F7F7] active:scale-95 border ${
        isGold
          ? 'bg-[#FFD700] text-[#1B1B1F] hover:brightness-95 focus-visible:ring-[#FFD700] border-[#1B1B1F]/15'
          : 'bg-white text-[#1B1B1F] hover:bg-[#F4A7A7] focus-visible:ring-white border-[#1B1B1F]/20'
      }`}
    >
      {open ? <ChevronUp className="w-5 h-5" strokeWidth={3} /> : <ChevronDown className="w-5 h-5" strokeWidth={3} />}
    </button>
  );
};

// ---------------------------------------------------------------------------
// Buy button
// ---------------------------------------------------------------------------
const BuyButton = ({
  onClick,
  children,
  size = 'md',
}: {
  onClick: () => void;
  children: React.ReactNode;
  size?: 'md' | 'lg';
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`group/btn relative w-full overflow-hidden text-center whitespace-nowrap rounded-full bg-[#FFD700] text-[#1B1B1F] font-black uppercase tracking-widest hover:brightness-95 transition-all shadow-lg border border-[#1B1B1F]/10 active:scale-95 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2.5 ${
      size === 'lg' ? 'px-6 py-4 sm:py-5 text-xs sm:text-sm' : 'px-6 py-4 text-xs'
    }`}
  >
    <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    <CartIcon className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
    <span className="relative">{children}</span>
  </button>
);

// ---------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------
export default function PricingSection() {
  const [devices, setDevices] = useState<1 | 2 | 3>(1);

  const [openCards, setOpenCards] = useState<Record<string, boolean>>({
    starter: false,
    vip: false,
    premium: false,
  });

  const toggleCard = (id: string) =>
    setOpenCards((prev) => ({ ...prev, [id]: !prev[id] }));

  /* v-1 EXACT EUR PRICING — unchanged */
  const pricing = {
    1: {
      3: { total: 25, mo: (25 / 3).toFixed(2) },
      6: { total: 35, mo: (35 / 6).toFixed(2) },
      12: { total: 59, mo: (59 / 12).toFixed(2) },
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
  const activePromoDiscount = DEVICE_PROMOS[devices];

const handleWhatsAppRedirect = (months: 3 | 6 | 12) => {
  const plan = currentPricing[months];
  const price = plan?.total ?? 0;
  const perMonth = plan?.mo ?? '0.00';

  const message = `Hallo, ik wil graag een abonnement van ${months} maanden bestellen voor ${devices} ${
    devices > 1 ? 'schermen' : 'scherm'
  } voor €${price} (€${perMonth} per maand).`;

  const redirectUrl = `https://support-tv.online/?text=${encodeURIComponent(message)}`;
  window.open(redirectUrl, '_blank', 'noopener,noreferrer');
};

  const handleFreeTrialRedirect = () => {
    const message = `Hallo, ik wil graag een gratis 24-uurs proefperiode (Test) aanvragen om de zenders te testen.`;
    const redirectUrl = `https://support-tv.online/?text=${encodeURIComponent(message)}`;
    window.open(redirectUrl, '_blank', 'noopener,noreferrer');
  };

  const featureList = (d: 1 | 2 | 3) => [
    `${d} Gelijktijdige ${d > 1 ? 'schermen' : 'verbinding'}`,
    'Haarscherpe 4K Ultra HD & Full HD',
    '25.000+ Nationale & Internationale Zenders',
    '60.000+ Films & Series (Dagelijks Bijgewerkt)',
    'Alle Sportzenders (Viaplay, Ziggo Sport, ESPN)',
    'Volledige TV-Gids (EPG) & 7 Dagen Terugkijken',
    'Anti-Freeze & Anti-Buffer VIP Servers',
    'Geschikt voor Smart TV, Firestick, Android & iOS',
    '24/7 VIP Klantenservice via WhatsApp',
  ];

  return (
    <section
      id="pricing-section"
      className="w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-20 bg-[#F7F7F7] text-[#1B1B1F] overflow-hidden"
    >
      {/* Soft blush glow (allowed — outside card backgrounds) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F4A7A7]/40 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(107,114,128,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(107,114,128,0.10) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <FadeIn className="text-center justify-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 border border-[#E3182B]/40 bg-white px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Crown className="w-4 h-4 text-[#E3182B]" />
            <span className="text-[#E3182B] font-black text-xs uppercase tracking-widest">
              Beste Prijs-Kwaliteitverhouding
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1B1B1F] mb-4 uppercase tracking-tight leading-tight">
            KIES UW <span className="text-[#E3182B]">IPTV ABONNEMENT</span>
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-[#E3182B]" />
          <p className="text-base sm:text-lg text-[#6B7280] mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Kies de gewenste abonnementsduur. Profiteer van maximale korting bij jaarplannen en stream tegelijkertijd op meerdere schermen in uw huishouden.
          </p>

          <div className="flex flex-col items-center justify-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-4 h-4 text-[#E3182B]" />
              <span className="text-xs text-[#1B1B1F] font-black uppercase tracking-widest">
                Aantal Verbindingen / Schermen
              </span>
            </div>
            <div className="w-full max-w-md sm:max-w-none sm:w-auto sm:inline-flex grid grid-cols-1 xs:grid-cols-3 gap-1.5 sm:gap-1 bg-white border border-[#6B7280]/20 rounded-2xl p-1.5 shadow-lg">
              {([1, 2, 3] as const).map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDevices(d)}
                  aria-pressed={devices === d}
                  className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-7 py-2.5 rounded-xl text-[11px] sm:text-sm font-black tracking-wide sm:tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    devices === d
                      ? 'bg-[#E3182B] text-white shadow-lg sm:scale-[1.03]'
                      : 'text-[#6B7280] hover:text-[#1B1B1F] bg-transparent'
                  }`}
                >
                  <Tv2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${devices === d ? 'text-white' : 'text-[#6B7280]'}`} />
                  <span className="truncate">
                    {d} <span className="hidden xs:inline">{d > 1 ? 'Schermen' : 'Scherm'}</span>
                    <span className="xs:hidden">{d > 1 ? 'Schermen' : 'Scherm'}</span>
                  </span>
                  <span
                    className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black tracking-tight sm:tracking-wide shrink-0 ${
                      devices === d
                        ? 'bg-[#FFD700] text-[#1B1B1F]'
                        : 'bg-[#F7F7F7] text-[#E3182B] border border-[#E3182B]/25'
                    }`}
                  >
                    -{DEVICE_PROMOS[d]}%
                  </span>
                </button>
              ))}
            </div>

            {/* Active device promotion banner */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#10B981]/35 shadow-sm">
              <Tag className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span className="text-xs font-black uppercase tracking-wider text-[#1B1B1F]">
                Actieve Promotie ({devices} {devices > 1 ? 'Schermen' : 'Scherm'}):{' '}
                <span className="text-[#E3182B]">{activePromoDiscount}% Korting</span>
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Cards */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-10 gap-y-16 lg:gap-8 max-w-6xl mx-auto mt-12 pb-16 relative z-10">

          {/* ============ CARD 1 — 3 MAANDEN — WHITE FLAT ============ */}
          <div className="relative">
            <FadeInItem className="relative bg-white text-[#1B1B1F] border border-[#6B7280]/25 rounded-3xl p-6 sm:p-8 flex flex-col overflow-visible shadow-lg transition-all duration-500 hover:border-[#E3182B] hover:shadow-[0_25px_60px_rgba(227,24,43,0.15)] hover:-translate-y-2">
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-black text-[#E3182B] uppercase tracking-[0.2em]">Starter</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E3182B]/10 border border-[#E3182B]/30 text-[#E3182B] text-[10px] font-black uppercase tracking-wider">
                      {activePromoDiscount}% Korting
                    </span>
                    <MonitorPlay className="w-5 h-5 text-[#E3182B] transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <div className="text-3xl font-black text-[#1B1B1F] mb-2 tracking-tighter uppercase">3 Maanden</div>

                <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#F7F7F7] border border-[#6B7280]/20 shadow-sm">
                  <span className="text-5xl font-black text-[#1B1B1F] tracking-tighter">
                    <AnimatedPrice value={currentPricing[3]?.total || 0} />
                  </span>
                </div>
                <div className="text-[11px] font-black text-white mb-5 uppercase tracking-widest border border-[#E3182B] self-start px-3 py-1 rounded-full bg-[#E3182B]">
                  Slechts €{currentPricing[3]?.mo || 0} / mnd
                </div>

                <div className="mb-4">
                  <BuyButton onClick={() => handleWhatsAppRedirect(3)}>Kies 3 Maanden</BuyButton>
                </div>

                <div className="mb-6 pt-3 border-t border-[#6B7280]/20">
                  <div className="flex items-center justify-between text-[10px] font-black text-[#6B7280] uppercase tracking-widest mb-2">
                    <span>Veilig Betalen</span>
                    <Lock className="w-3 h-3 text-[#6B7280]" />
                  </div>
                  <PaymentIcons variant="light" />
                </div>

                <FeatureList accent="dark" open={openCards.starter} features={featureList(devices)} />

                <div className="p-3 mt-6 bg-[#F7F7F7] rounded-2xl flex items-center gap-2.5 border border-[#6B7280]/20">
                  <Zap className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="text-[11px] font-black text-[#1B1B1F] uppercase tracking-wider">
                    Direct Actief • 99.9% Uptime
                  </span>
                </div>
              </div>

              <EdgeToggle open={openCards.starter} onClick={() => toggleCard('starter')} accent="gold" controlsId="features-starter" />
            </FadeInItem>
          </div>

          {/* ============ CARD 2 — 12 MAANDEN — CHARCOAL DARK FLAT ============ */}
          <div className="relative">
            <FadeInItem className="relative bg-[#1B1B1F] text-white border-2 border-[#FFD700] rounded-3xl p-6 sm:p-9 flex flex-col transition-all duration-500 hover:shadow-[0_0_70px_rgba(227,24,43,0.35)] lg:-translate-y-4 hover:-translate-y-6 shadow-[0_0_50px_rgba(0,0,0,0.40)] z-20 overflow-visible">
              {/* Top gold crown pill */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 w-auto whitespace-nowrap">
                <div className="relative overflow-hidden bg-[#FFD700] text-[#1B1B1F] text-[11px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full flex items-center gap-1.5 shadow-xl border border-[#1B1B1F]/10">
                  <span className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                  <Crown className="w-4 h-4 fill-current relative shrink-0" aria-hidden="true" />
                  <span className="relative">Meest Gekozen</span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col pt-2">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-xs font-black text-[#FFD700] uppercase tracking-[0.2em] flex items-center gap-1.5">
                    <Crown className="w-4 h-4 text-[#FFD700] shrink-0" aria-hidden="true" /> Beste Waarde
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FFD700] text-[#1B1B1F] text-[10px] font-black uppercase tracking-wider shrink-0">
                    {activePromoDiscount}% Korting
                  </span>
                </div>
                <div className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">12 Maanden</div>

                <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-white/10 border-2 border-[#FFD700]/40 shadow-md">
                  <span className="text-6xl font-black text-white tracking-tighter">
                    <AnimatedPrice value={currentPricing[12]?.total || 0} />
                  </span>
                </div>
                <div className="text-[11px] font-black text-[#1B1B1F] mb-5 uppercase tracking-widest border border-[#FFD700] self-start px-4 py-1.5 rounded-full bg-[#FFD700] shadow-sm">
                  Slechts €{currentPricing[12]?.mo || 0} / mnd
                </div>

                {/* Gift callout */}
                <div className="relative mb-4 rounded-xl border border-dashed border-[#FFD700]/70 bg-white/5 px-3 py-2 overflow-hidden">
                  <div className="relative z-10 flex items-center gap-2">
                    <div className="shrink-0 w-7 h-7 rounded-lg bg-[#FFD700] text-[#1B1B1F] flex items-center justify-center shadow">
                      <Gift className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FFD700]">Gratis Cadeau</div>
                      <p className="text-[12px] font-extrabold text-white">Gratis player app — 12 maanden inbegrepen</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <BuyButton onClick={() => handleWhatsAppRedirect(12)} size="lg">Bestel 12 Maanden</BuyButton>
                </div>

                <div className="mb-6 pt-3 border-t border-white/15">
                  <div className="flex items-center justify-between text-[10px] font-black text-[#FFD700] uppercase tracking-widest mb-2">
                    <span>Veilig Betalen</span>
                    <Lock className="w-3 h-3 text-[#FFD700]" />
                  </div>
                  <PaymentIcons variant="dark" />
                </div>

                <FeatureList accent="ondark" open={openCards.vip} features={featureList(devices)} />

                <div className="p-3 mt-6 bg-white/5 border border-[#FFD700]/40 rounded-2xl flex items-center gap-2.5">
                  <Crown className="w-4 h-4 text-[#FFD700] shrink-0" />
                  <span className="text-[11px] font-black text-white uppercase tracking-wider">
                    VIP lijn + player app cadeau
                  </span>
                </div>
              </div>

              <EdgeToggle open={openCards.vip} onClick={() => toggleCard('vip')} accent="white" controlsId="features-vip" />
            </FadeInItem>
          </div>

          {/* ============ CARD 3 — 6 MAANDEN — WHITE FLAT ============ */}
          <div className="relative">
            <FadeInItem className="relative bg-white text-[#1B1B1F] border border-[#6B7280]/25 rounded-3xl p-6 sm:p-8 flex flex-col overflow-visible shadow-lg transition-all duration-500 hover:border-[#E3182B] hover:shadow-[0_25px_60px_rgba(227,24,43,0.15)] hover:-translate-y-2">
              <div className="relative z-10 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-black text-[#E3182B] uppercase tracking-[0.2em]">Populair</h4>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E3182B]/10 border border-[#E3182B]/30 text-[#E3182B] text-[10px] font-black uppercase tracking-wider">
                      {activePromoDiscount}% Korting
                    </span>
                    <MonitorPlay className="w-5 h-5 text-[#E3182B] transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <div className="text-3xl font-black text-[#1B1B1F] mb-2 tracking-tighter uppercase">6 Maanden</div>

                <div className="mt-2 mb-1 inline-flex self-start px-5 py-2 rounded-2xl bg-[#F7F7F7] border border-[#6B7280]/20 shadow-sm">
                  <span className="text-5xl font-black text-[#1B1B1F] tracking-tighter">
                    <AnimatedPrice value={currentPricing[6]?.total || 0} />
                  </span>
                </div>
                <div className="text-[11px] font-black text-white mb-5 uppercase tracking-widest border border-[#E3182B] self-start px-3 py-1 rounded-full bg-[#E3182B]">
                  Slechts €{currentPricing[6]?.mo || 0} / mnd
                </div>

                <div className="mb-4">
                  <BuyButton onClick={() => handleWhatsAppRedirect(6)}>Kies 6 Maanden</BuyButton>
                </div>

                <div className="mb-6 pt-3 border-t border-[#6B7280]/20">
                  <div className="flex items-center justify-between text-[10px] font-black text-[#6B7280] uppercase tracking-widest mb-2">
                    <span>Veilig Betalen</span>
                    <Lock className="w-3 h-3 text-[#6B7280]" />
                  </div>
                  <PaymentIcons variant="light" />
                </div>

                <FeatureList accent="muted" open={openCards.premium} features={featureList(devices)} />

                <div className="p-3 mt-6 bg-[#F7F7F7] rounded-2xl flex items-center gap-2.5 border border-[#6B7280]/20">
                  <Zap className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className="text-[11px] font-black text-[#1B1B1F] uppercase tracking-wider">
                    Direct Actief • 99.9% Uptime
                  </span>
                </div>
              </div>

              <EdgeToggle open={openCards.premium} onClick={() => toggleCard('premium')} accent="gold" controlsId="features-premium" />
            </FadeInItem>
          </div>

        </FadeInStagger>

        {/* Free Trial Banner */}
        <FadeIn className="max-w-2xl mx-auto mt-4 relative z-30">
          <div className="bg-white border border-[#6B7280]/25 rounded-3xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg relative overflow-hidden hover:border-[#E3182B] transition-all duration-500">
            <div className="flex items-center gap-4 text-left relative z-10">
              <div className="bg-[#E3182B] p-3 rounded-xl text-white shrink-0 hidden sm:block">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <h4 className="text-base font-black text-[#1B1B1F] uppercase tracking-tight">
                    Gratis 24-Uurs IPTV Test Aanvragen?
                  </h4>
                </div>
                <p className="text-xs text-[#6B7280] font-medium">
                  Test eerst onze zenders en 4K beeldkwaliteit geheel vrijblijvend.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto shrink-0 relative z-10">
              <BuyButton onClick={handleFreeTrialRedirect}>Test Nu Gratis</BuyButton>
            </div>
          </div>
        </FadeIn>

        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            60% { transform: translateX(100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </section>
  );
}