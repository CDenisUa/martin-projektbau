'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

const VIDEOS = ['/video_1.mp4', '/video_2.mp4', '/video_3.mp4'];

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [current, setCurrent] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([null, null, null]);

  // Advance to next video in sequence
  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % VIDEOS.length);
  }, []);

  // When current index changes: play it, pause all others
  useEffect(() => {
    refs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

  return (
    <section className="sticky top-0 h-screen z-0 flex items-center justify-center overflow-hidden bg-primary">

      {/* Layer 1 — Background videos (all rendered, only current visible) */}
      {VIDEOS.map((src, i) => (
        <motion.video
          key={src}
          ref={(el) => { refs.current[i] = el; }}
          src={src}
          muted
          playsInline
          preload={i === 0 ? 'auto' : 'metadata'}
          onEnded={i === current ? advance : undefined}
          initial={false}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ opacity: i === 0 ? 1 : 0 }}
        />
      ))}

      {/* Layer 2 — Overlay for text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-primary/55 to-primary/85" />

      {/* Layer 3 — Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white pt-20">
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
