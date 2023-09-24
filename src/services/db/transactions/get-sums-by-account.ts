import { Decimal } from '@prisma/client/runtime/library';
import { prisma } from '@/shared/lib/prisma';
import { getUserInfo } from '../../user/get-user-info';

export const getSumsByAccount = async () => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) throw new Error('Not Authorized');

  const data = await prisma.transaction.groupBy({
    by: ['cashAccountId'],
    _sum: { sum: true },
    where: { userId },
  });

  return data.reduce(
    (acc, val) => ({
      ...acc,
      [val.cashAccountId]: val._sum.sum || new Decimal(0),
    }),
    {} as { [id: string]: Decimal }
  );
};
