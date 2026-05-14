'use client';

// Core
import { useState, useEffect } from 'react';
import Image from 'next/image';

const BANNERS = [
  '/images/services/banners/banner_1.webp',
  '/images/services/banners/banner_2.webp',
  '/images/services/banners/banner_3.webp',
];

export function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((prev) => (prev + 1) % BANNERS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
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
            opacity: i === current ? 0.18 : 0,
            transition: 'opacity 1.2s ease-in-out',
          }}
        />
      ))}
    </>
  );
}
