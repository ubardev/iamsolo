import dayjs from 'dayjs';

interface IProps {
  generation: any;
}
//'/imges/generation-background.png'
export default function Generation({ generation }: IProps) {
  return (
    <div
      className="flex flex-col justify-end w-80 h-60 p-6 bg-green-300 rounded-xl text-white"
      style={Container}
    >
      <div className="text-xl">{generation.name}</div>
      <div className="text-xs">
        {dayjs(generation.startDate).format('YY.MM.DD')} ~{' '}
        {dayjs(generation.endDate).format('YY.MM.DD')}
      </div>
    </div>
  );
}

const Container = {
  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.60), rgba(0,0,0,0.50)), url(/images/generation-background.png)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
};
