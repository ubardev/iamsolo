import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineYoutube } from 'react-icons/ai';
import { LuInstagram } from 'react-icons/lu';
import OttList from './OttList';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <Image src="/images/logo.png" alt="나솔 세계" width={120} height={34} />
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
