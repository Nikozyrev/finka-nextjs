import { Card, Table, TableBody } from '@tremor/react';
import { getUserTransactions } from '../api/get-user-transactions';
import { TransactionsTableHead } from './transactions-table-head';
import { TransactionsTableRow } from './transactions-table-row';

export const TransactionsTableLayout = async ({
  page,
  perPage,
}: {
  perPage: number;
  page?: number;
}) => {
  const transactions = await getUserTransactions({ page, perPage });

  return (
    <Card className="px-3 py-1 h-full">
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
