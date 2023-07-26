import { Suspense } from 'react';
import { Title } from '@tremor/react';
import AddTransactionForm from '../../../components/transactions/add-transaction-form';
import TransactionsList from '../../../components/transactions/transactions-list';
import { getCashAccounts } from '../../../services/db/cash-accounts/get-cash-accounts';
import { getCategories } from '../../../services/db/categories/get-categories';
import AppModal from '../../../components/ui/modal';

export default async function TransactionsPage() {
  const cashAccounts = await getCashAccounts();
  const categories = await getCategories();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <TransactionsList />
      </Suspense>
      <AppModal>
        <AddTransactionForm
          cashAccounts={cashAccounts.map(({ id, name }) => ({ id, name }))}
          categories={categories}
        />
      </AppModal>
    </main>
  );
}
