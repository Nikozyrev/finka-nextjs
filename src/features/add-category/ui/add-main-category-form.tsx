'use client';

import { Button, Card, TextInput } from '@tremor/react';
import { CashFlowSection, CategoryType } from '@prisma/client';
import { useAddMainCategoryForm } from '../model/use-add-main-category-form';
import { Dropdown } from 'primereact/dropdown';

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
        <Dropdown
          placeholder="Category Type"
          options={Object.entries(CategoryType).map(([_, type]) => type)}
          value={fields.categoryType.value}
          onChange={(e) => update('categoryType', e.value)}
        />
        <Dropdown
          placeholder="Cash Flow Section"
          options={Object.entries(CashFlowSection).map(([_, type]) => type)}
          value={fields.cashFlowSection.value}
          onChange={(e) => update('cashFlowSection', e.value)}
        />
        <Button className="w-fit" type="submit" disabled={!isValid}>
          Add Main Category
        </Button>
      </form>
    </Card>
  );
}
