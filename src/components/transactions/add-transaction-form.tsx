'use client';

import { CategoryType } from '@prisma/client';
import { Button, Card, DatePicker, TextInput } from '@tremor/react';
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

export default function AddTransactionForm({
  cashAccounts,
  categories,
  categoryType
}: IAddTransactionFormProps) {
  const { addTransaction } = useTransactionsApi();
  const { register, handleSubmit, reset, formState, control } =
    useForm<IAddTransactionFormInputs>({
      defaultValues: { date: new Date(), cashAccountId: '', categoryId: '' }
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
        comment
      });
      reset();
      return;
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                text: name
              }))}
              value={field.value}
              onValueChange={field.onChange}
              placeholder="Account"
            />
          )}
        />
        <TextInput
          className="mb-3"
          placeholder="Sum"
          {...register('sum', { required: true })}
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
                  text: name
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
        <Button type="submit" disabled={!formState.isValid}>
          Add {categoryType.toLowerCase()}
        </Button>
      </form>
    </Card>
  );
}
