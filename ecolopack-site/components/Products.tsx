'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useImages } from '@/hooks/useImages';

const products = [
  {
    id: 1,
    name: 'ブランフォームトップ',
    description: '最高級の緩衝性能を誇る、当社の主力製品です。優れた衝撃吸収性と環境への配慮を両立しました。',
    imageId: 'product-1',
    defaultImage: '/images/ブランフォームトップ.jpg',
    slug: 'blan-form-top'
  },
  {
    id: 2,
    name: 'ブランフォーム',
    description: 'スタンダードモデルの緩衝材。コストパフォーマンスに優れ、幅広い用途でご使用いただけます。',
    imageId: 'product-2',
    defaultImage: '/images/ブランフォーム.jpg',
    slug: 'blan-form'
  },
  {
    id: 3,
    name: 'ブランフォームBIG',
    description: '大型製品向けの緩衝材。大きな衝撃からも確実に製品を守ります。',
    imageId: 'product-3',
    defaultImage: '/images/ブランフォームBIG.jpg',
    slug: 'blan-form-big'
  },
  {
    id: 4,
    name: 'エコロパット',
    description: 'パット型の緩衝材。取り扱いやすく、様々な梱包シーンで活躍します。',
    imageId: 'product-4',
    defaultImage: '/images/エコロパット.jpg',
    slug: 'ecolopat'
  },
  {
    id: 5,
    name: 'ブランフォームグリーン',
    description: '環境に特化したエコモデル。リサイクル素材を使用し、さらなる環境負荷低減を実現しました。',
    imageId: 'product-5',
    defaultImage: '/images/ブランフォームグリーン.jpg',
    slug: 'blan-form-green'
  },
];

export default function Products() {
  console.log('[Products] Component rendering');
  const productImages = useImages('products');
  console.log('[Products] Product images from useImages:', productImages);

  const getProductImage = (productName: string, defaultImage: string) => {
    // sectionフィールドで製品画像を検索
    const sectionMap: { [key: string]: string } = {
      'ブランフォームトップ': '製品 - ブランフォームトップ',
      'ブランフォーム': '製品 - ブランフォーム',
      'ブランフォームBIG': '製品 - ブランフォームBIG',
      'エコロパット': '製品 - エコロパット',
      'ブランフォームグリーン': '製品 - ブランフォームグリーン'
    };
    
    const section = sectionMap[productName];
    const product = products.find(p => p.name === productName);
    const productId = product?.imageId;
    
    console.log(`[Products] Looking for image for product: ${productName}, section: ${section}, productId: ${productId}`);
    
    // カスタムIDも含めて画像を探す
    const customIdMap: { [key: string]: string } = {
      'ブランフォームトップ': 'product-1-custom',
      'ブランフォーム': 'product-2-custom',
      'ブランフォームBIG': 'product-3-custom',
      'エコロパット': 'product-4-custom',
      'ブランフォームグリーン': 'product-5-custom'
    };
    const customId = customIdMap[productName];
    
    // sectionが一致する画像、またはIDが一致する画像を探す
    const image = productImages.find(img => {
      const matchesSection = img.section === section;
      const matchesDefaultId = img.id === productId;
      const matchesCustomId = img.id === customId;
      
      console.log(`[Products] Checking image:`, img);
      console.log(`  - Matches section: ${matchesSection}`);
      console.log(`  - Matches default ID: ${matchesDefaultId}`);
      console.log(`  - Matches custom ID: ${matchesCustomId}`);
      
      return matchesSection || matchesDefaultId || matchesCustomId;
    });
    
    if (image) {
      console.log(`[Products] Found custom image for ${productName}:`, image);
    } else {
      console.log(`[Products] No custom image found for ${productName}, using default: ${defaultImage}`);
    }
    
    return image ? image.url : defaultImage;
  };

  return (
    <section id="products" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            製品情報
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            環境に優しく、高性能な緩衝材をご提供します
          </p>
          {/* デバッグ用 */}
          <button
            onClick={() => {
              console.log('[Products] Debug - localStorage:', localStorage.getItem('siteImages'));
              console.log('[Products] Debug - productImages:', productImages);
            }}
            className="mt-4 bg-gray-600 text-white px-4 py-2 rounded-md text-sm"
          >
            画像データ確認
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 bg-gray-200 relative">
                <Image
                  src={getProductImage(product.name, product.defaultImage)}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-primary hover:text-primary-dark font-medium inline-flex items-center transition-colors duration-300"
                >
                  詳細を見る
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}