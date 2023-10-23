import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generationData: Prisma.GenerationCreateInput[] = [
  {
    sequence: 1,
    name: '1기',
    startDate: '20210714',
    endDate: '20210825',
    place: '강원 동해시',
    image: '/images/generation/generation-1.png',
  },
  {
    sequence: 2,
    name: '2기',
    startDate: '20210901',
    endDate: '20210929',
    place: '경남 거제시',
    image: '',
  },
  {
    sequence: 3,
    name: '3기',
    startDate: '20211006',
    endDate: '20211110',
    place: '인천 강화도',
    image: '',
  },
  {
    sequence: 4,
    name: '4기',
    startDate: '20211117',
    endDate: '20211222',
    place: '충남 태안군',
    image: '',
  },
  {
    sequence: 5,
    name: '5기',
    startDate: '20211229',
    endDate: '20220202',
    place: '경기 안산시',
    image: '',
  },
  {
    sequence: 6,
    name: '6기',
    startDate: '20220209',
    endDate: '20220330',
    place: '경기 가평군',
    image: '',
  },
  {
    sequence: 7,
    name: '7기',
    startDate: '20220406',
    endDate: '20220511',
    place: '충북 제천시',
    image: '',
  },
  {
    sequence: 8,
    name: '8기',
    startDate: '20220518',
    endDate: '20220622',
    place: '충남 태안군',
    image: '',
  },
  {
    sequence: 9,
    name: '9기',
    startDate: '20220629',
    endDate: '20220817',
    place: '전북 무주군',
    image: '',
  },
  {
    sequence: 10,
    name: '10기',
    startDate: '20220824',
    endDate: '20221026',
    place: '경북 경주시',
    image: '',
  },
  {
    sequence: 11,
    name: '11기',
    startDate: '20221102',
    endDate: '20221214',
    place: '경기 동두천시',
    image: '',
  },
  {
    sequence: 12,
    name: '12기',
    startDate: '20221221',
    endDate: '20230208',
    place: '경기 여주시',
    image: '',
  },
  {
    sequence: 13,
    name: '13기',
    startDate: '20230215',
    endDate: '20230405',
    place: '충북 청주시',
    image: '',
  },
  {
    sequence: 14,
    name: '14기',
    startDate: '20230412',
    endDate: '20230531',
    place: '강원 평창군',
    image: '',
  },
  {
    sequence: 15,
    name: '15기',
    startDate: '20230607',
    endDate: '20230719',
    place: '19일, 제주특별자치도',
    image: '',
  },
  {
    sequence: 16,
    name: '16기',
    startDate: '20230726',
    endDate: '20231004',
    place: '경상북도 안동시',
    image: '',
  },
  {
    sequence: 17,
    name: '17기',
    startDate: '20231011',
    endDate: '99999999',
    place: '경상남도 거창군',
    image: '',
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
