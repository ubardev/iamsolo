import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '../ui/icons/InstagramIcon';
import YoutubeIcon from '../ui/icons/YoutubeIcon';
import OttList from './OttList';

const menus = [
  {
    href: 'https://www.instagram.com/im_solo_official/',
    target: '_blank',
    icon: <InstagramIcon size={24} />,
  },
  {
    href: 'https://www.youtube.com/@chonjang',
    target: '_blank',
    icon: <YoutubeIcon size={24} />,
  },
];

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <Image src="/images/logo.png" alt="나솔 세계" width={120} height={34} />
      </Link>
      <nav>
        <ul className="flex gap-4 items-center">
          {menus.map((menu) => (
            <li key={menu.href}>
              <Link href={menu.href} target={menu.target}>
                {menu.icon}
              </Link>
            </li>
          ))}
          <OttList />
        </ul>
      </nav>
    </header>
  );
}
