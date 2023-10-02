import { prisma } from '@/shared/lib/prisma';
import { ICashAccountData } from '../model/cash-account.model';

export const updateCashAccount = async (account: ICashAccountData) => {
  const { name, startBalance, userId, currencyId, id } = account;

  return prisma.cashAccount.update({
    data: { name, startBalance, currencyId },
    where: { userId, id },
  });
};
