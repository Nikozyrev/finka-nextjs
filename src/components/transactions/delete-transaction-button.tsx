'use client';

import { FC } from 'react';
import { Button, Icon } from '@tremor/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useTransactionsApi } from '../../features/add-transaction/api/transactions';

export const DeleteTransactionButton: FC<{ id: string }> = ({ id }) => {
  const { deleteTransaction, isLoading } = useTransactionsApi();

  const handleClick = async () => {
    await deleteTransaction(id);
  };

  return (
    <Button
      className="p-0"
      size="xs"
      color="amber"
      onClick={handleClick}
      disabled={isLoading}
    >
      <Icon
        className="p-1"
        icon={XMarkIcon}
        variant="simple"
        size="md"
        color="red"
      />
    </Button>
  );
};
