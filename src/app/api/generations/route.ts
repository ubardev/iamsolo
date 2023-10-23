import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getGenerations() {
  try {
    return await prisma.generation.findMany({});
  } catch (error) {
    console.error(error);
  }
}

export async function GET() {
  const generations = await getGenerations();
  return NextResponse.json(generations);
}
