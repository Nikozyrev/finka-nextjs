import { Suspense } from 'react';
import { TransactionsList } from '@/components/transactions/transactions-list';
import { Spinner } from '@/components/ui/spinner';

export default async function TransactionsPage() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <TransactionsList />
      </Suspense>
    </>
  );
}
