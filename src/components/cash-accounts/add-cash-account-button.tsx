'use client';

import { FC } from 'react';
import { Button } from '@tremor/react';
import { IAppModalButtonProps } from '../ui/modal';

export const AddCashAccountButton: FC<IAppModalButtonProps> = ({ onClick }) => {
  return (
    <Button className="p-2 mb-2" onClick={onClick}>
      Add account
    </Button>
  );
};
