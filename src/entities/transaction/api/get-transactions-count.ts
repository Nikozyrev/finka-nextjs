import { prisma } from '@/shared/lib/prisma';
import { unstable_cache } from 'next/cache';

export const getTransactionsCount = unstable_cache(
  async (userId: string) => {
    const count = await prisma.transaction.count({ where: { userId } });

    return count;
  },
  ['user_tr_count'],
  { tags: ['user_tr_count'] }
);
