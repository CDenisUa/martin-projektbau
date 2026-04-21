// Core
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

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
