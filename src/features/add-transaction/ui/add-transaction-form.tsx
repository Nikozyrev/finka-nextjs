'use client';

import { CategoryType } from '@prisma/client';
import { Button, Card, TextInput } from '@tremor/react';
import { AppSelect } from '@/shared/ui/select';
import { IAddCategoryType } from '@/entities/main-category/';
import { useAddTransactionForm } from '../model/use-add-transaction-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { AppDatePicker } from '@/shared/ui/form/date-picker';

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
  const { handleSubmit, isLoading, isValid, fields, update } =
    useAddTransactionForm({ categoryType });

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
          value={fields.sum.value}
          onValueChange={(v) => update('sum', v)}
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
