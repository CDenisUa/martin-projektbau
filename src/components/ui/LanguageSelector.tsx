'use client';

// Core
import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown, Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LANGUAGES = [
  // Priority languages
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  // Other languages
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'sl', name: 'Slovenščina', flag: '🇸🇮' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Suomi', flag: '🇫🇮' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'mt', name: 'Malti', flag: '🇲🇹' },
  { code: 'ga', name: 'Gaeilge', flag: '🇮🇪' },
];

export default function LanguageSelector({ transparent }: { transparent?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!isMobile && ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobile, open]);

  const switchLocale = (code: string) => {
    const segments = pathname.split('/');
    segments[1] = code;
    router.push(segments.join('/'));
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm transition-colors duration-300 ${
          transparent ? 'text-white/75 hover:text-white' : 'text-gray-600 hover:text-primary'
        }`}
        aria-label="Select language"
      >
        <Globe size={15} />
        <span className="hidden sm:inline font-medium uppercase tracking-wider text-xs">
          {locale}
        </span>
        <ChevronDown
          size={12}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Desktop dropdown */}
      <AnimatePresence>
        {!isMobile && open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 w-48 bg-white shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-72 overflow-y-auto"
          >
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-surface transition-colors duration-150 ${
                  lang.code === locale
                    ? 'bg-accent-light text-accent font-medium'
                    : 'text-gray-700'
                }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.name}</span>
                {lang.code === locale && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom sheet */}
      <AnimatePresence>
        {isMobile && open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-100"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl z-101 flex flex-col max-h-[80vh]"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 text-gray-500">
                  <Globe size={15} />
                  <span className="text-sm font-medium text-gray-900">Sprache / Language</span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-700 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="overflow-y-auto overscroll-contain pb-safe">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className={`w-full flex items-center gap-3 px-5 py-3.5 text-sm border-b border-gray-50 transition-colors last:border-0 ${
                      lang.code === locale
                        ? 'bg-accent/5 text-accent font-medium'
                        : 'text-gray-700 active:bg-gray-50'
                    }`}
                  >
                    <span className="text-xl leading-none">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {lang.code === locale && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-accent shrink-0" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
