'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Clock, Target, Wrench } from 'lucide-react';

const VALUE_KEYS = ['quality', 'precision', 'reliability', 'craftsmanship'] as const;
const VALUE_ICONS = {
  quality: Award,
  precision: Target,
  reliability: Clock,
  craftsmanship: Wrench,
};

export default function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // 'idle' → waiting | 'playing' → video running | 'frozen' → poster
  const [videoState, setVideoState] = useState<'idle' | 'playing' | 'frozen'>('idle');

  // Slowdown is baked into the video file (interpolated 60fps, graduated slow-mo last 5s)
  // No playbackRate manipulation needed
  useEffect(() => {
    if (!inView || videoState !== 'idle') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    void video.play().catch(() => setVideoState('frozen'));
  }, [inView, videoState]);

  const handlePlay = () => setVideoState('playing');
  const handleEnded = () => setVideoState('frozen');

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface py-0 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-primary/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-primary/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-0 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:items-center">

          {/* Media column */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 18% 0 0)' }}
            animate={inView ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative -mx-6 lg:mx-0"
          >
            <div className="relative h-[100svh] min-h-[560px] overflow-hidden bg-primary md:h-auto md:aspect-[16/11] lg:aspect-[4/5]">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.04 }}
                animate={inView ? { scale: 1.1 } : {}}
                transition={{ duration: 5.5, ease: 'easeOut' }}
              >
                <Image
                  src="/images/posters/about.webp"
                  alt="Martin Projekt Group craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  style={{
                    opacity: videoState === 'playing' ? 0 : 1,
                    transition: 'none',
                    zIndex: 2,
                  }}
                />

                <video
                  ref={videoRef}
                  muted
                  playsInline
                  preload="none"
                  onPlay={handlePlay}
                  onEnded={handleEnded}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    opacity: videoState === 'playing' ? 1 : 0,
                    transition: videoState === 'playing' ? 'opacity 0.3s ease' : 'none',
                    zIndex: 1,
                  }}
                >
                  <source src="/video/home/about/about.webm" type="video/webm" />
                  <source src="/video/home/about/about.mp4" type="video/mp4" />
                </video>
              </motion.div>
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="py-16 md:py-20 lg:py-0 lg:pl-2"
          >
            <p className="text-accent text-xs uppercase mb-4 font-medium">
              {t('sectionLabel')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-primary mb-5">
              {t('title')}
            </h2>
            <p className="text-accent text-lg font-light italic leading-relaxed">
              {t('subtitle')}
            </p>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-500">{t('body')}</p>

            {/* Values list */}
            <div className="mt-10 border-y border-primary/10">
              {VALUE_KEYS.map((key, i) => {
                const Icon = VALUE_ICONS[key];

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.36 + i * 0.08, ease: 'easeOut' }}
                    className={`group relative grid grid-cols-[3.25rem_1fr] gap-4 py-5 transition-colors duration-300 hover:bg-white sm:grid-cols-[4.5rem_1fr] ${
                      i > 0 ? 'border-t border-primary/10' : ''
                    }`}
                  >
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.65, delay: 0.48 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute left-0 top-0 h-px w-full origin-left bg-accent/35"
                    />
                    <motion.div
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.45, delay: 0.48 + i * 0.08, ease: 'easeOut' }}
                      className="flex h-11 w-11 items-center justify-center bg-white text-accent ring-1 ring-primary/10 transition-colors duration-300 group-hover:bg-accent group-hover:text-white group-hover:ring-accent"
                    >
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </motion.div>
                    <div className="pr-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] font-semibold leading-none text-accent">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-base font-medium text-primary transition-colors duration-300 group-hover:text-accent">
                          {t(`values.${key}.title`)}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
                        {t(`values.${key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.78 }}
              className="mt-9"
            >
              <Link
                href={`/${locale}/about`}
                className="group inline-flex items-center gap-3 text-sm font-medium text-primary transition-colors duration-200 hover:text-accent"
              >
                {t('learnMore')}
                <span className="flex items-center gap-1">
                  <span className="h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
                  <ArrowRight size={13} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
