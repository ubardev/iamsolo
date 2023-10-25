import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const memberData: Prisma.MemberCreateInput[] = [
  {
    name: '영수',
    generation: { connect: { id: 1 } },
    image: '',
    sequence: 1,
  },
];

async function main() {
  await prisma.member.deleteMany({});

  for (const data of memberData) {
    const member = await prisma.member.create({
      data,
    });
    console.log(`Created id: ${member.id}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
