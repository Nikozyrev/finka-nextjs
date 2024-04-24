import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import clsx from 'clsx';

type TableProps<T> = {
  rows: T[];
  columns: string[];
  getKey: (row: T) => React.Key;
  renderCell: (row: T, column: string) => React.ReactNode;
  headerCellClasses?: string;
  bodyCellClasses?: string;
};

export function AppTable<T>({
  rows,
  columns,
  getKey,
  renderCell,
  bodyCellClasses,
  headerCellClasses,
}: TableProps<T>) {
  return (
    <Table className="h-full">
      <TableHead>
        <AppTableHeaderRow columns={columns} cellClasses={headerCellClasses} />
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <AppTableBodyRow
            key={getKey(row)}
            row={row}
            columns={columns}
            renderCell={renderCell}
            cellClasses={bodyCellClasses}
          />
        ))}
      </TableBody>
    </Table>
  );
}

function AppTableHeaderRow({
  columns,
  cellClasses,
}: {
  columns: string[];
  cellClasses?: string;
}) {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableHeaderCell
          key={column}
          className={clsx('p-2 sm:px-3', cellClasses)}
        >
          {column}
        </TableHeaderCell>
      ))}
    </TableRow>
  );
}

function AppTableBodyRow<T>({
  row,
  columns,
  renderCell,
  cellClasses,
}: {
  row: T;
  columns: string[];
  renderCell: (row: T, column: string) => React.ReactNode;
  cellClasses?: string;
}) {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell key={column} className={clsx('p-2 sm:px-3', cellClasses)}>
          {renderCell(row, column)}
        </TableCell>
      ))}
    </TableRow>
  );
}
