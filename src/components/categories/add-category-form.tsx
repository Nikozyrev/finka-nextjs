'use client';

import { FC, FormEvent, useState } from 'react';
import { Button, Card, TextInput } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { IUserMainCategory } from '../../models/main-category.model';
import { SelectMainCategory } from './select-main-category';

interface IAddCategoryFormProps {
  mainCategories: IUserMainCategory[];
}

export const AddCategoryForm: FC<IAddCategoryFormProps> = ({
  mainCategories,
}) => {
  const Router = useRouter();
  const [name, setName] = useState<string>('');
  const [mainCategoryId, setMainCategoryId] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !mainCategoryId) return;
    await fetch('/api/categories', {
      method: 'POST',
      body: JSON.stringify({
        name,
        mainCategoryId,
      }),
    });
    Router.refresh();
    setName('');
    return;
  };

  return (
    <Card>
      <form onSubmit={handleSubmit} autoComplete="off">
        <TextInput
          className="mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextInput>
        <SelectMainCategory
          className="mb-2"
          mainCategories={mainCategories}
          value={mainCategoryId}
          onValueChange={setMainCategoryId}
        />
        <Button type="submit" disabled={!name || !mainCategoryId}>
          Add Category
        </Button>
      </form>
    </Card>
  );
};
