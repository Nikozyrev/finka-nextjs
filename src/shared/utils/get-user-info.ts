import { cache } from 'react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/shared/lib/next-auth';

export const getUserInfo = cache(async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user ?? null;
  return user;
});

export const getUserId = async () => {
  const user = await getUserInfo();

  if (!user) throw new Error('Not authorized');

  return user.id;
};
