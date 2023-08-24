'use client';

import { FC } from 'react';
import { AppTabs, ITab } from '../ui/tabs';
import { AddCategoryForm } from './add-category-form';
import { AddMainCategoryForm } from './add-main-category-form';

interface IAddCategoriesTabsProps {
  mainCategories: { id: string; name: string }[];
}

export const AddCategoriesTabs: FC<IAddCategoriesTabsProps> = ({
  mainCategories
}) => {
  const tabs: ITab[] = [
    {
      name: 'Category',
      component: <AddCategoryForm mainCategories={mainCategories} />
    },
    {
      name: 'Main Category',
      component: <AddMainCategoryForm />
    }
  ];

  return <AppTabs tabs={tabs} />;
};
