'use client';

// Core
import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const SERVICE_KEYS = ['facade', 'tiling', 'parquet', 'painting', 'windows', 'renovation', 'shower'] as const;
type ServiceKey = typeof SERVICE_KEYS[number];

const SERVICE_IMAGES: Record<ServiceKey, string> = {
  facade:     '/images/services/cards/facade_сonstruction.webp',
  tiling:     '/images/services/cards/tile_stone_saying.webp',
  parquet:    '/images/services/cards/parquet_flooring.webp',
  painting:   '/images/services/cards/painting_plastering.webp',
  windows:    '/images/services/cards/window_installation.webp',
  renovation: '/images/services/cards/renovation_conversion.webp',
  shower:     '/images/services/cards/duschglas_duschabtrennungen.webp',
};

function ServiceRow({ serviceKey, index }: { serviceKey: ServiceKey; index: number }) {
  const t = useTranslations('services');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="flex h-105 overflow-hidden border-b border-gray-100 last:border-b-0 group"
    >
      {/* Text panel */}
      <motion.div
        className={`w-[42%] flex flex-col justify-center px-16 xl:px-24 bg-white shrink-0 ${isEven ? 'order-first' : 'order-last'}`}
        initial={{ opacity: 0, x: isEven ? -24 : 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.35, ease: 'easeOut' }}
      >
        <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-5 font-medium">
          0{index + 1}
        </p>
        <h3 className="text-2xl xl:text-[1.75rem] font-light text-primary mb-4 leading-snug">
          {t(`items.${serviceKey}.title`)}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-70">
          {t(`items.${serviceKey}.description`)}
        </p>
      </motion.div>

      {/* Image panel */}
      <motion.div
        className={`w-[58%] relative overflow-hidden shrink-0 ${isEven ? 'order-last' : 'order-first'}`}
        initial={{ clipPath: isEven ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' }}
        animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Image
          src={SERVICE_IMAGES[serviceKey]}
          alt={t(`items.${serviceKey}.title`)}
          fill
          className="object-cover scale-[1.08] transition-transform duration-700 ease-out group-hover:scale-[1.12]"
          sizes="60vw"
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-500" />
        <div className="absolute bottom-6 right-8 text-white/8 text-[120px] font-bold leading-none select-none pointer-events-none">
          0{index + 1}
        </div>
      </motion.div>
    </div>
  );
}

export default function ServicesSection() {
  const t = useTranslations('services');
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const lastIndex = SERVICE_KEYS.length - 1;
  const isLastOdd = SERVICE_KEYS.length % 2 !== 0;

  return (
    <section className="py-32 bg-white overflow-hidden">
      {/* Section header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
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
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-400 leading-relaxed lg:pt-8 text-lg"
          >
            {t('subtitle')}
          </motion.p>
        </div>
      </div>

      {/* Mobile / Tablet grid — hidden on lg+ */}
      <div className="lg:hidden max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-px bg-gray-100">
          {SERVICE_KEYS.map((key, i) => {
            const isFull = isLastOdd && i === lastIndex;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className={`relative overflow-hidden ${isFull ? 'sm:col-span-2 aspect-4/3 sm:aspect-8/3' : 'aspect-4/3'}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={SERVICE_IMAGES[key]}
                    alt={t(`items.${key}.title`)}
                    fill
                    className="object-cover"
                    sizes={isFull ? '100vw' : '(max-width: 640px) 100vw, 50vw'}
                  />
                  <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10,22,40,0.58)' }} />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
                  <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-2 font-medium">
                    0{i + 1}
                  </p>
                  <h3 className="text-base sm:text-lg font-medium text-white mb-2 leading-snug">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Desktop chess layout — hidden below lg */}
      <div className="hidden lg:block border-t border-gray-100">
        {SERVICE_KEYS.map((key, i) => (
          <ServiceRow key={key} serviceKey={key} index={i} />
        ))}
      </div>
    </section>
  );
}
