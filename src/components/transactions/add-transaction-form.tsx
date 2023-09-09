'use client';

import { CategoryType } from '@prisma/client';
import { FC } from 'react';
import {
  Button,
  Card,
  DatePicker,
  NumberInput,
  TextInput,
} from '@tremor/react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { AppSelect } from '../ui/select';
import { useTransactionsApi } from '../../services/api/transactions';
import { getUTCDate } from '../../helpers/get-utc-date';
import { getSumWithSign } from '../../helpers/get-sum-with-sign';
import { IAddCategoryType } from '../../models/main-category.model';

interface IAddTransactionFormProps {
  categories: { id: string; name: string; categoryType: CategoryType }[];
  cashAccounts: { id: string; name: string }[];
  categoryType: IAddCategoryType;
}

interface IAddTransactionFormInputs {
  date: Date;
  sum: number;
  cashAccountId: string;
  categoryId: string;
  comment: string;
}

export const AddTransactionForm: FC<IAddTransactionFormProps> = ({
  cashAccounts,
  categories,
  categoryType,
}) => {
  const { addTransaction, isLoading } = useTransactionsApi();
  const { register, handleSubmit, reset, formState, control } =
    useForm<IAddTransactionFormInputs>({
      defaultValues: { date: new Date(), cashAccountId: '', categoryId: '' },
    });

  const onSubmit: SubmitHandler<IAddTransactionFormInputs> = async (
    formData
  ) => {
    const { date, sum, cashAccountId, categoryId, comment } = formData;
    if (formState.isValid) {
      await addTransaction({
        date: getUTCDate(date),
        sum: getSumWithSign(categoryType, sum),
        cashAccountId,
        categoryId,
        comment,
      });
      reset();
      return;
    }
  };

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
          name="cashAccountId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <AppSelect
              className="mb-3"
              options={cashAccounts.map(({ id, name }) => ({
                value: id,
                text: name,
              }))}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="Account"
            />
          )}
        />
        <NumberInput
          enableStepper={false}
          className="mb-3"
          placeholder="Sum"
          {...register('sum', {
            required: true,
            valueAsNumber: true,
            validate: (v) => !Number.isNaN(v),
          })}
        />
        <Controller
          name="categoryId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <AppSelect
              className="mb-3"
              options={categories
                .filter(({ categoryType: type }) => type === categoryType)
                .map(({ id, name }) => ({
                  value: id,
                  text: name,
                }))}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="Category"
            />
          )}
        />
        <TextInput
          className="mb-3"
          placeholder="Comment"
          {...register('comment')}
        />
        <Button type="submit" disabled={!formState.isValid} loading={isLoading}>
          Add {categoryType.toLowerCase()}
        </Button>
      </form>
    </Card>
  );
};
