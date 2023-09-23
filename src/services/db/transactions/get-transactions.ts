import { prisma } from '@/lib/prisma';

export const getTransactions = async ({ userId }: { userId: string }) => {
  const data = await prisma.transaction.findMany({
    select: {
      id: true,
      date: true,
      type: true,
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
