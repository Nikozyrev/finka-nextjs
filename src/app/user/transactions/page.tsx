import { Suspense } from 'react';
import { getCashAccounts } from '../../../services/db/cash-accounts/get-cash-accounts';
import { getCategories } from '../../../services/db/categories/get-categories';
import TransactionsList from '../../../components/transactions/transactions-list';
import AppModal from '../../../components/ui/modal';
import AddTransactionTabs from '../../../components/transactions/add-transaction-tabs';

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
        <AddTransactionTabs
          cashAccounts={cashAccounts.map(({ id, name }) => ({ id, name }))}
          categories={categories}
        />
      </AppModal>
    </main>
  );
}
