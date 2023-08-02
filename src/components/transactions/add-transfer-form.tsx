'use client';

import { FC, useEffect } from 'react';
import { Button, Card, DatePicker, TextInput } from '@tremor/react';
import { Controller, useForm } from 'react-hook-form';
import { IsSameCurrenciesAccounts } from '../../helpers/is-same-currencies-accounts';
import AppSelect from '../ui/select';

interface IAddTransferFormProps {
  cashAccounts: { id: string; name: string; currencyId: number }[];
}

interface IAddTransferFormInputs {
  date: Date;
  fromCashAccountId: string;
  toCashAccountId: string;
  fromSum: number;
  toSum: number;
}

export const AddTransferForm: FC<IAddTransferFormProps> = ({
  cashAccounts
}) => {
  const { register, handleSubmit, watch, reset, formState, control, setValue } =
    useForm<IAddTransferFormInputs>({
      defaultValues: {
        date: new Date(),
        fromCashAccountId: '',
        toCashAccountId: ''
      }
    });

  const fromCashAccountId = watch('fromCashAccountId');
  const toCashAccountId = watch('toCashAccountId');
  const fromSum = watch('fromSum');

  const isSameCurrencies = IsSameCurrenciesAccounts(
    cashAccounts,
    fromCashAccountId,
    toCashAccountId
  );

  useEffect(() => {
    if (isSameCurrencies) {
      setValue('toSum', fromSum);
    }
  }, [fromSum, isSameCurrencies, setValue, watch]);

  return (
    <Card>
      <form>
        <Controller
          name="date"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              className="mb-3"
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
              className="mb-3"
              options={cashAccounts
                .filter(({ id }) => id !== toCashAccountId)
                .map(({ id, name }) => ({
                  value: id,
                  text: name
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
              className="mb-3"
              options={cashAccounts
                .filter(({ id }) => id !== fromCashAccountId)
                .map(({ id, name }) => ({
                  value: id,
                  text: name
                }))}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="To Account"
            />
          )}
        />
        <TextInput
          className="mb-3"
          placeholder={isSameCurrencies ? 'Sum' : 'Sum From'}
          {...register('fromSum', { required: true })}
        />
        {!isSameCurrencies && (
          <TextInput
            className="mb-3"
            placeholder="Sum To"
            {...register('toSum', { required: true })}
          />
        )}
        <Button type="submit" disabled={!formState.isValid}>
          Add transfer
        </Button>
      </form>
    </Card>
  );
};
