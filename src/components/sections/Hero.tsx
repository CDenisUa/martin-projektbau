'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';

// Detect VP9 support on first client render (SSR-safe)
function detectVP9(): boolean {
  if (typeof window === 'undefined') return false;
  return document.createElement('video').canPlayType('video/webm; codecs="vp9"') !== '';
}

// Hero preview: 35 chunks × 1s — VP9 for capable browsers, VP8 WebM as fallback
const HERO_PREVIEW = {
  vp9:  Array.from({ length: 35 }, (_, i) => `/video/hero/vp9/${i + 1}.webm`),
  webm: Array.from({ length: 35 }, (_, i) => `/video/hero/webm/${i + 1}.webm`),
};

const VIDEO_GROUPS = {
  greetings: [
    '/video/greetings/1.mp4',
    '/video/greetings/2.mp4',
    '/video/greetings/3.mp4',
    '/video/greetings/4.mp4',
    '/video/greetings/5.mp4',
    '/video/greetings/6.mp4',
    '/video/greetings/7.mp4',
    '/video/greetings/8.mp4',
    '/video/greetings/9.mp4',
    '/video/greetings/10.mp4',
    '/video/greetings/11.mp4',
    '/video/greetings/12.mp4',
  ],
  facadeConstruction: [
    '/video/facade_construction/1.mp4',
    '/video/facade_construction/2.mp4',
    '/video/facade_construction/3.mp4',
  ],
  paintingPlastering: [
    '/video/painting_plastering/1.mp4',
    '/video/painting_plastering/2.mp4',
  ],
  outdoors: [
    '/video/outdoors/1.mp4',
    '/video/outdoors/2.mp4',
    '/video/outdoors/3.mp4',
  ],
};

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  // Codec detection: VP9 if supported, VP8 WebM as fallback
  // useState lazy initializer runs only on client — avoids SSR/hydration issues
  const [useVP9] = useState<boolean>(detectVP9);

  // Playback order: greetings → facadeConstruction → paintingPlastering → outdoors → heroPreview → loop
  const VIDEOS = [
    ...VIDEO_GROUPS.greetings,
    ...VIDEO_GROUPS.facadeConstruction,
    ...VIDEO_GROUPS.paintingPlastering,
    ...VIDEO_GROUPS.outdoors,
    ...(useVP9 ? HERO_PREVIEW.vp9 : HERO_PREVIEW.webm),
  ];

  // Two slots: one plays, one preloads next
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const [slotSrcs, setSlotSrcs] = useState<[string, string]>([VIDEOS[0], VIDEOS[1]]);
  const currentIdxRef = useRef(0);
  const videosRef = useRef(VIDEOS);
  videosRef.current = VIDEOS;

  const videoRefs = useRef<[HTMLVideoElement | null, HTMLVideoElement | null]>([null, null]);

  // Play the active slot on mount
  useEffect(() => {
    const v = videoRefs.current[0];
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  const handleEnded = useCallback(() => {
    const videos = videosRef.current;
    const current = currentIdxRef.current;
    const nextIdx = (current + 1) % videos.length;
    const nextNextIdx = (current + 2) % videos.length;
    const nextSlot = activeSlot === 0 ? 1 : 0;
    const prevSlot = activeSlot;

    // Switch to the already-buffered slot instantly
    currentIdxRef.current = nextIdx;
    setActiveSlot(nextSlot);
    videoRefs.current[nextSlot]?.play().catch(() => {});

    // Load the one after next into the freed slot
    setSlotSrcs((prev) => {
      const updated: [string, string] = [...prev] as [string, string];
      updated[prevSlot] = videos[nextNextIdx];
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
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-300 ease-in-out"
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
