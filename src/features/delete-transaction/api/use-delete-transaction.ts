import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function useDeleteTransaction() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();
  const endpoint = `/api/transactions`;

  const deleteTransaction = async (id: string) => {
    setIsLoading(true);
    const url = `${endpoint}/${id}`;
    await fetch(url, { method: 'DELETE' });
    Router.refresh();
    setIsLoading(false);
  };

  return { deleteTransaction, isLoading };
}
