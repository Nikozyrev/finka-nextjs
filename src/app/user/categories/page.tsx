import { getMainCategories } from '@/entities/main-category';
import { AppModal } from '@/shared/ui/modal';
import { AddCategoriesTabs } from '@/components/categories/add-categories-tabs';
import { AddCategoriesButton } from '@/components/categories/add-categories-button';
import { CategoriesTable } from '@/features/categories-table';

export default async function CategoriesPage() {
  const mainCategories = await getMainCategories();

  return (
    <>
      <AppModal RenderButton={AddCategoriesButton}>
        <AddCategoriesTabs mainCategories={mainCategories} />
      </AppModal>
      <CategoriesTable />
    </>
  );
}
