import { Suspense } from 'react';
import { CategoriesList } from '../ui/categories-list';
import { CategoriesTableLoading } from '../ui/categories-table-loading';

export function CategoriesTable() {
  return (
    <Suspense fallback={<CategoriesTableLoading />}>
      <CategoriesList />
    </Suspense>
  );
}
