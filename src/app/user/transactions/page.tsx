import { Suspense } from 'react';
import { TransactionsList } from '../../../components/transactions/transactions-list';

export default async function TransactionsPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <TransactionsList />
      </Suspense>
    </main>
  );
}
