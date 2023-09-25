import { getSumsByCategories } from './get-sums-by-categories';
import { getCashFlowTotals } from './get-cash-flow-totals';
import { getCategoryData } from './get-category-data';

export const getCashFlowData = async (year: number, baseCurrencyId: number) => {
  const sumsByCategories = await getSumsByCategories(year, baseCurrencyId);

  const uniqueCategoriesIds = sumsByCategories.reduce(
    (acc, val) =>
      acc.includes(val.main_category_id) ? acc : [...acc, val.main_category_id],
    [] as string[]
  );

  const categories = uniqueCategoriesIds.map((id) =>
    getCategoryData(sumsByCategories, id)
  );

  const totals = getCashFlowTotals(sumsByCategories);

  return { categories, totals };
};
