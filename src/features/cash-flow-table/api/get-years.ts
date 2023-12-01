import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { Prisma } from '@prisma/client';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';

const getYears = cache(
  unstable_cache(
    async (userId: string) => {
      const data = await prisma.$queryRaw<{ year: number }[]>(
        Prisma.sql([
          `SELECT DISTINCT YEAR(date) AS year
        FROM transactions
        WHERE user_id = '${userId}';`,
        ])
      );
      console.log('years', data.length);

      return data.map(({ year }) => year);
    },
    [],
    { tags: ['transactions'] }
  )
);

export const getTransactionsYears = async () => {
  const userId = await getUserId();
  return getYears(userId);
};
