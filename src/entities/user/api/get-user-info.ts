import { cache } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/shared/lib/next-auth';
import { IUser } from '../model/user.model';

export const getUserInfo = cache(async (): Promise<IUser | null> => {
  const session = await getServerSession(authOptions);
  const user = session?.user ?? null;
  return user;
});
