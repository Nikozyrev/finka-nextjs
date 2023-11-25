import { TableBody } from '@tremor/react';
import { getCashAccountsWithBalances } from '@/entities/cash-account';
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
