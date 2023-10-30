import Info from '@/components/generation/Info';
import Members from '@/components/generation/Members';
import News from '@/components/generation/News';
import { API_URL } from '@/constants/common';
import { GenerationWithMembers } from '@/types/generation';
import { Generation, Member } from '@prisma/client';

// import { useQuery } from '@tanstack/react-query';

interface IProps {
  params: {
    generationId: string;
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
  ).then((res) => res.json());

  const { name, startDate, members } = generationWithMembers;

  return (
    <div>
      <div className="text-2xl font-bold">{name}</div>
      <Info generationWithMembers={generationWithMembers} />
      <Members generationWithMembers={generationWithMembers} />
      <News generationName={name} />
    </div>
  );
}
