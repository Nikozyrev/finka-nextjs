import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';

export const getCashAccounts = cache(
  unstable_cache(
    async (userId: string) => {
      const data = await prisma.cashAccount.findMany({
        select: { id: true, name: true, startBalance: true, currency: true },
        where: { userId },
      });

      return data.map((account) => ({
        ...account,
        startBalance: account.startBalance.toNumber(),
      }));
    },
    ['user_accounts'],
    { tags: ['accounts'] }
  )
);

export const getUserCashAccounts = async () => {
  const userId = await getUserId();

  const accounts = await getCashAccounts(userId);

  return accounts;
};
