import { TableHead, TableHeaderCell } from '@tremor/react';

export const TransactionsTableHead = () => {
  const columns = [
    'Date',
    'Sum',
    'Account',
    'Type',
    'Category',
    'Comment',
    'Actions',
  ];

  return (
    <TableHead>
      {columns.map((column) => (
        <TableHeaderCell key={column} className="p-2 text-base">
          {column}
        </TableHeaderCell>
      ))}
    </TableHead>
  );
};
