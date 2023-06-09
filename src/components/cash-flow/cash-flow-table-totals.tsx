import { TableCell, TableRow } from '@tremor/react';
import { ICashFlowTotals } from '../../models/cash-flow.model';
import CashFlowTableRow from './cash-flow-table-row';

interface ICashFlowTableTotalsProps {
  totals: ICashFlowTotals;
  months: number[];
}

export default function CashFlowTableTotals({
  months,
  totals
}: ICashFlowTableTotalsProps) {
  return (
    <>
      <TableRow>
        <TableCell className="italic font-semibold p-2">TOTALS</TableCell>
      </TableRow>
      <CashFlowTableRow
        className="font-bold text-base"
        name={'Free Cash Flow In'}
        months={months}
        sumsByMonths={totals.grandTotal.cashFlowIn}
      />
      <CashFlowTableRow
        className="font-bold text-base"
        name={'Free Cash Flow Out'}
        months={months}
        sumsByMonths={totals.grandTotal.cashFlowOut}
      />
      <CashFlowTableRow
        className="font-bold text-base"
        name={'Free Cash Flow'}
        months={months}
        sumsByMonths={totals.grandTotal.cashFlow}
      />
    </>
  );
}
