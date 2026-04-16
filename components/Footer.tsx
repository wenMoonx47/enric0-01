'use client';

import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F5F0] border-t border-[#E3E0D8] py-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-lg font-black tracking-tight text-[#111]">EP.</span>
        <p className="text-[#AAA] text-sm flex items-center gap-1.5">
          {t.footer.made_with}
          <Heart size={12} className="text-rose-400 fill-rose-400" />
          by Enrico Perania — {year}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-5 text-[#AAA] text-sm">
          <a href="https://www.linkedin.com/in/enrico-perania-3689ba403/" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition-colors font-medium">LinkedIn</a>
          <a href="https://twitter.com/ThepaulCreative" target="_blank" rel="noopener noreferrer" className="hover:text-[#111] transition-colors font-medium">X / Twitter</a>
          <a href="mailto:enricoperania@gmail.com" className="hover:text-[#111] transition-colors font-medium">Email</a>
        </div>
      </div>
    </footer>
  );
}
