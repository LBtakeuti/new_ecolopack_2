import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';

export default function CompanyPage() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <div className="min-h-screen bg-white">
        <main className="py-12">
          {/* ページタイトル */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">会社情報</h1>
            
            {/* 会社概要テーブル */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-primary text-white px-6 py-4">
                <h2 className="text-2xl font-bold">会社概要</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {/* 社名 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-700">社名</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-900">株式会社エコロパック</p>
                  </div>
                </div>
                
                {/* 所在地 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-700">所在地</h3>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">本社</h4>
                        <p className="text-gray-700">〒211-8530</p>
                        <p className="text-gray-700">川崎市中原区苅宿45-1</p>
                        <p className="text-gray-700">TEL: 044-433-2065　FAX: 044-433-8706</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">さいたま工場</h4>
                        <p className="text-gray-700">〒339-0073</p>
                        <p className="text-gray-700">埼玉県さいたま市岩槻区上野4-6-10</p>
                        <p className="text-gray-700">TEL: 048-792-0958　FAX: 048-792-0959</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 設立 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-700">設立</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-900">1996年6月11日</p>
                  </div>
                </div>
                
                {/* 資本金 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-700">資本金</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-900">36,000,000円</p>
                    <p className="text-sm text-gray-600 mt-1">帝国通信工業株式会社（東証プライム上場）全額出資の会社</p>
                  </div>
                </div>
                
                {/* 業務内容 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-700">業務内容</h3>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-3">
                      <p className="text-gray-900">1. 天然有機物と熱可塑性樹脂との複合材の開発、製造</p>
                      <div>
                        <p className="text-gray-900">2. 製造、販売商品</p>
                        <div className="ml-6 mt-2 space-y-2">
                          <div>
                            <p className="text-gray-700">1) バラ状緩衝材</p>
                            <p className="text-sm text-gray-600 ml-4">（ブランフォームトップ・ブランフォーム・ブランフォームBIG）</p>
                          </div>
                          <div>
                            <p className="text-gray-700">2) シート状緩衝材</p>
                            <p className="text-sm text-gray-600 ml-4">（エコロパット）</p>
                          </div>
                          <div>
                            <p className="text-gray-700">3) パット状発泡緩衝材</p>
                            <p className="text-sm text-gray-600 ml-4">（ブランフォームグリーン）</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 代表者 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-700">代表者</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-900">代表取締役　丸山 睦雄</p>
                  </div>
                </div>
                
                {/* 金融機関 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-6">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-700">金融機関</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-900">みずほ銀行川崎支店</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 関連企業・本社 */}
            <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-primary text-white px-6 py-4">
                <h2 className="text-2xl font-bold">関連企業・本社</h2>
              </div>
              
              <div className="px-6 py-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">帝国通信工業株式会社</h3>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-semibold">本社：</span>神奈川県川崎市中原区苅宿45-1</p>
                      <p><span className="font-semibold">国内拠点：</span>大阪・長野（駒ヶ根・飯田・須坂・木曽）・福井</p>
                      <p><span className="font-semibold">国外拠点：</span>アメリカ・中国・韓国・台湾・タイ・シンガポール・ベトナム</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">帝通エンジニアリング株式会社</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}