import Image from 'next/image';

interface IProps {
  src?: string | null;
  alt?: string;
  width?: number;
  height?: number;
}

export default function Avatar({ src, alt, width, height }: IProps) {
  return (
    <div
      className={`
        w-${width ?? '16'} 
        h-${height ?? '16'}
        rounded-full bg-slate-500
      `}
    >
      {/* 프로필 이미지 url이 다양해서 next/img 사용하기 않음 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full p-[0.1rem]"
        alt={alt ?? '프로필 이미지'}
        src={src ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
