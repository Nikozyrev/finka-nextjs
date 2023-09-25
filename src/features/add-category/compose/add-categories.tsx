import { Suspense } from 'react';
import { AddCategoriesModal } from '../ui/add-categories-modal';
import { AddCategoriesLoading } from '../ui/add-categories-loading';

export function AddCategories() {
  return (
    <Suspense fallback={<AddCategoriesLoading />}>
      <AddCategoriesModal />
    </Suspense>
  );
}
