import Info from '@/components/generation/Info';
import Members from '@/components/generation/Members';
import News from '@/components/generation/News';
import { API_URL } from '@/constants/common';
import { GenerationWithMembers } from '@/types/generation';
import { Generation, Member } from '@prisma/client';

import type { Metadata, ResolvingMetadata } from 'next';

// import { useQuery } from '@tanstack/react-query';

interface IProps {
  params: {
    generationId: string;
  };
}

export async function generateMetadata(
  { params }: IProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const generationId = params.generationId;

  return {
    title: `나는 솔로 ${generationId}기 정보`,
    description: `나는 솔로 ${generationId}기 방송일자, 촬영장소, 대표동영상, 최신 뉴스, 출연자 나이, 직업, 인스타, 차량 등 모든 정보`,
    openGraph: {
      title: `나는 솔로 ${generationId}기 정보`,
      description: `나는 솔로 ${generationId}기 방송일자, 촬영장소, 대표동영상, 최신 뉴스, 출연자 나이, 직업, 인스타, 차량 등 모든 정보`,
      images: [`/images/generation/cover/generation-cover-${generationId}.png`],
    },
  };
}

export default async function Generation({ params: { generationId } }: IProps) {
  // const { data: generation } = useQuery<GenerationWithMembers>(
  //   [`/api/generations/${generationId}`],
  //   () => fetch(`/api/generations/${generationId}`).then((res) => res.json()),
  //   { select: (data) => data },
  // );

  const generationWithMembers: GenerationWithMembers = await fetch(
    `${API_URL}/api/generations/${generationId}`,
    { cache: 'no-store' },
  ).then((res) => res.json());

  const { name } = generationWithMembers;

  return (
    <div>
      <div className="text-2xl font-bold">{name}</div>
      <Info generationWithMembers={generationWithMembers} />
      <Members generationWithMembers={generationWithMembers} />
      <News generationName={name} />
    </div>
  );
}
