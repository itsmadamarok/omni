'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CONSTANTS } from '@/lib/seo';
import { useMemo } from 'react';

export default function PartnerSlider() {
  // Generate partner logos with concise, non-repetitive descriptions to prevent SEO duplication penalties
  const partners = Array.from({ length: 10 }, (_, i) => {
    const partnerNumber = i + 1;
    const partnerNumberPad = String(partnerNumber).padStart(2, '0');
    return {
      name: `Platform ${partnerNumber}`,
      imagePath: `/img/partners/omniptv-partners-${partnerNumberPad}`,
      altText: `Compatible streaming app logo ${partnerNumber}`,
      width: 128,
      height: 128,
    };
  });

  // Duplicate for smooth infinite loop
  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);

  // Total animation travel distance (10 items × 150px = 1500px)
  const animationDistance = partners.length * 150;

  return (
    <div className="w-full overflow-hidden relative py-12 bg-transparent" aria-label="Ondersteunde streaming apps en apparaten">
      {/* Blended gradient edge masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-[#1A1A1D] via-[#1A1A1D]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-[#1A1A1D] via-[#1A1A1D]/50 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-sm text-[#F1E8DB]/60 font-black uppercase tracking-widest">
          Ondersteunde IPTV Apps & Apparaten
        </p>
      </div>

      <div aria-hidden="true">
        <motion.div 
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [0, -animationDistance],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {sliderItems.map((partner, idx) => (
            <div 
              key={`${partner.name}-${idx}`} 
              className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image
                  src={`${partner.imagePath}.png`}
                  alt={idx < partners.length ? partner.altText : ""} // Prevent duplicate alt text indexing for duplicated loop elements
                  width={partner.width || 128}
                  height={partner.height || 128}
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 112px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}