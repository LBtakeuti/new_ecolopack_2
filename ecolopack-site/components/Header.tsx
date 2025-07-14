'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 shadow-sm z-50" style={{ backgroundColor: '#A2D297' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              株式会社エコロパック
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
              ホーム
            </Link>
            <Link href="#products" className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
              製品情報
            </Link>
            <Link href="#company" className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
              会社概要
            </Link>
            <Link href="#contact" className="text-white hover:text-white/80 transition-colors duration-300 font-medium">
              お問い合わせ
            </Link>
          </nav>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: '#A2D297', borderTopColor: 'rgba(255,255,255,0.2)' }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              ホーム
            </Link>
            <Link
              href="#products"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              製品情報
            </Link>
            <Link
              href="#company"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              会社概要
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}