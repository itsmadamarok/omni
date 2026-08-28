'use client';

import { FadeIn } from './AnimatedSection';
import { Wifi } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps';
import { useState, useEffect } from 'react';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json';

const serverMarkers: {
  name: string;
  coordinates: [number, number];
  servers: number;
}[] = [
  { name: 'Nederland', coordinates: [5.29, 52.13], servers: 45 },
  { name: 'Duitsland', coordinates: [10, 51], servers: 38 },
  { name: 'Verenigd Koninkrijk', coordinates: [-2, 54], servers: 32 },
  { name: 'Frankrijk', coordinates: [2, 46], servers: 28 },
  { name: 'Spanje', coordinates: [-4, 40], servers: 20 },
  { name: 'Italië', coordinates: [12, 43], servers: 18 },
  { name: 'Verenigde Staten', coordinates: [-100, 40], servers: 40 },
  { name: 'Canada', coordinates: [-95, 55], servers: 24 },
  { name: 'Brazilië', coordinates: [-55, -15], servers: 16 },
  { name: 'Turkije', coordinates: [35, 39], servers: 22 },
  { name: 'VAE (Dubai)', coordinates: [54, 24], servers: 15 },
  { name: 'Zuid-Afrika', coordinates: [24, -30], servers: 12 },
  { name: 'Singapore', coordinates: [104, 1.5], servers: 20 },
  { name: 'Australië', coordinates: [133, -25], servers: 16 },
];

const hub: [number, number] = [5.29, 52.13]; // Netherlands Central Core Hub

