import { getUserCashAccounts } from '@/entities/cash-account';
import { getSumsByAccount } from './get-sums-by-account';
import { ICashAccountFromDb } from '../model/cash-account.mode';

export const getCashAccountsWithBalances = async (): Promise<
  ICashAccountFromDb[]
> => {
  const cashAccounts = await getUserCashAccounts();
  const accountsMovements = await getSumsByAccount();

  return cashAccounts.map((account) => ({
    ...account,
    currentBalance: accountsMovements[account.id]
      ? accountsMovements[account.id].add(account.startBalance).toNumber()
      : account.startBalance,
  }));
};
