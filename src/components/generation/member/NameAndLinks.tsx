import React from 'react';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';

interface IProps {
  ganerationName: string;
  memberName: string;
  instgramUrl?: string;
}

export default function NameAndLinks({
  ganerationName,
  memberName,
  instgramUrl,
}: IProps) {
  return (
    <div className="flex items-center text-lg">
      <div>{memberName}</div>
      {instgramUrl && (
        <Link href={instgramUrl} target="_blank">
          <div className="ml-2">
            {
              <AiOutlineInstagram
                size={24}
                title={`나는 솔로 ${ganerationName} ${memberName} 인스타그램`}
              />
            }
          </div>
        </Link>
      )}
    </div>
  );
}
