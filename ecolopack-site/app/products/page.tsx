import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import Products from '@/components/Products';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <div className="min-h-screen bg-white">
        {/* ページヘッダー */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                製品情報
              </h1>
              <nav className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-8">
                <Link href="/" className="hover:text-primary">ホーム</Link>
                <span>/</span>
                <span className="text-gray-900">製品情報</span>
              </nav>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                お客様のニーズに合わせた、環境に優しく高性能な緩衝材をご提供します
              </p>
            </div>
          </div>
        </section>

        {/* 製品の特長 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              エコロパック製品の特長
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">環境配慮設計</h3>
                <p className="text-gray-600">
                  リサイクル可能な素材を使用し、製造から廃棄まで環境負荷を最小限に抑えています
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">優れた保護性能</h3>
                <p className="text-gray-600">
                  独自の技術により、軽量でありながら高い衝撃吸収性を実現しています
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">コスト効率</h3>
                <p className="text-gray-600">
                  軽量化による輸送コスト削減と、長期使用可能な耐久性で経済的です
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 製品一覧 */}
        <Products />

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              最適な緩衝材をご提案します
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              お客様の製品や用途に合わせて、最適な緩衝材をご提案いたします。
              サンプルのご請求や詳細な仕様についてはお気軽にお問い合わせください。
            </p>
            <a
              href="tel:0729400323"
              className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              072-940-0323
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}