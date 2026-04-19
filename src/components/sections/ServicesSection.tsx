'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const SERVICE_KEYS = ['facade', 'tiling', 'parquet', 'painting', 'windows', 'renovation'] as const;

const SERVICE_IMAGES = {
  facade:     '/images/services/webp/facade_сonstruction.webp',
  tiling:     '/images/services/webp/tile_stone_saying.webp',
  parquet:    '/images/services/webp/parquet_flooring.webp',
  painting:   '/images/services/webp/painting_plastering.webp',
  windows:    '/images/services/webp/window_installation.webp',
  renovation: '/images/services/webp/renovation_conversion.webp',
};

export default function ServicesSection() {
  const t = useTranslations('services');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              {t('whatWeDo')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-primary tracking-tight">
              {t('title')}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-400 leading-relaxed lg:pt-8 text-lg"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {SERVICE_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={SERVICE_IMAGES[key]}
                  alt={t(`items.${key}.title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,22,40,0.55)' }} />
              </div>

              {/* Content - always visible */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-3 font-medium">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-medium text-white mb-2 leading-snug">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
