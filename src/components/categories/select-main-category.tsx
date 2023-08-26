'use client';

import { FC } from 'react';
import { AppSelect } from '../ui/select';
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
  return (
    <AppSelect
      placeholder="Main Category"
      options={mainCategories.map(
        ({ id, name, cashFlowSection, categoryType }) => ({
          value: id,
          text: `${name} [${categoryType} (${cashFlowSection})]`
        })
      )}
      {...props}
    />
  );
};
