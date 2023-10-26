import { Member } from '@prisma/client';

export const getMemberTags = (member: Member) => {
  const { yearOfBirth, job, school, address, car } = member;
  let result: String[] = [`${yearOfBirth}년생` || ''];

  setItems(result, job);
  setItems(result, school);
  setItems(result, address);
  setItems(result, car);

  return result;
};

function setItems(target: String[], items: String | null) {
  if (!items) return;
  items.split(',').map((item: string) => target.push(item));
}
