'use client';

import { Button, Card, DatePicker, TextInput } from '@tremor/react';
import { Controller } from 'react-hook-form';
import { AppSelect } from '@/shared/ui/select';
import { useAddTransferForm } from '../model/use-add-transfer-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';

interface IAddTransferFormProps {
  cashAccounts: { id: string; name: string; currencyId: number }[];
}

export function AddTransferForm({ cashAccounts }: IAddTransferFormProps) {
  const {
    register,
    handleSubmit,
    isLoading,
    control,
    isValid,
    isSameCurrencies,
    fromCashAccountId,
    toCashAccountId,
  } = useAddTransferForm({
    cashAccounts,
  });
  console.log(register('date', { required: true }));

  return (
    <Card>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              value={field.value}
              onValueChange={field.onChange}
              enableClear={false}
            />
          )}
        />
        <Controller
          name="fromCashAccountId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <AppSelect
              options={cashAccounts
                .filter(({ id }) => id !== toCashAccountId)
                .map(({ id, name }) => ({
                  value: id,
                  text: name,
                }))}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="From Account"
            />
          )}
        />
        <Controller
          name="toCashAccountId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <AppSelect
              options={cashAccounts
                .filter(({ id }) => id !== fromCashAccountId)
                .map(({ id, name }) => ({
                  value: id,
                  text: name,
                }))}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="To Account"
            />
          )}
        />
        <AppNumberInput
          placeholder={isSameCurrencies ? 'Sum' : 'Sum From'}
          {...register('fromSum', {
            required: true,
            valueAsNumber: true,
            validate: (v) => !Number.isNaN(v),
          })}
        />
        {!isSameCurrencies && (
          <AppNumberInput
            placeholder="Sum To"
            {...register('toSum', {
              required: true,
              valueAsNumber: true,
              validate: (v) => !Number.isNaN(v),
            })}
          />
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
