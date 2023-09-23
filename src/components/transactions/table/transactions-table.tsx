import { Card, Table, TableBody } from '@tremor/react';
import { getUserTransactions } from '@/services/user/transactions/get-user-transactions';
import { TransactionsTableHead } from './transactions-table-head';
import { TransactionsTableRow } from './transactions-table-row';

export const TransactionsTable = async () => {
  const transactions = await getUserTransactions();

  return (
    <Card className="p-4">
      <Table>
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
