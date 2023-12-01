import { getSumsByCategories } from './get-sums-by-categories';
import { getCashFlowTotals } from './get-cash-flow-totals';
import { getCategoriesData, getSubcategoriesData } from './get-categories-data';
import { getSavingsRate } from './get-savings-rate';

export const getCashFlowData = async (year: number, baseCurrencyId: number) => {
  const sumsByCategories = await getSumsByCategories(year, baseCurrencyId);

  const subcategories = getSubcategoriesData(sumsByCategories);

  const categories = getCategoriesData(sumsByCategories);

  const totals = getCashFlowTotals(sumsByCategories);

  const savingsRate = getSavingsRate(totals);

  return { subcategories, categories, totals, savingsRate };
};
