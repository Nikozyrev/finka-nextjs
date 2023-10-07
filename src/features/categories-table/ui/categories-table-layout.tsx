import { Card, Table, TableBody } from '@tremor/react';
import { getUserCategories } from '@/entities/category';
import { CategoriesTableHead } from './categories-table-head';
import { CategoriesTableRow } from './categories-table-row';

export const CategoriesTableLayout = async () => {
  const categories = await getUserCategories();

  return (
    <Card className="p-2">
      <Table className="h-full">
        <CategoriesTableHead />
        <TableBody>
          {categories.map((c) => (
            <CategoriesTableRow key={c.id} {...c} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};
