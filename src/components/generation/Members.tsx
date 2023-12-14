'use client';

import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GenerationWithMembers } from '@/types/generation';
import { getMemberTags } from '@/utils/common';
import { Member } from '@prisma/client';
import Avatar from '../common/Avatar';
import LikeIcon from '../ui/icons/LikeIcon';
import DislikeIcon from '../ui/icons/DislikeIcon';
import { signIn, useSession } from 'next-auth/react';
import useEmotions from '@/hooks/emotions';
import { EMOTION_TYPE } from '@/constants/common';

interface IProps {
  generationWithMembers: GenerationWithMembers;
}

export default function Members({ generationWithMembers }: IProps) {
  const { data: session } = useSession();
  const { id: generationId, name, startDate, members } = generationWithMembers;
  const { emotionCounts, myEmotions, setEmotion } = useEmotions(generationId);

  const myLikeMembers = myEmotions ? myEmotions.myLikeMembers.split(',') : [];
  const myDislikeMembers = myEmotions
    ? myEmotions.myDislikeMembers.split(',')
    : [];

  const handleEmotion = (
    emotionType: EMOTION_TYPE,
    memberId: number,
    isAlreadyEmotion: boolean,
  ) => {
    if (!session?.user) {
      return signIn();
    }

    setEmotion(emotionType, memberId, isAlreadyEmotion);
  };

  return (
    <div className="mt-8">
      <div className="text-xl font-bold">출연자</div>
      <ul className="my-2 px-4 border-solid border-2 border-gray-200 rounded-lg">
        {members.map((member: Member) => {
          const memberTags = getMemberTags({ startDate, member });
          const isLikeMember = myLikeMembers.includes(String(member.id));
          const isDislikeMember = myDislikeMembers.includes(String(member.id));

          return (
            <li
              key={member.id}
              className={`mt-4 mb-4 p-4 rounded-lg ${
                member.gender === 'male' ? ' bg-blue-100' : 'bg-pink-100'
              }`}
            >
              <div className="flex items-center p-1">
                <div className="w-20 h-24">
                  <Avatar
                    src={member.image || ''}
                    alt={`나는 솔로 ${name} ${member.name} 프로필 사진`}
                    width={20}
                    height={20}
                  />
                  <div className="flex gap-1 pt-1">
                    <button
                      className={`flex justify-center w-10 ${
                        isLikeMember ? `bg-blue-500` : 'bg-blue-300'
                      } rounded-2xl`}
                      onClick={() =>
                        handleEmotion(
                          EMOTION_TYPE.like,
                          member.id,
                          isLikeMember,
                        )
                      }
                    >
                      <div className="flex items-center gap-1 text-white">
                        <LikeIcon size={12} color="white" />
                        <p className="text-sm">
                          {emotionCounts
                            ? emotionCounts[member.id].likeCount
                            : 0}
                        </p>
                      </div>
                    </button>
                    <button
                      className={`flex justify-center w-10 ${
                        isDislikeMember ? `bg-red-500` : 'bg-red-300'
                      } rounded-2xl`}
                      onClick={() =>
                        handleEmotion(
                          EMOTION_TYPE.dislike,
                          member.id,
                          isDislikeMember,
                        )
                      }
                    >
                      <div className="flex items-center text-white">
                        <DislikeIcon size={12} color="white" />
                        <p className="text-sm">
                          {emotionCounts
                            ? emotionCounts[member.id].dislikeCount
                            : 0}
                        </p>
                      </div>
                    </button>
                  </div>
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
                              title={`나는 솔로 ${name} ${member.name} 인스타그램`}
                            />
                          }
                        </div>
                      </Link>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {memberTags.map((tag, index) =>
                      tag.indexOf('(?)') !== -1 ? (
                        <div
                          key={index}
                          className="pl-2 pr-2 bg-slate-300 text-slate-400 rounded-2xl"
                        >
                          {tag}
                        </div>
                      ) : (
                        <div
                          key={index}
                          className="pl-2 pr-2 bg-pink-600 text-white rounded-2xl"
                        >
                          {tag}
                        </div>
                      ),
                    )}
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
