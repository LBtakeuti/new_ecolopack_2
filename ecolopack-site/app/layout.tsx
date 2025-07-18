import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社エコロパック | 環境に優しい梱包材のパイオニア",
  description: "株式会社エコロパックは、環境に優しい緩衝材「ブランフォーム」「エコロパット」を提供する梱包材メーカーです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="bg-white">
      <body className="antialiased bg-white" style={{ backgroundColor: 'white', backgroundImage: 'none' }}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // === フッター要素の削除処理 ===
              if (typeof window !== 'undefined') {
                function removeFooterElements() {
                  // フッタータグを削除
                  document.querySelectorAll('footer').forEach(el => el.remove());
                  
                  // 地図関連要素を削除
                  document.querySelectorAll('[class*="map"], [id*="map"]').forEach(el => {
                    // フッター内の地図要素のみ削除
                    if (el.closest('footer') || el.classList.contains('map-section')) {
                      el.remove();
                    }
                  });
                  
                  // 青い背景の要素を削除（フッター内のみ）
                  const blueBackgroundElements = document.querySelectorAll(
                    '[style*="background"][style*="blue"], ' +
                    '[style*="background-color"][style*="blue"], ' +
                    '[style*="skyblue"], [style*="lightblue"]'
                  );
                  
                  blueBackgroundElements.forEach(el => {
                    // フッター要素または地図セクションの場合のみ削除
                    if (el.tagName === 'FOOTER' || 
                        el.closest('footer') || 
                        el.classList.contains('map-section') ||
                        el.classList.contains('blue-background-section')) {
                      el.remove();
                    }
                  });
                  
                  // main要素の後の兄弟要素を削除
                  const main = document.querySelector('main');
                  if (main) {
                    let nextSibling = main.nextElementSibling;
                    while (nextSibling) {
                      const toRemove = nextSibling;
                      nextSibling = nextSibling.nextElementSibling;
                      toRemove.remove();
                    }
                  }
                }
                
                // DOMContentLoadedイベントで実行
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', removeFooterElements);
                } else {
                  // 既に読み込み済みの場合は即実行
                  removeFooterElements();
                }
                
                // 動的コンテンツ対応のため遅延実行
                setTimeout(removeFooterElements, 100);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
