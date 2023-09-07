import { CashFlowSection, CategoryType } from '@prisma/client';

export interface IMainCategory {
  id?: string;
  name: string;
  categoryType: CategoryType;
  cashFlowSection: CashFlowSection | null;
  userId: string;
}

export type IAddCategoryType = 'INCOME' | 'EXPENSE';

export type IUserMainCategory = Required<Omit<IMainCategory, 'userId'>>;
