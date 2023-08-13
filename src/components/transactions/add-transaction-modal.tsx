import { getCashAccounts } from '../../services/db/cash-accounts/get-cash-accounts';
import { getCategories } from '../../services/db/categories/get-categories';
import { AppModal } from '../../components/ui/modal';
import { AddTransactionTabs } from '../../components/transactions/add-transaction-tabs';
import { AddTransactionButton } from '../../components/transactions/add-transaction-button';

export const AddTransactionModal = async () => {
  const cashAccounts = await getCashAccounts();
  const categories = await getCategories();

  return (
    <AppModal RenderButton={AddTransactionButton}>
      <AddTransactionTabs
        cashAccounts={cashAccounts.map(
          ({ id, name, currency: { id: currencyId } }) => ({
            id,
            name,
            currencyId
          })
        )}
        categories={categories}
      />
    </AppModal>
  );
};
