import { Suspense } from 'react';
import { AddCashAccountModal } from '../ui/add-cash-account-modal';
import { AddCashAccountLoading } from '../ui/add-cash-account-loading';

export async function AddCashAccount() {
  return (
    <Suspense fallback={<AddCashAccountLoading />}>
      <AddCashAccountModal />
    </Suspense>
  );
}
