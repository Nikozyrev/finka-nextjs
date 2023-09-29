import { Card, Table } from '@tremor/react';
import { CashAccountsTableBody } from './cash-accounts-table-body';
import { CashAccountsTableHead } from './cash-accounts-table-head';

export const CashAccountsTableLayout = async () => {
  return (
    <Card className="px-3 py-1 sm:w-fit">
      <Table>
        <CashAccountsTableHead />
        <CashAccountsTableBody />
      </Table>
    </Card>
  );
};
