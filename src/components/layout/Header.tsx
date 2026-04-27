'use client';

import { startTransition, useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '@/components/ui/LanguageSelector';
import LogoMark from '@/components/ui/LogoMark';
// Utils
import { getFooterLegalCopy } from '@/lib/legalClientCopy';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHomePage = pathname === `/${locale}` || pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setMobileOpen(false);
    });
  }, [pathname]);

  const navItems = [
    { label: t('home'), href: `/${locale}` },
    { label: t('services'), href: `/${locale}/services` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  const legalCopy = getFooterLegalCopy(locale);
  const legalItems = [
    { label: legalCopy.privacy, href: `/${locale}/privacy` },
    { label: legalCopy.imprint, href: `/${locale}/impressum` },
    { label: legalCopy.terms, href: `/${locale}/terms` },
    { label: legalCopy.cookies, href: `/${locale}/cookies` },
  ];

  const isActive = (href: string) => pathname === href;

  // transparent = home page before scrolling past hero
  const transparent = isHomePage && !scrolled && !mobileOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
      {/* Sliding white background - slides up when transparent, slides down when solid */}
      <AnimatePresence>
        {!transparent && (
          <motion.div
            key="solid-bg"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-white shadow-sm border-b border-gray-100"
          />
        )}
      </AnimatePresence>

      {/* Header content - always on top of background layer */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group">
            <div className={`transition-all duration-400 ${transparent ? 'filter-[brightness(0)_invert(1)]' : ''}`}>
              <LogoMark width={80} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm tracking-wide transition-colors duration-300 group ${
                  transparent
                    ? 'text-white/75 hover:text-white'
                    : 'text-gray-500 hover:text-primary'
                } ${isActive(item.href) ? (transparent ? 'text-white!' : 'text-primary!') : ''}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right: Language + Mobile toggle */}
          <div className="flex items-center gap-4">
            <LanguageSelector transparent={transparent} />
            <button
              className={`lg:hidden p-1.5 transition-colors duration-300 ${
                transparent ? 'text-white' : 'text-primary'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - right-side drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm lg:hidden z-40"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-20 right-0 bottom-0 w-[194px] bg-white shadow-2xl lg:hidden z-50 flex flex-col"
            >
              <div className="flex flex-col flex-1 overflow-y-auto px-6 py-6 items-end">
                {/* Main nav */}
                <nav className="flex flex-col w-full text-right" aria-label="Mobile navigation">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block py-3 text-sm font-medium border-b border-gray-50 transition-colors last:border-0 ${
                          isActive(item.href) ? 'text-accent' : 'text-gray-700 hover:text-primary'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Legal block */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: navItems.length * 0.05 + 0.05 }}
                  className="mt-auto pt-5 border-t border-gray-100 w-full text-right"
                >
                  <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] mb-3">Legal</p>
                  <div className="flex flex-col gap-3 items-end">
                    {legalItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-xs transition-colors duration-200 ${
                          isActive(item.href) ? 'text-accent' : 'text-gray-400 hover:text-gray-700'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </motion.div>
    </header>
  );
}
