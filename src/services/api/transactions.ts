import { useRouter } from 'next/navigation';
import { ITransactionBody } from '../../models/transaction.model';

export function useTransactionsApi() {
  const Router = useRouter();
  const endpoint = `/api/transactions`;

  const addTransaction = async ({
    date,
    sum,
    cashAccountId,
    categoryId,
    comment
  }: ITransactionBody) => {
    await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        date,
        sum: Number.isNaN(sum) ? 0 : sum,
        cashAccountId,
        categoryId,
        comment
      })
    });
    Router.refresh();
  };

  const deleteTransaction = async (id: string) => {
    const url = `${endpoint}/${id}`;
    await fetch(url, { method: 'DELETE' });
    Router.refresh();
  };

  return { addTransaction, deleteTransaction };
}
