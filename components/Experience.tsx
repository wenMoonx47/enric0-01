'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const companyAccent: Record<string, { dot: string; badge: string; badgeText: string; badgeBorder: string }> = {
  Kueski:   { dot: '#7C3AED', badge: '#F5F3FF', badgeText: '#5B21B6', badgeBorder: '#DDD6FE' },
  Retool:   { dot: '#D97706', badge: '#FFFBEB', badgeText: '#92400E', badgeBorder: '#FDE68A' },
  Factorial:{ dot: '#DB2777', badge: '#FDF2F8', badgeText: '#831843', badgeBorder: '#FBCFE8' },
  Holded:   { dot: '#0891B2', badge: '#ECFEFF', badgeText: '#164E63', badgeBorder: '#A5F3FC' },
};

export default function Experience() {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <section id="experience" className="py-28 bg-white border-t border-[#E3E0D8]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#AAA] mb-3">
            {t.experience.title}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111] tracking-tight">
            {t.experience.subtitle}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-[#E3E0D8] hidden sm:block" />

          <div className="space-y-3">
            {t.experience.jobs.map((job, i) => {
              const ac = companyAccent[job.company] ?? { dot: '#AAA', badge: '#F5F5F5', badgeText: '#555', badgeBorder: '#DDD' };
              const isOpen = expanded === i;
              return (
                <motion.div
                  key={`${job.company}-${i}`}
                  initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  {/* dot */}
                  <div
                    className="absolute left-[15px] top-[22px] w-[14px] h-[14px] rounded-full hidden sm:block z-10 ring-2 ring-white"
                    style={{ background: ac.dot }}
                  />

                  <div className="sm:ml-14">
                    <button
                      onClick={() => setExpanded(isOpen ? -1 : i)}
                      className={`w-full text-left p-6 rounded-2xl border transition-all duration-200 group ${
                        isOpen ? 'bg-white border-[#D0CEC7] shadow-md' : 'bg-[#F7F5F0] border-[#E3E0D8] hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-2.5">
                            <span
                              className="px-2.5 py-1 rounded-full text-xs font-bold border"
                              style={{ background: ac.badge, color: ac.badgeText, borderColor: ac.badgeBorder }}
                            >
                              {job.company}
                            </span>
                            <span className="flex items-center gap-1 text-[#AAA] text-xs font-mono">
                              <MapPin size={11} />
                              {job.location} — {t.experience.remote}
                            </span>
                          </div>
                          <h3 className="text-[#111] font-bold text-lg leading-snug group-hover:text-[#333] transition-colors">
                            {job.role}
                          </h3>
                          <p className="text-[#AAA] text-sm font-mono mt-1">{job.period}</p>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-[#CCC] flex-shrink-0 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180 !text-[#555]' : ''}`}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-3 rounded-b-2xl bg-white border-x border-b border-[#D0CEC7] shadow-md -mt-2">
                            <ul className="space-y-3 mt-3">
                              {job.bullets.map((bullet, bi) => (
                                <li key={bi} className="flex items-start gap-3">
                                  <div className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ac.dot }} />
                                  <span className="text-[#444] text-base leading-relaxed">{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
