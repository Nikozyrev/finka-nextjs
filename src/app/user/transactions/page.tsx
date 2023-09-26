import { TransactionsTable } from '@/features/transactions-table/';
import { Grid } from '@tremor/react';

export default async function TransactionsPage({
  searchParams: { page },
}: {
  searchParams: { page?: string };
}) {
  const pageNum = Number(page);

  return (
    <Grid className="h-full gap-2 grid-rows-[minmax(0,1fr),auto]">
      <TransactionsTable page={pageNum} />
    </Grid>
  );
}
