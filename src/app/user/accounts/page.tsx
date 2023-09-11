import { Suspense } from 'react';
import { CashAccountsList } from '../../../components/cash-accounts/cash-accounts-list';
import { AddCashAccountForm } from '../../../components/cash-accounts/add-cash-account-form';
import { getCurrencies } from '../../../services/db/currencies/get-currencies';
import { AppModal } from '../../../components/ui/modal';
import { AddCashAccountButton } from '../../../components/cash-accounts/add-cash-account-button';
import { Spinner } from '@/components/ui/spinner';

export default async function AccountsPage() {
  const currencies = await getCurrencies();

  return (
    <>
      <AppModal RenderButton={AddCashAccountButton}>
        <AddCashAccountForm currencies={currencies} />
      </AppModal>
      <Suspense fallback={<Spinner />}>
        <CashAccountsList />
      </Suspense>
    </>
  );
}
