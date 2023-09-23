import { Suspense } from 'react';
import { Spinner } from '@/components/ui/spinner';
import { TransactionsTable } from '@/components/transactions/table/transactions-table';

export default async function TransactionsPage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <TransactionsTable />
      </Suspense>
    </>
  );
}
