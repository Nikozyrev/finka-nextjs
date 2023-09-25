import { AppModal } from '@/shared/ui/modal';
import { getCashAccounts } from '@/entities/cash-account';
import { getCategories } from '@/entities/category';
import { AddTransactionTabs } from './add-transaction-tabs';
import { AddTransactionButton } from './add-transaction-button';

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
