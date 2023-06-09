import { CashFlowSection, CategoryType } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ICashFlowTotals } from '../../models/cash-flow.model';
import { ISumsByCategories } from '../db/transactions/get-sums-by-categories';

export const getCashFlowTotals = (categories: ISumsByCategories[]) => {
  const initial: ICashFlowTotals = {
    OPERATIONAL: {
      cashFlowIn: { totalYear: { BYN: new Decimal(0) } },
      cashFlowOut: { totalYear: { BYN: new Decimal(0) } },
      cashFlow: { totalYear: { BYN: new Decimal(0) } }
    },
    INVESTMENTS: {
      cashFlowIn: { totalYear: { BYN: new Decimal(0) } },
      cashFlowOut: { totalYear: { BYN: new Decimal(0) } },
      cashFlow: { totalYear: { BYN: new Decimal(0) } }
    },
    grandTotal: {
      cashFlowIn: { totalYear: { BYN: new Decimal(0) } },
      cashFlowOut: { totalYear: { BYN: new Decimal(0) } },
      cashFlow: { totalYear: { BYN: new Decimal(0) } }
    }
  };

  const totals = categories.reduce(
    (acc, { category_type, cash_flow_section, month, sum_BYN }) => {
      const section = cash_flow_section;
      const type =
        category_type === CategoryType.INCOME ? 'cashFlowIn' : 'cashFlowOut';

      const sectionType = acc[section][type];
      sectionType[month] = { BYN: sum_BYN.add(sectionType[month]?.BYN || 0) };
      sectionType.totalYear = { BYN: sum_BYN.add(sectionType.totalYear.BYN) };

      acc[section].cashFlow[month] = {
        BYN: sum_BYN.add(acc[section].cashFlow[month]?.BYN || 0)
      };
      acc[section].cashFlow.totalYear = {
        BYN: sum_BYN.add(acc[section].cashFlow.totalYear.BYN)
      };

      const grandTotalType = acc.grandTotal[type];
      grandTotalType[month] = {
        BYN: sum_BYN.add(grandTotalType[month]?.BYN || 0)
      };
      grandTotalType.totalYear = {
        BYN: sum_BYN.add(grandTotalType.totalYear.BYN)
      };

      acc.grandTotal.cashFlow[month] = {
        BYN: sum_BYN.add(acc.grandTotal.cashFlow[month]?.BYN || 0)
      };
      acc.grandTotal.cashFlow.totalYear = {
        BYN: sum_BYN.add(acc.grandTotal.cashFlow.totalYear.BYN)
      };

      return acc;
    },
    initial
  );

  return totals;
};
