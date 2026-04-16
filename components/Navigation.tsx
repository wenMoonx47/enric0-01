'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navigation() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#skills', label: t.nav.skills },
    { href: '#experience', label: t.nav.experience },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#contact', label: t.nav.contact },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5F0]/90 backdrop-blur-md border-b border-[#E3E0D8] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="text-lg font-black tracking-tight text-[#111] hover:opacity-60 transition-opacity"
          >
            EP.
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-[#777] hover:text-[#111] transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: lang + mobile */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-[#ECEAE4] rounded-full p-0.5 border border-[#E3E0D8]">
              <button
                onClick={() => setLang('es')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  lang === 'es' ? 'bg-[#111] text-white shadow-sm' : 'text-[#777] hover:text-[#111]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  lang === 'en' ? 'bg-[#111] text-white shadow-sm' : 'text-[#777] hover:text-[#111]'
                }`}
              >
                EN
              </button>
            </div>
            <button
              className="md:hidden text-[#555] hover:text-[#111]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#E3E0D8]"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[#333] hover:text-[#111] py-2.5 text-base font-medium transition-colors border-b border-[#E3E0D8] last:border-0"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
