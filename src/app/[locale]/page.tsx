import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Martin Projektbau GmbH – Premium Construction & Renovation Switzerland',
  description:
    'Swiss construction, renovation, facade and interior finishing services. Premium quality with precision craftsmanship.',
};

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
