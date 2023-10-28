import { Generation, Member } from '@prisma/client';

export interface GenerationWithMembers extends Generation {
  members: Member[];
}
