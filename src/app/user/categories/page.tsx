import { Suspense } from 'react';
import { Title } from '@tremor/react';
import AddCategoryForm from '../../../components/categories/add-category-form';
import CategoriesList from '../../../components/categories/categories-list';

export default async function CategoriesPage() {
  const userId = 'cli5rn1ll0000qbw821lqpt5l';

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title className="mb-3">Categories page</Title>
      <AddCategoryForm />
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CategoriesList userId={userId} />
      </Suspense>
    </main>
  );
}
