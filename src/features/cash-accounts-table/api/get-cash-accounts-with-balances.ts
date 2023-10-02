import { getCashAccounts } from '@/entities/cash-account';
import { getSumsByAccount } from './get-sums-by-account';
import { ICashAccountFromDb } from '../model/cash-account.mode';
import { getUserInfo } from '@/entities/user';

export const getCashAccountsWithBalances = async (): Promise<
  ICashAccountFromDb[]
> => {
  const user = await getUserInfo();
  if (!user) throw new Error('Not authorized');
  const cashAccounts = await getCashAccounts(user.id);
  const accountsMovements = await getSumsByAccount();

  return cashAccounts.map((account) => ({
    ...account,
    currentBalance: accountsMovements[account.id]
      ? accountsMovements[account.id].add(account.startBalance).toNumber()
      : account.startBalance,
  }));
};
