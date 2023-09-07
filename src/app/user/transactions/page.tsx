import { Suspense } from 'react';
import { TransactionsList } from '@/components/transactions/transactions-list';

export default async function TransactionsPage() {
  return (
    <>
      <Suspense fallback={'Suspense Loading...'}>
        <TransactionsList />
      </Suspense>
    </>
  );
}
