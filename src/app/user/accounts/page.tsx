import { CashAccountsTable } from '@/features/cash-accounts-table';
import { AddCashAccountForm } from '../../../components/cash-accounts/add-cash-account-form';
import { getCurrencies } from '@/entities/currency';
import { AppModal } from '@/shared/ui/modal';
import { AddCashAccountButton } from '../../../components/cash-accounts/add-cash-account-button';

export default async function AccountsPage() {
  const currencies = await getCurrencies();

  return (
    <>
      <AppModal RenderButton={AddCashAccountButton}>
        <AddCashAccountForm currencies={currencies} />
      </AppModal>
      <CashAccountsTable />
    </>
  );
}
