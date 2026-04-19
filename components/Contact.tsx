'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, FileText, Clock } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/SocialIcons';
import { useLanguage } from '@/contexts/LanguageContext';

type FormData = { name: string; email: string; subject: string; message: string };

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('sending');
    const subject = encodeURIComponent(data.subject);
    const body    = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`);
    window.location.href = `mailto:enricoperania@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => { setStatus('success'); reset(); setTimeout(() => setStatus('idle'), 4000); }, 800);
  };

  const socials = [
    { icon: <GithubIcon size={18} />, href: 'https://github.com/ethhandy', label: 'GitHub' },
    { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/enrico-perania-3689ba403/', label: 'LinkedIn' },
    { icon: <XIcon size={18} />, href: 'https://twitter.com/ThepaulCreative', label: 'X / Twitter' },
  ];

  const inputCls = (err: boolean) =>
    `w-full px-4 py-3.5 rounded-xl bg-[#F7F5F0] border-2 text-[#111] placeholder-[#BBB] text-base focus:outline-none focus:bg-white transition-all duration-150 ${
      err ? 'border-red-400 focus:border-red-400' : 'border-[#E3E0D8] focus:border-[#111]'
    }`;

  return (
    <section id="contact" className="py-28 bg-white border-t border-[#E3E0D8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#AAA] mb-3">
            {t.contact.title}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111] tracking-tight">
            {t.contact.subtitle}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-12">

          {/* ── Left info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {[
              { icon: <MapPin size={17} />, label: t.contact.info.location, value: 'Av. Universitaria 742, Urb. Ingeniería, San Martín de Porres, Lima, Perú' },
              { icon: <Mail size={17} />, label: t.contact.info.email, value: 'enricoperania@gmail.com' },
              { icon: <Phone size={17} />, label: t.contact.info.phone, value: '+1 928-268-8561' },
              { icon: <Clock size={17} />, label: t.contact.info.availability, value: t.contact.info.availability_value },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F5F0] border border-[#E3E0D8]">
                <div className="p-2.5 rounded-xl bg-white border border-[#E3E0D8] text-[#666] flex-shrink-0 mt-0.5 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#AAA] mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#333] text-base font-medium">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#AAA] mb-3">
                Social
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="p-3.5 rounded-xl border-2 border-[#E3E0D8] bg-white text-[#555] hover:text-[#111] hover:border-[#111] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-8 rounded-2xl bg-[#F7F5F0] border border-[#E3E0D8]">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#AAA] block mb-2">
                    {t.contact.form.name}
                  </label>
                  <input {...register('name', { required: true })} placeholder={t.contact.form.name_placeholder} className={inputCls(!!errors.name)} />
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#AAA] block mb-2">
                    {t.contact.form.email}
                  </label>
                  <input {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} type="email" placeholder={t.contact.form.email_placeholder} className={inputCls(!!errors.email)} />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#AAA] block mb-2">
                  {t.contact.form.subject}
                </label>
                <input {...register('subject', { required: true })} placeholder={t.contact.form.subject_placeholder} className={inputCls(!!errors.subject)} />
              </div>

              <div>
                <label className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#AAA] block mb-2">
                  {t.contact.form.message}
                </label>
                <textarea {...register('message', { required: true })} rows={7} placeholder={t.contact.form.message_placeholder} className={`${inputCls(!!errors.message)} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#111] text-white text-base font-semibold hover:bg-[#2a2a2a] disabled:opacity-50 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
              >
                {status === 'sending' ? (
                  <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />{t.contact.form.sending}</>
                ) : (
                  <><Send size={16} />{t.contact.form.send}</>
                )}
              </button>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">
                  <CheckCircle size={16} />{t.contact.form.success}
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-medium">
                  <AlertCircle size={16} />{t.contact.form.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
