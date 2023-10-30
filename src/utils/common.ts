import dayjs from 'dayjs';
import { Member } from '@prisma/client';

interface IProps {
  startDate: Date;
  member: Member;
}

export const getMemberTags = ({ startDate, member }: IProps) => {
  const { yearOfBirth, job, school, address, car, moreInfo } = member;
  let result: String[] = [];

  setItems(result, getAge(startDate, yearOfBirth));
  setItems(result, job);
  setItems(result, school);
  setItems(result, address);
  setItems(result, car);
  setItems(result, moreInfo);

  return result;
};

function getAge(startDate: Date, yearOfBirth: string | null) {
  if (!startDate || !yearOfBirth) return null;

  const startYearToDate = dayjs(startDate);
  const yearOfBirthToDate = dayjs(yearOfBirth);
  const onlyTwoNumberYearOfBirth = yearOfBirth.substring(2, 4);

  return `${startYearToDate.diff(
    yearOfBirthToDate,
    'year',
  )}세(${onlyTwoNumberYearOfBirth}년생)`;
}

function setItems(target: String[], items: String | null) {
  if (!items) return;

  items.split(',').map((item: string) => target.push(item));
}
