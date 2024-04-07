import { ExportTransactionsContainer } from '@/features/export-transactions';
import { TransactionsTable } from '@/features/transactions-table/';
import { Grid } from '@tremor/react';

export default async function TransactionsPage({
  searchParams: { page },
}: {
  searchParams: { page?: string };
}) {
  const pageNum = Number(page);

  return (
    <Grid className="h-full gap-2 grid-rows-[auto,minmax(0,1fr),auto]">
      <ExportTransactionsContainer />
      <TransactionsTable page={pageNum} />
    </Grid>
  );
}
