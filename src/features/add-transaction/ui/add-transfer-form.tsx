'use client';

import { Button, Card, TextInput } from '@tremor/react';
import { AppSelect } from '@/shared/ui/select';
import { useAddTransferForm } from '../model/use-add-transfer-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { AppDatePicker } from '@/shared/ui/form/date-picker';

interface IAddTransferFormProps {
  cashAccounts: { id: string; name: string; currencyId: number }[];
}

export function AddTransferForm({ cashAccounts }: IAddTransferFormProps) {
  const {
    fields,
    update,
    handleSubmit,
    isLoading,
    isValid,
    isSameCurrencies,
    fromCashAccountId,
    toCashAccountId,
  } = useAddTransferForm({
    cashAccounts,
  });

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
            .filter(({ id }) => id !== toCashAccountId)
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
            .filter(({ id }) => id !== fromCashAccountId)
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
          value={fields.fromSum.value}
          onValueChange={(v) => update('fromSum', v)}
        />
        {!isSameCurrencies && (
          <AppNumberInput
            placeholder="Sum To"
            value={fields.toSum.value}
            onValueChange={(v) => update('toSum', v)}
          />
        )}
        <TextInput
          placeholder="Comment"
          value={fields.comment.value}
          onChange={(e) => update('comment', e.target.value)}
        />
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
