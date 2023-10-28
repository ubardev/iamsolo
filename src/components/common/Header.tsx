import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineYoutube } from 'react-icons/ai';
import { LuInstagram } from 'react-icons/lu';
import OttList from './OttList';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="flex items-center text-3xl font-bold">
          <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          <div className="ml-4 text-lg">나솔세계</div>
        </h1>
      </Link>
      <nav className="flex gap-4">
        <Link
          href="https://www.instagram.com/im_solo_official/"
          target="_blank"
        >
          <LuInstagram size={24} />
        </Link>
        <Link href="https://www.youtube.com/@chonjang" target="_blank">
          <AiOutlineYoutube size={24} />
        </Link>
        <OttList />
      </nav>
    </header>
  );
}
