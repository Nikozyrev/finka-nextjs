'use client';

import { FormEvent, useState } from 'react';
import { Button, Card, TextInput, Title } from '@tremor/react';
import { useRouter } from 'next/navigation';
import AppSelect from '../ui/select';

export default function AddCategoryForm({
  mainCategories
}: {
  mainCategories: { id: string; name: string }[];
}) {
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
        mainCategoryId
      })
    });
    Router.refresh();
    return;
  };

  return (
    <Card>
      <Title className="mb-3">Add category</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          className="mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextInput>
        <AppSelect
          className="mb-2"
          placeholder="Main Category"
          options={mainCategories.map(({ id, name }) => ({
            value: id,
            text: name
          }))}
          value={mainCategoryId}
          onValueChange={setMainCategoryId}
        ></AppSelect>
        <Button type="submit" disabled={!name || !mainCategoryId}>
          Add Category
        </Button>
      </form>
    </Card>
  );
}
