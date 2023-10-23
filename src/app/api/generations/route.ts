import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getCategories() {
  try {
    return await prisma.categories.findMany({});
  } catch (error) {
    console.error(error);
  }
}

export async function GET() {
  const categories = await getCategories();
  return NextResponse.json(categories);
}
