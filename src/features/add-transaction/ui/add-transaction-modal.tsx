'use client';

import { ReactNode, useState } from 'react';
import { AppModal } from '@/shared/ui/modal';
import { AddTransactionButton } from './add-transaction-button';

export function AddTransactionModal({ form }: { form: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddTransactionButton onClick={() => setIsOpen(true)} />

      <AppModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {form}
      </AppModal>
    </>
  );
}
