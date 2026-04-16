'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ProjectSlider from '@/components/ProjectSlider';
import { projects } from '@/lib/projects';

export default function Portfolio() {
  const { lang } = useLanguage();

  return (
    <section id="portfolio" className="py-28 bg-[#F7F5F0] border-t border-[#E3E0D8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-[#E3E0D8] pb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#AAA] mb-3">
              Selected Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#111] tracking-tight">
              {lang === 'es' ? 'Proyectos' : 'Projects'}
            </h2>
          </div>
          <p className="hidden sm:block text-sm text-[#BBB] font-mono">
            {String(projects.length).padStart(2, '0')} cases
          </p>
        </div>

        {/* Project rows */}
        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} lang={lang} flip={i % 2 !== 0} />
          ))}
        </div>

        <p className="mt-12 text-[11px] text-[#CCC] font-mono text-right">
          Product screenshots © Kueski · Retool · Factorial · Holded — shown for portfolio reference
        </p>
      </div>
    </section>
  );
}

interface RowProps {
  project: typeof projects[number];
  index: number;
  lang: string;
  flip: boolean;
}

function ProjectRow({ project, index, lang, flip }: RowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-8% 0px' });

  const title    = lang === 'es' ? project.titleEs    : project.titleEn;
  const category = lang === 'es' ? project.categoryEs : project.categoryEn;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative border-t border-[#E3E0D8] py-20 first:border-t-0"
    >
      {/* Huge background index number */}
      <span
        className="absolute select-none pointer-events-none font-black leading-none top-6 text-[160px] sm:text-[220px]"
        style={{
          color: 'rgba(0,0,0,0.03)',
          right: flip ? 'auto' : '0',
          left: flip ? '0' : 'auto',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className={`relative grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start ${flip ? 'lg:[direction:rtl]' : ''}`}>

        {/* ── Content ── */}
        <div className={flip ? '[direction:ltr]' : ''}>

          {/* Company + meta */}
          <div className="flex flex-wrap items-center gap-2.5 mb-5">
            <a
              href={project.companyUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase hover:opacity-60 transition-opacity"
              style={{ color: project.accent }}
            >
              {project.company} <ExternalLink size={10} />
            </a>
            <span className="text-[#DDD]">·</span>
            <span className="text-xs text-[#AAA] font-mono">{category}</span>
            <span className="text-[#DDD]">·</span>
            <span className="text-xs text-[#CCC] font-mono">{project.period}</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-black text-[#111] leading-tight tracking-tight mb-7">
            {title}
          </h3>

          {/* Challenge */}
          <div className="mb-5">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#BBB] mb-2">
              {lang === 'es' ? 'El desafío' : 'The challenge'}
            </p>
            <p className="text-base text-[#555] leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-9">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#BBB] mb-2">
              {lang === 'es' ? 'La solución' : 'The solution'}
            </p>
            <p className="text-base text-[#555] leading-relaxed">{project.solution}</p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 mb-8 p-6 rounded-2xl bg-white border border-[#E3E0D8] shadow-sm">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-3xl sm:text-4xl font-black leading-none mb-1.5" style={{ color: project.accent }}>
                  {m.value}
                </p>
                <p className="text-sm text-[#666] font-medium leading-tight">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-mono text-[#777] border border-[#E3E0D8] bg-white">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Slider ── */}
        <div className={`${flip ? '[direction:ltr]' : ''} h-[340px] sm:h-[460px] lg:h-[520px]`}>
          <ProjectSlider images={project.images} accent={project.accent} />
        </div>
      </div>
    </motion.div>
  );
}
