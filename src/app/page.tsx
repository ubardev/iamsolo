'use client';

import useSWR from 'swr';
import GenerationCard from '@/components/main/GenerationCard';
import { Generation } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  // const { data: generations, isLoading, error } = useSWR('/api/generations');

  const { data: generations } = useQuery<Generation[]>(
    ['/api/generations'],
    () => fetch('/api/generations').then((res) => res.json()),
    { select: (data) => data },
  );

  return (
    // <div className="p-6 flex justify-center gap-2 flex-wrap">
    <div className="grid grid-cols-2 gap-4">
      {generations &&
        generations.map((generation: Generation) => (
          <GenerationCard key={generation.id} generation={generation} />
        ))}
    </div>
  );
}
