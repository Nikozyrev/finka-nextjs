import { Card } from '@tremor/react';
import { AppTable } from '@/shared/ui/table';
import { CellSkeleton } from '@/shared/ui/cell-skeleton';
import { transactionsTableColumns } from './transactions-table-columns-map';

const renderCell = () => <CellSkeleton />;

export function TransactionsTableLoading({ perPage }: { perPage: number }) {
  const transactions = Array.from({ length: perPage }, (_, i) => i);

  return (
    <Card className="px-3 py-1 h-full">
      <AppTable
        rows={transactions}
        columns={transactionsTableColumns}
        getKey={(i) => i}
        renderCell={renderCell}
        headerCellClasses="bg-white p-2 text-base"
        bodyCellClasses="py-2 px-2"
      />
    </Card>
  );
}
