'use client';

import { FormEvent, useState } from 'react';
import { Button, Card, TextInput, Title } from '@tremor/react';
import { useRouter } from 'next/navigation';

export default function AddCategoryForm() {
  const Router = useRouter();
  const [name, setName] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) return;
    await fetch('/api/categories', {
      method: 'POST',
      body: JSON.stringify({
        name
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
        <Button type="submit" disabled={!name}>
          Add Category
        </Button>
      </form>
    </Card>
  );
}
