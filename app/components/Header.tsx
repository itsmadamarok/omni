'use client';

import Link from 'next/link';
import Image from 'next/image';
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Control body scroll when mobile drawer is active
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

  // Automatically collapse menu upon route change
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
            ? 'bg-[#1A1A1D] border-b-2 border-[#CA1421] py-2 shadow-2xl' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group" aria-label={`${CONSTANTS.BRAND_NAME} Home`}>
                <div className="h-10 flex items-center group-hover:scale-105 transition-transform">
                  <Image
                    src="/img/iptv-logo.webp"
                    alt={`${CONSTANTS.BRAND_NAME} - Beste IPTV Provider Nederland Logo`}
                    width={160}
                    height={40}
                    className="object-contain h-full w-auto"
                    loading="eager"
                  />
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Hoofdnavigatie">
              <ul className="flex items-center gap-4 bg-[#1A1A1D] px-6 py-2 rounded-full border-2 border-[#CA1421]">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className={`font-black uppercase tracking-widest text-sm transition-all px-5 py-2.5 rounded-full inline-block ${
                          active 
                            ? 'bg-[#CA1421] text-[#F1E8DB]' 
                            : 'text-[#F1E8DB] hover:text-[#FCA9FE]'
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
            <div className="hidden md:flex">
              <Link 
                href="/pakketten" 
                className="px-6 py-2.5 rounded-full border-2 border-[#CA1421] bg-[#F1E8DB] text-[#CA1421] font-black tracking-widest uppercase text-sm hover:bg-[#FCA9FE] hover:text-[#1A1A1D] transition-all shadow-lg"
              >
                Direct Starten
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-[#F1E8DB] p-2 focus:outline-none z-50 relative"
                aria-label={isOpen ? 'Menu sluiten' : 'Menu openen'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-[#1A1A1D] transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobiel navigatiemenu"
      >
        <div className="flex flex-col items-center justify-center h-full w-full px-6">
          <div className="space-y-4 w-full max-w-sm mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-center px-6 py-5 rounded-2xl text-xl font-black tracking-wider uppercase transition-all ${
                  isActive(link.href) 
                    ? 'text-[#F1E8DB] bg-[#CA1421]' 
                    : 'text-[#F1E8DB] bg-white/5 hover:bg-white/10 hover:text-[#FCA9FE]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-full flex pt-8">
              <Link 
                href="/pakketten"
                onClick={() => setIsOpen(false)}
                className="w-full text-center whitespace-nowrap px-6 py-5 rounded-2xl bg-[#F1E8DB] text-[#CA1421] font-black text-xl tracking-widest uppercase shadow-2xl transition-transform hover:scale-105 shrink-0"
              >
                Direct Starten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}