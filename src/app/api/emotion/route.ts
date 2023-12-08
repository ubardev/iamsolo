import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { NextRequest, NextResponse } from 'next/server';
import { convertLength } from '@mui/material/styles/cssUtils';

const prisma = new PrismaClient();

async function updateLikeMember(
  userId: string,
  generationId: number,
  memberId: string,
) {
  try {
    // 원래 DB에 담겨있던 likeMember 조회
    const likeMember = await prisma.likeMember.findUnique({
      where: {
        userId,
        generationId,
      },
    });

    // 조회한 likeMember 배열로 변환, 조회된 값이 없으면 빈 배열 생성
    const originalLikeMembers =
      likeMember?.memberIds != null && likeMember.memberIds !== ''
        ? likeMember.memberIds.split(',')
        : [];

    // 이미 저장되어 있던 likeMember 값이 있이면 좋아요 했던 상태임
    const isLiked = originalLikeMembers.includes(String(memberId));

    // 이미 좋아요 상태면 제거 좋아요 상태 아니면 배열에 추가
    const newLikeMember = isLiked
      ? originalLikeMembers.filter((id) => id !== String(memberId))
      : [...originalLikeMembers, String(memberId)];

    const response = await prisma.likeMember.upsert({
      where: {
        userId,
        generationId,
      },
      update: {
        memberIds: newLikeMember.join(','),
      },
      create: {
        userId,
        generationId,
        memberIds: newLikeMember.join(','),
      },
    });

    const member = await prisma.member.findUnique({
      where: {
        id: Number(memberId),
      },
    });

    const memberResponse = await prisma.member.update({
      where: {
        id: Number(memberId),
      },
      data: {
        likeCount: (member?.likeCount || 0) + (isLiked ? -1 : 1),
      },
    });

    return response?.memberIds?.split(',');
  } catch (error) {
    console.error(error);
  }
}

async function updateDislikeMember(
  userId: string,
  generationId: number,
  memberId: string,
) {
  try {
    // 원래 DB에 담겨있던 likeMember 조회
    const dislikeMember = await prisma.dislikeMember.findUnique({
      where: {
        userId,
        generationId,
      },
    });

    // 조회한 likeMember 배열로 변환, 조회된 값이 없으면 빈 배열 생성
    const originalDislikeMembers =
      dislikeMember?.memberIds != null && dislikeMember.memberIds !== ''
        ? dislikeMember.memberIds.split(',')
        : [];

    // 이미 저장되어 있던 likeMember 값이 있이면 좋아요 했던 상태임
    const isLiked = originalDislikeMembers.includes(String(memberId));

    // 이미 좋아요 상태면 제거 좋아요 상태 아니면 배열에 추가
    const newDislikeMember = isLiked
      ? originalDislikeMembers.filter((id) => id !== String(memberId))
      : [...originalDislikeMembers, String(memberId)];

    const response = await prisma.dislikeMember.upsert({
      where: {
        userId,
        generationId,
      },
      update: {
        memberIds: newDislikeMember.join(','),
      },
      create: {
        userId,
        generationId,
        memberIds: newDislikeMember.join(','),
      },
    });

    const member = await prisma.member.findUnique({
      where: {
        id: Number(memberId),
      },
    });

    const memberResponse = await prisma.member.update({
      where: {
        id: Number(memberId),
      },
      data: {
        dislikeCount: (member?.dislikeCount || 0) + (isLiked ? -1 : 1),
      },
    });

    return response?.memberIds?.split(',');
  } catch (error) {
    console.error(error);
  }
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error', { status: 401 });
  }

  const { emotionType, generationId, memberId } = await req.json();

  const request =
    emotionType === 'like' ? updateLikeMember : updateDislikeMember;

  return request(session.id, generationId, memberId) //
    .then((res) => NextResponse.json(res))
    .catch((error) => new Response(JSON.stringify(error), { status: 500 }));
}
