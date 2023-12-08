import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

const prisma = new PrismaClient();

type Context = {
  params: { generationId: string };
};

async function getMyEmotions(userId: string, generationId: number) {
  try {
    const myLikeMembersResponse = await prisma.likeMember.findUnique({
      where: { userId, generationId },
      select: {
        memberIds: true,
      },
    });

    const myDislikeMembersResponse = await prisma.dislikeMember.findUnique({
      where: { userId, generationId },
      select: {
        memberIds: true,
      },
    });

    return {
      myLikeMembers: myLikeMembersResponse
        ? myLikeMembersResponse.memberIds
        : '',
      myDislikeMembers: myDislikeMembersResponse
        ? myDislikeMembersResponse.memberIds
        : '',
    };
  } catch (error) {
    console.error(error);
  }
}

export async function GET(_: NextRequest, context: Context) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return NextResponse.json({
      myLikeMembers: '',
      myDislikeMembers: '',
    });
  }

  const emotions = await getMyEmotions(
    session?.id,
    Number(context.params.generationId),
  );
  return NextResponse.json(emotions);
}
