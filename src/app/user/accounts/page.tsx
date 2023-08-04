import { Suspense } from 'react';
import { Title } from '@tremor/react';
import { CashAccountsList } from '../../../components/cash-accounts/cash-accounts-list';
import { AddCashAccountForm } from '../../../components/cash-accounts/add-cash-account-form';
import { getCurrencies } from '../../../services/db/currencies/get-currencies';

export default async function AccountsPage() {
  const currencies = await getCurrencies();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Accounts page</Title>
      <AddCashAccountForm currencies={currencies} />
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CashAccountsList />
      </Suspense>
    </main>
  );
}
