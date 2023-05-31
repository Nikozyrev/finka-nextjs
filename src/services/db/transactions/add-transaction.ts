import { prisma } from '../../../lib/prisma';
import { ITransaction } from '../../../models/transaction.model';

export const addTransaction = async (transaction: ITransaction) => {
  const { date, sum, comment, cashAccountId, categoryId, userId } = transaction;
  if (!cashAccountId || !userId || !categoryId) return;

  return prisma.transaction.create({
    data: {
      date,
      sum,
      categoryId,
      cashAccountId,
      userId,
      comment
    }
  });
};
