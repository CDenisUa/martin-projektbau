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
    { label: tn('projects'), href: `/${locale}/projects` },
    { label: tn('services'), href: `/${locale}/services` },
    { label: tn('about'), href: `/${locale}/about` },
    { label: tn('contact'), href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-primary text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <LogoMark size={36} />
              <div className="leading-tight">
                <div className="font-semibold text-sm">Martin Projektbau</div>
                <div className="text-[10px] text-white/30 tracking-[0.2em] uppercase">GmbH</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">{t('tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-5">
              {t('links')}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-5">
              Contact
            </h4>
            <a
              href="mailto:info@martin-projektbau.ch"
              className="flex items-center gap-2.5 text-sm text-white/50 hover:text-white transition-colors duration-200 mb-3"
            >
              <Mail size={14} className="text-accent flex-shrink-0" />
              info@martin-projektbau.ch
            </a>
            <p className="text-sm text-white/30">martin-projektbau.ch</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/25">
            © {new Date().getFullYear()} Martin Projektbau GmbH. {t('rights')}
          </span>
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/settings`}
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              {t('legal')}
            </Link>
            <Link
              href={`/${locale}/settings`}
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              {t('privacy')}
            </Link>
            <Link
              href={`/${locale}/settings`}
              className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200"
            >
              Language
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
