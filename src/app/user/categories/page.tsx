import { Grid } from '@tremor/react';
import { AddCategories } from '@/features/add-category';
import { CategoriesTable } from '@/features/categories-table';

export default async function CategoriesPage() {
  return (
    <Grid className="h-full gap-2 grid-rows-[auto,minmax(0,1fr)]">
      <AddCategories />
      <CategoriesTable />
    </Grid>
  );
}
