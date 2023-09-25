import { AddCategories } from '@/features/add-category';
import { CategoriesTable } from '@/features/categories-table';

export default async function CategoriesPage() {
  return (
    <>
      <AddCategories />
      <CategoriesTable />
    </>
  );
}
