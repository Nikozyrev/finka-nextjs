import { prisma } from '@/shared/lib/prisma';

export const getTransactionsTable = async ({ userId }: { userId: string }) => {
  const data = await prisma.transaction.findMany({
    where: { userId },
    orderBy: [{ date: 'desc' }, { createdAt: 'desc' }],
  });
  console.log('get transactions', data.length);

  return data;
};
