import { Decimal } from '@prisma/client/runtime/library';
import {
  ICashFlowSumsByMonths,
  ICashFlowTotals,
} from '../model/cash-flow.model';

export const getSavingsRate = (totals: ICashFlowTotals) =>
  Object.keys(totals.OPERATIONAL.cashFlow).reduce<ICashFlowSumsByMonths>(
    (acc, k) => ({
      ...acc,
      [k]: totals.OPERATIONAL.cashFlow[k]?.dividedBy(
        totals.OPERATIONAL.cashFlowIn[k] || 0
      ),
    }),
    { totalYear: new Decimal(0) }
  );
