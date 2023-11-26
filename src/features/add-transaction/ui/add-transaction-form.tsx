'use client';

import { CategoryType } from '@prisma/client';
import { Button, Card, TextInput } from '@tremor/react';
import { AppSelect } from '@/shared/ui/select';
import { IAddCategoryType } from '@/entities/main-category/';
import { useAddTransactionForm } from '../model/use-add-transaction-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { AppDatePicker } from '@/shared/ui/form/date-picker';
import { ICashAccountFromDb } from '@/entities/cash-account';

interface IAddTransactionFormProps {
  categories: { id: string; name: string; categoryType: CategoryType }[];
  cashAccounts: ICashAccountFromDb[];
  categoryType: IAddCategoryType;
}

export function AddTransactionForm({
  cashAccounts,
  categories,
  categoryType,
}: IAddTransactionFormProps) {
  const { handleSubmit, isLoading, isValid, fields, update, register } =
    useAddTransactionForm({ categoryType, cashAccounts });
  const { sum } = fields;

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
          options={cashAccounts.map(({ id, name }) => ({
            value: id,
            text: name,
          }))}
          value={fields.cashAccountId.value}
          onValueChange={(v) => update('cashAccountId', v)}
          placeholder="Account"
        />
        <AppNumberInput
          placeholder="Sum"
          {...register('sum')}
          error={sum.touched && !sum.isValid}
          errorMessage={sum.errors[0]}
        />
        <AppSelect
          options={categories
            .filter(({ categoryType: type }) => type === categoryType)
            .map(({ id, name }) => ({
              value: id,
              text: name,
            }))}
          value={fields.categoryId.value}
          onValueChange={(v) => update('categoryId', v)}
          placeholder="Category"
        />
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
          Add {categoryType.toLowerCase()}
        </Button>
      </form>
    </Card>
  );
}
