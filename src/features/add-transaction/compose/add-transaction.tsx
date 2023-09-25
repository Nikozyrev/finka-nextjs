import { Suspense } from 'react';
import { AddTransactionModal } from '../ui/add-transaction-modal';

export function AddTransaction() {
  return (
    <Suspense>
      <AddTransactionModal />
    </Suspense>
  );
}
