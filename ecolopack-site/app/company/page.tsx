import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';

export default function CompanyPage() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <div className="min-h-screen bg-gray-50">
        <main className="py-16">
          {/* ページタイトル */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-serif text-gray-900 text-center mb-16 tracking-wider">会社情報</h1>
            
            {/* 会社概要テーブル */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-6">
                <h2 className="text-3xl font-serif tracking-wide">会社概要</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {/* 社名 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8 hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide">社名</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-700 text-lg">株式会社エコロパック</p>
                  </div>
                </div>
                
                {/* 所在地 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8 hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide">所在地</h3>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">本社</h4>
                        <p className="text-gray-700 mb-1">〒211-8530</p>
                        <p className="text-gray-700 mb-2">川崎市中原区苅宿45-1</p>
                        <p className="text-gray-600 text-sm">
                          <span className="font-semibold">TEL:</span> 044-433-2065　
                          <span className="font-semibold">FAX:</span> 044-433-8706
                        </p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">さいたま工場</h4>
                        <p className="text-gray-700 mb-1">〒339-0073</p>
                        <p className="text-gray-700 mb-2">埼玉県さいたま市岩槻区上野4-6-10</p>
                        <p className="text-gray-600 text-sm">
                          <span className="font-semibold">TEL:</span> 048-792-0958　
                          <span className="font-semibold">FAX:</span> 048-792-0959
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 設立 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8 hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide">設立</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-700 text-lg">1996年6月11日</p>
                  </div>
                </div>
                
                {/* 資本金 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8 hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide">資本金</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-700 text-lg font-medium mb-2">36,000,000円</p>
                    <p className="text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-md inline-block">
                      帝国通信工業株式会社（東証プライム上場）全額出資の会社
                    </p>
                  </div>
                </div>
                
                {/* 業務内容 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8 hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide">業務内容</h3>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-gray-800 font-medium">1. 天然有機物と熱可塑性樹脂との複合材の開発、製造</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-gray-800 font-medium mb-3">2. 製造、販売商品</p>
                        <div className="ml-4 space-y-3">
                          <div className="bg-white p-3 rounded-md shadow-sm">
                            <p className="text-gray-700 font-medium">1) バラ状緩衝材</p>
                            <p className="text-sm text-gray-600 ml-4 mt-1">
                              ブランフォームトップ・ブランフォーム・ブランフォームBIG
                            </p>
                          </div>
                          <div className="bg-white p-3 rounded-md shadow-sm">
                            <p className="text-gray-700 font-medium">2) シート状緩衝材</p>
                            <p className="text-sm text-gray-600 ml-4 mt-1">エコロパット</p>
                          </div>
                          <div className="bg-white p-3 rounded-md shadow-sm">
                            <p className="text-gray-700 font-medium">3) パット状発泡緩衝材</p>
                            <p className="text-sm text-gray-600 ml-4 mt-1">ブランフォームグリーン</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 代表者 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8 hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide">代表者</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-700 text-lg">
                      <span className="font-medium">代表取締役</span>　<span className="font-bold text-gray-900">丸山 睦雄</span>
                    </p>
                  </div>
                </div>
                
                {/* 金融機関 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 py-8 hover:bg-gray-50 transition-colors">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-800 tracking-wide">金融機関</h3>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-700 text-lg">みずほ銀行川崎支店</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 関連企業・本社 */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-6">
                <h2 className="text-3xl font-serif tracking-wide">関連企業・本社</h2>
              </div>
              
              <div className="px-8 py-8">
                <div className="space-y-8">
                  <div className="bg-blue-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">帝国通信工業株式会社</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="font-bold text-gray-800 min-w-[100px]">本社：</span>
                        <span className="text-gray-700">神奈川県川崎市中原区苅宿45-1</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold text-gray-800 min-w-[100px]">国内拠点：</span>
                        <span className="text-gray-700">大阪・長野（駒ヶ根・飯田・須坂・木曽）・福井</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold text-gray-800 min-w-[100px]">国外拠点：</span>
                        <span className="text-gray-700">アメリカ・中国・韓国・台湾・タイ・シンガポール・ベトナム</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-gray-900">帝通エンジニアリング株式会社</h3>
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