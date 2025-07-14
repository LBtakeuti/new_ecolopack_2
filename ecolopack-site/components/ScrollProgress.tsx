'use client';

import { useEffect, useState, useRef } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDragging) {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
        setIsVisible(window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDragging]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    { id: 'home', label: 'TOP', position: 0 },
    { id: 'products', label: '製品', position: 25 },
    { id: 'company', label: '会社情報', position: 50 },
    { id: 'contact', label: 'お問い合わせ', position: 75 },
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const percentage = (clickY / rect.height) * 100;
    
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = (percentage / 100) * totalHeight;
    
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!progressBarRef.current) return;
      
      const rect = progressBarRef.current.getBoundingClientRect();
      const mouseY = Math.max(0, Math.min(e.clientY - rect.top, rect.height));
      const percentage = (mouseY / rect.height) * 100;
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const targetScroll = (percentage / 100) * totalHeight;
      
      window.scrollTo({ top: targetScroll });
      setScrollProgress(percentage);
    };
    
    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className={`fixed right-8 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative group">
        {/* ツールチップ */}
        <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${isHovering ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex items-center gap-2">
            <span>クリックまたはドラッグでスクロール</span>
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-gray-800"></div>
          </div>
        </div>

        {/* プログレスバー背景 */}
        <div 
          ref={progressBarRef}
          className={`h-48 bg-gray-200 rounded-full relative cursor-pointer transition-all duration-200 ${isHovering || isDragging ? 'w-3' : 'w-1'}`}
          onClick={handleProgressClick}
          onMouseDown={handleMouseDown}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* プログレスバー */}
          <div 
            className="absolute top-0 left-0 w-full bg-primary rounded-full transition-all duration-300 pointer-events-none"
            style={{ height: `${scrollProgress}%` }}
          />
          
          {/* ドラッグハンドル */}
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 bg-primary rounded-full shadow-lg transition-all duration-200 ${isDragging ? 'w-5 h-5 scale-125' : isHovering ? 'w-4 h-4' : 'w-3 h-3'}`}
            style={{ top: `${scrollProgress}%`, marginTop: '-8px' }}
          >
            {/* ハンドル内のドット */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`bg-white rounded-full transition-all duration-200 ${isDragging || isHovering ? 'w-1.5 h-1.5' : 'w-0 h-0'}`}></div>
            </div>
          </div>
          
          {/* セクションドット */}
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={(e) => {
                e.stopPropagation();
                scrollToSection(section.id);
              }}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              className="absolute left-1/2 transform -translate-x-1/2 bg-white border-2 border-gray-300 rounded-full hover:border-primary hover:scale-150 transition-all duration-200 cursor-pointer z-10"
              style={{ 
                top: `${section.position}%`,
                width: hoveredSection === section.id ? '14px' : '10px',
                height: hoveredSection === section.id ? '14px' : '10px',
              }}
            >
              {/* セクションラベル */}
              <span className={`absolute right-full mr-3 whitespace-nowrap text-xs font-medium transition-all duration-200 ${hoveredSection === section.id ? 'text-primary opacity-100' : 'text-gray-600 opacity-0'}`} style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                {section.label}
              </span>
            </button>
          ))}
        </div>

        {/* トップへ戻るボタン */}
        <button
          onClick={scrollToTop}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 group"
          title="トップへ戻る"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-all duration-200 hover:scale-110 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </div>
            <span className="absolute top-1/2 right-full mr-3 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              トップへ戻る
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}