import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        
        {/* 企業メッセージ */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                地球にやさしい緩衝材で<br />
                持続可能な未来を創造します
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                エコロパックは1985年の創業以来、環境に配慮した緩衝材の開発・製造を通じて、
                お客様の大切な製品を守るとともに、地球環境の保護に貢献してきました。
              </p>
            </div>
          </div>
        </section>

        {/* 特徴 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              エコロパックの強み
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">環境配慮設計</h3>
                <p className="text-gray-600">
                  リサイクル可能な素材を使用し、カーボンニュートラルを目指した製品開発を行っています。
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">高い保護性能</h3>
                <p className="text-gray-600">
                  独自の発泡技術により、軽量でありながら優れた衝撃吸収性を実現。大切な製品を確実に保護します。
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">充実したサポート</h3>
                <p className="text-gray-600">
                  経験豊富なスタッフが、お客様のニーズに合わせた最適な緩衝材をご提案します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 製品紹介 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                主要製品
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                用途に応じた様々なタイプの緩衝材をご用意しています
              </p>
              <Link 
                href="/products" 
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
              >
                全ての製品を見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/images/ブランフォームトップ.jpg"
                    alt="ブランフォームトップ"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">ブランフォームトップ</h3>
                  <p className="text-gray-600 mb-4">
                    最高級の緩衝性能を誇る主力製品
                  </p>
                  <Link 
                    href="/products/blan-form-top" 
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/images/ブランフォーム.jpg"
                    alt="ブランフォーム"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">ブランフォーム</h3>
                  <p className="text-gray-600 mb-4">
                    コストパフォーマンスに優れたスタンダードモデル
                  </p>
                  <Link 
                    href="/products/blan-form" 
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/images/ブランフォームグリーン.jpg"
                    alt="ブランフォームグリーン"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">ブランフォームグリーン</h3>
                  <p className="text-gray-600 mb-4">
                    環境に特化したエコモデル
                  </p>
                  <Link 
                    href="/products/blan-form-green" 
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    詳細を見る →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 環境への取り組み */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                環境への取り組み
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
                エコロパックは、製品開発から製造、廃棄まで全てのプロセスにおいて
                環境負荷の低減に取り組んでいます。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">70%</div>
                  <div className="text-white/80">リサイクル素材使用率</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">50%</div>
                  <div className="text-white/80">CO₂削減達成</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-white/80">有害物質不使用</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">40年</div>
                  <div className="text-white/80">環境保護の実績</div>
                </div>
              </div>
              <Link 
                href="/company" 
                className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 mt-12"
              >
                経営指針を見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              お気軽にお問い合わせください
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              製品に関するご質問、お見積りのご依頼など、お気軽にお問い合わせください。<br />
              専門スタッフが丁寧にご対応いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0729400323"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                072-940-0323
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              >
                お問い合わせフォーム
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}