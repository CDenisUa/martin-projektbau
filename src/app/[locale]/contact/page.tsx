'use client';

import ContactSection from '@/components/sections/ContactSection';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const BANNERS = [
  '/images/our-services-banner/banner_1.webp',
  '/images/our-services-banner/banner_2.webp',
  '/images/our-services-banner/banner_3.webp',
];

export default function ContactPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % BANNERS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex-1 relative bg-primary lg:overflow-hidden">

      {/* Crossfading banner images */}
      {BANNERS.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className="object-cover"
          sizes="100vw"
          style={{
            opacity: i === current ? 0.2 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-primary/75" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Content - centered H+V within the flex-1 block, offset for fixed header */}
      <div className="relative z-10 w-full pt-20 lg:pt-0 lg:flex lg:items-center lg:justify-center lg:h-[calc(100vh-280px)]">
        <ContactSection className="bg-transparent w-full" />
      </div>
    </div>
  );
}
