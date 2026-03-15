'use client';

import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState, t: ReturnType<typeof useTranslations>): Errors {
  const errors: Errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = t('errorName');
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t('errorEmail');
  }
  if (!form.phone.trim()) {
    errors.phone = t('errorPhone');
  }
  if (!form.message.trim() || form.message.trim().length < 5) {
    errors.message = t('errorMessage');
  }
  return errors;
}

export default function ContactSection() {
  const t = useTranslations('contact');
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const handleBlur = (field: keyof FormState) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(form, t);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      const fieldErrors = validate(updated, t);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    const fieldErrors = validate(form, t);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setLoading(true);
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setServerError(t('errorServer'));
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof FormState) =>
    `w-full bg-white/8 border text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none transition-colors duration-200 ${
      touched[field] && errors[field]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-white/15 focus:border-accent'
    }`;

  return (
    <section ref={ref} className="py-12 md:py-8 bg-primary text-white w-full">
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
            <p className="text-white/50 text-lg leading-relaxed mb-6">{t('subtitle')}</p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/8 flex items-center justify-center shrink-0">
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
                <div className="w-10 h-10 bg-white/8 flex items-center justify-center shrink-0">
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
              <form onSubmit={handleSubmit} noValidate className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                      {t('name')} *
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder={t('namePlaceholder')}
                      className={inputClass('name')}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder={t('emailPlaceholder')}
                      className={inputClass('email')}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                    {t('phone')} *
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onBlur={() => handleBlur('phone')}
                    placeholder={t('phonePlaceholder')}
                    className={inputClass('phone')}
                  />
                  {touched.phone && errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] text-white/30 uppercase tracking-[0.2em] mb-2">
                    {t('message')} *
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    placeholder={t('messagePlaceholder')}
                    className={`${inputClass('message')} resize-none`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle size={11} /> {errors.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="text-sm text-red-400 flex items-center gap-2">
                    <AlertCircle size={14} /> {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center gap-3 bg-accent hover:bg-accent/90 disabled:opacity-60 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all duration-200"
                >
                  {loading ? (
                    <Loader2 size={15} className="animate-spin" />
                  ) : (
                    <>
                      {t('send')}
                      <ArrowRight
                        size={15}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
