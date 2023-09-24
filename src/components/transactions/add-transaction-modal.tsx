import { getCashAccounts } from '@/entities/cash-account';
import { getCategories } from '@/entities/category';
import { AppModal } from '@/shared/ui/modal';
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
            currencyId,
          })
        )}
        categories={categories}
      />
    </AppModal>
  );
};
