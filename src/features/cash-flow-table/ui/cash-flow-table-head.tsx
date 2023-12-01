import clsx from 'clsx';
import { TableHead, TableRow, TableHeaderCell } from '@tremor/react';

export function CashFlowTableHead({ months }: { months: number[] }) {
  const tableColumns = ['Category', ...months, 'Total'];

  return (
    <TableHead>
      <TableRow>
        {tableColumns.map((v, i) => (
          <TableHeaderCell
            key={v}
            className={clsx(
              'py-2 text-center font-bold bg-white',
              i === 0 && 'sticky top-0 left-0 z-[1] text-left',
              i === tableColumns.length - 1 && 'text-right'
            )}
          >
            {v}
          </TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
