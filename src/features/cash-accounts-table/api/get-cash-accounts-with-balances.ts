import { getCashAccounts } from '@/entities/cash-account';
import { getSumsByAccount } from './get-sums-by-account';
import { ICashAccountFromDb } from '../model/cash-account.mode';

export const getCashAccountsWithBalances = async (): Promise<
  ICashAccountFromDb[]
> => {
  const cashAccounts = await getCashAccounts();
  const accountsMovements = await getSumsByAccount();

  return cashAccounts.map((account) => ({
    ...account,
    currentBalance: account.startBalance.add(
      accountsMovements[account.id] || 0
    ),
  }));
};
