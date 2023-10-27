import GenerationCard from '@/components/main/GenerationCard';
import { Generation } from '@prisma/client';

// import useSWR from 'swr';
// import { useQuery } from '@tanstack/react-query';
const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://iamsolo.vercel.app';

export default async function Home({ params }: any) {
  // const { data: generations, isLoading, error } = useSWR('/api/generations');

  // const { data: generations } = useQuery<Generation[]>(
  //   ['/api/generations'],
  //   () => fetch('/api/generations').then((res) => res.json()),
  //   { select: (data) => data },
  // );

  const generations = await fetch(`${API_URL}/api/generations`).then((res) =>
    res.json(),
  );

  return (
    <div className="grid grid-cols-2 gap-4">
      {generations &&
        generations.map((generation: Generation) => (
          <GenerationCard key={generation.id} generation={generation} />
        ))}
    </div>
  );
}
