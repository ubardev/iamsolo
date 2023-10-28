import type { Metadata } from 'next';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ReactQueryConfigContext from '@/context/ReactQueryConfigContext';
import SWRConfigContext from '@/context/SWRConfigContext';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '나솔세계 - 나는 솔로 모든 정보',
  description:
    '나는 솔로 출연자 정보, 인스타, 소식 등 나는 솔로의 모든 정보를 모았습니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="flex flex-col w-full max-w-screen-sm mx-auto">
        <Header />
        <main className="w-full flex justify-center max-w-screen-sm mx-auto p-4">
          {/* <SWRConfigContext>{children}</SWRConfigContext> */}
          <ReactQueryConfigContext>{children}</ReactQueryConfigContext>
        </main>
        <Footer />
      </body>
    </html>
  );
}
