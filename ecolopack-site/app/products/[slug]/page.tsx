'use client';

import { useState, use, useEffect } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import { useImages } from '@/hooks/useImages';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  imageId: string;
  images: string[];
  detailedDescription: string;
  features: string[];
  specifications: Record<string, string>;
  applications: string[];
}

const products: Record<string, Product> = {
  'blan-form-top': {
    id: 1,
    name: 'ブランフォームトップ',
    description: '最高級の緩衝性能を誇る、当社の主力製品です。優れた衝撃吸収性と環境への配慮を両立しました。',
    image: '/images/ブランフォームトップ.jpg',
    imageId: 'product-1',
    images: [
      '/images/bfTOP1.png',
      '/images/bfTOP2.png',
      '/images/bfTOP3.png'
    ],
    detailedDescription: 'ブランフォームトップは、最新の技術を駆使して開発された当社最高級の緩衝材です。独自の発泡技術により、従来品と比較して約30%向上した衝撃吸収性を実現しています。',
    features: [
      '優れた衝撃吸収性（従来品比30%向上）',
      '環境配慮型素材使用',
      '軽量設計で運搬コスト削減',
      '優れた復元力',
      '防湿性に優れた構造'
    ],
    specifications: {
      '密度': '30kg/m³',
      '圧縮強度': '0.15MPa',
      '使用温度範囲': '-20℃～+80℃',
      'サイズ': '300×300×50mm（標準）',
      '材質': '発泡ポリエチレン'
    },
    applications: [
      '精密機器の輸送梱包',
      '医療機器の保護材',
      '家電製品の緩衝材',
      '工業部品の梱包材'
    ]
  },
  'blan-form': {
    id: 2,
    name: 'ブランフォーム',
    description: 'スタンダードモデルの緩衝材。コストパフォーマンスに優れ、幅広い用途でご使用いただけます。',
    image: '/images/ブランフォーム.jpg',
    imageId: 'product-2',
    images: [
      '/images/bf1.png',
      '/images/bf2.png',
      '/images/bf3.png'
    ],
    detailedDescription: 'ブランフォームは、コストパフォーマンスを重視したスタンダードモデルです。幅広い用途に対応できる汎用性の高い緩衝材として多くのお客様にご愛用いただいています。',
    features: [
      '優れたコストパフォーマンス',
      '幅広い用途に対応',
      '安定した品質',
      '豊富なサイズバリエーション',
      '環境に優しい素材'
    ],
    specifications: {
      '密度': '25kg/m³',
      '圧縮強度': '0.12MPa',
      '使用温度範囲': '-10℃～+70℃',
      'サイズ': '200×200×30mm（標準）',
      '材質': '発泡ポリエチレン'
    },
    applications: [
      '一般商品の梱包',
      '食品容器の緩衝材',
      '日用品の保護材',
      '書籍・雑誌の梱包材'
    ]
  },
  'blan-form-big': {
    id: 3,
    name: 'ブランフォームBIG',
    description: '大型製品向けの緩衝材。大きな衝撃からも確実に製品を守ります。',
    image: '/images/ブランフォームBIG.jpg',
    imageId: 'product-3',
    images: [
      '/images/bfBIG1.png',
      '/images/bfBIG2.png',
      '/images/bfBIG3.png',
      '/images/bfBIG4.png'
    ],
    detailedDescription: 'ブランフォームBIGは、大型製品の輸送に特化した大判サイズの緩衝材です。大きな衝撃からも確実に製品を保護し、重量物の梱包にも対応できる強度を備えています。',
    features: [
      '大型製品に最適な大判サイズ',
      '高い衝撃吸収性',
      '重量物にも対応',
      '優れた耐久性',
      'カット加工対応'
    ],
    specifications: {
      '密度': '35kg/m³',
      '圧縮強度': '0.18MPa',
      '使用温度範囲': '-20℃～+80℃',
      'サイズ': '600×600×100mm（標準）',
      '材質': '発泡ポリエチレン'
    },
    applications: [
      '大型家電の梱包',
      '機械部品の輸送保護',
      '家具の梱包材',
      '建材の保護材'
    ]
  },
  'ecolopat': {
    id: 4,
    name: 'エコロパット',
    description: 'パット型の緩衝材。取り扱いやすく、様々な梱包シーンで活躍します。',
    image: '/images/エコロパット.jpg',
    imageId: 'product-4',
    images: [
      '/images/ecolopat1.png',
      '/images/eclpat2.png'
    ],
    detailedDescription: 'エコロパットは、パット型の緩衝材として設計された使いやすい製品です。様々な形状の製品に対応でき、梱包作業の効率化に貢献します。',
    features: [
      'パット型で取り扱いやすい',
      '様々な形状に対応',
      '作業効率の向上',
      '軽量で扱いやすい',
      '環境配慮型素材'
    ],
    specifications: {
      '密度': '20kg/m³',
      '圧縮強度': '0.10MPa',
      '使用温度範囲': '-10℃～+60℃',
      'サイズ': '150×150×20mm（標準）',
      '材質': '発泡ポリエチレン'
    },
    applications: [
      '小物商品の梱包',
      'ギフト用品の保護',
      '化粧品の緩衝材',
      '雑貨の梱包材'
    ]
  },
  'blan-form-green': {
    id: 5,
    name: 'ブランフォームグリーン',
    description: '環境に特化したエコモデル。リサイクル素材を使用し、さらなる環境負荷低減を実現しました。',
    image: '/images/ブランフォームグリーン.jpg',
    imageId: 'product-5',
    images: [
      '/images/bfg1.png',
      '/images/bfg2.png'
    ],
    detailedDescription: 'ブランフォームグリーンは、環境への配慮を最優先に開発されたエコモデルです。リサイクル素材を70%以上使用し、製品ライフサイクル全体でのCO2削減を実現しています。',
    features: [
      'リサイクル素材70%以上使用',
      'CO2削減効果',
      '生分解性素材採用',
      '従来品同等の性能',
      'グリーン購入法適合'
    ],
    specifications: {
      '密度': '28kg/m³',
      '圧縮強度': '0.14MPa',
      '使用温度範囲': '-15℃～+75℃',
      'サイズ': '250×250×40mm（標準）',
      '材質': 'リサイクル発泡ポリエチレン'
    },
    applications: [
      '環境配慮が必要な製品の梱包',
      'エコ認証商品の保護材',
      '官公庁向け梱包材',
      'CSR活動対応製品の緩衝材'
    ]
  }
};

