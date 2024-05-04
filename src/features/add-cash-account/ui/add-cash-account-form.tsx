'use client';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { CurrencySelect } from '@/entities/currency';
import { useAddCashAccountForm } from '../model/use-add-cash-account-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';

export function AddCashAccountForm() {
  const { handleSubmit, fields, update, isValid } = useAddCashAccountForm();

  return (
    <form
      className="flex flex-col gap-3 min-w-[300px]"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <InputText
        placeholder="Name"
        value={fields.name.value}
        onChange={(e) => update('name', e.target.value)}
      />
      <AppNumberInput
        placeholder="Start Balance"
        value={fields.startBalance.value}
        onChange={(e) => update('startBalance', e.value ?? 0)}
      />
      <CurrencySelect
        value={fields.currencyId.value}
        onValueChange={(v) => update('currencyId', v)}
      />
      <Button
        className="w-fit"
        type="submit"
        label="Add Account"
        disabled={!isValid}
      />
    </form>
  );
}
