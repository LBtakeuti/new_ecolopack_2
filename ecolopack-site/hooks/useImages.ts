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
        // まず初期化を実行して最新のデフォルト画像を確保
        const allImages = initializeImages();
        console.log('[useImages] Loaded images count:', allImages.length);
        console.log('[useImages] Sample images:', allImages.slice(0, 3).map(img => ({ id: img.id, name: img.name, isDefault: img.isDefault })));
        
        if (category) {
          const filtered = allImages.filter((img: ImageItem) => img.category === category);
          console.log('[useImages] Filtered images for category', category, ':', filtered.length);
          console.log('[useImages] Filtered image details:', filtered.map(img => ({ 
            id: img.id, 
            name: img.name, 
            section: img.section, 
            isDefault: img.isDefault 
          })));
          setImages(filtered);
        } else {
          setImages(allImages);
        }
      } catch (error) {
        console.error('[useImages] Error loading images:', error);
        setImages([]);
      }
    };

    // 初回ロード（少し遅延させてDOM準備完了後に実行）
    const timer = setTimeout(loadImages, 100);

    // Listen for storage changes
    const handleStorageChange = (e?: StorageEvent) => {
      console.log('[useImages] Storage change event received:', e?.key);
      if (!e || e.key === 'siteImages') {
        setTimeout(loadImages, 100); // 遅延を少し増やす
      }
    };

    const handleImagesUpdated = () => {
      console.log('[useImages] imagesUpdated event received, reloading...');
      setTimeout(loadImages, 100); // 遅延を少し増やす
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('imagesUpdated', handleImagesUpdated);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('imagesUpdated', handleImagesUpdated);
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