'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useImages } from '@/hooks/useImages';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const heroImages = useImages('hero');
  const heroImage = heroImages.length > 0 ? heroImages[0].url : 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop';

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80" />
      </div>
      
      {/* 背景のグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      
      {/* アニメーション背景要素 */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-lg animate-float"
          style={{ transform: `translateY(${-scrollY * 0.1}px)`, animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/40 rounded-full blur-lg animate-float"
          style={{ transform: `translateY(${scrollY * 0.15}px)`, animationDelay: '4s' }}
        />
      </div>

      {/* グリッドパターン */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23A2D297' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* 企業理念 */}
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-6 py-2 bg-primary/10 text-primary font-medium text-sm tracking-[0.2em] uppercase" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
              SUSTAINABLE PACKAGING INNOVATION
            </span>
          </div>

          {/* メインタイトル */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 animate-slide-up leading-tight" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700 }}>
            <span className="block">環境と共に歩む</span>
            <span className="block text-primary mt-3" style={{ letterSpacing: '0.02em' }}>未来の梱包ソリューション</span>
          </h1>

          {/* サブタイトル */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s', fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 400, letterSpacing: '0.05em' }}>
            革新的な技術と環境への深い配慮で、
            <br className="hidden md:block" />
            持続可能な社会の実現に貢献します
          </p>

        </div>
      </div>

    </section>
  );
}