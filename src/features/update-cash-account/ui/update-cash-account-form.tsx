import { Card } from '@tremor/react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { CurrencySelect } from '@/entities/currency';
import { ICashAccountFromDb } from '@/entities/cash-account';
import { SubmitButton } from '@/shared/ui/form/submit-button';
import { updateCashAccountAction } from '../api/update-cash-account';
import { formFields } from '../model/update-cash-account.model';

const action = (id: string) => async (formData: FormData) => {
  'use server';
  formData.set('id', id);
  return updateCashAccountAction(formData);
};

export async function UpdateCashAccountForm({
  account,
}: {
  account: Omit<ICashAccountFromDb, 'currentBalance'>;
}) {
  return (
    <Card>
      <form
        action={action(account.id)}
        className="flex flex-col gap-2"
        autoComplete="off"
      >
        <InputText
          name={formFields.name}
          placeholder="Name"
          defaultValue={account?.name}
          required
        />
        <InputNumber
          name={formFields.startBalance}
          placeholder="Start Balance"
          className="w-full"
          value={account?.startBalance}
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
