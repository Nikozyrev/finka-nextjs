import { Prisma } from '@prisma/client';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';

export const getTransactionsYears = async () => {
  const userId = await getUserId();

  const data = await prisma.$queryRaw<{ year: number }[]>(
    Prisma.sql([
      `SELECT YEAR(date) AS year
      FROM transactions
      WHERE user_id = '${userId}'
      GROUP BY year;`,
    ])
  );

  return data.map(({ year }) => year);
};
