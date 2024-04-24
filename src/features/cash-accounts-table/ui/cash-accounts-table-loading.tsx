import { AppTable } from '@/shared/ui/table';
import { cashAccountsColumnsMap } from './cash-accounts-columns-map';
import { CellSkeleton } from '@/shared/ui/cell-skeleton';

const loadingAccountsData = Array.from({ length: 10 }, (_, i) => i);

export function CashAccountsTableLoading() {
  return (
    <AppTable
      rows={loadingAccountsData}
      columns={Array.from(cashAccountsColumnsMap.keys())}
      getKey={(i) => i}
      renderCell={(row, column) => <CellSkeleton />}
    />
  );
}
