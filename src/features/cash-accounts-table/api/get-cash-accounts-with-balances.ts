import { getCashAccounts } from '@/entities/cash-account';
import { getSumsByAccount } from './get-sums-by-account';
import { ICashAccountFromDb } from '../model/cash-account.mode';
import { getUserId } from '@/shared/utils/get-user-info';

export const getCashAccountsWithBalances = async (): Promise<
  ICashAccountFromDb[]
> => {
  const userId = await getUserId();
  const cashAccounts = await getCashAccounts(userId);
  const accountsMovements = await getSumsByAccount();

  return cashAccounts.map((account) => ({
    ...account,
    currentBalance: accountsMovements[account.id]
      ? accountsMovements[account.id].add(account.startBalance).toNumber()
      : account.startBalance,
  }));
};
