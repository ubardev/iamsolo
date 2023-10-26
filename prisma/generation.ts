import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generationData: Prisma.GenerationCreateInput[] = [
  {
    name: '1기',
    startDate: new Date('2021-07-14'),
    endDate: new Date('2021-08-25'),
    place: '강원 동해시',
    image: '/images/generation/cover/generation-cover-1.png',
    isDisplay: false,
    sequence: 1,
  },
  {
    name: '2기',
    startDate: new Date('2021-09-01'),
    endDate: new Date('2021-09-29'),
    place: '경남 거제시',
    image: '',
    isDisplay: false,
    sequence: 2,
  },
  {
    name: '3기',
    startDate: new Date('2021-10-06'),
    endDate: new Date('2021-11-10'),
    place: '인천 강화도',
    image: '',
    isDisplay: false,
    sequence: 3,
  },
  {
    name: '4기',
    startDate: new Date('2021-11-17'),
    endDate: new Date('2021-12-22'),
    place: '충남 태안군',
    image: '',
    isDisplay: false,
    sequence: 4,
  },
  {
    name: '5기',
    startDate: new Date('2021-12-29'),
    endDate: new Date('2022-02-02'),
    place: '경기 안산시',
    image: '',
    isDisplay: false,
    sequence: 5,
  },
  {
    name: '6기',
    startDate: new Date('2022-02-09'),
    endDate: new Date('2022-03-30'),
    place: '경기 가평군',
    image: '',
    isDisplay: false,
    sequence: 6,
  },
  {
    name: '7기',
    startDate: new Date('2022-04-06'),
    endDate: new Date('2022-05-11'),
    place: '충북 제천시',
    image: '',
    isDisplay: false,
    sequence: 7,
  },
  {
    name: '8기',
    startDate: new Date('2022-05-18'),
    endDate: new Date('2022-06-22'),
    place: '충남 태안군',
    image: '',
    isDisplay: false,
    sequence: 8,
  },
  {
    name: '9기',
    startDate: new Date('2022-06-29'),
    endDate: new Date('2022-08-17'),
    place: '전북 무주군',
    image: '',
    isDisplay: false,
    sequence: 9,
  },
  {
    name: '10기',
    startDate: new Date('2022-08-24'),
    endDate: new Date('2022-10-26'),
    place: '경북 경주시',
    image: '',
    isDisplay: false,
    sequence: 10,
  },
  {
    name: '11기',
    startDate: new Date('2022-11-02'),
    endDate: new Date('2022-12-14'),
    place: '경기 동두천시',
    image: '',
    isDisplay: false,
    sequence: 11,
  },
  {
    name: '12기',
    startDate: new Date('2022-12-21'),
    endDate: new Date('2023-02-08'),
    place: '경기 여주시',
    image: '',
    isDisplay: false,
    sequence: 12,
  },
  {
    name: '13기',
    startDate: new Date('2023-02-15'),
    endDate: new Date('2023-04-05'),
    place: '충북 청주시',
    image: '',
    isDisplay: false,
    sequence: 13,
  },
  {
    name: '14기',
    startDate: new Date('2023-04-12'),
    endDate: new Date('2023-05-31'),
    place: '강원 평창군',
    image: '',
    isDisplay: false,
    sequence: 14,
  },
  {
    name: '15기',
    startDate: new Date('2023-06-07'),
    endDate: new Date('2023-07-19'),
    place: '19일, 제주특별자치도',
    image: '',
    isDisplay: false,
    sequence: 15,
  },
  {
    name: '16기',
    startDate: new Date('2023-07-26'),
    endDate: new Date('2023-10-04'),
    place: '경상북도 안동시',
    image: '',
    isDisplay: false,
    sequence: 16,
  },
  {
    name: '17기',
    startDate: new Date('2023-10-11'),
    endDate: new Date('9999-12-31'),
    place: '경상남도 거창군',
    image: '',
    isDisplay: false,
    sequence: 17,
  },
];

async function main() {
  await prisma.generation.deleteMany({});

  for (const data of generationData) {
    const generation = await prisma.generation.create({
      data,
    });
    console.log(`Created id: ${generation.id}`);
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
