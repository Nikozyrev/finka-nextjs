import { Suspense } from 'react';
import { Title } from '@tremor/react';
import CashAccountsList from '../../../components/cash-accounts/cash-accounts-list';
import AddCashAccountForm from '../../../components/cash-accounts/add-cash-account-form';

export default async function AccountsPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Accounts page</Title>
      <AddCashAccountForm />
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CashAccountsList />
      </Suspense>
    </main>
  );
}
