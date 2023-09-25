import { Card, Table, TableBody } from '@tremor/react';
import { getUserTransactions } from '../api/get-user-transactions';
import { TransactionsTableHead } from './transactions-table-head';
import { TransactionsTableRow } from './transactions-table-row';

export const TransactionsTableLayout = async ({ page }: { page?: number }) => {
  const transactions = await getUserTransactions({ page });

  return (
    <Card className="p-4 h-full">
      <Table className="h-full">
        <TransactionsTableHead />
        <TableBody>
          {transactions.map((tr) => (
            <TransactionsTableRow key={tr.id} tr={tr} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
