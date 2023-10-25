'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import { Generation } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

interface IProps {
  params: {
    generationId: string;
  };
}

export default function Generation({ params: { generationId } }: IProps) {
  const { data: generation } = useQuery<Generation>(
    [`/api/generations/${generationId}`],
    () => fetch(`/api/generations/${generationId}`).then((res) => res.json()),
    { select: (data) => data },
  );

  if (!generation) return;

  console.log('generation ==========>', generation);

  return (
    <div>
      <div>{generation?.name}</div>
      <div>
        <div>
          <label>방송일자</label>
          <span>
            {dayjs(generation.startDate).format('YY.MM.DD')} ~{' '}
            {dayjs(generation.endDate).format('YY.MM.DD') === '99.12.31'
              ? '진행 중'
              : dayjs(generation.endDate).format('YY.MM.DD')}
          </span>
        </div>
        <div>
          <label>촬영장소</label>
          <span>{generation.place}</span>
        </div>
      </div>
      <Image
        src={generation.image}
        alt={generation.name}
        width={500}
        height={500}
      />
      <ul></ul>
    </div>
  );
}
