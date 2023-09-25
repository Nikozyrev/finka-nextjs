import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ITransactionBody } from '@/entities/transaction';

export function useTransactionsApi() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();
  const endpoint = `/api/transactions`;

  const addTransaction = async ({
    date,
    sum,
    cashAccountId,
    categoryId,
    comment,
  }: ITransactionBody) => {
    setIsLoading(true);
    await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        date,
        sum: Number.isNaN(sum) ? 0 : sum,
        cashAccountId,
        categoryId,
        comment,
      }),
    });
    Router.refresh();
    setIsLoading(false);
  };

  const deleteTransaction = async (id: string) => {
    setIsLoading(true);
    const url = `${endpoint}/${id}`;
    await fetch(url, { method: 'DELETE' });
    Router.refresh();
    setIsLoading(false);
  };

  return { addTransaction, deleteTransaction, isLoading };
}
