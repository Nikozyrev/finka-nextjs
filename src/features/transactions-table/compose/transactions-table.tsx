import { Suspense } from 'react';
import { TransactionsTableLoading } from '../ui/transactions-table-loading';
import { TransactionsTableLayout } from '../ui/transactions-table-layout';

export const TransactionsTable = async () => {
  return (
    <Suspense fallback={<TransactionsTableLoading />}>
      <TransactionsTableLayout />
    </Suspense>
  );
};