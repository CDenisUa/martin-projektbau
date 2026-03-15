'use client';

import { useRef, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const SERVICE_KEYS = ['facade', 'tiling', 'parquet', 'painting', 'windows', 'renovation'] as const;

const SERVICE_IMAGES = {
  facade:     'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80', // Zurich city
  tiling:     'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800&q=80', // Alpine stone floor
  parquet:    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80', // Wooden chalet interior floor
  painting:   'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80',    // Painting walls
  windows:    'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80', // Swiss chalet windows
  renovation: 'https://images.unsplash.com/photo-1503174971373-b1f69850bded?w=800&q=80', // Alpine construction
};

export default function ServicesSection() {
  const t = useTranslations('services');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

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
          {SERVICE_KEYS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group relative overflow-hidden cursor-default"
              style={{ aspectRatio: '4/3' }}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background image — zoomed in by default, zooms out on hover */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: isMobile ? 1 : hovered === key ? 1 : 1.12,
                    filter: isMobile ? 'blur(0px)' : hovered === key ? 'blur(0px)' : 'blur(2px)',
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={SERVICE_IMAGES[key]}
                    alt={t(`items.${key}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>

                {/* Dark overlay — lighter on hover */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundColor: isMobile
                      ? 'rgba(10,22,40,0.50)'
                      : hovered === key
                        ? 'rgba(10,22,40,0.45)'
                        : 'rgba(10,22,40,0.72)',
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-3 font-medium">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-medium text-white mb-2 leading-snug">
                  {t(`items.${key}.title`)}
                </h3>
                <motion.p
                  animate={{
                    opacity: isMobile || hovered === key ? 1 : 0,
                    y: isMobile || hovered === key ? 0 : 8,
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="text-white/70 text-sm leading-relaxed"
                >
                  {t(`items.${key}.description`)}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
