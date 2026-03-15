'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { LANGUAGES } from '@/components/ui/LanguageSelector';

export default function SettingsPage() {
  const t = useTranslations('settings');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (code: string) => {
    const segments = pathname.split('/');
    segments[1] = code;
    router.push(segments.join('/'));
  };

  const current = LANGUAGES.find((l) => l.code === locale);

  return (
    <div className="min-h-screen bg-white pt-40 pb-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
            {t('sectionLabel')}
          </p>
          <h1 className="text-4xl lg:text-5xl font-light text-primary tracking-tight mb-4">
            {t('title')}
          </h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">{t('subtitle')}</p>
        </motion.div>

        {/* Current */}
        <div className="mb-8 p-4 bg-accent-light border border-accent/20 flex items-center gap-4">
          <span className="text-2xl">{current?.flag}</span>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-1">{t('current')}</div>
            <div className="font-medium text-primary">{current?.name}</div>
          </div>
        </div>

        {/* Language grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {LANGUAGES.map((lang, i) => (
            <motion.button
              key={lang.code}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              onClick={() => switchLocale(lang.code)}
              className={`flex items-center gap-4 p-4 border text-left transition-all duration-200 group ${
                lang.code === locale
                  ? 'border-accent bg-accent-light text-primary'
                  : 'border-gray-100 hover:border-accent/30 hover:bg-surface text-gray-700'
              }`}
            >
              <span className="text-2xl leading-none">{lang.flag}</span>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm truncate">{lang.name}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{lang.code}</div>
              </div>
              {lang.code === locale && (
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
