'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  images: { src: string; alt: string }[];
  accent: string;
}

export default function ProjectSlider({ images, accent }: Props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    const n = (next + images.length) % images.length;
    setDirection(next > index || (next === 0 && index === images.length - 1) ? 1 : -1);
    setIndex(n);
  }, [index, images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => go(index + 1), 4500);
    return () => clearInterval(id);
  }, [index, go, images.length]);

  const variants = {
    enter:  (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (d: number) => ({ x: d > 0 ? '-60%' : '60%', opacity: 0, scale: 0.97 }),
  };

  return (
    <div className="relative w-full h-full group select-none">
      {/* Frame */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#F2EFE8] border border-[#E3E0D8] shadow-lg">
        <AnimatePresence custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={index === 0}
            />
            {/* Subtle bottom scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => go(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 border border-[#E3E0D8] text-[#333] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow-sm backdrop-blur-sm"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => go(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/80 border border-[#E3E0D8] text-[#333] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white shadow-sm backdrop-blur-sm"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm border border-white/60">
          {images.map((_, i) => (
            <button key={i} onClick={() => go(i)}>
              <span
                className="block rounded-full transition-all duration-300"
                style={{
                  width:      i === index ? 18 : 6,
                  height:     6,
                  background: i === index ? accent : '#D0CEC7',
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
