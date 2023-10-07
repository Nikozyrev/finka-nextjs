import { TableRow, TableCell } from '@tremor/react';

export function CategoriesTableRow({
  name,
  mainCategoryName,
  categoryType,
  cashFlowSection,
}: {
  name: string;
  mainCategoryName: string;
  categoryType: string;
  cashFlowSection: string;
}) {
  const classes = `p-2`;

  return (
    <TableRow>
      <TableCell className={classes}>{name}</TableCell>
      <TableCell className={classes}>{mainCategoryName}</TableCell>
      <TableCell className={classes}> {categoryType}</TableCell>
      <TableCell className={classes}>{cashFlowSection}</TableCell>
    </TableRow>
  );
}
