import { prisma } from '@/shared/lib/prisma';
import { ICashAccount } from '../model/cash-account.model';

export const addCashAccount = async (account: ICashAccount) => {
  const { name, startBalance, userId, currencyId } = account;
  if (!name || !userId) return;

  return prisma.cashAccount.create({
    data: { name, userId, startBalance, currencyId },
  });
};