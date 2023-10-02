import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface SessionUser {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  interface Session {
    user: SessionUser;
  }
}
