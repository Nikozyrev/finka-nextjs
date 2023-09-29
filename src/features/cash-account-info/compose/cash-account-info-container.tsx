import { Suspense } from 'react';
import { CashAccountInfo } from '../ui/cash-account-info';
import { CashAccountInfoLoading } from '../ui/cash-account-info-loading';

export function CashAccountInfoContainer({ id }: { id: string }) {
  return (
    <Suspense fallback={<CashAccountInfoLoading />}>
      <CashAccountInfo id={id} />
    </Suspense>
  );
}
