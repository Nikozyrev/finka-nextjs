import { Suspense } from 'react';
import { CashAccountsList } from '../../../components/cash-accounts/cash-accounts-list';
import { AddCashAccountForm } from '../../../components/cash-accounts/add-cash-account-form';
import { getCurrencies } from '../../../services/db/currencies/get-currencies';
import { AppModal } from '../../../components/ui/modal';
import { AddCashAccountButton } from '../../../components/cash-accounts/add-cash-account-button';

export default async function AccountsPage() {
  const currencies = await getCurrencies();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <AppModal RenderButton={AddCashAccountButton}>
        <AddCashAccountForm currencies={currencies} />
      </AppModal>
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CashAccountsList />
      </Suspense>
    </main>
  );
}
