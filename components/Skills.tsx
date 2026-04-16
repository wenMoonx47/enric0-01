'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const skillData = {
  frontend: ['React', 'Next.js', 'Angular', 'AngularJS', 'TypeScript', 'JavaScript (ESNext)', 'HTML5', 'CSS3', 'SCSS/SASS'],
  backend:  ['Node.js', 'REST APIs', 'GraphQL', 'API Design', 'Authentication Patterns'],
  cloud:    ['Vercel', 'AWS (basic)', 'CI/CD Pipelines', 'Nx Monorepo', 'Turborepo'],
  tools:    ['Redux/RTK', 'React Query', 'Zustand', 'NgRx', 'RxJS', 'Jest', 'React Testing Library', 'Cypress', 'Playwright', 'Selenium', 'Vite', 'Webpack', 'Babel', 'ESLint', 'Prettier', 'Storybook', 'Chromatic'],
};

const cats = [
  { key: 'frontend', accent: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE', text: '#1E40AF' },
  { key: 'backend',  accent: '#7C3AED', bg: '#F5F3FF', border: '#DDD6FE', text: '#5B21B6' },
  { key: 'cloud',    accent: '#D97706', bg: '#FFFBEB', border: '#FDE68A', text: '#92400E' },
  { key: 'tools',    accent: '#059669', bg: '#ECFDF5', border: '#A7F3D0', text: '#065F46' },
];

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    { ...cats[0], label: t.skills.categories.frontend, skills: skillData.frontend },
    { ...cats[1], label: t.skills.categories.backend,  skills: skillData.backend },
    { ...cats[2], label: t.skills.categories.cloud,    skills: skillData.cloud },
    { ...cats[3], label: t.skills.categories.tools,    skills: skillData.tools },
  ];

  return (
    <section id="skills" className="py-28 bg-[#F7F5F0] border-t border-[#E3E0D8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#AAA] mb-3">
            {t.skills.title}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#111] tracking-tight">
            {t.skills.subtitle}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-7 rounded-2xl bg-white border border-[#E3E0D8] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: cat.bg, border: `1.5px solid ${cat.border}` }}>
                  <div className="w-3.5 h-3.5 rounded-sm" style={{ background: cat.accent }} />
                </div>
                <h3 className="font-bold text-base text-[#111]">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150 hover:scale-105 cursor-default"
                    style={{ background: cat.bg, border: `1.5px solid ${cat.border}`, color: cat.text }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
