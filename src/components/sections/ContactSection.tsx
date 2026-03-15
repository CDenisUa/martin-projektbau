'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

export default function ContactSection() {
  const t = useTranslations('contact');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-32 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              {t('sectionLabel')}
            </p>
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight mb-6">{t('title')}</h2>
            <p className="text-white/50 text-lg leading-relaxed mb-12">{t('subtitle')}</p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/8 flex items-center justify-center flex-shrink-0">
                  <Mail size={17} className="text-accent" />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1.5">
                    {t('emailLabel')}
                  </div>
                  <a
                    href="mailto:info@martin-projektbau.ch"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    info@martin-projektbau.ch
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/8 flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-accent" />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-1.5">
                    {t('address')}
                  </div>
                  <div className="text-sm text-white/70">Switzerland</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-64">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <CheckCircle size={48} className="text-accent mx-auto mb-4" />
                  <p className="text-xl font-light">{t('successMessage')}</p>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                      {t('name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t('namePlaceholder')}
                      className="w-full bg-white/8 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                      {t('email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t('emailPlaceholder')}
                      className="w-full bg-white/8 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder={t('phonePlaceholder')}
                    className="w-full bg-white/8 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t('messagePlaceholder')}
                    className="w-full bg-white/8 border border-white/15 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200"
                >
                  {t('send')}
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
