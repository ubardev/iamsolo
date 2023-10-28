import Image from 'next/image';
import { getMemberTags } from '@/utils/common';
import { Member } from '@prisma/client';

interface IProps {
  members: Member[];
}

export default function Members({ members }: IProps) {
  return (
    <div className="mt-8">
      <div className="text-xl font-bold">출연자</div>
      <ul className="my-2 px-4 border-solid border-2 border-gray-200 rounded-lg">
        {members.map((member) => {
          const memberTags = getMemberTags(member);

          return (
            <li
              key={member.id}
              className={`mt-4 mb-4 p-4 rounded-lg ${
                member.gender === 'male' ? ' bg-blue-100' : 'bg-pink-100'
              }`}
            >
              <div className="flex items-center">
                <Image
                  src={member.image || ''}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full mr-8"
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                />
                <div>
                  <div className="text-lg">{member.name}</div>
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
