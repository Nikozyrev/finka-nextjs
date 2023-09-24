import { Suspense } from 'react';
import { getMainCategories } from '@/entities/main-category';
import { AppModal } from '@/shared/ui/modal';
import { AddCategoriesTabs } from '@/components/categories/add-categories-tabs';
import { CategoriesList } from '@/components/categories/categories-list';
import { AddCategoriesButton } from '@/components/categories/add-categories-button';
import { Spinner } from '@/shared/ui/spinner';

export default async function CategoriesPage() {
  const mainCategories = await getMainCategories();

  return (
    <>
      <AppModal RenderButton={AddCategoriesButton}>
        <AddCategoriesTabs mainCategories={mainCategories} />
      </AppModal>
      <Suspense fallback={<Spinner />}>
        <CategoriesList />
      </Suspense>
    </>
  );
}
