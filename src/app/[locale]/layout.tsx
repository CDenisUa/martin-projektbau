import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/layout/ScrollToTop';
import CookieNotice from '@/components/legal/CookieNotice';
import '../globals.css';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const title = t('metaTitle');
  const description = t('metaDescription');

  return {
    title,
    description,
    keywords: 'Bau, Renovation, Fassadenbau, Fenstermontage, Innenausbau, Schweiz',
    metadataBase: new URL('https://www.martinprojektgroup.ch'),
    openGraph: {
      title,
      description,
      url: 'https://www.martinprojektgroup.ch',
      siteName: 'Martin Projekt Group',
      images: [{ url: '/og-image.png', width: 1734, height: 907, alt: 'Martin Projekt Group GmbH' }],
      type: 'website',
      locale: locale.replace('-', '_'),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-image.png'],
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
      other: [
        { rel: 'manifest', url: '/site.webmanifest' },
      ],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-white text-primary font-sans antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
            <CookieNotice />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
