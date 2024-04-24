import { Card } from '@tremor/react';
import { AppTable } from '@/shared/ui/table';
import { IUserTransaction } from '@/entities/transaction';
import { getUserTransactions } from '../api/get-user-transactions';
import {
  transactionsTableColumns,
  transactionsTableColumnsMap,
} from './transactions-table-columns-map';

const renderCell = (tr: IUserTransaction, column: string) =>
  transactionsTableColumnsMap.get(column)?.(tr);

export async function TransactionsTableLayout({
  page,
  perPage,
}: {
  perPage: number;
  page?: number;
}) {
  const transactions = await getUserTransactions({ page, perPage });

  return (
    <Card className="px-3 py-1 h-full">
      <AppTable
        rows={transactions}
        columns={transactionsTableColumns}
        getKey={({ id }) => id}
        renderCell={renderCell}
        headerCellClasses="bg-white p-2 text-base"
        bodyCellClasses="py-1 px-2"
      />
    </Card>
  );
}
