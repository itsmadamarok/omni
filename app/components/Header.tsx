'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CONSTANTS } from '@/lib/seo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  // Close mobile navigation drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Pakketten', href: '/pakketten' },
    { name: 'Installatie', href: '/installatie' },
    { name: 'Kennisbank', href: '/kennisbank' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1B1B1F]/95 backdrop-blur-lg border-b border-[#FFD700]/30 py-2.5 shadow-2xl'
            : 'bg-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="flex items-center group cursor-pointer"
                aria-label={`${CONSTANTS.BRAND_NAME} Home`}
              >
                <div className="h-12 flex items-center group-hover:scale-105 transition-transform duration-200">
                  <img
                    src="/img/iptv-logo.png"
                    alt={`${CONSTANTS.BRAND_NAME} - Beste IPTV Provider Nederland Logo`}
                    width={160}
                    height={40}
                    className="object-contain h-full w-full"
                    fetchPriority="high"
                    loading="eager"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Pill */}
            <nav className="hidden lg:block" aria-label="Hoofdnavigatie">
              <ul className="flex items-center gap-1.5 bg-[#232329]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-lg">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className={`font-black uppercase tracking-wider text-xs xl:text-sm transition-all duration-200 px-4 py-2 rounded-full inline-block cursor-pointer ${
                          active
                            ? 'bg-[#E3182B] text-white shadow-[0_0_15px_rgba(227,24,43,0.4)]'
                            : 'text-white hover:text-[#FFD700] hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/pakketten"
                className="px-6 py-2.5 rounded-full bg-[#FFD700] text-[#1B1B1F] font-black tracking-widest uppercase text-xs xl:text-sm hover:brightness-95 transition-all duration-200 shadow-lg shadow-[#FFD700]/20 active:scale-95 hover:scale-105 cursor-pointer"
              >
                Direct Starten
              </Link>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#FFD700] p-2.5 rounded-xl bg-[#232329] border border-white/15 focus:outline-none z-50 relative active:scale-95 transition-transform cursor-pointer"
                aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#1B1B1F]/95 backdrop-blur-2xl transition-all duration-300 lg:hidden flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobiel navigatiemenu"
      >
        {/* Global square-grid background pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-sm px-6 flex flex-col items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`w-full text-center py-4 rounded-2xl text-lg font-black tracking-widest uppercase transition-all duration-200 border cursor-pointer ${
                isActive(link.href)
                  ? 'text-[#1B1B1F] bg-[#FFD700] border-[#FFD700] shadow-lg shadow-[#FFD700]/20'
                  : 'text-white bg-[#232329]/90 border-white/15 hover:bg-[#E3182B] hover:text-white hover:border-[#E3182B]'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="w-full pt-4">
            <Link
              href="/pakketten"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-4 rounded-2xl bg-[#FFD700] text-[#1B1B1F] font-black text-lg tracking-widest uppercase shadow-xl transition-all duration-200 hover:brightness-95 active:scale-95 cursor-pointer"
            >
              Direct Starten
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}