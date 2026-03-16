'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

const VIDEOS = [
  '/video/compressed_2/1.mp4',
  '/video/compressed_2/2.mp4',
  '/video/compressed_2/3.mp4',
  '/video/compressed_2/4.mp4',
  '/video/compressed_2/5.mp4',
  '/video/compressed_2/6.mp4',
  '/video/compressed_2/7.mp4',
  '/video/compressed_2/8.mp4',
  '/video/compressed_2/9.mp4',
];

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  // Two slots: one plays, one preloads next
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [slotSrcs, setSlotSrcs] = useState<[string, string]>([VIDEOS[0], VIDEOS[1]]);
  const currentIdxRef = useRef(0);

  const videoRefs = useRef<[HTMLVideoElement | null, HTMLVideoElement | null]>([null, null]);

  // Play the active slot on mount
  useEffect(() => {
    const v = videoRefs.current[0];
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  const handleEnded = useCallback(() => {
    const current = currentIdxRef.current;
    const nextIdx = (current + 1) % VIDEOS.length;
    const nextNextIdx = (current + 2) % VIDEOS.length;
    const nextSlot = activeSlot === 0 ? 1 : 0;
    const prevSlot = activeSlot;

    // Switch to the already-buffered slot instantly
    currentIdxRef.current = nextIdx;
    setActiveSlot(nextSlot);
    videoRefs.current[nextSlot]?.play().catch(() => {});

    // Load the one after next into the freed slot
    setSlotSrcs((prev) => {
      const updated: [string, string] = [...prev] as [string, string];
      updated[prevSlot] = VIDEOS[nextNextIdx];
      return updated;
    });

    // Reset freed slot so browser preloads the new src
    setTimeout(() => {
      const freed = videoRefs.current[prevSlot];
      if (freed) {
        freed.load();
      }
    }, 0);
  }, [activeSlot]);

  return (
    <section className="sticky top-0 h-screen z-0 flex items-center justify-center overflow-hidden bg-primary">

      {/* Layer 1 — Double-buffer video background */}
      {([0, 1] as const).map((slot) => (
        <video
          key={slot}
          ref={(el) => { videoRefs.current[slot] = el; }}
          src={slotSrcs[slot]}
          muted
          playsInline
          preload="auto"
          onEnded={slot === activeSlot ? handleEnded : undefined}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-0"
          style={{ opacity: slot === activeSlot ? 1 : 0, zIndex: slot === activeSlot ? 1 : 0 }}
        />
      ))}

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
