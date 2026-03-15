'use client';

import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FEATURED_PROJECTS = [
  {
    slug: 'moderne-fassade-zuerich',
    title: 'Moderne Fassade Zürich',
    category: 'Fassadenbau',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
  },
  {
    slug: 'innenausbau-basel',
    title: 'Innenausbau Basel',
    category: 'Renovation',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
  },
  {
    slug: 'parkett-renovation-bern',
    title: 'Parkett Renovation Bern',
    category: 'Parkettverlegung',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
  },
  {
    slug: 'fliesen-badezimmer-luzern',
    title: 'Badezimmer Luzern',
    category: 'Fliesenverlegung',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  },
  {
    slug: 'fenster-umbau-winterthur',
    title: 'Umbau Winterthur',
    category: 'Fenstermontage',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
];

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium"
            >
              {t('sectionLabel')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-light text-primary tracking-tight"
            >
              {t('title')}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href={`/${locale}/projects`}
              className="hidden md:flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors duration-200 group"
            >
              {t('viewAll')}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-12 gap-3">
          {/* Large feature — left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="col-span-12 lg:col-span-7"
          >
            <ProjectCard project={FEATURED_PROJECTS[0]} locale={locale} t={t} tall />
          </motion.div>

          {/* Right column */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-3">
            {[FEATURED_PROJECTS[1], FEATURED_PROJECTS[2]].map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1 }}
                className="flex-1"
              >
                <ProjectCard project={project} locale={locale} t={t} />
              </motion.div>
            ))}
          </div>

          {/* Bottom row */}
          {FEATURED_PROJECTS.slice(3).map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="col-span-12 sm:col-span-6"
            >
              <ProjectCard project={project} locale={locale} t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            {t('viewAll')} <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

type TranslationFunction = ReturnType<typeof useTranslations>;

function ProjectCard({
  project,
  locale,
  t,
  tall = false,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
  locale: string;
  t: TranslationFunction;
  tall?: boolean;
}) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}`}
      className="group relative block overflow-hidden bg-gray-200"
      style={{ aspectRatio: tall ? '3/4' : '16/10' }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
      />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-400" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-2">{project.category}</p>
        <h3 className="text-white text-xl font-light mb-3">{project.title}</h3>
        <div className="flex items-center gap-2 text-white/50 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {t('viewProject')} <ArrowRight size={11} />
        </div>
      </div>
    </Link>
  );
}
