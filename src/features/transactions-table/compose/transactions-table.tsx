import { Suspense } from 'react';
import { TransactionsTableLoading } from '../ui/transactions-table-loading';
import { TransactionsTableLayout } from '../ui/transactions-table-layout';
import { TransactionsTablePagination } from '../ui/transactions-table-pagination';

export function TransactionsTable({ page }: { page?: number }) {
  const perPage = 15;

  return (
    <>
      <Suspense
        key={page}
        fallback={<TransactionsTableLoading perPage={perPage} />}
      >
        <TransactionsTableLayout page={page} perPage={perPage} />
      </Suspense>
      <TransactionsTablePagination currentPage={page ?? 0} perPage={perPage} />
    </>
  );
}
