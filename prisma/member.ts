import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const memberData: Prisma.MemberCreateInput[] = [
  {
    name: '영수',
    gender: 'male',
    yearOfBirth: '1982',
    job: '피트니스 사업,미국 변호사',
    school: '미국 로스쿨 졸업,캘리포니아 USC대학 법학박사',
    address: '',
    car: '',
    image: '/images/member/1/1기-영수.png',
    generation: { connect: { id: 1 } },
    sequence: 1,
  },
  {
    name: '영식',
    gender: 'male',
    yearOfBirth: '1989',
    job: '이직 준비 중,과거 금융IT업계 인사업무',
    school: '',
    address: '부천',
    car: '',
    image: '/images/member/1/1기-영식.png',
    generation: { connect: { id: 1 } },
    sequence: 2,
  },
  {
    name: '영철',
    gender: 'male',
    yearOfBirth: '1988',
    job: '축산업,강화도 소농장 1000마리',
    school: '',
    address: '강화도',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 3,
  },
  {
    name: '영호',
    gender: 'male',
    yearOfBirth: '1984',
    job: '성악가,팬텀싱어 출연',
    school: '',
    address: '',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 4,
  },
  {
    name: '정수',
    gender: 'male',
    yearOfBirth: '1989',
    job: '무역업,가구 유통사업',
    school: '',
    address: '일산 거주,고향 청주',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 5,
  },
  {
    name: '종수',
    gender: 'male',
    yearOfBirth: '1990',
    job: '롯데백화점 근무',
    school: '',
    address: '',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 6,
  },
  {
    name: '정식',
    gender: 'male',
    yearOfBirth: '1993',
    job: '삼성전자 반도체 설비 엔지니어',
    school: '',
    address: '',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 7,
  },
  {
    name: '순자',
    gender: 'female',
    yearOfBirth: '1993',
    job: '필라테스 강사, 전 대학병원 응급실 간호사',
    school: '',
    address: '',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 8,
  },
  {
    name: '영숙',
    gender: 'female',
    yearOfBirth: '1994',
    job: '평촌 학원가 영어강사,프리랜서 번역',
    school: '고려대 국제학부 졸업',
    address: '',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 9,
  },
  {
    name: '영순',
    gender: 'female',
    yearOfBirth: '1993',
    job: '이태원 게스트하우스 운영',
    school: '이화여대 졸업',
    address: '',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 10,
  },
  {
    name: '영자',
    gender: 'female',
    yearOfBirth: '1994',
    job: '사진작가,반려동물 스튜디오 운영',
    school: '',
    address: '부산',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 11,
  },
  {
    name: '정숙',
    gender: 'female',
    yearOfBirth: '1994',
    job: '무용수',
    school: '한양대 석사 졸업,현대무용 전공',
    address: '',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 12,
  },
  {
    name: '정순',
    gender: 'female',
    yearOfBirth: '1994',
    job: '쥬얼리 온라인 판매,전 중국 항공승무원',
    school: '',
    address: '천안',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 13,
  },
  {
    name: '정자',
    gender: 'female',
    yearOfBirth: '1996',
    job: '강원도청 소속 펜싱 선수',
    school: '한국 체대',
    address: '강원도 춘천',
    car: '',
    image: '',
    generation: { connect: { id: 1 } },
    sequence: 14,
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
