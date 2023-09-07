import { useRouter } from 'next/navigation';
import { ITransferBody } from '../../models/transfer.model';

export function useTransfersApi() {
  const Router = useRouter();
  const endpoint = `/api/transfers`;

  const addTransfer = async ({
    date,
    fromCashAccountId,
    toCashAccountId,
    fromSum,
    toSum,
    comment
  }: ITransferBody) => {
    await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({
        date,
        fromCashAccountId,
        toCashAccountId,
        fromSum,
        toSum,
        comment
      })
    });
    Router.refresh();
  };

  return { addTransfer };
}
