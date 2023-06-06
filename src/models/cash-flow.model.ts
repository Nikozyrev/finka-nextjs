import { CashFlowSection, CategoryType } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

export interface ICashFlowSums {
  BYN: Decimal;
}

// export interface ICashFlowSumsByMonth {
//   month: number;
//   sums: ICashFlowSums;
// }

export interface ICashFlowSumsByMonths {
  [month: string]: ICashFlowSums | undefined;
  '1'?: ICashFlowSums;
  '2'?: ICashFlowSums;
  '3'?: ICashFlowSums;
  '4'?: ICashFlowSums;
  '5'?: ICashFlowSums;
  '6'?: ICashFlowSums;
  '7'?: ICashFlowSums;
  '8'?: ICashFlowSums;
  '9'?: ICashFlowSums;
  '10'?: ICashFlowSums;
  '11'?: ICashFlowSums;
  '12'?: ICashFlowSums;
  totalYear: ICashFlowSums;
}

export interface ICashFlowCategory {
  id: string;
  name: string;
  categoryType: CategoryType;
  cashFlowSection: CashFlowSection;
  sumsByMonths: ICashFlowSumsByMonths;
}

export interface ICashFlowTotals {
  cashFlowIn: ICashFlowSumsByMonths;
  cashFlowOut: ICashFlowSumsByMonths;
  cashFlow: ICashFlowSumsByMonths;
}

export interface ICashFlowSection {
  income: ICashFlowCategory[];
  expenses: ICashFlowCategory[];
  subtotal: ICashFlowTotals;
}

export interface ICashFlowData {
  operational: ICashFlowSection;
  investments: ICashFlowSection;
  total: ICashFlowTotals;
}
