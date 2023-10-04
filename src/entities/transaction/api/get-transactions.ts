import { prisma } from '@/shared/lib/prisma';

export const getTransactions = async ({
  skip,
  take,
  userId,
}: {
  take?: number;
  skip?: number;
  userId: string;
}) => {
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
    skip,
    take,
    where: { userId },
    orderBy: [{ date: 'desc' }, { createdAt: 'desc' }],
  });
  console.log('get transactions', data.length);

  return data;
};
