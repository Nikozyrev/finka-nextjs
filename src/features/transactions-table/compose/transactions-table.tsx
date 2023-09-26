import { Suspense } from 'react';
import { TransactionsTableLoading } from '../ui/transactions-table-loading';
import { TransactionsTableLayout } from '../ui/transactions-table-layout';
import { TransactionsTablePagination } from '../ui/transactions-table-pagination';

export const TransactionsTable = async ({ page }: { page?: number }) => {
  const perPage = 15;

  return (
    <Suspense fallback={<TransactionsTableLoading />}>
      <TransactionsTableLayout page={page} perPage={perPage} />
      <TransactionsTablePagination currentPage={page ?? 0} perPage={perPage} />
    </Suspense>
  );
};
