import { Card } from '@tremor/react';
import { CurrencySelect } from '@/entities/currency';
import { updateCashAccountAction } from '../api/update-cash-account';
import { formFields } from '../model/update-cash-account.model';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { AppTextInput } from '@/shared/ui/form/text-input';
import { SubmitButton } from '@/shared/ui/form/submit-button';
import { getUserCashAccount } from '@/entities/cash-account';

export async function UpdateCashAccountForm({ id }: { id: string }) {
  const account = await getUserCashAccount(id);

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
          required
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
        <SubmitButton label="Update" />
      </form>
    </Card>
  );
}
