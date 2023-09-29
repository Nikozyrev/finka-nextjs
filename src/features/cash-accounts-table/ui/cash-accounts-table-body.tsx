import { TableBody } from '@tremor/react';
import { getCashAccountsWithBalances } from '../api/get-cash-accounts-with-balances';
import { CashAccountsTableRow } from './cash-accounts-table-row';

export async function CashAccountsTableBody() {
  const accountsWithActualBalances = await getCashAccountsWithBalances();
  const sortedAccounts = accountsWithActualBalances;

  return (
    <TableBody>
      {sortedAccounts.map((account) => (
        <CashAccountsTableRow key={account.id} {...account} />
      ))}
    </TableBody>
  );
}
