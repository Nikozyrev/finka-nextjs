import { TransactionType } from '@prisma/client';
import { prisma } from '@/shared/lib/prisma';
import { ITransfer } from '../model/transfer.model';

export const addTransfer = async (transfer: ITransfer) => {
  const {
    date,
    fromCashAccountId,
    toCashAccountId,
    fromSum,
    toSum,
    userId,
    comment,
  } = transfer;
  const type = TransactionType.INTERNAL;

  const transaction1 = await prisma.transaction.create({
    data: {
      date,
      type,
      cashAccountId: fromCashAccountId,
      sum: fromSum,
      userId,
      comment,
    },
  });

  const transaction2 = await prisma.transaction.create({
    data: {
      date,
      type,
      cashAccountId: toCashAccountId,
      sum: toSum,
      userId,
      comment,
    },
  });

  await prisma.transaction.update({
    where: { id: transaction1.id },
    data: { transferId: transaction2.id },
  });

  await prisma.transaction.update({
    where: { id: transaction2.id },
    data: { transferId: transaction1.id },
  });
};
