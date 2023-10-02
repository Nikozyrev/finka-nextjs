import { getUserCashAccounts } from '@/entities/cash-account';
import { AddTransactionForm } from './add-transaction-form';
import { AddTransferForm } from './add-transfer-form';
import { AppTabs, ITab } from '@/shared/ui/tabs';
import { getCategories } from '@/entities/category';

export const AddTransactionTabs = async () => {
  const cashAccounts = await getUserCashAccounts();
  const categories = await getCategories();

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
      component: (
        <AddTransferForm
          cashAccounts={cashAccounts.map(
            ({ id, name, currency: { id: currencyId } }) => ({
              id,
              name,
              currencyId,
            })
          )}
        />
      ),
    },
  ];

  return <AppTabs tabs={tabs} />;
};
