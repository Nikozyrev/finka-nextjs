'use client';

import { CategoryType } from '@prisma/client';
import { Button, Card, DatePicker, TextInput } from '@tremor/react';
import { Controller } from 'react-hook-form';
import { AppSelect } from '@/shared/ui/select';
import { IAddCategoryType } from '@/entities/main-category/';
import { useAddTransactionForm } from '../model/use-add-transaction-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';

interface IAddTransactionFormProps {
  categories: { id: string; name: string; categoryType: CategoryType }[];
  cashAccounts: { id: string; name: string }[];
  categoryType: IAddCategoryType;
}

export function AddTransactionForm({
  cashAccounts,
  categories,
  categoryType,
}: IAddTransactionFormProps) {
  const { register, handleSubmit, control, isLoading, isValid } =
    useAddTransactionForm({ categoryType });

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
          name="cashAccountId"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <AppSelect
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
        <AppNumberInput
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
        <TextInput placeholder="Comment" {...register('comment')} />
        <Button
          className="w-fit"
          type="submit"
          disabled={!isValid}
          loading={isLoading}
        >
          Add {categoryType.toLowerCase()}
        </Button>
      </form>
    </Card>
  );
}
