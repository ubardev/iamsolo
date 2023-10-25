import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Context = {
  params: { id: string };
};

async function getGeneration(id: number) {
  try {
    return await prisma.generation.findUnique({
      where: { id },
      include: { members: true },
    });
  } catch (error) {
    console.error(error);
  }
}

export async function GET(_: NextRequest, context: Context) {
  const generation = await getGeneration(Number(context.params.id));
  return NextResponse.json(generation);
}
