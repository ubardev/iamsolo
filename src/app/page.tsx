import GenerationCard from '@/components/main/GenerationCard';
import { API_URL } from '@/constants/common';
import { Generation } from '@prisma/client';

// import useSWR from 'swr';
// import { useQuery } from '@tanstack/react-query';

export default async function Home() {
  // const { data: generations, isLoading, error } = useSWR('/api/generations');

  // const { data: generations } = useQuery<Generation[]>(
  //   ['/api/generations'],
  //   () => fetch('/api/generations').then((res) => res.json()),
  //   { select: (data) => data },
  // );

  const generations: Generation[] = await fetch(`${API_URL}/api/generations`, {
    cache: 'no-store',
  }).then((res) => res.json());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-screen-md">
      {generations &&
        generations.map((generation: Generation) => (
          <GenerationCard key={generation.id} generation={generation} />
        ))}
    </div>
  );
}
