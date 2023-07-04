import { CashFlowSection, CategoryType } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';

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

export interface ICashFlowCategory {
  id: string;
  name: string;
  categoryType: CategoryType;
  cashFlowSection: CashFlowSection;
  sumsByMonths: ICashFlowSumsByMonths;
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
