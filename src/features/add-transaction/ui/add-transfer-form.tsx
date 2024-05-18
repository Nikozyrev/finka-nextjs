'use client';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { AppSelect } from '@/shared/ui/select';
import { useAddTransferForm } from '../model/use-add-transfer-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { AppDatePicker } from '@/shared/ui/form/date-picker';
import { ICashAccountFromDb } from '@/entities/cash-account';

interface IAddTransferFormProps {
  cashAccounts: ICashAccountFromDb[];
}

export function AddTransferForm({ cashAccounts }: IAddTransferFormProps) {
  const {
    fields,
    update,
    handleSubmit,
    isLoading,
    isValid,
    isSameCurrencies,
    register,
    touch,
  } = useAddTransferForm({
    cashAccounts,
  });
  const { fromCashAccountId, toCashAccountId, fromSum } = fields;

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <AppDatePicker
        value={fields.date.value}
        onValueChange={(v) => update('date', v)}
      />
      <AppSelect
        options={cashAccounts
          .filter(({ id }) => id !== toCashAccountId.value)
          .map(({ id, name }) => ({
            value: id,
            text: name,
          }))}
        value={fields.fromCashAccountId.value}
        onValueChange={(v) => update('fromCashAccountId', v)}
        placeholder="From Account"
      />
      <AppSelect
        options={cashAccounts
          .filter(({ id }) => id !== fromCashAccountId.value)
          .map(({ id, name }) => ({
            value: id,
            text: name,
          }))}
        value={fields.toCashAccountId.value}
        onValueChange={(v) => update('toCashAccountId', v)}
        placeholder="To Account"
      />
      <AppNumberInput
        placeholder={isSameCurrencies ? 'Sum' : 'Sum From'}
        invalid={fromSum.touched && !fromSum.isValid}
        tooltip={fromSum.errors[0]}
        value={fields.fromSum.value}
        onChange={(e) => update('fromSum', e.value)}
        onBlur={() => touch('fromSum')}
      />
      {!isSameCurrencies && (
        <AppNumberInput
          placeholder="Sum To"
          value={fields.toSum.value}
          onChange={(e) => update('toSum', e.value)}
        />
      )}
      <InputText placeholder="Comment" {...register('comment')} />
      <Button
        className="w-fit"
        type="submit"
        label="Add transfer"
        disabled={!isValid}
        loading={isLoading}
      />
    </form>
  );
}
