'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Target, Clock, Wrench } from 'lucide-react';

const VALUE_ICONS = {
  quality: Award,
  precision: Target,
  reliability: Clock,
  craftsmanship: Wrench,
};
const VALUE_KEYS = ['quality', 'precision', 'reliability', 'craftsmanship'] as const;

export default function AboutSection() {
  const t = useTranslations('about');
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  // 'idle' → waiting for viewport | 'playing' → video running | 'freezing' → crossfade in progress | 'frozen' → poster shown
  const [videoState, setVideoState] = useState<'idle' | 'playing' | 'freezing' | 'frozen'>('idle');
  // 0 = poster hidden, 1 = poster fully visible
  const [posterOpacity, setPosterOpacity] = useState(0);

  // FADE_START: how many seconds before end the crossfade begins
  const FADE_START = 0.8;

  // Start playback once section enters viewport
  useEffect(() => {
    if (!inView || videoState !== 'idle') return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) {
      setPosterOpacity(1);
      setVideoState('frozen');
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    setVideoState('playing');
    video.play().catch(() => { setPosterOpacity(1); setVideoState('frozen'); });
  }, [inView, videoState]);

  // Crossfade: ramp poster opacity from 0→1 during the last FADE_START seconds
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || videoState !== 'playing') return;
    const remaining = video.duration - video.currentTime;
    if (remaining <= FADE_START) {
      const progress = 1 - remaining / FADE_START; // 0 → 1
      setPosterOpacity(progress);
      if (videoState === 'playing') setVideoState('freezing');
    }
  };

  const handleEnded = () => {
    setPosterOpacity(1);
    setVideoState('frozen');
  };

  return (
    <section ref={sectionRef} className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Media column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-gray-100">

              {/* Poster — sits on top, opacity driven by posterOpacity */}
              <Image
                src="/images/posters/about.webp"
                alt="Martin Projektbau craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{
                  opacity: posterOpacity,
                  transition: videoState === 'idle' ? 'none' : 'opacity 0.05s linear',
                  zIndex: 2,
                }}
              />

              {/* Video — underneath, fades in when playback starts */}
              <video
                ref={videoRef}
                muted
                playsInline
                preload="none"
                onEnded={handleEnded}
                onTimeUpdate={handleTimeUpdate}
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  opacity: videoState === 'idle' || videoState === 'frozen' ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1,
                }}
              >
                <source src="/video/home/about/about.webm" type="video/webm" />
                <source src="/video/home/about/about.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent-light border border-accent/15 -z-10" />
            <div className="absolute top-6 -left-4 w-16 h-0.75 bg-accent" />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              {t('sectionLabel')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
              {t('title')}
            </h2>
            <p className="text-accent text-lg font-light italic mb-8 leading-relaxed">
              {t('subtitle')}
            </p>
            <p className="text-gray-400 leading-relaxed mb-12 text-base">{t('body')}</p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {VALUE_KEYS.map((key, i) => {
                const Icon = VALUE_ICONS[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <Icon size={14} className="text-accent shrink-0" />
                      <h4 className="text-sm font-semibold text-primary tracking-wide">
                        {t(`values.${key}.title`)}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed pl-5">
                      {t(`values.${key}.description`)}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href={`/${locale}/about`}
              className="group inline-flex items-center gap-3 text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
            >
              {t('learnMore')}
              <span className="flex items-center gap-1">
                <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
                <ArrowRight size={13} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
