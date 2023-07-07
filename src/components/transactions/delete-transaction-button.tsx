'use client';

import { useRouter } from 'next/navigation';
import { Button, Icon } from '@tremor/react';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function DeleteTransactionButton({ id }: { id: string }) {
  const Router = useRouter();

  const deleteTransaction = async () => {
    const url = `/api/transactions/${id}`;
    await fetch(url, { method: 'DELETE' });
    Router.refresh();
  };

  return (
    <Button className="p-0" size="xs" color="amber" onClick={deleteTransaction}>
      <Icon icon={XMarkIcon} variant="simple" size="md" color="red"></Icon>
    </Button>
  );
}
