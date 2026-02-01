import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FAB from '@/components/layout/FAB';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Iaso Forest | 치유와 힐링의 프리미엄 전원마을',
  description: '양평 치유의 숲에서 시작하는 새로운 삶. 5060 액티브 시니어를 위한 프리미엄 전원주택 단지, 이아소 포레스트.',
  keywords: ['양평 전원주택', '치유의 숲', '5060 세컨하우스', '이아소 전원마을', '전원주택 분양'],
  authors: [{ name: 'Iaso Forest' }],
  openGraph: {
    title: 'Iaso Forest | 치유와 힐링의 프리미엄 전원마을',
    description: '양평 치유의 숲에서 시작하는 새로운 삶',
    url: 'https://iasoforest.com',
    siteName: 'Iaso Forest',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FAB />
      </body>
    </html>
  );
}
