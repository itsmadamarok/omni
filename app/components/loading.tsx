'use client';

import { Sparkles } from 'lucide-react';
import { CONSTANTS } from '@/lib/seo';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000]/90 backdrop-blur-md overflow-hidden">
      
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(202,20,33,0.2),_transparent_70%)]" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #CA1421 1px, transparent 1px),
              linear-gradient(to bottom, #CA1421 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Loading Card */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 max-w-sm w-full mx-4 bg-[#1A1A1D] border-4 border-[#CA1421] rounded-3xl shadow-[0_0_50px_rgba(202,20,33,0.3)] text-center animate-pulse">
        
        {/* Glowing Brand Icon / Spinner */}
        <div className="relative w-20 h-20 rounded-2xl bg-[#CA1421]/15 border-2 border-[#CA1421] flex items-center justify-center mb-6 shadow-lg">
          <div className="absolute inset-0 rounded-2xl bg-[#CA1421]/30 animate-ping opacity-50 pointer-events-none" />
          <Sparkles className="w-10 h-10 text-[#CA1421] animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {/* Brand Title */}
        <h2 className="text-xl font-black text-[#F1E8DB] uppercase tracking-tighter mb-2">
          {CONSTANTS.BRAND_NAME}
        </h2>

        {/* Loading Message */}
        <p className="text-xs font-bold text-[#F1E8DB]/70 uppercase tracking-widest mb-6">
          Streams laden... Even geduld
        </p>

        {/* Custom Progress Bar Animation */}
        <div className="w-full h-2 rounded-full bg-black/60 overflow-hidden border border-white/10">
          <div className="h-full bg-gradient-to-r from-[#CA1421] to-[#DB4439] rounded-full animate-[shimmer_1.5s_infinite]" style={{ width: '60%' }} />
        </div>

      </div>
    </div>
  );
}