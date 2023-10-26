import dayjs from 'dayjs';
import Link from 'next/link';
import { Generation } from '@prisma/client';

interface IProps {
  generation: Generation;
}

export default function Generation({ generation }: IProps) {
  return (
    <Link href={`/generation/${generation.id}`}>
      <div
        className="flex flex-col items-end justify-end w-72 h-40 p-6 bg-green-300 rounded-xl text-white cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.60), rgba(0,0,0,0.50)), url(${
            generation.image
              ? generation.image
              : '/images/generation-background.png'
          })`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        <div className="text-2xl font-bold">{generation.name}</div>
        <div className="text-xs">
          {dayjs(generation.startDate).format('YY.MM.DD')} ~{' '}
          {dayjs(generation.endDate).format('YY.MM.DD') === '99.12.31'
            ? '진행 중'
            : dayjs(generation.endDate).format('YY.MM.DD')}
        </div>
      </div>
    </Link>
  );
}
