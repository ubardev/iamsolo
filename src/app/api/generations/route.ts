import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getGenerations() {
  return null;
  // try {
  //   return await prisma.generation.findMany({
  //     where: { isDisplay: true },
  //     orderBy: { sequence: 'desc' },
  //   });
  // } catch (error) {
  //   console.error(error);
  // }
}

export async function GET() {
  const generations = await getGenerations();
  return NextResponse.json(generations);
}
