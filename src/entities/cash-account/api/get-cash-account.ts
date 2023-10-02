import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';

export const getCashAccount = cache(
  unstable_cache(
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
  )
);

export const getUserCashAccount = async (id: string) => {
  const userId = await getUserId();

  const account = await getCashAccount(userId, id);

  if (!account) throw new Error('Account not found');

  return account;
};
