import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { API_URL } from '@/constants/common';
import { getMemberTags } from '@/utils/common';
import { Generation, Member } from '@prisma/client';

// import { useQuery } from '@tanstack/react-query';

interface IProps {
  params: {
    generationId: string;
  };
}

interface GenerationWithMembers extends Generation {
  members: Member[];
}

export default async function Generation({ params: { generationId } }: IProps) {
  // const { data: generation } = useQuery<GenerationWithMembers>(
  //   [`/api/generations/${generationId}`],
  //   () => fetch(`/api/generations/${generationId}`).then((res) => res.json()),
  //   { select: (data) => data },
  // );

  const generation: GenerationWithMembers = await fetch(
    `${API_URL}/api/generations/${generationId}`,
  ).then((res) => res.json());

  const { name, startDate, endDate, place, image, members } = generation;

  const newsList = await fetch(
    `https://openapi.naver.com/v1/search/news.json?query=나는솔로${name}&sort=date`,
    {
      next: { revalidate: 60 * 60 },
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-Naver-Client-Id':
          process.env.NEXT_PUBLIC_NAVER_DEVELOPERS_CLIENT_ID || '',
        'X-Naver-Client-Secret':
          process.env.NEXT_PUBLIC_NAVER_DEVELOPERS_CLIENT_SECRET || '',
      },
    },
  ).then((res) => res.json());

  return (
    <div>
      <div className="text-2xl font-bold">{name}</div>
      <div className="mt-2 mb-2 p-4 border-solid border-2 border-gray-200 rounded-lg">
        <div>
          <label className="mr-2 text-gray-500">방송일자</label>
          <span>
            {dayjs(startDate).format('YY.MM.DD')} ~{' '}
            {dayjs(endDate).format('YY.MM.DD') === '99.12.31'
              ? '진행 중'
              : dayjs(endDate).format('YY.MM.DD')}
          </span>
        </div>
        <div>
          <label className="mr-2 text-gray-500">촬영장소</label>
          <span>{place}</span>
        </div>
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="mt-2"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
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
      <div className="mt-8">
        <div className="flex items-center">
          <div className="text-xl font-bold">News</div>
          <div className="pl-4 text-xs text-gray-400">
            {dayjs(newsList.lastBuildDate).format('MM월 DD일 hh시 mm분')}
          </div>
        </div>
        <ul className="my-2 p-2 border-solid border-2 border-gray-200 rounded-lg">
          {newsList?.items.map((news: any, index: any) => (
            <Link key={index} href={news.link} target="_blank">
              <li className="px-2 py-2 hover:bg-slate-200 rounded-lg">
                <div
                  className="text-lg"
                  dangerouslySetInnerHTML={{
                    __html: news.title,
                  }}
                />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
