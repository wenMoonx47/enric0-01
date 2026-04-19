'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowDown, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/SocialIcons';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  const socials = [
    { icon: <GithubIcon size={18} />, href: 'https://github.com/ethhandy', label: 'GitHub' },
    { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/enrico-perania-3689ba403/', label: 'LinkedIn' },
    { icon: <XIcon size={18} />, href: 'https://twitter.com/ThepaulCreative', label: 'Twitter / X' },
    { icon: <Mail size={18} />, href: 'mailto:enricoperania@gmail.com', label: 'Email' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F7F5F0]"
    >
      {/* Subtle warm blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-amber-100/60 blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sky-100/40 blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-24 pb-16">
        <div className="max-w-4xl">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            {t.hero.available}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[#888] text-xl font-medium mb-3"
          >
            {t.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight text-[#111] leading-[0.95] mb-5"
          >
            Enrico<br />Perania
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mb-8"
          >
            <span className="inline-block text-2xl sm:text-3xl font-bold text-[#444]">
              {t.hero.title}
            </span>
            <span className="mx-3 text-[#CCC]">—</span>
            <span className="text-xl text-[#888] font-medium">Lima, Perú 🇵🇪</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="text-[#555] text-lg sm:text-xl leading-relaxed max-w-2xl mb-12"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-wrap items-center gap-3 mb-12"
          >
            <button
              onClick={() => scrollTo('#contact')}
              className="px-7 py-3.5 rounded-xl bg-[#111] text-white text-base font-semibold hover:bg-[#2a2a2a] transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {t.hero.cta_contact}
            </button>
            <button
              onClick={() => scrollTo('#portfolio')}
              className="px-7 py-3.5 rounded-xl border-2 border-[#D0CEC7] text-[#333] text-base font-semibold hover:border-[#111] hover:text-[#111] transition-all duration-200"
            >
              {t.hero.cta_portfolio}
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex items-center gap-3"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-lg border border-[#DDD] bg-white text-[#666] hover:text-[#111] hover:border-[#999] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                {s.icon}
              </a>
            ))}
            <span className="ml-2 text-sm text-[#AAA] font-mono">@ThepaulCreative</span>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => scrollTo('#about')}
          className="absolute bottom-10 right-12 text-[#AAA] hover:text-[#555] transition-colors flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
