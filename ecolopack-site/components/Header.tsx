'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: '会社情報', href: '/company' },
    { name: '製品情報', href: '/products' },
    { name: 'お問い合わせ', href: '/contact' },
  ];

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
            </Link>
          </div>
          
          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:0729400323"
              className="ml-4 bg-white text-primary px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-300 flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              072-940-0323
            </a>
          </nav>
          
          {/* モバイルメニューボタン */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/20"
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
      
      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-dark border-t border-white/20 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/20'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:0729400323"
              className="block px-3 py-2 rounded-md text-base font-medium bg-white text-primary hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                072-940-0323
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}