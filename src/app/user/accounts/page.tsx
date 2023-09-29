import { AddCashAccount } from '@/features/add-cash-account';
import { CashAccountsTable } from '@/features/cash-accounts-table';

export default function AccountsPage() {
  return (
    <>
      <AddCashAccount />
      <CashAccountsTable />
    </>
  );
}
