import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function ContactPage() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <div className="min-h-screen bg-white">
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-b from-primary-light to-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-6">
              お問い合わせ
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              製品に関するご質問、お見積りのご依頼など、お気軽にお問い合わせください
            </p>
          </div>
        </section>

        {/* お問い合わせ情報 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 連絡先情報 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">連絡先情報</h2>
                
                <div className="space-y-6">
                  {/* 電話 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">お電話でのお問い合わせ</h3>
                      <p className="text-2xl font-bold text-primary mb-1">072-940-0323</p>
                      <p className="text-sm text-gray-600">受付時間: 平日 9:00〜17:00</p>
                    </div>
                  </div>

                  {/* FAX */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">FAX</h3>
                      <p className="text-xl font-bold text-gray-700">072-949-5218</p>
                    </div>
                  </div>

                  {/* メール */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">メール</h3>
                      <a href="mailto:info@ecolopack.co.jp" className="text-primary hover:text-primary-dark">
                        info@ecolopack.co.jp
                      </a>
                    </div>
                  </div>

                  {/* 所在地 */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-primary-light rounded-full w-12 h-12 flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">所在地</h3>
                      <p className="text-gray-700">
                        〒542-0062<br />
                        大阪府大阪市中央区上本町西5-3-5<br />
                        上六Fビル10F
                      </p>
                    </div>
                  </div>
                </div>

                {/* 営業時間 */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">営業時間</h3>
                  <dl className="space-y-2">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">平日</dt>
                      <dd className="text-gray-900 font-medium">9:00 〜 17:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">土日祝</dt>
                      <dd className="text-gray-900 font-medium">休業</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* お問い合わせフォーム */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">お問い合わせフォーム</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ種別 <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">選択してください</option>
                      <option value="product">製品について</option>
                      <option value="quote">お見積り依頼</option>
                      <option value="sample">サンプル請求</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <span className="text-red-500">*</span> は必須項目です。<br />
                      お送りいただいた内容は、弊社プライバシーポリシーに基づき適切に管理いたします。
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
                  >
                    送信する
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* アクセスマップ */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">アクセス</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.3856401013764!2d135.5155846!3d34.6701719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e74008ad41e9%3A0x9fec1659611f776!2z5LiK5YWtRuODk-ODqw!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">電車でお越しの場合</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 大阪メトロ谷町線・長堀鶴見緑地線「谷町六丁目駅」3番出口より徒歩3分</li>
                    <li>• 近鉄大阪線・奈良線「大阪上本町駅」より徒歩5分</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">お車でお越しの場合</h3>
                  <p className="text-gray-600">
                    阪神高速環状線「夕陽丘出口」より約5分<br />
                    ※駐車場はございませんので、近隣のコインパーキングをご利用ください。
                  </p>
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