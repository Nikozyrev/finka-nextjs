import { prisma } from '@/lib/prisma';
import { getUserInfo } from '../../user/get-user-info';

export const getTransactions = async () => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

  const data = await prisma.transaction.findMany({
    select: {
      id: true,
      date: true,
      sum: true,
      comment: true,
      cashAccount: true,
      category: true,
    },
    where: { userId },
    orderBy: { date: 'desc' },
  });

  return data;
};
