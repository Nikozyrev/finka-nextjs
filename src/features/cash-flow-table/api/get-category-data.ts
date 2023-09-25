import { Decimal } from '@prisma/client/runtime/library';
import {
  ICashFlowCategory,
  ICashFlowSumsByMonths,
} from '../model/cash-flow.model';
import { ISumsByCategories } from './get-sums-by-categories';

export const getCategoryData = (
  sumsByCategories: ISumsByCategories[],
  categoryId: string
): ICashFlowCategory => {
  const categoryTransactions = sumsByCategories.filter(
    ({ main_category_id }) => main_category_id === categoryId
  );

  if (!categoryTransactions.length) throw new Error('No category');

  const sumsByMonths = categoryTransactions.reduce(
    (acc, val) => {
      if (!val.sum) throw new Error('Not all currency rates found in DB');
      const month = val.month.toString();
      acc[month] = val.sum;
      acc.totalYear = val.sum.add(acc.totalYear);
      return acc;
    },
    { totalYear: new Decimal(0) } as ICashFlowSumsByMonths
  );

  return {
    id: categoryId,
    name: categoryTransactions[0].main_category_name,
    categoryType: categoryTransactions[0].category_type,
    cashFlowSection: categoryTransactions[0].cash_flow_section,
    sumsByMonths,
  };
};
