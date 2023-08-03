import { prisma } from '../../../lib/prisma';
import { ITransfer } from '../../../models/transfer.model';

export const addTransfer = async (transfer: ITransfer) => {
  const {
    date,
    fromCashAccountId,
    toCashAccountId,
    fromSum,
    toSum,
    userId,
    comment
  } = transfer;
  const categoryId = 'TRANSFER';

  const transaction1 = await prisma.transaction.create({
    data: {
      date,
      cashAccountId: fromCashAccountId,
      sum: fromSum,
      userId,
      comment,
      categoryId
    }
  });

  const transaction2 = await prisma.transaction.create({
    data: {
      date,
      cashAccountId: toCashAccountId,
      sum: toSum,
      userId,
      comment,
      categoryId
    }
  });

  await prisma.transaction.update({
    where: { id: transaction1.id },
    data: { transferId: transaction2.id }
  });

  await prisma.transaction.update({
    where: { id: transaction2.id },
    data: { transferId: transaction1.id }
  });
};
