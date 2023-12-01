import { TableCell, TableRow } from '@tremor/react';
import {
  ICashFlowSumsByMonths,
  ICashFlowSumsByMonthsNumbers,
} from '../model/cash-flow.model';
import { showNum, showPercent } from '@/shared/helpers/show-num';

interface ICashFlowTableRowProps {
  name: string;
  months: number[];
  sumsByMonths: ICashFlowSumsByMonths | ICashFlowSumsByMonthsNumbers;
  mode?: 'number' | 'percent';
  className?: string;
  onClick?: () => void;
}

export function CashFlowTableRow({
  name,
  months,
  sumsByMonths,
  mode,
  className,
  onClick,
}: ICashFlowTableRowProps) {
  const showFunc = { number: showNum, percent: showPercent }[mode || 'number'];

  return (
    <TableRow className={className} onClick={onClick}>
      <TableCell className={'text-left p-1 sticky top-0 left-0 bg-white'}>
        {name}
      </TableCell>

      {months.map((m) => (
        <TableCell key={m} className={'text-right p-1'}>
          {showFunc(sumsByMonths[m])}
        </TableCell>
      ))}

      <TableCell className={'text-right p-1'}>
        {showFunc(sumsByMonths.totalYear)}
      </TableCell>
    </TableRow>
  );
}
