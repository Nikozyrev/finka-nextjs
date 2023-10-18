'use client';

import { Button, Card, TextInput } from '@tremor/react';
import { IUserMainCategory } from '@/entities/main-category';
import { SelectMainCategory } from './select-main-category';
import { useAddCategoryForm } from '../model/use-add-category-form';

export function AddCategoryForm({
  mainCategories,
}: {
  mainCategories: IUserMainCategory[];
}) {
  const { handleSubmit, fields, update, isValid } = useAddCategoryForm();

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
        <SelectMainCategory
          mainCategories={mainCategories}
          value={fields.mainCategoryId.value}
          onValueChange={(v) => update('mainCategoryId', v)}
        />
        <Button className="w-fit" type="submit" disabled={!isValid}>
          Add Category
        </Button>
      </form>
    </Card>
  );
}
