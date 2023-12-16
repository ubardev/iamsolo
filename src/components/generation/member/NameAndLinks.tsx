import React from 'react';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import InstagramIcon from '@/components/ui/icons/InstagramIcon';
import YoutubeIcon from '@/components/ui/icons/YoutubeIcon';
import LinkIcon from '@/components/ui/icons/LinkIcon';

interface IProps {
  ganerationName: string;
  memberName: string;
  instgramUrl?: string;
  youtubeUrl?: string;
  shopUrl?: string;
}

export default function NameAndLinks({
  ganerationName,
  memberName,
  instgramUrl,
  youtubeUrl,
  shopUrl,
}: IProps) {
  return (
    <div className="flex items-center text-lg">
      <div>{memberName}</div>
      {instgramUrl && (
        <Link href={instgramUrl} target="_blank">
          <div className="ml-2">
            {
              <InstagramIcon
                size={20}
                title={`나는 솔로 ${ganerationName} ${memberName} 인스타그램`}
              />
            }
          </div>
        </Link>
      )}
      {youtubeUrl && (
        <Link href={youtubeUrl} target="_blank">
          <div className="ml-2">
            {
              <YoutubeIcon
                size={24}
                title={`나는 솔로 ${ganerationName} ${memberName} Youtube`}
              />
            }
          </div>
        </Link>
      )}
      {shopUrl && (
        <Link href={shopUrl} target="_blank">
          <div className="ml-2">
            {
              <LinkIcon
                size={22}
                title={`나는 솔로 ${ganerationName} ${memberName} 페이지`}
              />
            }
          </div>
        </Link>
      )}
    </div>
  );
}
