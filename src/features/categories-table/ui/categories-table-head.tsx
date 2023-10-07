import { TableHead, TableHeaderCell, TableRow } from '@tremor/react';

export const CategoriesTableHead = () => {
  const columns = ['Category', 'Main Category', 'Type', 'CF Section'];

  return (
    <TableHead className="bg-white">
      <TableRow>
        {columns.map((column) => (
          <TableHeaderCell key={column} className="bg-white p-2 text-base">
            {column}
          </TableHeaderCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
