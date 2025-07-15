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
        {/* メインビジュアル */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2671&auto=format&fit=crop"
            alt="緑豊かな森林"
            fill
            className="object-cover"
            priority
          />
          <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              地球にやさしい緩衝材で<br />
              未来を守る
            </h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
              エコロパックは環境に配慮した梱包材のパイオニアとして<br />
              持続可能な社会の実現に貢献します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                製品を見る
              </Link>
              <Link
                href="/company"
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 shadow-lg"
              >
                会社案内
              </Link>
            </div>
          </div>
        </section>

        {/* ニュース・お知らせ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">ニュース・お知らせ</h2>
              <Link href="#" className="text-primary hover:text-primary-dark font-medium">
                すべて見る →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="divide-y divide-gray-200">
                <article className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <time className="text-gray-500 text-sm min-w-[100px]">2025.01.15</time>
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded mx-4">お知らせ</span>
                    <h3 className="flex-1">
                      <Link href="#" className="text-gray-900 hover:text-primary">
                        新製品「ブランフォームエアー」の販売を開始しました
                      </Link>
                    </h3>
                  </div>
                </article>
                <article className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <time className="text-gray-500 text-sm min-w-[100px]">2024.12.20</time>
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mx-4">プレス</span>
                    <h3 className="flex-1">
                      <Link href="#" className="text-gray-900 hover:text-primary">
                        環境省より「エコ・ファースト企業」に認定されました
                      </Link>
                    </h3>
                  </div>
                </article>
                <article className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start">
                    <time className="text-gray-500 text-sm min-w-[100px]">2024.11.15</time>
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded mx-4">お知らせ</span>
                    <h3 className="flex-1">
                      <Link href="#" className="text-gray-900 hover:text-primary">
                        年末年始の営業日についてのご案内
                      </Link>
                    </h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* 事業内容 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                事業内容
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                エコロパックは環境に配慮した緩衝材の開発・製造・販売を通じて、
                お客様の大切な製品を守るとともに、地球環境の保護に貢献しています。
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">緩衝材の開発・製造</h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  独自の発泡技術により、軽量で高い衝撃吸収性を持つ緩衝材を開発。
                  環境に配慮した素材を使用し、持続可能な製品づくりを行っています。
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">カスタマイズ対応</h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  お客様の製品や用途に合わせた最適な緩衝材をご提案。
                  形状や素材のカスタマイズにも柔軟に対応いたします。
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-light rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">リサイクルサービス</h3>
                <p className="text-gray-600 max-w-sm mx-auto">
                  使用済み緩衝材の回収・リサイクルサービスを提供。
                  資源の有効活用と廃棄物削減に取り組んでいます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 数字で見るエコロパック */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              数字で見るエコロパック
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">40年</div>
                <div className="text-white/80">創業からの歴史</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">5,000社</div>
                <div className="text-white/80">以上の取引実績</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">99.8%</div>
                <div className="text-white/80">顧客満足度</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">ISO14001</div>
                <div className="text-white/80">環境認証取得</div>
              </div>
            </div>
          </div>
        </section>

        {/* 主要製品 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                主要製品ラインナップ
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                様々な用途・ニーズに対応する豊富な製品ラインナップをご用意しています
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Link href="/products/blan-form-top" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <Image
                      src="/images/ブランフォームトップ.jpg"
                      alt="ブランフォームトップ"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">ブランフォームトップ</h3>
                    <p className="text-sm text-gray-600">最高級の緩衝性能</p>
                  </div>
                </div>
              </Link>
              
              <Link href="/products/blan-form" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <Image
                      src="/images/ブランフォーム.jpg"
                      alt="ブランフォーム"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">ブランフォーム</h3>
                    <p className="text-sm text-gray-600">スタンダードモデル</p>
                  </div>
                </div>
              </Link>
              
              <Link href="/products/blan-form-big" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <Image
                      src="/images/ブランフォームBIG.jpg"
                      alt="ブランフォームBIG"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">ブランフォームBIG</h3>
                    <p className="text-sm text-gray-600">大型製品向け</p>
                  </div>
                </div>
              </Link>
              
              <Link href="/products/blan-form-green" className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    <Image
                      src="/images/ブランフォームグリーン.jpg"
                      alt="ブランフォームグリーン"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">ブランフォームグリーン</h3>
                    <p className="text-sm text-gray-600">環境特化型</p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
              >
                すべての製品を見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* お問い合わせCTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ご相談・お見積りは無料です
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              製品選びのご相談から、カスタマイズのご要望まで<br />
              お客様のニーズに合わせて最適なソリューションをご提案いたします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0729400323"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300 text-lg"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">お電話でのお問い合わせ</div>
                  <div className="font-bold">072-940-0323</div>
                </div>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors duration-300 text-lg"
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