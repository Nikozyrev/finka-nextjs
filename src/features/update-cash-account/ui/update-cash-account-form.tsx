import { Card } from '@tremor/react';
import { InputText } from 'primereact/inputtext';
import { CurrencySelect } from '@/entities/currency';
import { updateCashAccountAction } from '../api/update-cash-account';
import { formFields } from '../model/update-cash-account.model';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { SubmitButton } from '@/shared/ui/form/submit-button';
import { getUserCashAccount } from '@/entities/cash-account';

export async function UpdateCashAccountForm({ id }: { id: string }) {
  const account = await getUserCashAccount(id);

  const action = async (formData: FormData) => {
    'use server';
    formData.set('id', id);
    return updateCashAccountAction(formData);
  };

  return (
    <Card>
      <form action={action} className="flex flex-col gap-2" autoComplete="off">
        <InputText
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
        <SubmitButton className="w-fit" label="Update" />
      </form>
    </Card>
  );
}
