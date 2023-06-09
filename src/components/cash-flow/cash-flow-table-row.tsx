import { TableCell, TableRow } from '@tremor/react';
import { ICashFlowSumsByMonths } from '../../models/cash-flow.model';

interface ICashFlowTableRowProps {
  name: string;
  months: number[];
  sumsByMonths: ICashFlowSumsByMonths;
  className?: string;
}

export default function CashFlowTableRow({
  name,
  months,
  sumsByMonths,
  className
}: ICashFlowTableRowProps) {
  return (
    <TableRow>
      <TableCell className={`text-left p-1 ${className ?? ''}`}>
        {name}
      </TableCell>
      {months.map((m) => {
        const cellSum = sumsByMonths[m]?.BYN.toFixed(0);
        return (
          <TableCell className={`text-right p-1 ${className ?? ''}`} key={m}>
            {cellSum}
          </TableCell>
        );
      })}
      <TableCell className={`text-right p-1 ${className ?? ''}`}>
        {sumsByMonths.totalYear.BYN.toFixed(0)}
      </TableCell>
    </TableRow>
  );
}
