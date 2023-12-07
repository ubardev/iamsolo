import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Context = {
  params: { id: string };
};

async function getEmotionCount(id: number) {
  try {
    return await prisma.member.findMany({
      where: { generationId: id },
      select: {
        id: true,
        likeCount: true,
        dislikeCount: true,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function GET(_: NextRequest, context: Context) {
  const emotionCounts = await getEmotionCount(Number(context.params.id));

  const emotionCountsObject = emotionCounts?.reduce(
    (object, likeCount) => ({
      ...object,
      [likeCount.id]: {
        likeCount: likeCount.likeCount,
        dislikeCount: likeCount.dislikeCount,
      },
    }),
    {},
  );

  return NextResponse.json(emotionCountsObject);
}
