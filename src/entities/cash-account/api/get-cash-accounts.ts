import { cache } from 'react';
import { prisma } from '@/shared/lib/prisma';
import { getUserInfo } from '@/entities/user';

export const getCashAccounts = cache(async () => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

  const data = await prisma.cashAccount.findMany({
    select: { id: true, name: true, startBalance: true, currency: true },
    where: { userId },
  });

  return data;
});
