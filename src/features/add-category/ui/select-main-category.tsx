'use client';

import { IUserMainCategory } from '@/entities/main-category';
import { Dropdown } from 'primereact/dropdown';

interface ISelectMainCategoryProps {
  mainCategories: IUserMainCategory[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function SelectMainCategory({
  mainCategories,
  onValueChange,
  ...props
}: ISelectMainCategoryProps) {
  const options = [...mainCategories].sort((a, b) =>
    b.categoryType.localeCompare(a.categoryType)
  );

  return (
    <Dropdown
      filter
      itemTemplate={(c) => `${c.name} [${c.categoryType} (${c.cashFlowSection})]`}
      optionLabel='name'
      optionValue="id"
      placeholder="Main Category"
      options={options}
      onChange={(e) => onValueChange(e.value)}
      {...props}
    />
  );
};
