'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#333333' }}>
            お問い合わせ
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#666666' }}>
            製品に関するご質問、お見積りなど、お気軽にお電話でお問い合わせください
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 text-center" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(162, 210, 151, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#A2D297' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#A2D297' }}>
                お電話でのお問い合わせ
              </h3>
              <p className="text-3xl font-bold mb-2" style={{ color: '#A2D297' }}>
                03-1234-5678
              </p>
              <p style={{ color: '#666666' }}>
                営業時間: 平日 9:00〜17:00
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(162, 210, 151, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#A2D297' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17h6l2 2H7l2-2zm0 0V9a3 3 0 016 0v8M9 9V7a3 3 0 016 0v2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#A2D297' }}>
                FAX
              </h3>
              <p className="text-2xl font-bold mb-2" style={{ color: '#333333' }}>
                03-1234-5679
              </p>
              <p style={{ color: '#666666' }}>
                24時間受付
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(162, 210, 151, 0.1)' }}>
                <svg className="w-8 h-8" style={{ color: '#A2D297' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#A2D297' }}>
                所在地
              </h3>
              <p className="leading-relaxed" style={{ color: '#666666' }}>
                〒100-0001<br />
                東京都千代田区千代田1-1-1
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg p-8" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: '#333333' }}>
              お気軽にお電話ください
            </h3>
            <div className="text-center">
              <a 
                href="tel:03-1234-5678"
                className="inline-flex items-center text-white font-bold text-xl px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#A2D297' }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.backgroundColor = '#8BB580'; 
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.backgroundColor = '#A2D297'; 
                }}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                03-1234-5678
              </a>
            </div>
            <p className="text-center mt-4" style={{ color: '#666666' }}>
              製品のご質問、お見積り、技術的なお問い合わせまで、専門スタッフが丁寧にお答えいたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}