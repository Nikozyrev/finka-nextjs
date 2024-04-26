'use server';

import { addCashAccount } from '@/entities/cash-account';
import { getUserId } from '@/shared/utils/get-user-info';
import { Decimal } from '@prisma/client/runtime/library';
import { revalidateTag } from 'next/cache';

export const addCashAccountAction = async ({
  name,
  startBalance,
  currencyId,
}: {
  name: string;
  startBalance: string;
  currencyId: string;
}) => {
  const userId = await getUserId();

  const startBalanceNum = Number(startBalance);

  await addCashAccount({
    name,
    userId,
    startBalance: Number.isNaN(startBalanceNum)
      ? new Decimal(0)
      : new Decimal(startBalanceNum),
    currencyId: Number(currencyId),
  });

  revalidateTag('accounts');
};
