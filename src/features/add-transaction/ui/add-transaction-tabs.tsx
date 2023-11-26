import { getCashAccountsWithBalances } from '@/entities/cash-account';
import { AddTransactionForm } from './add-transaction-form';
import { AddTransferForm } from './add-transfer-form';
import { AppTabs, ITab } from '@/shared/ui/tabs';
import { getUserCategories } from '@/entities/category';

export const AddTransactionTabs = async () => {
  const cashAccounts = await getCashAccountsWithBalances();
  const categories = await getUserCategories();

  const tabs: ITab[] = [
    {
      name: 'Income',
      component: (
        <AddTransactionForm
          cashAccounts={cashAccounts}
          categories={categories}
          categoryType="INCOME"
        />
      ),
    },
    {
      name: 'Expenses',
      component: (
        <AddTransactionForm
          cashAccounts={cashAccounts}
          categories={categories}
          categoryType="EXPENSE"
        />
      ),
    },
    {
      name: 'Transfer',
      component: <AddTransferForm cashAccounts={cashAccounts} />,
    },
  ];

  return <AppTabs tabs={tabs} />;
};
