'use client';

import { Button, Card, TextInput } from '@tremor/react';
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
  } = useAddTransferForm({
    cashAccounts,
  });
  const { fromCashAccountId, toCashAccountId, fromSum } = fields;

  return (
    <Card>
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
          {...register('fromSum')}
          error={fromSum.touched && !fromSum.isValid}
          errorMessage={fromSum.errors[0]}
        />
        {!isSameCurrencies && (
          <AppNumberInput placeholder="Sum To" {...register('toSum')} />
        )}
        <TextInput placeholder="Comment" {...register('comment')} />
        <Button
          className="w-fit"
          type="submit"
          disabled={!isValid}
          loading={isLoading}
        >
          Add transfer
        </Button>
      </form>
    </Card>
  );
}
