import { Suspense } from 'react';
import { getMainCategories } from '../../../services/db/main-categories/get-main-categories';
import { CategoriesList } from '../../../components/categories/categories-list';
import { AppModal } from '../../../components/ui/modal';
import { AddCategoriesTabs } from '../../../components/categories/add-categories-tabs';
import { AddCategoriesButton } from '../../../components/categories/add-categories-button';

export default async function CategoriesPage() {
  const mainCategories = await getMainCategories();

  return (
    <>
      <AppModal RenderButton={AddCategoriesButton}>
        <AddCategoriesTabs mainCategories={mainCategories} />
      </AppModal>
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CategoriesList />
      </Suspense>
    </>
  );
}
