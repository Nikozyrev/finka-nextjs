import clsx from 'clsx';
import { TableCell, TableRow } from '@tremor/react';
import { ICashFlowSumsByMonths } from '../model/cash-flow.model';

interface ICashFlowTableRowProps {
  name: string;
  months: number[];
  sumsByMonths: ICashFlowSumsByMonths;
  className?: string;
}

export function CashFlowTableRow({
  name,
  months,
  sumsByMonths,
  className,
}: ICashFlowTableRowProps) {
  return (
    <TableRow>
      <TableCell
        className={clsx(
          'text-left p-1 sticky top-0 left-0 bg-white',
          className
        )}
      >
        {name}
      </TableCell>

      {months.map((m) => (
        <TableCell key={m} className={clsx('text-right p-1', className)}>
          {sumsByMonths[m]?.toFixed(0)}
        </TableCell>
      ))}

      <TableCell className={clsx('text-right p-1', className)}>
        {sumsByMonths.totalYear.toFixed(0)}
      </TableCell>
    </TableRow>
  );
}
