import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">株式会社エコロパック</h2>
                <p className="text-xs text-gray-400">ECOLOPACK Co., Ltd.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              環境に優しい緩衝材のパイオニアとして、<br />
              持続可能な社会の実現に貢献します。
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                〒542-0062 大阪府大阪市中央区上本町西5-3-5 上六Fビル10F
              </p>
              <p className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                TEL: 072-940-0323 / FAX: 072-949-5218
              </p>
            </div>
          </div>

          {/* サイトマップ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サイトマップ</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                ホーム
              </Link>
              <Link href="/company" className="block text-gray-400 hover:text-white transition-colors">
                会社情報
              </Link>
              <Link href="/products" className="block text-gray-400 hover:text-white transition-colors">
                製品情報
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                お問い合わせ
              </Link>
              <Link href="/admin" className="block text-gray-400 hover:text-white transition-colors">
                管理画面
              </Link>
            </nav>
          </div>

          {/* 製品カテゴリー */}
          <div>
            <h3 className="text-lg font-semibold mb-4">製品カテゴリー</h3>
            <nav className="space-y-2">
              <Link href="/products/blan-form-top" className="block text-gray-400 hover:text-white transition-colors">
                ブランフォームトップ
              </Link>
              <Link href="/products/blan-form" className="block text-gray-400 hover:text-white transition-colors">
                ブランフォーム
              </Link>
              <Link href="/products/blan-form-big" className="block text-gray-400 hover:text-white transition-colors">
                ブランフォームBIG
              </Link>
              <Link href="/products/ecolopat" className="block text-gray-400 hover:text-white transition-colors">
                エコロパット
              </Link>
              <Link href="/products/blan-form-green" className="block text-gray-400 hover:text-white transition-colors">
                ブランフォームグリーン
              </Link>
            </nav>
          </div>
        </div>

        {/* 認証・資格 */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-2">
                <span className="text-2xl font-bold">ISO 9001</span>
              </div>
              <p className="text-xs text-gray-400">品質マネジメント</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-2">
                <span className="text-2xl font-bold">ISO 14001</span>
              </div>
              <p className="text-xs text-gray-400">環境マネジメント</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-2">
                <span className="text-xl font-bold">エコマーク</span>
              </div>
              <p className="text-xs text-gray-400">認定取得</p>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 株式会社エコロパック. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4 text-xs">
            <Link href="#" className="text-gray-400 hover:text-white">
              プライバシーポリシー
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="text-gray-400 hover:text-white">
              サイトマップ
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="#" className="text-gray-400 hover:text-white">
              採用情報
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}