'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useParams } from 'next/navigation';

type ProjectData = {
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  services: string[];
  materials: string[];
  hero: string;
  gallery: string[];
};

const PROJECTS_DATA: Record<string, ProjectData> = {
  'moderne-fassade-zuerich': {
    title: 'Moderne Fassade Zürich',
    category: 'Fassadenbau',
    year: '2024',
    location: 'Zürich, CH',
    description:
      'A complete facade renewal for a commercial building in central Zürich. The project involved removing the old facade system and installing a modern ventilated facade with high-performance insulation panels, delivering both aesthetic and energy efficiency improvements. Every detail was planned with precision and executed to the highest Swiss standards.',
    services: ['Fassadenbau', 'Wärmedämmung', 'Abdichtungsarbeiten'],
    materials: ['Aluminium-Verbundplatten', 'Mineralwolle-Dämmung', 'Edelstahl-Unterkonstruktion'],
    hero: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1400&q=80',
    ],
  },
  'innenausbau-basel': {
    title: 'Innenausbau Basel',
    category: 'Renovation',
    year: '2024',
    location: 'Basel, CH',
    description:
      'Complete interior renovation of a residential apartment in Basel. Work included new floor installation, wall finishes, painting, and custom woodwork throughout. The project was delivered on schedule with zero compromise on quality.',
    services: ['Renovation', 'Parkettverlegung', 'Malerarbeiten', 'Gipserarbeiten'],
    materials: ['Eichenparkett', 'Premium-Wandfarbe', 'Natursteinplatten'],
    hero: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=80',
    ],
  },
  'parkett-renovation-bern': {
    title: 'Parkett Renovation Bern',
    category: 'Parkettverlegung',
    year: '2023',
    location: 'Bern, CH',
    description:
      'Full parquet renovation of a classic residential building in Bern. Old flooring was carefully removed and replaced with high-grade oak parquet in a herringbone pattern, preserving the building\'s historic character.',
    services: ['Parkettverlegung', 'Bodenpflege', 'Oberflächenbehandlung'],
    materials: ['Eichenparkett 15mm', 'Naturöl-Versiegelung', 'Parkett-Kleber'],
    hero: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1400&q=80',
    ],
  },
  'fliesen-badezimmer-luzern': {
    title: 'Badezimmer Luzern',
    category: 'Fliesenverlegung',
    year: '2023',
    location: 'Luzern, CH',
    description:
      'Premium bathroom renovation in Lucerne featuring floor-to-ceiling natural stone tiling. A minimalist design approach was chosen to complement the architecture, with frameless glass shower enclosures and underfloor heating.',
    services: ['Fliesenverlegung', 'Badezimmer-Renovation', 'Sanitärarbeiten'],
    materials: ['Travertin-Naturstein', 'Grossformat-Fliesen', 'Epoxy-Fugenmörtel'],
    hero: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1400&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80',
    ],
  },
  'fenster-umbau-winterthur': {
    title: 'Umbau Winterthur',
    category: 'Fenstermontage',
    year: '2023',
    location: 'Winterthur, CH',
    description:
      'Complete window replacement project for a multi-family building in Winterthur. All 42 windows were replaced with triple-glazed units, dramatically improving thermal performance and reducing noise levels.',
    services: ['Fenstermontage', 'Dämmarbeiten', 'Fassadenanpassung'],
    materials: ['Dreifachverglasung', 'Kunststoff-Alu-Rahmen', 'EPDM-Dichtungen'],
    hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80',
    ],
  },
  'maler-gipser-genf': {
    title: 'Maler & Gipser Genf',
    category: 'Malerarbeiten',
    year: '2022',
    location: 'Genf, CH',
    description:
      'Extensive painting and plastering works for a prestigious office building in Geneva. The project included complete interior replastering, decorative finishes and exterior façade painting across 5 floors.',
    services: ['Malerarbeiten', 'Gipserarbeiten', 'Dekorative Oberflächen'],
    materials: ['Premium-Innenfarbe', 'Lehmputz', 'Mineralfarbe aussen'],
    hero: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80',
    ],
  },
};

const RELATED_SLUGS = ['moderne-fassade-zuerich', 'innenausbau-basel', 'parkett-renovation-bern'];

export default function ProjectDetailPage() {
  const t = useTranslations('projects');
  const locale = useLocale();
  const params = useParams();
  const slug = params.slug as string;

  const project: ProjectData = PROJECTS_DATA[slug] ?? {
    title: slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' '),
    category: 'Project',
    year: '2024',
    location: 'Switzerland',
    description: 'A premium construction and renovation project by Martin Projektbau GmbH, executed with Swiss precision and craftsmanship.',
    services: ['Construction', 'Renovation'],
    materials: ['Premium materials'],
    hero: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
    gallery: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80'],
  };

  const related = RELATED_SLUGS.filter((s) => s !== slug)
    .slice(0, 3)
    .map((s) => PROJECTS_DATA[s])
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative h-[85vh] min-h-[500px]">
        <Image
          src={project.hero}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary/85" />

        <div className="absolute inset-0 flex flex-col justify-end pb-20 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <Link
              href={`/${locale}/projects`}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs tracking-widest uppercase mb-10 transition-colors duration-200 group"
            >
              <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-200" />
              {t('back')}
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-accent text-[10px] tracking-[0.3em] uppercase mb-3">
                {project.category} — {project.location} — {project.year}
              </p>
              <h1 className="text-5xl lg:text-7xl font-light text-white tracking-tight">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          {/* Description */}
          <div className="lg:col-span-2">
            <h2 className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-6">{t('overview')}</h2>
            <p className="text-gray-500 leading-relaxed text-lg">{project.description}</p>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <div>
              <h3 className="text-[10px] text-gray-300 uppercase tracking-[0.25em] mb-4">
                {t('servicesInvolved')}
              </h3>
              <ul className="space-y-2.5">
                {project.services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-accent flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] text-gray-300 uppercase tracking-[0.25em] mb-4">
                {t('materials')}
              </h3>
              <ul className="space-y-2.5">
                {project.materials.map((m) => (
                  <li key={m} className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-gray-300 flex-shrink-0" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-24">
          <h2 className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-8">{t('gallery')}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden ${i === 0 ? 'sm:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}
              >
                <Image
                  src={img}
                  alt={`${project.title} — gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Related projects */}
        {related.length > 0 && (
          <div>
            <h2 className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-8">{t('relatedProjects')}</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {related.map((rel, i) => {
                const relSlug = Object.entries(PROJECTS_DATA).find(([, v]) => v === rel)?.[0] ?? '';
                return (
                  <motion.div
                    key={relSlug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/${locale}/projects/${relSlug}`} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-3">
                        <Image
                          src={rel.hero}
                          alt={rel.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="33vw"
                        />
                      </div>
                      <p className="text-accent text-[10px] tracking-[0.25em] uppercase mb-1">{rel.category}</p>
                      <h4 className="text-sm font-light text-primary group-hover:text-accent transition-colors duration-200 flex items-center gap-1">
                        {rel.title}{' '}
                        <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
