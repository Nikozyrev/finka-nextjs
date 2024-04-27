'use client';

import { Button, TextInput } from '@tremor/react';
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
      <TextInput
        placeholder="Name"
        value={fields.name.value}
        onChange={(e) => update('name', e.target.value)}
      />
      <AppNumberInput
        placeholder="Start Balance"
        value={fields.startBalance.value}
        onChange={(e) => update('startBalance', e.target.value)}
      />
      <CurrencySelect
        value={fields.currencyId.value}
        onValueChange={(v) => update('currencyId', v)}
      />
      <Button className="w-fit" type="submit" disabled={!isValid}>
        Add Account
      </Button>
    </form>
  );
}
