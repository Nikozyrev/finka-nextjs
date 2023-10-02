import { Card } from '@tremor/react';
import { CurrencySelect } from '@/entities/currency';
import { updateCashAccountAction } from '../api/update-cash-account';
import { formFields } from '../model/update-cash-account.model';
import { AppButton } from '@/shared/ui/button';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { AppTextInput } from '@/shared/ui/form/text-input';
import { getCashAccount } from '@/entities/cash-account';
import { getUserId } from '@/entities/user';

export async function UpdateCashAccountForm({ id }: { id: string }) {
  const userId = await getUserId();
  const account = await getCashAccount(userId, id);

  return (
    <Card>
      <form
        action={updateCashAccountAction}
        className="flex flex-col gap-2"
        autoComplete="off"
      >
        <input name={formFields.id} value={id} hidden readOnly />
        <AppTextInput
          name={formFields.name}
          placeholder="Name"
          defaultValue={account?.name}
        />
        <AppNumberInput
          name={formFields.startBalance}
          placeholder="Start Balance"
          defaultValue={account?.startBalance}
        />
        <CurrencySelect
          name={formFields.currencyId}
          value={account?.currency.id.toString()}
        />
        <AppButton>Update</AppButton>
      </form>
    </Card>
  );
}
