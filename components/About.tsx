'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 bg-white border-t border-[#E3E0D8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#AAA] mb-3">
            {t.about.title}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111] tracking-tight">
            {t.about.subtitle}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="space-y-8"
          >
            {/* Avatar */}
            <div className="relative w-52 h-52">
              <div className="w-full h-full rounded-3xl bg-[#F2EFE8] border-2 border-[#E3E0D8] flex items-center justify-center">
                <span className="text-7xl font-black text-[#CCC] select-none">EP</span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-2xl bg-white border-2 border-[#E3E0D8] flex items-center justify-center shadow-sm">
                <span className="text-2xl">🇵🇪</span>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: <MapPin size={15} />, label: t.about.location },
                { icon: <Mail size={15} />, label: t.about.email },
                { icon: <Phone size={15} />, label: t.about.phone },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-[#555]">
                  <div className="p-2 rounded-lg bg-[#F2EFE8] border border-[#E3E0D8] text-[#888]">
                    {item.icon}
                  </div>
                  <span className="text-base">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe size={15} className="text-[#888]" />
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#AAA]">
                  {t.about.languages_title}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {t.about.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#E3E0D8] shadow-sm">
                    <span className="text-xl">{lang.flag}</span>
                    <div>
                      <p className="text-[#111] text-sm font-semibold leading-tight">{lang.name}</p>
                      <p className="text-[#AAA] text-xs">{lang.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={15} className="text-[#888]" />
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#AAA]">
                  {t.about.education_title}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E3E0D8]">
                <p className="text-[#111] font-semibold text-base">{t.about.education.degree}</p>
                <p className="text-[#666] text-sm mt-1">{t.about.education.school}</p>
                <p className="text-[#AAA] text-xs font-mono mt-2">{t.about.education.year}</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
            className="space-y-8"
          >
            <p className="text-[#333] text-lg leading-relaxed">{t.about.description}</p>
            <p className="text-[#666] text-lg leading-relaxed">{t.about.description2}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              {[
                { value: '9+', label: 'Years Experience', sub: 'professional' },
                { value: '4', label: 'Global Companies', sub: 'MX · US · ES · PE' },
                { value: '3', label: 'Languages', sub: 'ES · EN · JP' },
              ].map((stat) => (
                <div key={stat.label} className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#E3E0D8]">
                  <p className="text-3xl font-black text-[#111] leading-none mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-[#333]">{stat.label}</p>
                  <p className="text-xs text-[#AAA] font-mono mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Core stack */}
            <div>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#AAA] mb-4">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Java', 'Go', 'Python', 'Node.js', 'Kubernetes'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full text-sm font-semibold border-2 border-[#E3E0D8] bg-white text-[#333] hover:border-[#111] hover:text-[#111] transition-colors duration-150"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
