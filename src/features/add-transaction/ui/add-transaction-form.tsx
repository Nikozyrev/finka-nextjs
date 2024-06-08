'use client';

import { CategoryType } from '@prisma/client';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { IAddCategoryType } from '@/entities/main-category/';
import { useAddTransactionForm } from '../model/use-add-transaction-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { AppDatePicker } from '@/shared/ui/form/date-picker';
import { ICashAccountFromDb } from '@/entities/cash-account';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

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
  const { handleSubmit, isLoading, isValid, fields, update, touch } =
    useAddTransactionForm({ categoryType, cashAccounts });

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Calendar
        dateFormat='dd.mm.yy'
        value={fields.date.value}
        onChange={({ value }) => update('date', value ?? undefined)}
      />
      <Dropdown
        filter
        options={cashAccounts}
        optionLabel='name'
        optionValue='id'
        value={fields.cashAccountId.value}
        onChange={(e) => update('cashAccountId', e.value)}
        placeholder="Account"
      />
      <AppNumberInput
        placeholder="Sum"
        invalid={fields.sum.touched && !fields.sum.isValid}
        tooltip={fields.sum.errors[0]}
        value={fields.sum.value}
        onChange={(e) => update('sum', e.value)}
        onBlur={() => touch('sum')}
      />
      <Dropdown
        filter
        options={categories.filter(({ categoryType: type }) => type === categoryType)}
        optionLabel='name'
        optionValue='id'
        value={fields.categoryId.value}
        onChange={(e) => update('categoryId', e.value)}
        placeholder="Category"
      />
      <InputText
        placeholder="Comment"
        value={fields.comment.value}
        onChange={(e) => update('comment', e.target.value)}
      />
      <Button
        className="w-fit"
        type="submit"
        label={'Add ' + categoryType.toLowerCase()}
        disabled={!isValid}
        loading={isLoading}
      />
    </form>
  );
}
