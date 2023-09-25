import { SetPagePagination } from '@/shared/ui/set-page-pagination';
import { getUserTransactionsCount } from '../api/get-user-transactions-count';

export async function TransactionsTablePagination({
  perPage,
  currentPage,
}: {
  perPage: number;
  currentPage: number;
}) {
  const take = perPage;
  const count = await getUserTransactionsCount();
  const pagesNum = Math.ceil(count / take);

  return <SetPagePagination pagesNum={pagesNum} currentPage={currentPage} />;
}
