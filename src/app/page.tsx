'use client';

import useSWR from 'swr';
import Generation from '@/components/main/Generation';

export default function Home() {
  const { data: generations, isLoading, error } = useSWR('/api/generations');

  return (
    <div className="p-6 flex justify-center gap-2 flex-wrap">
      {generations &&
        generations.map((generation: any) => (
          <Generation key={generation.id} generation={generation} />
        ))}
    </div>
  );
}
