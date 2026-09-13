'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface HeroBannerProps {
  onCtaClick?: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ onCtaClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'WELCOME TO ZERO STORE',
      subtitle: 'Marketplace Akun Free Fire Premium',
      highlight: 'AMAN • CEPAT • TERPERCAYA',
      cta: 'LIHAT KATALOG',
      bgGradient: 'from-accent/20 to-accent2/10',
    },
    {
      id: 2,
      title: 'AKUN FREE FIRE RARE',
      subtitle: 'Temukan akun dengan bundle dan item langka',
      highlight: 'EKSKLUSIF & TERBATAS',
      cta: 'BELANJA SEKARANG',
      bgGradient: 'from-blue-500/10 to-purple-500/10',
    },
    {
      id: 3,
      title: 'PROMO AKUN PILIHAN',
      subtitle: 'Harga terbaik untuk akun-akun pilihan',
      highlight: 'DISKON HINGGA 20%',
      cta: 'LIHAT PROMO',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="relative overflow-hidden rounded-2xl mx-4 mt-3 mb-4">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm`} />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative px-6 py-8 min-h-[240px] flex flex-col justify-center">
        <div className="mb-2">
          <h1 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
            {slide.title}
          </h1>
          <p className="text-sm text-gray-300 mb-3">{slide.subtitle}</p>
          <div className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/50 mb-4">
            <p className="text-xs font-bold text-accent">{slide.highlight}</p>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="self-start px-6 py-2 rounded-lg bg-gradient-to-r from-accent to-accent2 text-black font-bold text-sm hover:shadow-glow transition-all active:scale-95"
        >
          {slide.cta}
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSlide
                ? 'bg-accent w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
