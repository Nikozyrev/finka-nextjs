'use client';

import { ReactNode, useState } from 'react';
import { AppModal } from '@/shared/ui/modal';
import { AddCategoriesButton } from './add-categories-button';

export function AddCategoriesModal({ tabs }: { tabs: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AddCategoriesButton onClick={() => setIsOpen(true)} />

      <AppModal isOpen={isOpen} setIsOpen={setIsOpen}>
        {tabs}
      </AppModal>
    </>
  );
}
