import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white py-12" style={{ backgroundColor: '#A2D297' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">株式会社エコロパック</h2>
            <p className="text-white/80">
              環境に優しい梱包材のパイオニア
            </p>
          </div>
          <div className="md:text-right">
            <nav className="space-x-6">
              <Link href="#home" className="text-white/80 hover:text-white transition-colors">
                ホーム
              </Link>
              <Link href="#products" className="text-white/80 hover:text-white transition-colors">
                製品情報
              </Link>
              <Link href="#company" className="text-white/80 hover:text-white transition-colors">
                会社概要
              </Link>
              <Link href="#contact" className="text-white/80 hover:text-white transition-colors">
                お問い合わせ
              </Link>
            </nav>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-white/70" style={{ borderTopColor: 'rgba(255,255,255,0.2)' }}>
          <p>&copy; 2025 株式会社エコロパック. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}