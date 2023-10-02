import { unstable_cache } from 'next/cache';
import { prisma } from '@/shared/lib/prisma';

export const getCashAccount = unstable_cache(
  async (userId: string, id: string) => {
    const data = await prisma.cashAccount.findUnique({
      select: { id: true, name: true, startBalance: true, currency: true },
      where: { userId, id },
    });

    return data
      ? { ...data, startBalance: data.startBalance.toNumber() }
      : null;
  },
  ['user_account'],
  { tags: ['accounts'] }
);
