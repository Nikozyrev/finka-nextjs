import { cache } from 'react';
import { Decimal } from '@prisma/client/runtime/library';
import { CashFlowSection, CategoryType, Prisma } from '@prisma/client';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';

export interface ISumsByCategories {
  year: number;
  month: number;
  main_category_id: string;
  main_category_name: string;
  category_id: string;
  category_name: string;
  category_type: CategoryType;
  cash_flow_section: CashFlowSection;
  sum: Decimal | null;
}

const getFunc = cache(
  async (userId: string, year: number, baseCurrencyId: number) => {
    const data = await prisma.$queryRaw<ISumsByCategories[]>(
      Prisma.sql([
        `SELECT YEAR(T.date) AS year, MONTH(T.date) AS month, C.id AS category_id, C.name AS category_name, M.id AS main_category_id, M.name AS main_category_name, M.category_type, M.cash_flow_section, SUM(T.sum*R.rate) AS sum
    FROM transactions AS T 
    LEFT JOIN cashaccounts AS A ON T.cash_account_id = A.id
    LEFT JOIN currencyrates AS R ON T.date = R.date AND A.currency_id = R.currency_id AND R.base_currency_id = ${baseCurrencyId}
    LEFT JOIN categories AS C ON T.category_id = C.id
    LEFT JOIN maincategories AS M ON C.main_category_id = M.id
    WHERE T.user_id = '${userId}' AND YEAR(T.date) LIKE '${year || '%'}' 
    AND M.cash_flow_section <> 'null'
    GROUP BY year, month, C.id;`,
      ])
    );
    console.log('cash flow', data.length);

    return data;
  }
);

export const getSumsByCategories = async (
  year: number,
  baseCurrencyId: number
) => {
  const userId = await getUserId();
  return getFunc(userId, year, baseCurrencyId);
};
