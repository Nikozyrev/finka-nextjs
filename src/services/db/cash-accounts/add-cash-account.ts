import { prisma } from '../../../lib/prisma';
import { ICashAccount } from '../../../models/cash-account.model';

export const addCashAccount = async (account: ICashAccount) => {
  const { name, startBalance, userId } = account;
  if (!name || !userId) return;

  return prisma.cashAccount.create({ data: { name, userId, startBalance } });
};