export default function ProductDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const [selectedImage, setSelectedImage] = useState(0);
  const productImages = useImages('products');
  
  const product = products[resolvedParams.slug as keyof typeof products];

  if (!product) {
    notFound();
  }
  
  // 管理画面で更新された画像を使用
  const getProductImages = () => {
    // sectionマッピング
    const sectionMap: { [key: number]: string } = {
      1: '製品 - ブランフォームトップ',
      2: '製品 - ブランフォーム',
      3: '製品 - ブランフォームBIG',
      4: '製品 - エコロパット',
      5: '製品 - ブランフォームグリーン'
    };
    
    const section = sectionMap[product.id];
    
    // sectionが一致する画像を探す
    const updatedImages = productImages.filter(img => 
      img.section === section || 
      img.id === product.imageId ||
      img.id.startsWith(`product-${product.id}-`)
    );
    
    if (updatedImages.length > 0) {
      return updatedImages.map(img => img.url);
    }
    return product.images;
  };
  
  const displayImages = getProductImages();
  
  // 画像が更新されたときに選択インデックスをリセット
  useEffect(() => {
    if (selectedImage >= displayImages.length) {
      setSelectedImage(0);
    }
  }, [displayImages, selectedImage]);

  return (
    <>
      <Header />
      <ScrollProgress />
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* パンくずリスト */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-dark">ホーム</Link>
              <span>/</span>
              <Link href="/#products" className="hover:text-primary-dark">製品情報</Link>
              <span>/</span>
              <span className="text-gray-900">{product.name}</span>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* 製品画像ギャラリー */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                <div className="relative h-[500px]">
                  <Image
                    src={displayImages[selectedImage]}
                    alt={`${product.name} - 画像${selectedImage + 1}`}
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized={displayImages[selectedImage].startsWith('data:')}
                  />
                </div>
              </div>
              
              {/* サムネイル画像 */}
              <div className="grid grid-cols-4 gap-2">
                {displayImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 bg-gray-100 rounded-md overflow-hidden border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-primary shadow-md' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - サムネイル${index + 1}`}
                      fill
                      className="object-contain p-1"
                      quality={90}
                      sizes="80px"
                      unoptimized={image.startsWith('data:')}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* 製品情報 */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-8">{product.detailedDescription}</p>
              
              {/* 特徴 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">特徴</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* お問い合わせボタン */}
              <div className="mb-8">
                <a
                  href="tel:0729400323"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  お見積り・お問い合わせ
                </a>
              </div>
            </div>
          </div>

          {/* 仕様表 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">製品仕様</h2>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <tr key={index} className="border-b border-gray-200 last:border-0">
                        <th className="text-left px-6 py-4 bg-primary-light text-gray-900 font-medium w-1/3">
                          {key}
                        </th>
                        <td className="px-6 py-4 text-gray-600">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">主な用途</h2>
              <div className="space-y-3">
                {product.applications.map((application, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 戻るリンク */}
          <div className="text-center">
            <Link
              href="/#products"
              className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              製品一覧に戻る
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}