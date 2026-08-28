'use client';

import { useEffect, useState, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function LoaderContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Finish loading animation whenever the route or search params change
    setLoading(false);
  }, [pathname, searchParams]);

  useEffect(() => {
    // Intercept internal link clicks to trigger top loading bar
    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');

      // Only trigger for internal navigations (not external, hash links, or target="_blank")
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('/#') &&
        targetAttr !== '_blank' &&
        href !== pathname
      ) {
        setLoading(true);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      {/* Top Brand Progress Bar */}
      <div className="h-1.5 w-full bg-[#1A1A1D]/40 overflow-hidden shadow-[0_0_15px_rgba(202,20,33,0.8)]">
        <div className="h-full bg-gradient-to-r from-[#CA1421] via-[#DB4439] to-[#F1E8DB] w-full animate-indeterminate origin-left" />
      </div>
    </div>
  );
}

export default function RouteLoader() {
  return (
    <Suspense fallback={null}>
      <LoaderContent />
    </Suspense>
  );
}