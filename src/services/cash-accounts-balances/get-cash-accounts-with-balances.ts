import { getCashAccounts } from '../db/cash-accounts/get-cash-accounts';
import { getSumsByAccount } from '../db/transactions/get-sums-by-account';

export const getCashAccountsWithBalances = async () => {
  const cashAccounts = await getCashAccounts();
  const accountsMovements = await getSumsByAccount();

  return cashAccounts.map((account) => ({
    ...account,
    currentBalance: account.startBalance.add(accountsMovements[account.id])
  }));
};
