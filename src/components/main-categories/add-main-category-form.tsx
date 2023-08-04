'use client';

import { FC, FormEvent, useState } from 'react';
import { Button, Card, TextInput, Title } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { CashFlowSection, CategoryType } from '@prisma/client';
import { AppSelect } from '../ui/select';

export const AddMainCategoryForm: FC = () => {
  const Router = useRouter();
  const [name, setName] = useState<string>('');
  const [categoryType, setCategoryType] = useState<CategoryType>(
    CategoryType.INCOME
  );
  const [cashFlowSection, setCashFlowSection] = useState<CashFlowSection>(
    CashFlowSection.OPERATIONAL
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !categoryType || !cashFlowSection) return;
    await fetch('/api/main-categories', {
      method: 'POST',
      body: JSON.stringify({
        name,
        categoryType,
        cashFlowSection
      })
    });
    Router.refresh();
    return;
  };

  return (
    <Card>
      <Title className="mb-3">Add Main category</Title>
      <form onSubmit={handleSubmit}>
        <TextInput
          className="mb-3"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextInput>
        <AppSelect
          className="mb-2"
          placeholder="Category Type"
          options={Object.entries(CategoryType).map(([_, type]) => ({
            text: type,
            value: type
          }))}
          value={categoryType}
          onValueChange={(v) => setCategoryType(v as CategoryType)}
        ></AppSelect>
        <AppSelect
          className="mb-2"
          placeholder="Cash Flow Section"
          options={Object.entries(CashFlowSection).map(([_, type]) => ({
            text: type,
            value: type
          }))}
          value={cashFlowSection}
          onValueChange={(v) => setCashFlowSection(v as CashFlowSection)}
        ></AppSelect>
        <Button type="submit" disabled={!name || !categoryType}>
          Add Main Category
        </Button>
      </form>
    </Card>
  );
};
