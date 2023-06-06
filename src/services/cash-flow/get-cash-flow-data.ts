import { getSumsByCategories } from '../db/transactions/get-sums-by-categories';
import { getCategoryData } from './get-category-data';

export const getCashFlowData = async () => {
  const sumsByCategories = await getSumsByCategories();

  const uniqueCategoriesIds = sumsByCategories.reduce(
    (acc, val) =>
      acc.includes(val.main_category_id) ? acc : [...acc, val.main_category_id],
    [] as string[]
  );

  const categories = uniqueCategoriesIds.map((id) =>
    getCategoryData(sumsByCategories, id)
  );

  return categories;
};
