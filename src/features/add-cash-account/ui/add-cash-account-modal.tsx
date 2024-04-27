'use client';

import { Button } from 'primereact/button';
import { useState } from 'react';
import { AppModal } from '@/shared/ui/modal';
import { AddCashAccountForm } from '../ui/add-cash-account-form';

export function AddCashAccountModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="p-2 mb-2"
        label="Add account"
        onClick={() => setIsOpen(true)}
      />

      <AppModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={'Add cash account'}
      >
        <AddCashAccountForm />
      </AppModal>
    </>
  );
}
