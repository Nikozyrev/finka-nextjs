'use server';

import { cache } from 'react';
import { Decimal } from '@prisma/client/runtime/library';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';

export const getSumsByAccount = cache(async (userId: string) => {
  const data = await prisma.transaction.groupBy({
    by: ['cashAccountId'],
    _sum: { sum: true },
    where: { userId },
  });

  console.log('get sums by accounts', data.length);

  return data.reduce(
    (acc, val) => ({
      ...acc,
      [val.cashAccountId]: val._sum.sum || new Decimal(0),
    }),
    {} as { [id: string]: Decimal }
  );
});

export const getUserSumsByAccount = async () => {
  const userId = await getUserId();
  return getSumsByAccount(userId);
};
