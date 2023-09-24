import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ITransferBody } from '@/entities/transfer';

export function useTransfersApi() {
  const [isLoading, setIsLoading] = useState(false);
  const Router = useRouter();
  const endpoint = `/api/transfers`;

  const addTransfer = async ({
    date,
    fromCashAccountId,
    toCashAccountId,
    fromSum,
    toSum,
    comment,
  }: ITransferBody) => {
    setIsLoading(true);
    await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        date,
        fromCashAccountId,
        toCashAccountId,
        fromSum,
        toSum,
        comment,
      }),
    });
    Router.refresh();
    setIsLoading(false);
  };

  return { addTransfer, isLoading };
}
