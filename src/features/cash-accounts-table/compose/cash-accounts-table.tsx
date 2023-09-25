import { Suspense } from 'react';
import { CashAccountsTableLoading } from '../ui/cash-accounts-table-loading';
import { CashAccountsList } from '../ui/cash-accounts-list';

export const CashAccountsTable = () => {
  return (
    <Suspense fallback={<CashAccountsTableLoading />}>
      <CashAccountsList />
    </Suspense>
  );
};
