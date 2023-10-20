import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
        </h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="https://www.instagram.com/im_solo_official/">인스타</Link>
        <Link href="https://www.youtube.com/@chonjang">유튜브</Link>
      </nav>
    </header>
  );
}
