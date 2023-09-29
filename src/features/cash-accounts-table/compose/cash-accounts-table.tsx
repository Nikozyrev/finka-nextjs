import { Suspense } from 'react';
import { CashAccountsTableLoading } from '../ui/cash-accounts-table-loading';
import { CashAccountsTableLayout } from '../ui/cash-accounts-table-layout';

export const CashAccountsTable = () => {
  return (
    <Suspense fallback={<CashAccountsTableLoading />}>
      <CashAccountsTableLayout />
    </Suspense>
  );
};
