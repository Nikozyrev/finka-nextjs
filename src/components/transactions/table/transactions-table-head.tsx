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
    <TableHead className="bg-white">
      {columns.map((column) => (
        <TableHeaderCell key={column} className="bg-white p-2 text-base">
          {column}
        </TableHeaderCell>
      ))}
    </TableHead>
  );
};
