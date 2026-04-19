'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import LogoMark from '@/components/ui/LogoMark';

export default function Footer() {
  const t = useTranslations('footer');
  const tn = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { label: tn('home'), href: `/${locale}` },
    { label: tn('services'), href: `/${locale}/services` },
    { label: tn('about'), href: `/${locale}/about` },
    { label: tn('contact'), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-primary text-white border-t border-white/5">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <Link
            href={`/${locale}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="filter-[brightness(0)_invert(1)] opacity-90 inline-block"
          >
            <LogoMark size={32} />
          </Link>

          {/* Navigation — 2 columns */}
          <div>
            <h4 className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-3">
              {t('links')}
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[9px] text-white/30 uppercase tracking-[0.2em] mb-3">
              Contact
            </h4>
            <a
              href="mailto:info@martinprojektgroup.ch"
              className="flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors duration-200"
            >
              <Mail size={12} className="text-accent shrink-0" />
              info@martinprojektgroup.ch
            </a>
          </div>
        </div>
      </div>

      {/* Developer credit strip */}
      <div className="bg-black/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex justify-end">
          <a
            href="https://chepio.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-25 hover:opacity-100 transition-all duration-300"
            aria-label="Developed by Chepio"
          >
            <img
              src="/images/icons/logo_designed.svg"
              alt="chepio.tech"
              className="h-7 w-auto brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
