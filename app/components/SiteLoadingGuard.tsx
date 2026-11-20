'use client';

import { useEffect, useState, useCallback } from 'react';

export default function SiteLoadingGuard() {
  const [isPageLoading, setIsPageLoading] = useState(true);

  const checkAllImagesLoaded = useCallback(() => {
    if (typeof document === 'undefined') return false;
    const imgs = Array.from(document.querySelectorAll('img')).filter(
      (img) => img.loading !== 'lazy'
    );
    if (imgs.length === 0) return true;
    return imgs.every((img) => img.complete);
  }, []);

  useEffect(() => {
    let finished = false;

    const finishLoading = () => {
      if (finished) return;
      finished = true;
      setIsPageLoading(false);
    };

    const evaluateReadiness = () => {
      if (document.readyState === 'complete' && checkAllImagesLoaded()) {
        finishLoading();
      }
    };

    const onImgEvent = () => {
      evaluateReadiness();
    };

    document.addEventListener('load', onImgEvent, true);
    document.addEventListener('error', onImgEvent, true);
    window.addEventListener('load', evaluateReadiness);

    evaluateReadiness();

    const safetyTimer = window.setTimeout(finishLoading, 4000);

    return () => {
      window.clearTimeout(safetyTimer);
      document.removeEventListener('load', onImgEvent, true);
      document.removeEventListener('error', onImgEvent, true);
      window.removeEventListener('load', evaluateReadiness);
    };
  }, [checkAllImagesLoaded]);

  if (!isPageLoading) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[9998] bg-[#1B1B1F]/70 backdrop-blur-[2px] pointer-events-none transition-opacity duration-300"
    />
  );
}