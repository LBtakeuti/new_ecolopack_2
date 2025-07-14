'use client';

import { useState, useEffect } from 'react';
import { ImageItem } from '@/lib/defaultImages';

export function useImages(category?: string) {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    const loadImages = () => {
      console.log('[useImages] Loading images from localStorage, category:', category);
      const savedImages = localStorage.getItem('siteImages');
      console.log('[useImages] Raw localStorage data:', savedImages);
      if (savedImages) {
        const allImages = JSON.parse(savedImages);
        console.log('[useImages] Parsed images:', allImages);
        if (category) {
          const filtered = allImages.filter((img: ImageItem) => img.category === category);
          console.log('[useImages] Filtered images for category', category, ':', filtered);
          setImages(filtered);
        } else {
          setImages(allImages);
        }
      } else {
        console.log('[useImages] No images found in localStorage');
      }
    };

    loadImages();

    // Listen for storage changes
    const handleStorageChange = () => {
      console.log('[useImages] Storage change event received');
      loadImages();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for same-window updates
    window.addEventListener('imagesUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('imagesUpdated', handleStorageChange);
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