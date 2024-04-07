import { getUserId } from '@/shared/utils/get-user-info';
import { getTransactionsTable } from '../api/get-transactions-table';
import { ExportTransactionsButton } from './export-transactions-button';

export async function ExportTransactionsContainer() {
  const userId = await getUserId();
  const transactions = await getTransactionsTable({ userId });

  return <ExportTransactionsButton transactions={transactions} />;
}
