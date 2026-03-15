'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site aerial view"
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/50 to-primary/85" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-accent text-xs tracking-[0.3em] uppercase mb-6 font-medium"
          >
            {t('badge')}
          </motion.p>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-light tracking-tight leading-[0.93] mb-8 whitespace-pre-line">
            {t('headline')}
          </h1>

          {/* Subheadline */}
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            {t('subheadline')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/projects`}
              className="group flex items-center gap-2.5 bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200"
            >
              {t('cta')}
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href={`/${locale}/services`}
              className="flex items-center gap-2 border border-white/25 hover:border-white/50 text-white/70 hover:text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 hidden md:block"
      >
        <div className="bg-white/8 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-8 py-5 grid grid-cols-4 divide-x divide-white/10">
            {[
              { value: t('stat1value'), label: t('stat1label') },
              { value: t('stat2value'), label: t('stat2label') },
              { value: t('stat3value'), label: t('stat3label') },
              { value: t('stat4value'), label: t('stat4label') },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-1 px-4">
                <div className="text-2xl font-light text-accent">{stat.value}</div>
                <div className="text-[10px] text-white/40 tracking-[0.15em] uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
