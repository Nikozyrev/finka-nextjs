import { Suspense } from 'react';
import { AddTransactionModal } from '../ui/add-transaction-modal';
import { AddTransactionTabs } from '../ui/add-transaction-tabs';

export function AddTransaction() {
  return (
    <Suspense>
      <AddTransactionModal form={<AddTransactionTabs />} />
    </Suspense>
  );
}
