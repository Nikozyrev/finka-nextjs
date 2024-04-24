import { AppTable } from '@/shared/ui/table';
import { getCashAccountsWithBalances } from '@/entities/cash-account';
import { cashAccountsColumnsMap } from './cash-accounts-columns-map';

export async function CashAccountsTableLayout() {
  const accountsWithActualBalances = await getCashAccountsWithBalances();

  return (
    <AppTable
      rows={accountsWithActualBalances}
      columns={Array.from(cashAccountsColumnsMap.keys())}
      getKey={({ id }) => id}
      renderCell={(row, column) => cashAccountsColumnsMap.get(column)?.(row)}
    />
  );
}
