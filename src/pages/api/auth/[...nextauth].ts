import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvidor from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvidor({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  session: {
    strategy: 'database',
    maxAge: 1 * 24 * 60 * 60,
  },
  callbacks: {
    session: async ({ session, user }) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
export default NextAuth(authOptions);
