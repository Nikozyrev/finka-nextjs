'use client';

import { Button } from '@tremor/react';
import { useState } from 'react';
import { AppModal } from '@/shared/ui/modal';
import { AddCashAccountForm } from '../ui/add-cash-account-form';

export function AddCashAccountModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button className="p-2 mb-2" onClick={() => setIsOpen(true)}>
        Add account
      </Button>

      <AppModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddCashAccountForm />
      </AppModal>
    </>
  );
}
