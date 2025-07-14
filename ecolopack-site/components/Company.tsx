export default function Company() {
  const companyInfo = [
    { label: '会社名', value: '株式会社エコロパック' },
    { label: '設立', value: '1990年4月' },
    { label: '代表取締役', value: '山田 太郎' },
    { label: '資本金', value: '5,000万円' },
    { label: '従業員数', value: '50名' },
    { label: '事業内容', value: '環境配慮型緩衝材の製造・販売' },
    { label: '所在地', value: '〒100-0001\n東京都千代田区千代田1-1-1' },
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
              <p className="text-gray-600 leading-relaxed">
                私たちは、革新的な技術と環境への深い配慮により、お客様に価値ある製品を提供し続けます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}