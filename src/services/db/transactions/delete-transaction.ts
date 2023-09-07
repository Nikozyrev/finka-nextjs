import { Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export const deleteTransaction = async (id: string) => {
  if (!id) return;

  await prisma.$queryRaw(
    Prisma.sql([
      `DELETE FROM transactions WHERE id = '${id}' OR transfer_id = '${id}'`
    ])
  );
};
