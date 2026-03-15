import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Martin Projektbau GmbH – Premium Construction & Renovation',
  description: 'Swiss construction, renovation and facade solutions crafted with precision and expertise.',
  keywords: 'construction, renovation, facade, Fassadenbau, Parkettverlegung, Switzerland',
  metadataBase: new URL('https://martin-projektbau.ch'),
};

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
    <html lang={locale} className={inter.variable}>
      <body className="bg-white text-primary font-sans antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
