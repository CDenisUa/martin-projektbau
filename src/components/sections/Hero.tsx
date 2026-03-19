'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect prefers-reduced-motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    // Fallback for slow connections
    const connection = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
    if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(video);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section className="sticky top-0 h-screen z-0 flex items-center justify-center overflow-hidden bg-primary">

      {/* Layer 1 — Video background */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        poster="/video/poster.webp"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Layer 2 — Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-primary/55 to-primary/85" style={{ zIndex: 2 }} />

      {/* Layer 3 — Hero content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white pt-20" style={{ zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-accent text-xs tracking-[0.3em] uppercase mb-6 font-medium"
          >
            {t('badge')}
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-light tracking-tight leading-[0.93] mb-8 whitespace-pre-line">
            {t('headline')}
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t('subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/services`}
              className="flex items-center gap-2 border border-white/25 hover:border-white/50 text-white/70 hover:text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
