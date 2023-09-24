'use client';

import { FC } from 'react';
import { AppSelect } from '@/shared/ui/select';
import { IUserMainCategory } from '../../models/main-category.model';

interface ISelectMainCategoryProps {
  mainCategories: IUserMainCategory[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export const SelectMainCategory: FC<ISelectMainCategoryProps> = ({
  mainCategories,
  ...props
}) => {
  const options = [...mainCategories]
    .sort((a, b) => b.categoryType.localeCompare(a.categoryType))
    .map(({ id, name, cashFlowSection, categoryType }) => ({
      value: id,
      text: `${name} [${categoryType} (${cashFlowSection})]`,
    }));

  return <AppSelect placeholder="Main Category" options={options} {...props} />;
};
