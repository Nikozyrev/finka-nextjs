'use client';

import { FC, useEffect } from 'react';
import {
  Button,
  Card,
  DatePicker,
  NumberInput,
  TextInput,
} from '@tremor/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IsSameCurrenciesAccounts } from '../../helpers/is-same-currencies-accounts';
import { AppSelect } from '../ui/select';
import { useTransfersApi } from '../../services/api/transfers';
import { getUTCDate } from '../../helpers/get-utc-date';

interface IAddTransferFormProps {
  cashAccounts: { id: string; name: string; currencyId: number }[];
}

interface IAddTransferFormInputs {
  date: Date;
  fromCashAccountId: string;
  toCashAccountId: string;
  fromSum: number;
  toSum: number;
  comment: string;
}

export const AddTransferForm: FC<IAddTransferFormProps> = ({
  cashAccounts,
}) => {
  const { addTransfer, isLoading } = useTransfersApi();
  const { register, handleSubmit, watch, reset, formState, control, setValue } =
    useForm<IAddTransferFormInputs>({
      defaultValues: {
        date: new Date(),
        fromCashAccountId: '',
        toCashAccountId: '',
      },
    });

  const fromCashAccountId = watch('fromCashAccountId');
  const toCashAccountId = watch('toCashAccountId');
  const fromSum = watch('fromSum');

  const isSameCurrencies = IsSameCurrenciesAccounts(
    cashAccounts,
    fromCashAccountId,
    toCashAccountId
  );

  const onSubmit: SubmitHandler<IAddTransferFormInputs> = async (formData) => {
    const {
      date,
      fromCashAccountId,
      fromSum,
      toCashAccountId,
      toSum,
      comment,
    } = formData;
    if (formState.isValid) {
      await addTransfer({
        date: getUTCDate(date),
        fromCashAccountId,
        toCashAccountId,
        fromSum: -Math.abs(fromSum),
        toSum: Math.abs(toSum),
        comment,
      });
      reset();
      return;
    }
  };

  useEffect(() => {
    if (isSameCurrencies) {
      setValue('toSum', fromSum);
    }
  }, [fromSum, isSameCurrencies, setValue, watch]);

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
              className="mb-3"
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
        <NumberInput
          enableStepper={false}
          className="mb-3"
          placeholder={isSameCurrencies ? 'Sum' : 'Sum From'}
          {...register('fromSum', {
            required: true,
            valueAsNumber: true,
            validate: (v) => !Number.isNaN(v),
          })}
        />
        {!isSameCurrencies && (
          <NumberInput
            enableStepper={false}
            className="mb-3"
            placeholder="Sum To"
            {...register('toSum', {
              required: true,
              valueAsNumber: true,
              validate: (v) => !Number.isNaN(v),
            })}
          />
        )}
        <TextInput
          className="mb-3"
          placeholder="Comment"
          {...register('comment')}
        />
        <Button type="submit" disabled={!formState.isValid} loading={isLoading}>
          Add transfer
        </Button>
      </form>
    </Card>
  );
};
