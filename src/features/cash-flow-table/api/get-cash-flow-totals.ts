import { CategoryType } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ICashFlowTotals } from '../model/cash-flow.model';
import { ISumsByCategories } from './get-sums-by-categories';

export const getCashFlowTotals = (categories: ISumsByCategories[]) => {
  const initial: ICashFlowTotals = {
    OPERATIONAL: {
      cashFlowIn: { totalYear: new Decimal(0) },
      cashFlowOut: { totalYear: new Decimal(0) },
      cashFlow: { totalYear: new Decimal(0) },
    },
    INVESTMENTS: {
      cashFlowIn: { totalYear: new Decimal(0) },
      cashFlowOut: { totalYear: new Decimal(0) },
      cashFlow: { totalYear: new Decimal(0) },
    },
    grandTotal: {
      cashFlowIn: { totalYear: new Decimal(0) },
      cashFlowOut: { totalYear: new Decimal(0) },
      cashFlow: { totalYear: new Decimal(0) },
    },
  };

  const totals = categories.reduce(
    (acc, { category_type, cash_flow_section, month, sum }) => {
      if (!sum) throw new Error('Not all rates found in DB');

      const section = cash_flow_section;
      const type =
        category_type === CategoryType.INCOME ? 'cashFlowIn' : 'cashFlowOut';

      const sectionType = acc[section][type];
      sectionType[month] = sum.add(sectionType[month] || 0);
      sectionType.totalYear = sum.add(sectionType.totalYear);

      acc[section].cashFlow[month] = sum.add(acc[section].cashFlow[month] || 0);
      acc[section].cashFlow.totalYear = sum.add(
        acc[section].cashFlow.totalYear
      );

      const grandTotalType = acc.grandTotal[type];
      grandTotalType[month] = sum.add(grandTotalType[month] || 0);
      grandTotalType.totalYear = sum.add(grandTotalType.totalYear);

      acc.grandTotal.cashFlow[month] = sum.add(
        acc.grandTotal.cashFlow[month] || 0
      );
      acc.grandTotal.cashFlow.totalYear = sum.add(
        acc.grandTotal.cashFlow.totalYear
      );

      return acc;
    },
    initial
  );

  return totals;
};
