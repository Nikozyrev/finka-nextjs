import { TransactionsTable } from '@/features/transactions-table/';

export default async function TransactionsPage({
  searchParams: { page },
}: {
  searchParams: { page?: string };
}) {
  const pageNum = Number(page);

  return (
    <>
      <TransactionsTable page={pageNum} />
    </>
  );
}
