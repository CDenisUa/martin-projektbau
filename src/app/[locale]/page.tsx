import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/seo';
// Core
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return buildPageMetadata({
    locale,
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* These sections scroll over the sticky hero */}
      <div className="relative z-10">
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
}
