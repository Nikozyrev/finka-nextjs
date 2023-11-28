import { ICashAccountFromDb } from '../model/cash-account.model';
import { getUserCashAccounts } from './get-cash-accounts';
import { getUserSumsByAccount } from './get-sums-by-account';

export const getCashAccountsWithBalances = async (): Promise<
  ICashAccountFromDb[]
> => {
  const cashAccounts = await getUserCashAccounts();
  const accountsMovements = await getUserSumsByAccount();

  return cashAccounts.map((account) => ({
    ...account,
    currentBalance: accountsMovements[account.id]
      ? accountsMovements[account.id].add(account.startBalance).toNumber()
      : account.startBalance,
  }));
};
