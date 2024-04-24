import { Suspense } from 'react';
import { Card } from '@tremor/react';
import { CashAccountsTableLoading } from '../ui/cash-accounts-table-loading';
import { CashAccountsTableLayout } from '../ui/cash-accounts-table-layout';

export function CashAccountsTable() {
  return (
    <Card className="px-3 py-1 sm:w-fit">
      <Suspense fallback={<CashAccountsTableLoading />}>
        <CashAccountsTableLayout />
      </Suspense>
    </Card>
  );
}
