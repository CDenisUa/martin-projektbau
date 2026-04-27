'use client';

// Core
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Layers, TreePine, Paintbrush2, AppWindow, Hammer, Bath } from 'lucide-react';
import { useEffect, useState } from 'react';

const BANNERS = [
  '/images/our-services-banner/banner_1.webp',
  '/images/our-services-banner/banner_2.webp',
  '/images/our-services-banner/banner_3.webp',
];

const SERVICE_KEYS = ['facade', 'tiling', 'parquet', 'painting', 'windows', 'renovation', 'shower'] as const;
type ServiceKey = typeof SERVICE_KEYS[number];

const SERVICE_ICONS: Record<ServiceKey, React.ElementType> = {
  facade: Building2,
  tiling: Layers,
  parquet: TreePine,
  painting: Paintbrush2,
  windows: AppWindow,
  renovation: Hammer,
  shower: Bath,
};

const SERVICE_IMAGES: Record<ServiceKey, string> = {
  facade:     '/images/our-services/Facade_Construction.webp',
  tiling:     '/images/our-services/Tile_and_Stone_Laying.webp',
  parquet:    '/images/our-services/Parquet_Flooring.webp',
  painting:   '/images/our-services/Painting_and_Plastering.webp',
  windows:    '/images/our-services/Window_Installation.webp',
  renovation: '/images/our-services/Renovation_and_Conversion.webp',
  shower:     '/images/our-services/Duschglas_Duschabtrennungen.webp',
};

export default function ServicesPage() {
  const t = useTranslations('services');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % BANNERS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Page Hero */}
      <div className="bg-primary pt-40 pb-24 px-6 lg:px-8 relative overflow-hidden">
        {BANNERS.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
            style={{
              opacity: i === current ? 0.18 : 0,
              transition: 'opacity 1.2s ease-in-out',
            }}
          />
        ))}
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">{t('whatWeOffer')}</p>
            <h1 className="text-5xl lg:text-7xl font-light text-white tracking-tight">{t('title')}</h1>
            <p className="text-white/40 mt-5 text-lg max-w-xl leading-relaxed">{t('subtitle')}</p>
          </motion.div>
        </div>
      </div>

      {/* Mobile services */}
      <section className="md:hidden bg-surface px-4 py-10">
        <div className="mx-auto max-w-md space-y-5">
        {SERVICE_KEYS.map((key, i) => {
          const Icon = SERVICE_ICONS[key];
          return (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.04, ease: 'easeOut' }}
              className="group overflow-hidden rounded-[8px] border border-primary/10 bg-white shadow-[0_18px_44px_rgba(10,22,40,0.10)]"
            >
              <div className="relative h-48 overflow-hidden bg-primary">
                <Image
                  src={SERVICE_IMAGES[key]}
                  alt={t(`items.${key}.title`)}
                  fill
                  className="object-cover object-[50%_38%] scale-[1.08] transition-transform duration-700 group-hover:scale-[1.12]"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/35 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-[6px] bg-white text-primary shadow-[0_10px_24px_rgba(10,22,40,0.18)]">
                  <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
                </div>
              </div>

              <div className="px-5 pb-6 pt-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <span className="font-mono text-[11px] font-semibold leading-none text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h2 className="text-[1.28rem] font-medium leading-snug text-primary">
                  {t(`items.${key}.title`)}
                </h2>
                <p className="mt-3 text-[0.94rem] leading-relaxed text-gray-500">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </motion.article>
          );
        })}
        </div>
      </section>

      {/* ── DESKTOP LIST (hidden below md) ── */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="divide-y divide-gray-100">
          {SERVICE_KEYS.map((key, i) => {
            const Icon = SERVICE_ICONS[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group grid md:grid-cols-5 gap-0 hover:bg-surface transition-colors duration-300 -mx-6 lg:-mx-8 px-6 lg:px-8"
              >
                {/* Image */}
                <div className="md:col-span-2 relative overflow-hidden md:aspect-auto md:max-h-64">
                  <Image
                    src={SERVICE_IMAGES[key]}
                    alt={t(`items.${key}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="40vw"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="md:col-span-3 py-10 md:px-12 flex items-center gap-8">
                  <div className="flex-shrink-0 w-14 h-14 bg-accent-light group-hover:bg-accent/15 flex items-center justify-center transition-colors duration-300">
                    <Icon
                      size={22}
                      className="text-accent service-icon"
                      style={{ '--icon-delay': `${0.3 + i * 0.15}s` } as React.CSSProperties}
                    />
                  </div>
                  <div>
                    <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-2 font-medium">
                      0{i + 1}
                    </p>
                    <h2 className="text-xl font-light text-primary mb-3 group-hover:text-primary transition-colors">
                      {t(`items.${key}.title`)}
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-sm max-w-md">
                      {t(`items.${key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
