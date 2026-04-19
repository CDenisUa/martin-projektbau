'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Award, Target, Clock, Wrench } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const VALUE_ICONS = {
  quality: Award,
  precision: Target,
  reliability: Clock,
  craftsmanship: Wrench,
};
const VALUE_KEYS = ['quality', 'precision', 'reliability', 'craftsmanship'] as const;

// num = target number, suffix = '+' or '%' or ''
const STAT_KEYS = [
  { num: 15,   suffix: '+',  key: 'yearsInBusiness' },
  { num: 200,  suffix: '+',  key: 'projectsCompleted' },
  { num: 100,  suffix: '%',  key: 'clientSatisfaction' },
  { num: null, suffix: 'CH', key: 'swissQuality' },
] as const;

function CountUp({ target, suffix, trigger }: { target: number; suffix: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [trigger, target]);

  return <>{count}{suffix}</>;
}

export default function AboutPage() {
  const t = useTranslations('about');
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });
  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: '-60px' });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[420px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
          alt="Martin Projekt Group — precision construction"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/90" />
        <div className="absolute inset-0 flex items-end pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
                {t('sectionLabel')}
              </p>
              <h1 className="text-5xl lg:text-7xl font-light text-white tracking-tight">
                {t('title')}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-xl font-light italic leading-relaxed mb-8">
              {t('subtitle')}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">{t('body')}</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-px bg-gray-100"
          >
            {STAT_KEYS.map((stat) => (
              <div key={stat.key} className="bg-white p-8 text-center">
                <div className="text-4xl font-light text-accent mb-2">
                  {stat.num !== null
                    ? <CountUp target={stat.num} suffix={stat.suffix} trigger={statsInView} />
                    : stat.suffix}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-[0.2em]">{t(`stats.${stat.key}`)}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-10">{t('ourValues')}</h2>
          <div
            ref={valuesRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 ${valuesInView ? 'draw-active' : ''}`}
          >
            {VALUE_KEYS.map((key, i) => {
              const Icon = VALUE_ICONS[key];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8"
                >
                  <div className="w-10 h-10 bg-accent-light flex items-center justify-center mb-5">
                    <Icon
                      size={18}
                      className="text-accent about-icon"
                      style={{ '--icon-delay': `${i * 0.25}s` } as React.CSSProperties}
                    />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {t(`values.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Second image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 relative aspect-[21/9] overflow-hidden"
        >
          <Image
            src="/images/about_build.webp"
            alt="Construction site"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
            <p className="text-white text-2xl md:text-4xl font-light tracking-tight text-center px-4">
              Building Switzerland&apos;s future,<br />
              <span className="text-accent">one project at a time.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
