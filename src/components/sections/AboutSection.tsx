'use client';

// Core
import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
// Components
import { Diamond, Crosshair, ShieldCheck, Hammer } from '@phosphor-icons/react';

const VALUE_KEYS = ['quality', 'precision', 'reliability', 'craftsmanship'] as const;
type ValueKey = typeof VALUE_KEYS[number];

const VALUE_ICONS: Record<ValueKey, React.ElementType> = {
  quality:       Diamond,
  precision:     Crosshair,
  reliability:   ShieldCheck,
  craftsmanship: Hammer,
};

export default function AboutSection() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [videoState, setVideoState] = useState<'idle' | 'playing' | 'frozen'>('idle');

  // Slowdown is baked into the video file (interpolated 60fps, graduated slow-mo last 5s)
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
            <p className="text-accent text-xs uppercase tracking-[0.2em] mb-4 font-medium">
              {t('sectionLabel')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-primary mb-5">
              {t('title')}
            </h2>
            <p className="text-accent text-lg font-light italic leading-relaxed">
              {t('subtitle')}
            </p>
            <p className="mt-6 text-base leading-relaxed text-gray-500">
              {t('body')}
            </p>

            {/* Values */}
            <div className="mt-10 space-y-1">
              {VALUE_KEYS.map((key, i) => {
                const Icon = VALUE_ICONS[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.32 + i * 0.1, ease: 'easeOut' }}
                    className="group grid grid-cols-[3rem_1fr] gap-4 py-3.5 cursor-default"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        className="relative"
                      >
                        {/* Glow ring behind icon */}
                        <span
                          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
                          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 70%)' }}
                        />
                        <Icon
                          size={30}
                          weight="duotone"
                          className="relative z-10 text-accent transition-all duration-300"
                          style={{
                            filter: 'drop-shadow(0 0 6px rgba(59,130,246,0.35))',
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Text */}
                    <div className="pt-0.5">
                      <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                        {t(`values.${key}.title`)}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-500">
                        {t(`values.${key}.description`)}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
