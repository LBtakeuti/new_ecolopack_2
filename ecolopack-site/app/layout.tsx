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
              // Remove footer elements on page load
              if (typeof window !== 'undefined') {
                function removeFooter() {
                  // Remove elements containing specific text
                  const textsToRemove = [
                    '株式会社エコロパック',
                    'ECOLOPACK Co., Ltd.',
                    '環境に優しい緩衝材のパイオニア',
                    '© 2025 株式会社エコロパック',
                    'サイトマップ',
                    '製品カテゴリー',
                    'ISO 9001',
                    'ISO 14001',
                    'エコマーク',
                    'TEL: 072-940-0323',
                    '〒542-0062 大阪府大阪市中央区'
                  ];
                  
                  textsToRemove.forEach(text => {
                    const elements = document.evaluate(
                      "//*[contains(text(), '" + text + "')]",
                      document,
                      null,
                      XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
                      null
                    );
                    
                    for (let i = 0; i < elements.snapshotLength; i++) {
                      let elem = elements.snapshotItem(i);
                      // Remove parent containers up to 4 levels
                      let parent = elem;
                      for (let j = 0; j < 4 && parent; j++) {
                        parent = parent.parentElement;
                      }
                      if (parent && parent.classList.contains('max-w-7xl')) {
                        parent.remove();
                      }
                    }
                  });
                  
                  // Remove footer tags
                  document.querySelectorAll('footer').forEach(el => el.remove());
                  
                  // Remove bg-primary sections
                  document.querySelectorAll('[class*="bg-primary"]').forEach(el => el.remove());
                  
                  // Remove blue background elements
                  const blueColors = [
                    'skyblue', 'lightblue', '#87CEEB', '#ADD8E6', '#B0E0E6',
                    'rgb(135, 206, 235)', 'rgb(173, 216, 230)', 'rgb(176, 224, 230)',
                    'blue', '#0000FF', 'rgb(0, 0, 255)'
                  ];
                  
                  document.querySelectorAll('*').forEach(el => {
                    const style = window.getComputedStyle(el);
                    const bgColor = style.backgroundColor;
                    const bg = style.background;
                    
                    if (blueColors.some(color => 
                      bgColor.includes(color) || bg.includes(color) ||
                      el.style.backgroundColor.includes(color) || el.style.background.includes(color)
                    )) {
                      el.remove();
                    }
                  });
                  
                  // Remove elements with inline blue backgrounds
                  document.querySelectorAll('[style*="background"][style*="blue"]').forEach(el => el.remove());
                  document.querySelectorAll('[style*="background-color"][style*="blue"]').forEach(el => el.remove());
                  document.querySelectorAll('[style*="skyblue"]').forEach(el => el.remove());
                  document.querySelectorAll('[style*="lightblue"]').forEach(el => el.remove());
                  
                  // Remove footer structure by class combinations
                  document.querySelectorAll('.max-w-7xl.mx-auto.px-4.py-8').forEach(el => {
                    if (el.querySelector('.grid.grid-cols-1.md\\:grid-cols-4') || 
                        el.querySelector('[class*="text-white"]') ||
                        el.textContent.includes('株式会社エコロパック')) {
                      el.remove();
                    }
                  });
                  
                  // Remove any remaining footer containers
                  document.querySelectorAll('.grid.grid-cols-1.md\\:grid-cols-4.gap-6').forEach(el => el.remove());
                  document.querySelectorAll('.mt-6.pt-6.border-t.border-white\\/20').forEach(el => el.remove());
                  
                  // Remove containers with specific footer text
                  const footerTexts = ['株式会社エコロパック', 'ECOLOPACK Co., Ltd.', 'ISO 9001', 'ISO 14001', 'エコマーク'];
                  footerTexts.forEach(text => {
                    document.querySelectorAll('*').forEach(el => {
                      if (el.textContent.includes(text) && el.classList.contains('max-w-7xl')) {
                        el.remove();
                      }
                    });
                  });
                }
                
                // Run on page load
                document.addEventListener('DOMContentLoaded', removeFooter);
                // Run immediately if DOM is already loaded
                if (document.readyState !== 'loading') {
                  removeFooter();
                }
                // Run again after a short delay to catch any dynamic content
                setTimeout(removeFooter, 100);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
