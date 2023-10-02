import { AppModal } from '@/shared/ui/modal';
import { getCashAccounts } from '@/entities/cash-account';
import { getCategories } from '@/entities/category';
import { getUserInfo } from '@/entities/user';
import { AddTransactionTabs } from './add-transaction-tabs';
import { AddTransactionButton } from './add-transaction-button';

export const AddTransactionModal = async () => {
  const user = await getUserInfo();
  if (!user) throw new Error('Not authorized');
  const cashAccounts = await getCashAccounts(user.id);
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
