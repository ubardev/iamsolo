import dayjs from 'dayjs';

interface IProps {
  generation: any;
}

export default function Generation({ generation }: IProps) {
  return (
    <div
      className="flex flex-col items-end justify-end w-80 h-44 p-6 bg-green-300 rounded-xl text-white cursor-pointer"
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
        {generation.endDate === '99999999'
          ? '진행 중'
          : dayjs(generation.endDate).format('YY.MM.DD')}
      </div>
    </div>
  );
}
