import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { start } from 'repl';
import { GenerationWithMembers } from '@/types/generation';
import { getMemberTags } from '@/utils/common';
import { Member } from '@prisma/client';
import Avatar from '../common/Avatar';

interface IProps {
  generationWithMembers: GenerationWithMembers;
}

export default function Members({ generationWithMembers }: IProps) {
  const { name, startDate, members } = generationWithMembers;

  return (
    <div className="mt-8">
      <div className="text-xl font-bold">출연자</div>
      <ul className="my-2 px-4 border-solid border-2 border-gray-200 rounded-lg">
        {members.map((member: Member) => {
          const memberTags = getMemberTags({ startDate, member });

          return (
            <li
              key={member.id}
              className={`mt-4 mb-4 p-4 rounded-lg ${
                member.gender === 'male' ? ' bg-blue-100' : 'bg-pink-100'
              }`}
            >
              <div className="flex items-center">
                <div>
                  <Avatar
                    src={member.image || ''}
                    alt={`나는 솔로 ${name} ${member.name} 프로필 사진`}
                    width={16}
                    height={16}
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center text-lg">
                    <div>{member.name}</div>
                    {member.instgramUrl && (
                      <Link href={member.instgramUrl} target="_blank">
                        <div className="ml-2">
                          {
                            <AiOutlineInstagram
                              size={24}
                              alt={`나는 솔로 ${name} ${member.name} 인스타그램`}
                            />
                          }
                        </div>
                      </Link>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {memberTags.map((tag, index) => (
                      <div
                        key={index}
                        className="pl-2 pr-2 bg-pink-600 text-white rounded-2xl"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
