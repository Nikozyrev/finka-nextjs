import { AppTabs, ITab } from '@/shared/ui/tabs';
import { AddCategoryForm } from './add-category-form';
import { AddMainCategoryForm } from './add-main-category-form';
import { getMainCategories } from '@/entities/main-category';

export async function AddCategoriesTabs() {
  const mainCategories = await getMainCategories();

  const tabs: ITab[] = [
    {
      name: 'Category',
      component: <AddCategoryForm mainCategories={mainCategories} />,
    },
    {
      name: 'Main Category',
      component: <AddMainCategoryForm />,
    },
  ];

  return <AppTabs tabs={tabs} />;
}
