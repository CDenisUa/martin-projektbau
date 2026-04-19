'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { startTransition, useEffect, useState } from 'react';
import { getCookieNoticeCopy } from '@/lib/legalClientCopy';

const STORAGE_KEY = 'martin-cookie-notice-dismissed-v1';

export default function CookieNotice() {
  const locale = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const copy = getCookieNoticeCopy(locale);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    startTransition(() => {
      setIsVisible(!dismissed);
    });
  }, []);

  const dismiss = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, '1');
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-5 sm:bottom-5">
          <motion.aside
            initial={{ opacity: 0, x: 28, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 18, y: 18, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -2 }}
            className="relative ml-auto w-full max-w-[360px] overflow-hidden rounded-[24px] border border-white/70 bg-white/90 shadow-[0_24px_70px_-24px_rgba(10,22,40,0.55)] backdrop-blur-xl"
            aria-live="polite"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.92),rgba(239,246,255,0.88))]" />
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/15 blur-2xl" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

            <div className="relative flex items-start gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_10px_25px_-12px_rgba(10,22,40,0.95)]">
                <ShieldCheck size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/45">
                  Cookies
                </p>
                <p className="text-[13px] leading-5 text-primary/72">
                  {copy.body}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <Link
                    href={`/${locale}/cookies`}
                    className="inline-flex items-center rounded-full border border-primary/10 bg-white/80 px-3 py-1.5 text-[12px] font-medium text-primary transition-colors duration-200 hover:border-accent/25 hover:text-accent"
                  >
                    {copy.learnMore}
                  </Link>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="inline-flex items-center rounded-full bg-primary px-3 py-1.5 text-[12px] font-medium text-white transition-all duration-200 hover:bg-primary/92"
                  >
                    {copy.dismiss}
                  </button>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
