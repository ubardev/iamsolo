import type { Metadata } from 'next';
import './globals.css';
import { Open_Sans } from 'next/font/google';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import AuthContext from '@/context/AuthContext';
import GoogleAnalytics from '@/context/GoogleAnalytics';
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
      <body className="w-full bg-neutral-50 overflow-auto">
        <AuthContext>
          {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
          <header className="sticky top-0 bg-white z-10 border-b">
            <div className="max-w-screen-xl mx-auto">
              <Navbar />
            </div>
          </header>
          <main className="w-full flex justify-center p-4">
            {/* <SWRConfigContext>{children}</SWRConfigContext> */}
            <ReactQueryConfigContext>{children}</ReactQueryConfigContext>
          </main>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
