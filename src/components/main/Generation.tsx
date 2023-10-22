interface IProps {
  generation: any;
}
//'/imges/generation-background.png'
export default function Generation({ generation }: IProps) {
  return (
    <div
      className="w-80 h-80 p-6 bg-green-300 rounded-xl text-white"
      style={Container}
    >
      <div>{generation.name}</div>
      <div>
        {generation.startDate} ~ {generation.endDate}
      </div>
      <div>{generation.place}</div>
    </div>
  );
}

const Container = {
  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(/images/generation-background.png)`,
  // backgroundSize: 'cover',
  backgroundSize: '100% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
};
