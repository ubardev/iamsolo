import dayjs from 'dayjs';
import Image from 'next/image';
import { GenerationWithMembers } from '@/types/generation';

interface IProps {
  generationWithMembers: GenerationWithMembers;
}

export default function Info({ generationWithMembers }: IProps) {
  const { name, startDate, endDate, place, image, videoUrl } =
    generationWithMembers;

  return (
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
      {videoUrl ? (
        <div
          style={{
            position: 'relative',
            maxWidth: '100%',
            paddingBottom: '56.25%',
            height: '0',
          }}
        >
          <iframe
            width="560%"
            height="315"
            src={videoUrl || ''}
            title={`${name} 대표 동영상`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          ></iframe>
        </div>
      ) : (
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="mt-2"
          style={{ width: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
}
