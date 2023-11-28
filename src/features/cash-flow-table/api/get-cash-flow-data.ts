import { getSumsByCategories } from './get-sums-by-categories';
import { getCashFlowTotals } from './get-cash-flow-totals';
import { getCategoriesData, getSubcategoriesData } from './get-categories-data';

export const getCashFlowData = async (year: number, baseCurrencyId: number) => {
  const sumsByCategories = await getSumsByCategories(year, baseCurrencyId);

  const subcategories = getSubcategoriesData(sumsByCategories);

  const categories = getCategoriesData(sumsByCategories);

  const totals = getCashFlowTotals(sumsByCategories);

  return { subcategories, categories, totals };
};
