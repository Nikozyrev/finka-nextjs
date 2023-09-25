import { FC } from 'react';
import { TableCell, TableRow } from '@tremor/react';
import { ICashFlowSumsByMonths } from '../model/cash-flow.model';

interface ICashFlowTableRowProps {
  name: string;
  months: number[];
  sumsByMonths: ICashFlowSumsByMonths;
  className?: string;
}

export const CashFlowTableRow: FC<ICashFlowTableRowProps> = ({
  name,
  months,
  sumsByMonths,
  className,
}) => {
  return (
    <TableRow>
      <TableCell className={`text-left p-1 ${className ?? ''}`}>
        {name}
      </TableCell>
      {months.map((m) => {
        const cellSum = sumsByMonths[m]?.toFixed(0);
        return (
          <TableCell className={`text-right p-1 ${className ?? ''}`} key={m}>
            {cellSum}
          </TableCell>
        );
      })}
      <TableCell className={`text-right p-1 ${className ?? ''}`}>
        {sumsByMonths.totalYear.toFixed(0)}
      </TableCell>
    </TableRow>
  );
};
