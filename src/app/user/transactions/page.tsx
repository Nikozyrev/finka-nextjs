import { Suspense } from 'react';
import { TransactionsList } from '../../../components/transactions/transactions-list';

export default async function TransactionsPage() {
  return (
    <>
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <TransactionsList />
      </Suspense>
    </>
  );
}
