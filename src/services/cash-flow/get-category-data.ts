import { Decimal } from '@prisma/client/runtime/library';
import {
  ICashFlowCategory,
  ICashFlowSumsByMonths
} from '../../models/cash-flow.model';
import { ISumsByCategories } from '../db/transactions/get-sums-by-categories';

export const getCategoryData = (
  sumsByCategories: ISumsByCategories[],
  categoryId: string
): ICashFlowCategory => {
  const categoryTransactions = sumsByCategories.filter(
    ({ main_category_id }) => main_category_id === categoryId
  );

  if (!categoryTransactions.length) throw new Error('No category');

  const yearSums = categoryTransactions.reduce(
    (acc, val) => ({
      BYN: val.sum_BYN.add(acc.BYN)
    }),
    { BYN: new Decimal(0) }
  );

  const sumsByMonths = categoryTransactions.reduce((acc, val) => {
    const month = val.month.toString();
    acc[month] = {
      BYN: val.sum_BYN
    };
    return acc;
  }, {} as ICashFlowSumsByMonths);

  return {
    id: categoryId,
    name: categoryTransactions[0].main_category_name,
    sumsByMonths,
    yearSums
  };
};
