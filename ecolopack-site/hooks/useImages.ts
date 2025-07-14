'use client';

import { useState, useEffect } from 'react';
import { ImageItem, initializeImages } from '@/lib/defaultImages';

export function useImages(category?: string) {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    const loadImages = () => {
      console.log('[useImages] Loading images from localStorage, category:', category);
      
      // サーバーサイドでは実行しない
      if (typeof window === 'undefined') {
        console.log('[useImages] Server side, skipping');
        return;
      }
      
      try {
        const savedImages = localStorage.getItem('siteImages');
        console.log('[useImages] Raw localStorage data:', savedImages ? `${savedImages.length} characters` : 'null');
        
        if (savedImages && savedImages !== 'undefined') {
          const allImages = JSON.parse(savedImages);
          console.log('[useImages] Parsed images count:', allImages.length);
          console.log('[useImages] First image:', allImages[0]);
          
          if (category) {
            const filtered = allImages.filter((img: ImageItem) => img.category === category);
            console.log('[useImages] Filtered images for category', category, ':', filtered.length);
            setImages(filtered);
          } else {
            setImages(allImages);
          }
        } else {
          console.log('[useImages] No images found in localStorage, initializing...');
          // 初期化が必要な場合
          const defaultImages = initializeImages();
          setImages(category ? defaultImages.filter(img => img.category === category) : defaultImages);
        }
      } catch (error) {
        console.error('[useImages] Error loading images:', error);
        setImages([]);
      }
    };

    // 初回ロード
    loadImages();

    // Listen for storage changes
    const handleStorageChange = (e?: StorageEvent) => {
      console.log('[useImages] Storage change event received:', e?.key);
      if (!e || e.key === 'siteImages') {
        loadImages();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-window updates
    window.addEventListener('imagesUpdated', () => {
      console.log('[useImages] imagesUpdated event received');
      loadImages();
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('imagesUpdated', loadImages);
    };
  }, [category]);

  return images;
}

export function getImageByCategory(category: string): string | null {
  const savedImages = localStorage.getItem('siteImages');
  if (savedImages) {
    const images = JSON.parse(savedImages);
    const categoryImages = images.filter((img: ImageItem) => img.category === category);
    return categoryImages.length > 0 ? categoryImages[0].url : null;
  }
  return null;
}