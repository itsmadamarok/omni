'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo } from 'react';
import { CONSTANTS } from '@/lib/seo';

export default function PartnerSlider() {
  // Row 1: Partner Apps & Platforms
  const partners = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => {
        const partnerNumber = String(i + 1).padStart(2, '0');
        return {
          name: `Partner-${partnerNumber}`,
          imagePath: `/img/partners/omniptv-partners-${partnerNumber}.png`,
          width: 128,
          height: 128,
        };
      }),
    []
  );

  // Row 2: Supported Devices (Reverse Slider)
  const devices = useMemo(
    () => [
      { name: 'Samsung Smart TV', imagePath: '/img/devices/samsung.webp', width: 128, height: 128 },
      { name: 'Roku Streaming Device', imagePath: '/img/devices/roku.webp', width: 128, height: 128 },
      { name: 'Apple TV 4K', imagePath: '/img/devices/appletv.webp', width: 128, height: 128 },
      { name: 'Windows PC', imagePath: '/img/devices/windows.webp', width: 128, height: 128 },
      { name: 'Amazon Fire TV', imagePath: '/img/devices/firetv.webp', width: 128, height: 128 },
      { name: 'Android TV', imagePath: '/img/devices/android.webp', width: 128, height: 128 },
      { name: 'Google TV', imagePath: '/img/devices/googletv.webp', width: 128, height: 128 },
      { name: 'LG Smart TV', imagePath: '/img/devices/lg.webp', width: 128, height: 128 },
      { name: 'Sony Smart TV', imagePath: '/img/devices/sonny.webp', width: 128, height: 128 },
    ],
    []
  );

  const sliderItems = useMemo(() => [...partners, ...partners], [partners]);
  const deviceItems = useMemo(() => [...devices, ...devices], [devices]);

  const animationDistancePartners = partners.length * 150;
  const animationDistanceDevices = devices.length * 150;

  return (
    <section
      aria-label={`Ondersteunde ${CONSTANTS.BRAND_NAME} Apps en Apparaten`}
      className="w-full relative py-14 bg-[#232329] border-y border-white/10 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs sm:text-sm text-[#FFD700] font-black uppercase tracking-widest">
          Ondersteunde {CONSTANTS.BRAND_NAME} Apps &amp; Apparaten
        </p>
      </div>

      {/* Row 1: Forward Slider (Dark Surface) */}
      <div
        aria-hidden="true"
        role="presentation"
        className="relative z-10 bg-[#1B1B1F] border-y border-white/10 overflow-hidden mb-6 py-7 shadow-xl"
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#1B1B1F] via-[#1B1B1F]/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#1B1B1F] via-[#1B1B1F]/70 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [0, -animationDistancePartners],
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
              key={`partner-${partner.name}-${idx}`}
              className="flex items-center justify-center min-w-[120px] md:min-w-[150px] opacity-75 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <Image
                  src={partner.imagePath}
                  alt=""
                  aria-hidden="true"
                  width={partner.width}
                  height={partner.height}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 768px) 80px, 112px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Reverse Slider (White Surface) */}
      <div
        aria-hidden="true"
        role="presentation"
        className="relative z-10 w-full bg-white border-y border-[#1B1B1F]/10 py-7 overflow-hidden shadow-xl"
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-12 md:gap-16 items-center w-max"
          animate={{
            x: [-animationDistanceDevices, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 28,
              ease: 'linear',
            },
          }}
        >
          {deviceItems.map((device, idx) => (
            <div
              key={`device-${device.name}-${idx}`}
              className="flex items-center justify-center min-w-[120px] md:min-w-[150px] transition-all duration-300 hover:scale-105"
            >
              <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                <Image
                  src={device.imagePath}
                  alt=""
                  aria-hidden="true"
                  width={device.width}
                  height={device.height}
                  className="object-contain w-full h-full drop-shadow-sm"
                  sizes="(max-width: 768px) 80px, 112px"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}