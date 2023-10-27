import GenerationCard from '@/components/main/GenerationCard';
import { Generation } from '@prisma/client';

// import useSWR from 'swr';
// import { useQuery } from '@tanstack/react-query';

export default async function Home({ params }: any) {
  // const { data: generations, isLoading, error } = useSWR('/api/generations');

  // const { data: generations } = useQuery<Generation[]>(
  //   ['/api/generations'],
  //   () => fetch('/api/generations').then((res) => res.json()),
  //   { select: (data) => data },
  // );

  const generations = await fetch('http://127.0.0.1:3000/api/generations', {
    cache: 'force-cache',
  }).then((res) => res.json());

  return (
    <div className="grid grid-cols-2 gap-4">
      {generations &&
        generations.map((generation: Generation) => (
          <GenerationCard key={generation.id} generation={generation} />
        ))}
    </div>
  );
}

export async function generateStaticParams() {
  const generations = await fetch('http://127.0.0.1:3000/api/generations', {
    cache: 'force-cache',
  }).then((res) => res.json());

  return generations.map((generation: Generation) => ({
    id: generation.id.toString(),
  }));
}
