import { CashFlowSection, CategoryType } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export interface ICashFlowSumsByMonths {
  [month: string]: Decimal | undefined;
  '1'?: Decimal;
  '2'?: Decimal;
  '3'?: Decimal;
  '4'?: Decimal;
  '5'?: Decimal;
  '6'?: Decimal;
  '7'?: Decimal;
  '8'?: Decimal;
  '9'?: Decimal;
  '10'?: Decimal;
  '11'?: Decimal;
  '12'?: Decimal;
  totalYear: Decimal;
}

export interface ICashFlowSumsByMonthsNumbers {
  [month: string]: number | undefined;
  '1'?: number;
  '2'?: number;
  '3'?: number;
  '4'?: number;
  '5'?: number;
  '6'?: number;
  '7'?: number;
  '8'?: number;
  '9'?: number;
  '10'?: number;
  '11'?: number;
  '12'?: number;
  totalYear: number;
}

export interface ICashFlowSubCategory {
  id: string;
  name: string;
  categoryId: string;
  sumsByMonth: ICashFlowSumsByMonthsNumbers;
}

export interface ICashFlowCategory {
  id: string;
  name: string;
  categoryType: CategoryType;
  cashFlowSection: CashFlowSection;
  sumsByMonth: ICashFlowSumsByMonthsNumbers;
}

export interface ICashFlowSectionTotals {
  cashFlowIn: ICashFlowSumsByMonths;
  cashFlowOut: ICashFlowSumsByMonths;
  cashFlow: ICashFlowSumsByMonths;
}

export interface ICashFlowTotals {
  OPERATIONAL: ICashFlowSectionTotals;
  INVESTMENTS: ICashFlowSectionTotals;
  grandTotal: ICashFlowSectionTotals;
}
