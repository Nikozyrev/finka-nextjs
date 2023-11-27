'use server';

import { Decimal } from '@prisma/client/runtime/library';
import { Prisma } from '@prisma/client';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';
import { ICashFlowSubCategory } from '../model/cash-flow.model';

export interface ISumsByMainCategory {
  year: number;
  month: number;
  category_id: string;
  category_name: string;
  sum: Decimal | null;
}

const getSumsByMainCategory = async (
  userId: string,
  categoryId: string,
  year: number,
  baseCurrencyId: number
) => {
  const data = await prisma.$queryRaw<ISumsByMainCategory[]>(
    Prisma.sql([
      `SELECT YEAR(T.date) AS year, MONTH(T.date) AS month, C.id AS category_id, C.name AS category_name, SUM(T.sum*R.rate) AS sum
    FROM transactions AS T 
    LEFT JOIN cashaccounts AS A ON T.cash_account_id = A.id
    LEFT JOIN currencyrates AS R ON T.date = R.date AND A.currency_id = R.currency_id AND R.base_currency_id = ${baseCurrencyId}
    LEFT JOIN categories AS C ON T.category_id = C.id
    LEFT JOIN maincategories AS M ON C.main_category_id = M.id
    WHERE T.user_id = '${userId}' AND YEAR(T.date) = '${year}' AND M.cash_flow_section <> 'null' AND M.id = '${categoryId}'
    GROUP BY year, month, C.id;`,
    ])
  );
  // console.log('cash flow category', data);

  return data;
};

export const getSubcategoriesSums = async (
  categoryId: string,
  year: number,
  baseCurrencyId: number
) => {
  const userId = await getUserId();
  const sums = await getSumsByMainCategory(
    userId,
    categoryId,
    year,
    baseCurrencyId
  );
  const r = sums.reduce<Record<string, ICashFlowSubCategory>>(
    (acc, sum) => ({
      ...acc,
      [sum.category_id]: {
        id: sum.category_id,
        name: sum.category_name,
        sumsByMonth: {
          ...acc[sum.category_id]?.sumsByMonth,
          [sum.month.toString()]: sum.sum?.toNumber(),
          totalYear:
            sum.sum
              ?.add(acc[sum.category_id]?.sumsByMonth.totalYear.toString() || 0)
              .toNumber() || 0,
        },
      },
    }),
    {}
  );

  return Object.values(r);
};
