'use client';

import { FC } from 'react';
import { AppTabs, ITab } from '@/shared/ui/tabs';
import { AddCategoryForm } from './add-category-form';
import { AddMainCategoryForm } from './add-main-category-form';
import { IUserMainCategory } from '@/entities/main-category';

interface IAddCategoriesTabsProps {
  mainCategories: IUserMainCategory[];
}

export const AddCategoriesTabs: FC<IAddCategoriesTabsProps> = ({
  mainCategories,
}) => {
  const tabs: ITab[] = [
    {
      name: 'Category',
      component: <AddCategoryForm mainCategories={mainCategories} />,
    },
    {
      name: 'Main Category',
      component: <AddMainCategoryForm />,
    },
  ];

  return <AppTabs tabs={tabs} />;
};
