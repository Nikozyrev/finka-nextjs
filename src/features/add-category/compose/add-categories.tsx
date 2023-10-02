import { Suspense } from 'react';
import { AddCategoriesModal } from '../ui/add-categories-modal';
import { AddCategoriesLoading } from '../ui/add-categories-loading';
import { AddCategoriesTabs } from '../ui/add-categories-tabs';

export function AddCategories() {
  return (
    <Suspense fallback={<AddCategoriesLoading />}>
      <AddCategoriesModal tabs={<AddCategoriesTabs />} />
    </Suspense>
  );
}
