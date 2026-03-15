'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ALL_PROJECTS = [
  {
    slug: 'moderne-fassade-zuerich',
    title: 'Moderne Fassade Zürich',
    category: 'Fassadenbau',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80',
  },
  {
    slug: 'innenausbau-basel',
    title: 'Innenausbau Basel',
    category: 'Renovation',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80',
  },
  {
    slug: 'parkett-renovation-bern',
    title: 'Parkett Renovation Bern',
    category: 'Parkettverlegung',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&q=80',
  },
  {
    slug: 'fliesen-badezimmer-luzern',
    title: 'Badezimmer Luzern',
    category: 'Fliesenverlegung',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=80',
  },
  {
    slug: 'fenster-umbau-winterthur',
    title: 'Umbau Winterthur',
    category: 'Fenstermontage',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80',
  },
  {
    slug: 'maler-gipser-genf',
    title: 'Maler & Gipser Genf',
    category: 'Malerarbeiten',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=900&q=80',
  },
];

export default function ProjectsPage() {
  const t = useTranslations('projects');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <div className="bg-primary pt-40 pb-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="max-w-7xl mx-auto relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">Portfolio</p>
            <h1 className="text-5xl lg:text-7xl font-light text-white tracking-tight">{t('title')}</h1>
            <p className="text-white/40 mt-5 text-lg max-w-xl leading-relaxed">{t('subtitle')}</p>
          </motion.div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALL_PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/${locale}/projects/${project.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-primary text-xs font-medium px-5 py-2.5 flex items-center gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {t('viewProject')} <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-1.5">{project.category}</p>
                    <h3 className="text-base font-light text-primary group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-gray-300 mt-0.5 flex-shrink-0">{project.year}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
