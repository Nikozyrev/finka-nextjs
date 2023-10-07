import { Suspense } from 'react';
import { CategoriesTableLayout } from '../ui/categories-table-layout';
import { CategoriesTableLoading } from '../ui/categories-table-loading';

export function CategoriesTable() {
  return (
    <Suspense fallback={<CategoriesTableLoading />}>
      <CategoriesTableLayout />
    </Suspense>
  );
}
