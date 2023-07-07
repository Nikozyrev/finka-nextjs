import { prisma } from '../../../lib/prisma';

export const deleteTransaction = async (id: string) => {
  if (!id) return;

  return prisma.transaction.delete({
    where: { id }
  });
};
