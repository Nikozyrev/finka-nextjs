'use client';

import { FC, FormEvent, useState } from 'react';
import { Button, Card, TextInput } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { CashFlowSection, CategoryType } from '@prisma/client';
import { AppSelect } from '@/shared/ui/select';

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
        cashFlowSection,
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
        />
        <AppSelect
          className="mb-2"
          placeholder="Category Type"
          options={Object.entries(CategoryType).map(([_, type]) => ({
            text: type,
            value: type,
          }))}
          value={categoryType}
          onValueChange={(v) => setCategoryType(v as CategoryType)}
        />
        <AppSelect
          className="mb-2"
          placeholder="Cash Flow Section"
          options={Object.entries(CashFlowSection).map(([_, type]) => ({
            text: type,
            value: type,
          }))}
          value={cashFlowSection}
          onValueChange={(v) => setCashFlowSection(v as CashFlowSection)}
        />
        <Button type="submit" disabled={!name || !categoryType}>
          Add Main Category
        </Button>
      </form>
    </Card>
  );
};
