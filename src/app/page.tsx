import Generation from '@/components/main/Generation';
import { generations } from './api/data/generations';

export default function Home() {
  const data = generations.sort((prev, next) => next.sequence - prev.sequence);

  return (
    <div className="p-6 flex justify-center gap-2 flex-wrap">
      {data.map((item) => (
        <Generation key={item.id} generation={item} />
      ))}
    </div>
  );
}
