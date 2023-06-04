import { CashFlowSection, CategoryType, Prisma } from '@prisma/client';
import { prisma } from '../../../lib/prisma';
import { getUserInfo } from '../../user/get-user-info';

interface ISumsByCategories {
  year: number;
  month: number;
  main_category: string;
  category_type: CategoryType;
  cash_flow_section: CashFlowSection;
  sum_BYN: number;
}

export const getSumsByCategories = async () => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

  const data = await prisma.$queryRaw<ISumsByCategories[]>(
    Prisma.sql([
      `SELECT YEAR(T.date) AS year, MONTH(T.date) AS month, M.name AS main_category, M.category_type, M.cash_flow_section, SUM(T.sum*R.rate) AS sum_BYN
    FROM transactions AS T 
    JOIN cashaccounts AS A ON T.cash_account_id = A.id
    JOIN currencyrates AS R ON TO_DAYS(T.date) = TO_DAYS(R.date) AND A.currency_id = R.currency_id
    JOIN categories AS C ON T.category_id = C.id
    JOIN maincategories AS M ON C.main_category_id = M.id
    WHERE T.user_id = '${userId}'
    GROUP BY year, month, M.id;`
    ])
  );

  return data;
};
