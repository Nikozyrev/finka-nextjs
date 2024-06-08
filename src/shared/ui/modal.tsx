'use client';

import { ReactNode } from 'react';
import { Dialog, DialogProps } from 'primereact/dialog';

interface IAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  header?: ReactNode | ((props: DialogProps) => ReactNode);
}

export function AppModal({
  isOpen,
  onClose,
  children,
  header,
}: IAppModalProps) {
  return (
    <Dialog className='min-w-[400px]' dismissableMask header={header} visible={isOpen} onHide={onClose}>
      {children}
    </Dialog>
  );
}
