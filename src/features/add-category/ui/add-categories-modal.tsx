import { AppModal } from '@/shared/ui/modal';
import { AddCategoriesButton } from '../ui/add-categories-button';
import { AddCategoriesTabs } from '../ui/add-categories-tabs';
import { getMainCategories } from '@/entities/main-category';

export async function AddCategoriesModal() {
  const mainCategories = await getMainCategories();

  return (
    <AppModal RenderButton={AddCategoriesButton}>
      <AddCategoriesTabs mainCategories={mainCategories} />
    </AppModal>
  );
}
