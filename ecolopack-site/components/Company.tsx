export default function Company() {
  const companyInfo = [
    { label: '会社名', value: '株式会社エコロパック' },
    { label: '設立', value: '1996年6月11日' },
    { label: '代表取締役', value: '丸山 睦雄' },
    { label: '資本金', value: '3,600万円' },
    { label: '株主', value: '帝国通信工業株式会社(東証プライム上場）全額出資' },
    { label: '業務内容', value: '1. 天然有機物と熱可塑性樹脂との複合材の開発、製造\n2. バラ状緩衝材（ブランフォームトップ・ブランフォーム・ブランフォームBIG）\n3. シート状緩衝材（エコロパット）\n4. パット状発泡緩衝材（ブランフォームグリーン）' },
    { label: '本社', value: '〒211-8530\n川崎市中原区苅宿45-1\nTEL: 044-433-2065\nFAX: 044-433-8706' },
    { label: 'さいたま工場', value: '〒339-0073\n埼玉県さいたま市岩槻区上野4-6-10\nTEL: 048-792-0958\nFAX: 048-792-0959' },
    { label: '取引銀行', value: 'みずほ銀行川崎支店' },
  ];

  return (
    <section id="company" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            会社概要
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-secondary rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {companyInfo.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200 last:border-0">
                      <th className="text-left px-6 py-4 bg-primary-light text-gray-900 font-medium w-1/3">
                        {item.label}
                      </th>
                      <td className="px-6 py-4 whitespace-pre-line">
                        {item.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                私たちの使命
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                株式会社エコロパックは、「環境と経済の両立」をテーマに、持続可能な社会の実現に貢献します。
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                私たちは、革新的な技術と環境への深い配慮により、お客様に価値ある製品を提供し続けます。
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">関連企業</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800">帝国通信工業株式会社</h5>
                  <p className="text-sm text-gray-600 mt-1">本社：神奈川県川崎市中原区苅宿45-1</p>
                  <p className="text-sm text-gray-600">国内拠点：大阪・長野（駒ヶ根・飯田・須坂・木曽）・福井</p>
                  <p className="text-sm text-gray-600">国外拠点：アメリカ・中国・韓国・台湾・タイ・シンガポール・ベトナム</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800">帝通エンジニアリング株式会社</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}