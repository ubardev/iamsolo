'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import InstagramIcon from '@/components/ui/icons/InstagramIcon';
import LoginIcon from '@/components/ui/icons/LoginIcon';
import YoutubeIcon from '@/components/ui/icons/YoutubeIcon';
import Avatar from '@/components/common/Avatar';
import OttList from '@/components/common/OttList';

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
  const { data: session } = useSession();
  const user = session?.user;

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
          <li>
            <OttList />
          </li>
          {/*{user ? (*/}
          {/*  <li className="w-7 h-7" onClick={() => signOut()}>*/}
          {/*    /!* <LogoutIcon /> *!/*/}
          {/*    <Avatar src={user?.image} />*/}
          {/*  </li>*/}
          {/*) : (*/}
          {/*  <li onClick={() => signIn()}>*/}
          {/*    <LoginIcon />*/}
          {/*  </li>*/}
          {/*)}*/}
        </ul>
      </nav>
    </header>
  );
}
