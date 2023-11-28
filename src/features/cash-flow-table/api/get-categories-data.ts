import {
  ICashFlowCategory,
  ICashFlowSubCategory,
} from '../model/cash-flow.model';
import { ISumsByCategories } from './get-sums-by-categories';

export const getSubcategoriesData = (sums: ISumsByCategories[]) =>
  Object.values(
    sums.reduce<Record<string, ICashFlowSubCategory>>(
      (acc, sum) => ({
        ...acc,
        [sum.category_id]: {
          id: sum.category_id,
          name: sum.category_name,
          categoryId: sum.main_category_id,
          sumsByMonth: {
            ...acc[sum.category_id]?.sumsByMonth,
            [sum.month.toString()]: sum.sum?.toNumber(),
            totalYear:
              sum.sum
                ?.add(
                  acc[sum.category_id]?.sumsByMonth.totalYear.toString() || 0
                )
                .toNumber() || 0,
          },
        },
      }),
      {}
    )
  );

export const getCategoriesData = (sums: ISumsByCategories[]) =>
  Object.values(
    sums.reduce<Record<string, ICashFlowCategory>>((acc, sum) => {
      const month = sum.month.toString();
      return {
        ...acc,
        [sum.main_category_id]: {
          id: sum.main_category_id,
          name: sum.main_category_name,
          categoryType: sum.category_type,
          cashFlowSection: sum.cash_flow_section,
          sumsByMonth: {
            ...acc[sum.main_category_id]?.sumsByMonth,
            [month]:
              sum.sum
                ?.add(
                  acc[sum.main_category_id]?.sumsByMonth[month]?.toString() || 0
                )
                .toNumber() || 0,
            totalYear:
              sum.sum
                ?.add(
                  acc[sum.main_category_id]?.sumsByMonth.totalYear.toString() ||
                    0
                )
                .toNumber() || 0,
          },
        },
      };
    }, {})
  );