export default function GlobalServerMap() {
  const [hoveredNode, setHoveredNode] = useState<{ name: string; servers: number } | null>(null);
  const [activeGeo, setActiveGeo] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative w-full overflow-hidden bg-[#1A1A1D] py-16 sm:py-20 lg:py-28 border-y border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(202,20,33,0.12),_transparent_45%)]" />
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#CA1421]/30 bg-[#CA1421]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#F1E8DB]">
              <Wifi className="h-4 w-4 text-[#CA1421]" />
              Wereldwijd IPTV Servernetwerk
            </div>
            <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-[#F1E8DB] sm:text-4xl md:text-5xl lg:text-6xl">
              Wereldwijde Dekking In <span className="text-[#CA1421]">100+ Landen</span>
            </h3>
          </div>
          <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-[#CA1421]/20 bg-white/[0.03] p-1 shadow-[0_0_80px_rgba(202,20,33,0.08)] backdrop-blur-xl sm:p-1 lg:rounded-[2.5rem] lg:p-3">
            <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-[#1A1A1D] sm:h-[470px] lg:h-[560px] flex items-center justify-center">
              <div className="text-[#F1E8DB]/50 animate-pulse font-bold">Servernetwerk laden...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#1A1A1D] py-16 sm:py-20 lg:py-28 border-y border-white/10" 
      aria-label="Wereldwijde IPTV serverdekking kaart"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(202,20,33,0.05),_transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_#1A1A1D,_rgba(26,26,29,0.92),_#1A1A1D)]" />

      <FadeIn className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#CA1421]/30 bg-[#CA1421]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#F1E8DB]">
            <Wifi className="h-4 w-4 text-[#CA1421]" />
            Wereldwijd IPTV Servernetwerk
          </div>

          <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-[#F1E8DB] sm:text-4xl md:text-5xl lg:text-6xl">
            Wereldwijde Dekking In <span className="text-[#CA1421]">100+ Landen</span>
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#F1E8DB]/60 sm:text-base md:text-lg font-bold">
            Geniet van stabiele 4K IPTV streams met {CONSTANTS.BRAND_NAME}. Onze supersnelle Europese servers garanderen 99.9% uptime voor live tv, sport en films zonder buffering.
          </p>
        </div>

        {/* Map Card Wrapper */}
        <div className="relative mx-auto w-full overflow-hidden rounded-3xl border border-[#CA1421]/20 bg-white/[0.01] p-1 shadow-[0_0_80px_rgba(202,20,33,0.04)] backdrop-blur-xl sm:p-1 lg:rounded-[2.5rem] lg:p-3">
          <div className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-[#1A1A1D] sm:h-[470px] lg:h-[560px]" suppressHydrationWarning>
            <ComposableMap
              projection="geoEqualEarth"
              projectionConfig={{
                scale: 190,
                center: [5, 8],
              }}
              width={1000}
              height={520}
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
                pointerEvents: 'auto',
              }}
            >
              <defs>
                <filter id="nodeGlow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="lineRedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F1E8DB" stopOpacity="0" />
                  <stop offset="50%" stopColor="#F1E8DB" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F1E8DB" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Geographies Map Layer */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryName = geo.properties.name;
                    const matchingMarker = serverMarkers.find(
                      (m) => m.name === countryName || 
                      (m.name === 'Verenigde Staten' && countryName === 'United States of America') ||
                      (m.name === 'Verenigd Koninkrijk' && countryName === 'United Kingdom') ||
                      (m.name === 'Nederland' && countryName === 'Netherlands') ||
                      (m.name === 'Duitsland' && countryName === 'Germany') ||
                      (m.name === 'Frankrijk' && countryName === 'France') ||
                      (m.name === 'Spanje' && countryName === 'Spain') ||
                      (m.name === 'Italië' && countryName === 'Italy')
                    );
                    const isHoveredGeo = activeGeo === countryName;

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isHoveredGeo ? '#F1E8DB' : '#CA1421'}
                        fillOpacity={isHoveredGeo ? 0.15 : 0.7}
                        stroke={isHoveredGeo ? '#FCA9FE' : '#1A1A1D'}
                        strokeWidth={isHoveredGeo ? 0.8 : 0.5}
                        onMouseEnter={() => {
                          setActiveGeo(countryName);
                          if (matchingMarker) {
                            setHoveredNode({ name: matchingMarker.name, servers: matchingMarker.servers });
                          }
                        }}
                        onMouseLeave={() => {
                          setActiveGeo(null);
                          setHoveredNode(null);
                        }}
                        style={{
                          default: { outline: 'none', transition: 'all 0.2s ease' },
                          hover: { outline: 'none' },
                          pressed: { outline: 'none' },
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* Connection Lines */}
              {serverMarkers.map((marker, idx) => (
                <Line
                  key={`line-${marker.name}`}
                  from={hub}
                  to={marker.coordinates}
                  stroke="url(#lineRedGradient)"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeDasharray="4 6"
                  style={{
                    animation: `dashFlow 4s linear infinite`,
                    animationDelay: `${idx * 0.15}s`,
                  }}
                  suppressHydrationWarning
                />
              ))}

              {/* Center Amsterdam / NL Processing Core Hub */}
              <Marker coordinates={hub}>
                <circle r={10} fill="#F1E8DB" fillOpacity={0.1}>
                  <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="fillOpacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle r={4} fill="#F1E8DB" stroke="#1A1A1D" strokeWidth={1} />
              </Marker>

              {/* Server Markers Component */}
              {serverMarkers.map((marker, idx) => {
                const isCurrentHovered = hoveredNode?.name === marker.name || activeGeo === marker.name;

                return (
                  <Marker key={marker.name} coordinates={marker.coordinates}>
                    <g
                      onMouseEnter={() => {
                        setHoveredNode({ name: marker.name, servers: marker.servers });
                        setActiveGeo(marker.name);
                      }}
                      onMouseLeave={() => {
                        setHoveredNode(null);
                        setActiveGeo(null);
                      }}
                      className="cursor-pointer"
                    >
                      {/* Ripple Wave Element */}
                      <circle
                        r={isCurrentHovered ? 14 : 6}
                        fill="#F1E8DB"
                        fillOpacity={isCurrentHovered ? 0.2 : 0.08}
                        stroke="#F1E8DB"
                        strokeWidth={0.5}
                        className="transition-all duration-300"
                      >
                        {!isCurrentHovered && (
                          <animate
                            attributeName="r"
                            values="3;10;3"
                            dur="2.5s"
                            repeatCount="indefinite"
                            begin={`${idx * 0.15}s`}
                          />
                        )}
                        {!isCurrentHovered && (
                          <animate
                            attributeName="fillOpacity"
                            values="0.2;0;0.2"
                            dur="2.5s"
                            repeatCount="indefinite"
                            begin={`${idx * 0.15}s`}
                          />
                        )}
                      </circle>

                      {/* Map Pin Marker */}
                      <g transform="translate(-10, -22) scale(0.83)">
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                          fill={isCurrentHovered ? '#FCA9FE' : '#F1E8DB'}
                          filter={isCurrentHovered ? 'url(#nodeGlow)' : ''}
                          className="transition-all duration-300"
                        />
                      </g>

                      {/* Popup Tooltip */}
                      {isCurrentHovered && (
                        <g transform="translate(0, -28)" className="pointer-events-none drop-shadow-2xl">
                          <rect
                            x="-60"
                            y="-38"
                            width="120"
                            height="38"
                            rx="10"
                            fill="#F1E8DB"
                            stroke="#CA1421"
                            strokeWidth="2"
                          />
                          <path
                            d="M -6 -1 L 0 5 L 6 -1 Z"
                            fill="#F1E8DB"
                            stroke="#CA1421"
                            strokeWidth="2"
                            strokeLinejoin="miter"
                          />
                          <path
                            d="M -5 -1.5 L 5 -1.5"
                            stroke="#F1E8DB"
                            strokeWidth="2"
                          />
                          <text
                            x="0"
                            y="-22"
                            textAnchor="middle"
                            fill="#1A1A1D"
                            fontSize="10"
                            fontWeight="900"
                            className="uppercase tracking-wider font-sans"
                          >
                            {marker.name}
                          </text>
                          <text
                            x="0"
                            y="-9"
                            textAnchor="middle"
                            fill="#CA1421"
                            fontSize="8"
                            fontWeight="900"
                            className="uppercase tracking-widest font-sans"
                          >
                            {marker.servers} SERVERS
                          </text>
                        </g>
                      )}
                    </g>
                  </Marker>
                );
              })}
            </ComposableMap>

            {/* Ambient Lighting Gradients */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1D]/70 via-transparent to-[#1A1A1D]/10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1A1A1D] to-transparent" />
          </div>
        </div>
      </FadeIn>

      <style jsx global>{`
        @keyframes dashFlow {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </section>
  );
}