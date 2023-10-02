import { AppModal } from '@/shared/ui/modal';
import { getCashAccounts } from '@/entities/cash-account';
import { getCategories } from '@/entities/category';
import { getUserId } from '@/shared/utils/get-user-info';
import { AddTransactionTabs } from './add-transaction-tabs';
import { AddTransactionButton } from './add-transaction-button';

export const AddTransactionModal = async () => {
  const userId = await getUserId();
  const cashAccounts = await getCashAccounts(userId);
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
