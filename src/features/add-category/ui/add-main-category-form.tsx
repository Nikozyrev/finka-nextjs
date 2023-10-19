'use client';

import { Button, Card, TextInput } from '@tremor/react';
import { CashFlowSection, CategoryType } from '@prisma/client';
import { AppSelect } from '@/shared/ui/select';
import { useAddMainCategoryForm } from '../model/use-add-main-category-form';

export function AddMainCategoryForm() {
  const { handleSubmit, fields, isValid, update } = useAddMainCategoryForm();

  return (
    <Card>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextInput
          placeholder="Name"
          value={fields.name.value}
          onChange={(e) => update('name', e.target.value)}
        />
        <AppSelect
          placeholder="Category Type"
          options={Object.entries(CategoryType).map(([_, type]) => ({
            text: type,
            value: type,
          }))}
          value={fields.categoryType.value}
          onValueChange={(v) => update('categoryType', v as CategoryType)}
        />
        <AppSelect
          placeholder="Cash Flow Section"
          options={Object.entries(CashFlowSection).map(([_, type]) => ({
            text: type,
            value: type,
          }))}
          value={fields.cashFlowSection.value}
          onValueChange={(v) => update('cashFlowSection', v as CashFlowSection)}
        />
        <Button className="w-fit" type="submit" disabled={!isValid}>
          Add Main Category
        </Button>
      </form>
    </Card>
  );
}
