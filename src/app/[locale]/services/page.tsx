'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Layers, TreePine, Paintbrush2, AppWindow, Hammer } from 'lucide-react';
import { useEffect, useState } from 'react';

const BANNERS = [
  '/images/our-services-banner/banner_1.webp',
  '/images/our-services-banner/banner_2.webp',
  '/images/our-services-banner/banner_3.webp',
];

const SERVICE_KEYS = ['facade', 'tiling', 'parquet', 'painting', 'windows', 'renovation'] as const;

const SERVICE_ICONS = {
  facade: Building2,
  tiling: Layers,
  parquet: TreePine,
  painting: Paintbrush2,
  windows: AppWindow,
  renovation: Hammer,
};

const SERVICE_IMAGES = {
  facade:     '/images/our-services/Facade_Construction.webp',
  tiling:     '/images/our-services/Tile_and_Stone_Laying.webp',
  parquet:    '/images/our-services/Parquet_Flooring.webp',
  painting:   '/images/our-services/Painting_and_Plastering.webp',
  windows:    '/images/our-services/Window_Installation.webp',
  renovation: '/images/our-services/Renovation_and_Conversion.webp',
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

        {/* Crossfading banner images */}
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

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
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
                <div className="md:col-span-2 relative overflow-hidden aspect-video md:aspect-auto md:max-h-64">
                  <Image
                    src={SERVICE_IMAGES[key]}
                    alt={t(`items.${key}.title`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 40vw"
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
