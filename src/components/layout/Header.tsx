'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '@/components/ui/LanguageSelector';
import LogoMark from '@/components/ui/LogoMark';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { label: t('home'), href: `/${locale}` },
    { label: t('projects'), href: `/${locale}/projects` },
    { label: t('services'), href: `/${locale}/services` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('contact'), href: `/${locale}/contact` },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-white/60'
          : 'bg-white/8 backdrop-blur-xl border-b border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.12)]'
      }`}
      style={{
        WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(24px) saturate(180%)' : 'blur(20px) saturate(160%)',
        backdropFilter: scrolled || mobileOpen ? 'blur(24px) saturate(180%)' : 'blur(20px) saturate(160%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group">
            <div className={`transition-all duration-300 ${scrolled || mobileOpen ? '' : 'filter-[brightness(0)_invert(1)]'}`}>
              <LogoMark size={42} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm tracking-wide transition-colors duration-200 group ${
                  scrolled ? 'text-gray-500 hover:text-primary' : 'text-white/70 hover:text-white'
                } ${isActive(item.href) ? (scrolled ? '!text-primary' : '!text-white') : ''}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right: Language + Mobile toggle */}
          <div className="flex items-center gap-4">
            <LanguageSelector scrolled={scrolled} />
            <button
              className={`lg:hidden p-1.5 transition-colors duration-200 ${
                scrolled || mobileOpen ? 'text-primary' : 'text-white'
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="px-6 py-4 flex flex-col" aria-label="Mobile navigation">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block py-3.5 text-sm font-medium border-b border-gray-50 transition-colors last:border-0 ${
                      isActive(item.href) ? 'text-accent' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
