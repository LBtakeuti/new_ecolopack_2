export interface ImageItem {
  id: string;
  url: string;
  name: string;
  category: string;
  section?: string;
  uploadDate: string;
  isDefault?: boolean;
}

export const imageCategories = [
  { value: 'all', label: 'すべて' },
  { value: 'hero', label: 'ヒーロー画像' },
  { value: 'products', label: '製品画像' },
  { value: 'company', label: '会社画像' },
  { value: 'other', label: 'その他' }
];

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
  // Product images
  {
    id: 'product-1',
    url: '/images/ブランフォームトップ.jpg',
    name: 'ブランフォームトップ',
    category: 'products',
    section: '製品一覧 - ブランフォームトップ',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-2',
    url: '/images/ブランフォーム.jpg',
    name: 'ブランフォーム',
    category: 'products',
    section: '製品一覧 - ブランフォーム',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-3',
    url: '/images/ブランフォームBIG.jpg',
    name: 'ブランフォームBIG',
    category: 'products',
    section: '製品一覧 - ブランフォームBIG',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-4',
    url: '/images/エコロパット.jpg',
    name: 'エコロパット',
    category: 'products',
    section: '製品一覧 - エコロパット',
    uploadDate: new Date().toISOString(),
    isDefault: true
  },
  {
    id: 'product-5',
    url: '/images/ブランフォームグリーン.jpg',
    name: 'ブランフォームグリーン',
    category: 'products',
    section: '製品一覧 - ブランフォームグリーン',
    uploadDate: new Date().toISOString(),
    isDefault: true
  }
];