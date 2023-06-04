import { CashFlowSection, CategoryType } from '@prisma/client';

export interface IMainCategory {
  id?: string;
  name: string;
  categoryType: CategoryType;
  cashFlowSection: CashFlowSection;
  userId: string;
}
