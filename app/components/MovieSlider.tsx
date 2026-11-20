'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { Film, Tv, Trophy, ArrowUpRight } from 'lucide-react';

// Localized Movies Array
const movies = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `movie-${i}`,
    imagePath: `/img/sliders/movies/omniptv-movies-${number}`,
  };
});

// Localized Series Array
const series = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `series-${i}`,
    imagePath: `/img/sliders/series/omniptv-serie-${number}`,
  };
});

// Localized Sports Array
const sports = Array.from({ length: 12 }).map((_, i) => {
  const number = String(i + 1).padStart(2, '0');
  return {
    id: `sport-${i}`,
    imagePath: `/img/sliders/sports/omniptv-sports-${number}`,
  };
});

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

interface SliderItem {
  id: string;
  imagePath: string;
}

const InfiniteSlider = ({
  items,
  direction = 'left',
  speed = 50,
  category,
}: {
  items: SliderItem[];
  direction?: 'left' | 'right';
  speed?: number;
  category: string;
}) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const infiniteItems = useMemo(() => [...items, ...items], [items]);
  const duration = (items.length * speed) / 10;

  return (
    <div className="relative w-full overflow-hidden py-2" aria-hidden="true">
      {/* Side edge fade masks matched to the #F7F7F7 light surface */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-[#F7F7F7] via-[#F7F7F7]/75 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#F7F7F7] via-[#F7F7F7]/75 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex w-max gap-3 sm:gap-4 md:gap-5"
        animate={{ x: direction === 'left' ? [0, '-50%'] : ['-50%', 0] }}
        transition={{ repeat: Infinity, repeatType: 'loop', duration, ease: 'linear' }}
      >
        {infiniteItems.map((item, idx) => {
          const key = `${item.id}-${idx}`;
          return (
            <button
              key={key}
              type="button"
              onClick={scrollToPricing}
              tabIndex={idx >= items.length ? -1 : 0}
              aria-hidden="true"
              className="flex-shrink-0 w-28 sm:w-36 md:w-44 lg:w-48 block cursor-pointer group text-left bg-transparent border-none p-0 focus:outline-none"
            >
              <div className="relative aspect-[2/3] rounded-xl md:rounded-2xl overflow-hidden bg-[#1B1B1F] border border-[#1B1B1F]/15 group-hover:border-[#E3182B] shadow-[0_12px_28px_rgba(27,27,31,0.14)] transition-all duration-300">
                {!failedImages[key] ? (
                  <Image
                    src={`${item.imagePath}.webp`}
                    alt=""
                    width={192}
                    height={288}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    aria-hidden="true"
                    onError={() => setFailedImages((prev) => ({ ...prev, [key]: true }))}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#232329] px-2 text-center">
                    <span className="text-[#FFD700] text-xs font-black uppercase tracking-wider">
                      {category}
                    </span>
                  </div>
                )}

                {/* Subtle bottom gradient & hover quick-action pill */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1B1B1F]/90 via-[#1B1B1F]/35 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="pointer-events-none absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 rounded-full bg-[#1B1B1F]/90 border border-white/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#FFD700] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                  <span>4K</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
};

interface RowConfig {
  id: string;
  title: string;
  highlight: string;
  description: string;
  items: SliderItem[];
  direction: 'left' | 'right';
  speed: number;
  category: string;
  badgeText: string;
  Icon: typeof Film;
}

const rows: RowConfig[] = [
  {
    id: 'movies-row',
    title: 'Nieuwste',
    highlight: 'Bioscoopfilms',
    description:
      'Stream de nieuwste blockbusters en films in 4K beeldkwaliteit met Nederlandse ondertiteling.',
    items: movies,
    direction: 'left',
    speed: 45,
    category: 'Film',
    badgeText: 'VOD Films',
    Icon: Film,
  },
  {
    id: 'series-row',
    title: 'Populaire',
    highlight: 'Series & VOD',
    description:
      'Bekijk complete seizoenen van Netflix, HBO Max, Disney+ en meer zonder extra kosten.',
    items: series,
    direction: 'right',
    speed: 40,
    category: 'Serie',
    badgeText: 'Complete Seizoenen',
    Icon: Tv,
  },
  {
    id: 'sports-row',
    title: 'Live Sport &',
    highlight: 'Wedstrijden',
    description:
      'Live toegang tot de Eredivisie, Formule 1, Champions League, Viaplay, Ziggo Sport en UFC PPV.',
    items: sports,
    direction: 'left',
    speed: 50,
    category: 'Sport',
    badgeText: 'Live & PPV',
    Icon: Trophy,
  },
];

export default function MovieSlider() {
  return (
    <section
      className="w-full py-20 sm:py-24 bg-[#F7F7F7] text-[#1B1B1F] border-t border-[#1B1B1F]/10 overflow-hidden"
      aria-label="Media overzicht"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#1B1B1F]">
          Direct Streamen in <span className="text-[#E3182B]">4K Kwaliteit</span>
        </h2>
      </div>

      <div className="space-y-14 sm:space-y-16">
        {rows.map((row) => {
          const RowIcon = row.Icon;
          return (
            <div key={row.id}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-[#1B1B1F]/10 pb-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1B1B1F] text-[#FFD700] shadow-md">
                      <RowIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#E3182B]">
                        {row.badgeText}
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1B1B1F] uppercase tracking-tight">
                        {row.title} <span className="text-[#E3182B]">{row.highlight}</span>
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6B7280] font-semibold max-w-xl md:text-right leading-relaxed">
                    {row.description}
                  </p>
                </div>
              </div>

              <InfiniteSlider
                items={row.items}
                direction={row.direction}
                speed={row.speed}
                category={row.category}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}