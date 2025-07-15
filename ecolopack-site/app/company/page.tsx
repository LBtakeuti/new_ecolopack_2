import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function CompanyPage() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <div className="min-h-screen bg-white">
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-b from-primary-light to-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
              会社情報
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              エコロパックは、地球環境に配慮した緩衝材の製造を通じて、
              持続可能な社会の実現に貢献しています
            </p>
          </div>
        </section>

        {/* 会社概要 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">会社概要</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">会社名</dt>
                  <dd className="text-lg text-gray-900">株式会社エコロパック</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">設立</dt>
                  <dd className="text-lg text-gray-900">1985年4月</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">代表者</dt>
                  <dd className="text-lg text-gray-900">代表取締役社長 山田 太郎</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">資本金</dt>
                  <dd className="text-lg text-gray-900">5,000万円</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">従業員数</dt>
                  <dd className="text-lg text-gray-900">45名（2024年4月現在）</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-2">事業内容</dt>
                  <dd className="text-lg text-gray-900">環境配慮型緩衝材の製造・販売</dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="text-sm font-medium text-gray-500 mb-2">所在地</dt>
                  <dd className="text-lg text-gray-900">
                    〒542-0062<br />
                    大阪府大阪市中央区上本町西5-3-5<br />
                    上六Fビル10F
                  </dd>
                </div>
                <div className="md:col-span-2">
                  <dt className="text-sm font-medium text-gray-500 mb-2">主要取引先</dt>
                  <dd className="text-lg text-gray-900">
                    大手家電メーカー、精密機器メーカー、医療機器メーカー、食品メーカー等
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* 経営指針 */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">エコロパック経営指針</h2>
            
            <div className="space-y-12">
              {/* 事業認識 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Ⅰ. 事業認識</h3>
                <p className="text-gray-700 leading-relaxed">
                  環境問題は全地球的要求であり、人類生存の課題である。<br />
                  エコロパックは地球にやさしい緩衝材の製造とサービスを事業としてこの課題に取り組み、社会に貢献する。
                </p>
              </div>

              {/* 環境方針 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Ⅱ. 環境方針</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  エコロパックは取り扱う全ての商品に関する開発、設計、生産、販売などの事業活動において、
                  以下の環境方針を尊守し行動します。
                </p>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="text-primary font-bold mr-3">①</span>
                    <span className="text-gray-700">
                      環境保全の取り組みを経営の重要な課題と位置づけ、継続的改善および環境汚染の予防に努めます。
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary font-bold mr-3">②</span>
                    <span className="text-gray-700">
                      環境関連の法令その他の要求事項等を尊守し、技術的、経済的にできうる環境保全に取り組みます。
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-primary font-bold mr-3">③</span>
                    <div className="text-gray-700">
                      <span>本方針に基づき</span>
                      <ul className="mt-3 space-y-2 ml-4">
                        <li className="relative pl-6">
                          <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                          有害化学物質による環境汚染を防止するため使用禁止物質を明らかにし原材料、製造工程での管理をおこないます。
                        </li>
                        <li className="relative pl-6">
                          <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                          環境に負担を与える物質は可能な限り代替転換を図ります。
                        </li>
                        <li className="relative pl-6">
                          <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                          事業活動に伴う廃棄物の削減と分別・リサイクルに努めます。
                        </li>
                        <li className="relative pl-6">
                          <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                          省資源、省エネルギーに努めます。
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>

              {/* 事業取組 */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Ⅲ. 事業取組</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span className="text-gray-700">化石原料の使用量を減らした商品の提供。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span className="text-gray-700">再生産性の高い原料の利用につとめる。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span className="text-gray-700">リサイクル、リデュース、リユース、資源の有効利用に取り組む。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-3">•</span>
                    <span className="text-gray-700">カーボンニュートラルを狙い、CO₂削減につながる商品の提供。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 沿革 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">沿革</h2>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                    <div className="ml-16">
                      <div className="text-sm text-gray-500 mb-1">1985年4月</div>
                      <div className="text-gray-900">株式会社エコロパック設立</div>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                    <div className="ml-16">
                      <div className="text-sm text-gray-500 mb-1">1990年8月</div>
                      <div className="text-gray-900">環境配慮型緩衝材「ブランフォーム」開発</div>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                    <div className="ml-16">
                      <div className="text-sm text-gray-500 mb-1">1995年3月</div>
                      <div className="text-gray-900">ISO9001認証取得</div>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                    <div className="ml-16">
                      <div className="text-sm text-gray-500 mb-1">2000年10月</div>
                      <div className="text-gray-900">ISO14001認証取得</div>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                    <div className="ml-16">
                      <div className="text-sm text-gray-500 mb-1">2010年4月</div>
                      <div className="text-gray-900">「ブランフォームグリーン」シリーズ発売開始</div>
                    </div>
                  </div>
                  <div className="relative flex items-start">
                    <div className="absolute left-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2"></div>
                    <div className="ml-16">
                      <div className="text-sm text-gray-500 mb-1">2020年6月</div>
                      <div className="text-gray-900">カーボンニュートラル達成に向けた取り組み開始</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}