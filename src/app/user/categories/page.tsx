import { Suspense } from 'react';
import { Title } from '@tremor/react';
import { AddCategoryForm } from '../../../components/categories/add-category-form';
import { CategoriesList } from '../../../components/categories/categories-list';
import { getMainCategories } from '../../../services/db/main-categories/get-main-categories';
import { AddMainCategoryForm } from '../../../components/main-categories/add-main-category-form';

export default async function CategoriesPage() {
  const mainCategories = await getMainCategories();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title className="mb-3">Categories page</Title>
      <AddCategoryForm mainCategories={mainCategories} />
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CategoriesList />
      </Suspense>
      <AddMainCategoryForm />
    </main>
  );
}
