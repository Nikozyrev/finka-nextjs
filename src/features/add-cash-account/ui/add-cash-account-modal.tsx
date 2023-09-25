import { getCurrencies } from '@/entities/currency';
import { AppModal } from '@/shared/ui/modal';
import { AddCashAccountButton } from '../ui/add-cash-account-button';
import { AddCashAccountForm } from '../ui/add-cash-account-form';

export async function AddCashAccountModal() {
  const currencies = await getCurrencies();

  return (
    <AppModal RenderButton={AddCashAccountButton}>
      <AddCashAccountForm currencies={currencies} />
    </AppModal>
  );
}
