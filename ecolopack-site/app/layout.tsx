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
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
