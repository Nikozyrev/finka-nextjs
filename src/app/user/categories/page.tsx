import { Suspense } from 'react';
import { AddCategoryForm } from '../../../components/categories/add-category-form';
import { CategoriesList } from '../../../components/categories/categories-list';
import { getMainCategories } from '../../../services/db/main-categories/get-main-categories';
import { AddMainCategoryForm } from '../../../components/main-categories/add-main-category-form';

export default async function CategoriesPage() {
  const mainCategories = await getMainCategories();

  return (
    <>
      <AddCategoryForm mainCategories={mainCategories} />
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CategoriesList />
      </Suspense>
      <AddMainCategoryForm />
    </>
  );
}
