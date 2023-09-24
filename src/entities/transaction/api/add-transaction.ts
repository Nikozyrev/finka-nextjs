import { TransactionType } from '@prisma/client';
import { prisma } from '@/shared/lib/prisma';
import { ITransaction } from '@/entities/transaction';

export const addTransaction = async (transaction: ITransaction) => {
  const { date, sum, comment, cashAccountId, categoryId, userId } = transaction;
  if (!cashAccountId || !userId || !categoryId) return;

  return prisma.transaction.create({
    data: {
      type: TransactionType.EXTERNAL,
      date,
      sum,
      categoryId,
      cashAccountId,
      userId,
      comment,
    },
  });
};
