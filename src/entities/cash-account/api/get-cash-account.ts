import { cache } from 'react';
import { prisma } from '@/shared/lib/prisma';

export const getCashAccount = cache(async (userId: string, id: string) => {
  const data = await prisma.cashAccount.findUnique({
    select: { id: true, name: true, startBalance: true, currency: true },
    where: { userId, id },
  });

  return data;
});
