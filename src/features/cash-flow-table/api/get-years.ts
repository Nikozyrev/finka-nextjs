import { Prisma } from '@prisma/client';
import { prisma } from '@/shared/lib/prisma';
import { getUserInfo } from '@/entities/user';

export const getTransactionsYears = async () => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

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
