'use client';

import { FC } from 'react';
import { Button } from '@tremor/react';
import { IAppModalButtonProps } from '@/shared/ui/modal';

export const AddCategoriesButton: FC<IAppModalButtonProps> = ({ onClick }) => {
  return (
    <Button className="p-2 mb-2" onClick={onClick}>
      Add Categories
    </Button>
  );
};
