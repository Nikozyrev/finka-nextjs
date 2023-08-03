'use client';

import { Button, Icon } from '@tremor/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useTransactionsApi } from '../../services/api/transactions';

export default function DeleteTransactionButton({ id }: { id: string }) {
  const { deleteTransaction } = useTransactionsApi();

  const handleClick = async () => {
    await deleteTransaction(id);
  };

  return (
    <Button className="p-0" size="xs" color="amber" onClick={handleClick}>
      <Icon icon={XMarkIcon} variant="simple" size="md" color="red"></Icon>
    </Button>
  );
}
