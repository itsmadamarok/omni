'use client';

import Link from 'next/link';
import { useEffect, useId, useState } from 'react';
import { CONSTANTS } from '@/lib/seo';
import { channelsData } from '@/lib/zenders-data';
import { Facebook, Instagram, Twitter } from 'lucide-react';

// ---------------------------------------------------------------------------
// Lightweight Circular Flags (NL, DE, BE, NO, CH)
// Each flag generates a unique clipPath id per instance via useId() to avoid
// duplicate-id hydration crashes when the footer is rendered more than once.
// ---------------------------------------------------------------------------
const FlagNL = () => {
  const id = useId();
  return (
    <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
      <clipPath id={id}><circle cx="16" cy="16" r="16" /></clipPath>
      <g clipPath={`url(#${id})`}>
        <path fill="#AE1C28" d="M0 0h32v10.7H0z" />
        <path fill="#FFF" d="M0 10.7h32v10.6H0z" />
        <path fill="#21468B" d="M0 21.3h32V32H0z" />
      </g>
    </svg>
  );
};

const FlagDE = () => {
  const id = useId();
  return (
    <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
      <clipPath id={id}><circle cx="16" cy="16" r="16" /></clipPath>
      <g clipPath={`url(#${id})`}>
        <path fill="#000" d="M0 0h32v10.7H0z" />
        <path fill="#D00" d="M0 10.7h32v10.6H0z" />
        <path fill="#FFCE00" d="M0 21.3h32V32H0z" />
      </g>
    </svg>
  );
};

const FlagBE = () => {
  const id = useId();
  return (
    <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
      <clipPath id={id}><circle cx="16" cy="16" r="16" /></clipPath>
      <g clipPath={`url(#${id})`}>
        <path fill="#000" d="M0 0h10.7v32H0z" />
        <path fill="#FFD90C" d="M10.7 0h10.6v32H10.7z" />
        <path fill="#EF3340" d="M21.3 0H32v32H21.3z" />
      </g>
    </svg>
  );
};

const FlagNO = () => {
  const id = useId();
  return (
    <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
      <clipPath id={id}><circle cx="16" cy="16" r="16" /></clipPath>
      <g clipPath={`url(#${id})`}>
        <path fill="#BA0C2F" d="M0 0h32v32H0z" />
        <path fill="#FFF" d="M8 0h6v32H8zM0 13h32v6H0z" />
        <path fill="#00205B" d="M10 0h2v32h-2zM0 15h32v2H0z" />
      </g>
    </svg>
  );
};

const FlagCH = () => {
  const id = useId();
  return (
    <svg className="w-5 h-5 rounded-full shadow-md shrink-0 border border-white/20" viewBox="0 0 32 32">
      <clipPath id={id}><circle cx="16" cy="16" r="16" /></clipPath>
      <g clipPath={`url(#${id})`}>
        <path fill="#D52B1E" d="M0 0h32v32H0z" />
        <path fill="#FFF" d="M13 7h6v18h-6zM7 13h18v6H7z" />
      </g>
    </svg>
  );
};

const flags = [
  { name: 'Nederland', code: 'NL', component: FlagNL },
  { name: 'Duitsland', code: 'DE', component: FlagDE },
  { name: 'België', code: 'BE', component: FlagBE },
  { name: 'Noorwegen', code: 'NO', component: FlagNO },
  { name: 'Zwitserland', code: 'CH', component: FlagCH },
];

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Pakketten', href: '/pakketten' },
  { name: 'Installatie', href: '/installatie' },
  { name: 'Reviews & Ervaringen', href: '/ervaringen' },
  { name: 'Veelgestelde Vragen', href: '/veelgestelde-vragen' },
  { name: 'Kennisbank', href: '/kennisbank' },
  { name: 'Klantenservice', href: '/klantenservice' },
];

const legalLinks = [
  { name: 'Over Ons', href: '/over-ons' },
  { name: 'Voorwaarden', href: '/voorwaarden' },
  { name: 'Privacybeleid', href: '/privacybeleid' },
  { name: 'Garantiebeleid', href: '/garantiebeleid' },
  { name: 'DMCA Beleid', href: '/dmca-beleid' },
];

