'use client';

import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Building2, Layers, TreePine, Paintbrush2, AppWindow, Hammer } from 'lucide-react';

const SERVICE_KEYS = ['facade', 'tiling', 'parquet', 'painting', 'windows', 'renovation'] as const;

const SERVICE_ICONS = {
  facade: Building2,
  tiling: Layers,
  parquet: TreePine,
  painting: Paintbrush2,
  windows: AppWindow,
  renovation: Hammer,
};

export default function ServicesSection() {
  const t = useTranslations('services');
  const locale = useLocale();
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
              What We Do
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
          {SERVICE_KEYS.map((key, i) => {
            const Icon = SERVICE_ICONS[key];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="group bg-white p-10 hover:bg-primary transition-colors duration-400 cursor-default"
              >
                {/* Icon */}
                <div className="mb-7">
                  <div className="w-11 h-11 bg-accent-light group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                    <Icon size={20} className="text-accent" />
                  </div>
                </div>

                {/* Number */}
                <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-3 font-medium">
                  0{i + 1}
                </p>

                {/* Title */}
                <h3 className="text-base font-medium text-primary group-hover:text-white mb-3 transition-colors duration-300 leading-snug">
                  {t(`items.${key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-white/55 text-sm leading-relaxed transition-colors duration-300">
                  {t(`items.${key}.description`)}
                </p>

                {/* Bottom rule */}
                <div className="mt-8 w-6 h-px bg-gray-200 group-hover:bg-white/20 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-accent transition-colors duration-200"
          >
            {t('viewAll')}
            <span className="w-10 h-px bg-current inline-block" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
