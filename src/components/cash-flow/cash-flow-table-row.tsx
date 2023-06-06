import { TableCell, TableRow } from '@tremor/react';
import { ICashFlowCategory } from '../../models/cash-flow.model';

interface ICashFlowTableRowProps {
  months: number[];
  category: ICashFlowCategory;
}

export default function CashFlowTableRow({
  months,
  category
}: ICashFlowTableRowProps) {
  return (
    <TableRow>
      <TableCell className="text-left">{category.name}</TableCell>
      {months.map((m) => {
        const cellSum = category.sumsByMonths[m]?.BYN.toFixed(0);
        return (
          <TableCell className="text-right" key={m}>
            {cellSum}
          </TableCell>
        );
      })}
      <TableCell className="text-right">
        {category.yearSums.BYN.toFixed(0)}
      </TableCell>
    </TableRow>
  );
}