const paymentMethods = [
  { name: 'PayPal', icon: '/img/payment/1.png' },
  { name: 'Bitcoin & Crypto', icon: '/img/payment/2.png' },
  { name: 'Visa', icon: '/img/payment/3.png' },
  { name: 'Mastercard', icon: '/img/payment/4.png' },
];

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative pt-16 border-t-4 border-[#FFD700] overflow-hidden">
      {/* 1. Global square-grid background pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* 2. Dark background ON TOP of the pattern */}
      <div className="absolute inset-0 bg-[#1B1B1F]/85 z-0 pointer-events-none" />

      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent z-10" />

      {/* Main Footer Body */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="flex items-center gap-3 mb-5 group inline-flex cursor-pointer"
                aria-label={`${CONSTANTS.BRAND_NAME} - Home`}
              >
                <div className="w-auto h-20 flex items-center group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="/img/iptv-logo.png"
                    alt={`${CONSTANTS.BRAND_NAME} Logo`}
                    width={180}
                    height={48}
                    className="object-contain h-full w-auto"
                    loading="lazy"
                  />
                </div>
              </Link>

              <p className="text-sm md:text-base font-bold text-white/75 max-w-sm leading-relaxed mb-5">
                Stream 25.000+ live zenders en 60.000+ films &amp; series in 4K Ultra HD met{' '}
                <strong className="text-[#FFD700]">{CONSTANTS.BRAND_NAME}</strong>.
                Stabiele IPTV pakketten, snelle installatie en 24/7 ondersteuning — zonder vast
                contract.
              </p>

              {/* Coverage Focus Badge */}
              <div className="inline-flex items-center flex-wrap gap-2 sm:gap-3 py-1.5 px-3 mb-6 rounded-full bg-[#232329] border border-white/10 backdrop-blur-md w-fit shadow-sm">
                <span className="text-[10px] uppercase font-black tracking-wider text-white/60 shrink-0">
                  Focus:
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap">
                  {flags.map((flag) => {
                    const FlagComp = flag.component;
                    return (
                      <div
                        key={flag.code}
                        className="flex items-center gap-1 group cursor-default"
                        title={flag.name}
                      >
                        <FlagComp />
                        <span className="text-[10px] font-black uppercase text-white group-hover:text-[#FFD700] transition-colors">
                          {flag.code}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label={`Volg ${CONSTANTS.BRAND_NAME} op Twitter`}
                className="group w-10 h-10 rounded-full bg-[#232329] border border-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Twitter className="w-4 h-4 text-white/75 group-hover:text-[#1B1B1F] transition-colors" />
              </a>

              <a
                href="#"
                aria-label={`Volg ${CONSTANTS.BRAND_NAME} op Instagram`}
                className="group w-10 h-10 rounded-full bg-[#232329] border border-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Instagram className="w-4 h-4 text-white/75 group-hover:text-[#1B1B1F] transition-colors" />
              </a>

              <a
                href="#"
                aria-label={`Volg ${CONSTANTS.BRAND_NAME} op Facebook`}
                className="group w-10 h-10 rounded-full bg-[#232329] border border-white/10 flex items-center justify-center hover:bg-[#FFD700] hover:border-[#FFD700] transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <Facebook className="w-4 h-4 text-white/75 group-hover:text-[#1B1B1F] transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#FFD700] pb-1 inline-block">
              Navigatie
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#FFD700] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channel Packages */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#FFD700] pb-1 inline-block">
              Zenderpakketten
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {channelsData.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/zenders/${category.slug}`}
                    className="text-white/70 hover:text-[#FFD700] transition-colors block cursor-pointer"
                  >
                    {category.name.replace(/\s*\([^)]*\)/g, '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-5 tracking-widest uppercase text-sm border-b-2 border-[#FFD700] pb-1 inline-block">
              Juridisch
            </h3>
            <ul className="space-y-3 text-sm font-bold">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#FFD700] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* BOTTOM FOOTER BAR                                                   */}
      {/* ------------------------------------------------------------------- */}
      <div className="relative bg-[#141418] border-t border-white/10 py-6 px-6 lg:px-12 shadow-lg z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Copyright text */}
          <p className="text-base md:text-sm font-extrabold text-white tracking-wide text-center md:text-left">
            &copy; {year ?? new Date().getFullYear()}{' '}
            <span className="text-[#FFD700]">{CONSTANTS.BRAND_NAME}</span>. Alle rechten
            voorbehouden.
          </p>

          {/* Payment cards */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {paymentMethods.map((item) => (
              <div
                key={item.name}
                className="relative h-10 w-16 shrink-0 rounded-lg border border-white/10 bg-[#232329] p-1 shadow-sm hover:scale-105 hover:border-[#FFD700] transition-all duration-200"
                title={item.name}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain p-1 filter drop-shadow-sm opacity-95"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}