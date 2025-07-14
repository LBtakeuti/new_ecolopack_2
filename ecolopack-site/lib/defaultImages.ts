export interface ImageItem {
  id: string;
  url: string;
  name: string;
  category: string;
  section?: string; // Which section of the site uses this image
  uploadDate: string;
  isDefault?: boolean; // Flag for original images
}

export const defaultImages: ImageItem[] = [
  // Hero section
  {
    id: 'hero-1',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop',
    name: '森林背景',
    category: 'hero',
    section: 'ヒーローセクション',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  // Product images - ブランフォームトップ
  {
    id: 'product-1',
    url: '/images/ブランフォームトップ.jpg',
    name: 'ブランフォームトップ - メイン',
    category: 'products',
    section: '製品 - ブランフォームトップ',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-1-1',
    url: '/images/bfTOP1.png',
    name: 'ブランフォームトップ - 画像1',
    category: 'products',
    section: '製品 - ブランフォームトップ',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-1-2',
    url: '/images/bfTOP2.png',
    name: 'ブランフォームトップ - 画像2',
    category: 'products',
    section: '製品 - ブランフォームトップ',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-1-3',
    url: '/images/bfTOP3.png',
    name: 'ブランフォームトップ - 画像3',
    category: 'products',
    section: '製品 - ブランフォームトップ',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  // Product images - ブランフォーム
  {
    id: 'product-2',
    url: '/images/ブランフォーム.jpg',
    name: 'ブランフォーム - メイン',
    category: 'products',
    section: '製品 - ブランフォーム',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-2-1',
    url: '/images/bf1.png',
    name: 'ブランフォーム - 画像1',
    category: 'products',
    section: '製品 - ブランフォーム',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-2-2',
    url: '/images/bf2.png',
    name: 'ブランフォーム - 画像2',
    category: 'products',
    section: '製品 - ブランフォーム',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-2-3',
    url: '/images/bf3.png',
    name: 'ブランフォーム - 画像3',
    category: 'products',
    section: '製品 - ブランフォーム',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  // Product images - ブランフォームBIG
  {
    id: 'product-3',
    url: '/images/ブランフォームBIG.jpg',
    name: 'ブランフォームBIG - メイン',
    category: 'products',
    section: '製品 - ブランフォームBIG',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-3-1',
    url: '/images/bfBIG1.png',
    name: 'ブランフォームBIG - 画像1',
    category: 'products',
    section: '製品 - ブランフォームBIG',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-3-2',
    url: '/images/bfBIG2.png',
    name: 'ブランフォームBIG - 画像2',
    category: 'products',
    section: '製品 - ブランフォームBIG',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-3-3',
    url: '/images/bfBIG3.png',
    name: 'ブランフォームBIG - 画像3',
    category: 'products',
    section: '製品 - ブランフォームBIG',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-3-4',
    url: '/images/bfBIG4.png',
    name: 'ブランフォームBIG - 画像4',
    category: 'products',
    section: '製品 - ブランフォームBIG',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  // Product images - エコロパット
  {
    id: 'product-4',
    url: '/images/エコロパット.jpg',
    name: 'エコロパット - メイン',
    category: 'products',
    section: '製品 - エコロパット',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-4-1',
    url: '/images/ecolopat1.png',
    name: 'エコロパット - 画像1',
    category: 'products',
    section: '製品 - エコロパット',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-4-2',
    url: '/images/eclpat2.png',
    name: 'エコロパット - 画像2',
    category: 'products',
    section: '製品 - エコロパット',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  // Product images - ブランフォームグリーン
  {
    id: 'product-5',
    url: '/images/ブランフォームグリーン.jpg',
    name: 'ブランフォームグリーン - メイン',
    category: 'products',
    section: '製品 - ブランフォームグリーン',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-5-1',
    url: '/images/bfg1.png',
    name: 'ブランフォームグリーン - 画像1',
    category: 'products',
    section: '製品 - ブランフォームグリーン',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-5-2',
    url: '/images/bfg2.png',
    name: 'ブランフォームグリーン - 画像2',
    category: 'products',
    section: '製品 - ブランフォームグリーン',
    uploadDate: new Date().toISOString(),
    isDefault: true
  }
];

export function initializeImages(): ImageItem[] {
  // Check if we're on the client side
  if (typeof window === 'undefined') {
    console.log('[initializeImages] Server side, returning default images');
    return defaultImages;
  }
  
  try {
    console.log('[initializeImages] Client side, checking localStorage');
    const savedImages = localStorage.getItem('siteImages');
    console.log('[initializeImages] Raw localStorage data exists:', !!savedImages);
    
    if (!savedImages || savedImages === 'undefined') {
      console.log('[initializeImages] No saved images, initializing with defaults');
      localStorage.setItem('siteImages', JSON.stringify(defaultImages));
      return defaultImages;
    }
    
    // Parse saved images
    const saved = JSON.parse(savedImages);
    console.log('[initializeImages] Parsed saved images count:', saved.length);
    
    // If saved images exist, merge with defaults to ensure all default images are present
    if (Array.isArray(saved) && saved.length > 0) {
      console.log('[initializeImages] Merging saved images with defaults');
      
      // Create a map of saved images by ID for quick lookup
      const savedMap = new Map(saved.map(img => [img.id, img]));
      
      // Start with all default images
      const mergedImages = defaultImages.map(defaultImg => {
        // If a saved version exists, use it (preserving any custom edits)
        const savedVersion = savedMap.get(defaultImg.id);
        if (savedVersion && savedVersion.isDefault) {
          // For default images, always use the latest URL from defaultImages
          return { ...savedVersion, url: defaultImg.url };
        }
        return defaultImg;
      });
      
      // Add any custom (non-default) images from saved
      const customImages = saved.filter(img => !img.isDefault && !defaultImages.find(d => d.id === img.id));
      const finalImages = [...mergedImages, ...customImages];
      
      console.log('[initializeImages] Final merged images count:', finalImages.length);
      localStorage.setItem('siteImages', JSON.stringify(finalImages));
      return finalImages;
    } else {
      console.log('[initializeImages] Saved images empty, using defaults');
      localStorage.setItem('siteImages', JSON.stringify(defaultImages));
      return defaultImages;
    }
  } catch (error) {
    console.error('[initializeImages] Error initializing images:', error);
    console.log('[initializeImages] Falling back to defaults');
    localStorage.setItem('siteImages', JSON.stringify(defaultImages));
    return defaultImages;
  }
}