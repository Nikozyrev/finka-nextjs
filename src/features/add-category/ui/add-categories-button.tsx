'use client';

import { FC } from 'react';
import { Button } from '@tremor/react';
import { IAppModalButtonProps } from '@/shared/ui/modal';

export const AddCategoriesButton: FC<
  IAppModalButtonProps & { loading?: boolean }
> = ({ onClick, loading }) => {
  return (
    <Button className="p-2 mb-2" onClick={onClick} loading={loading}>
      Add Categories
    </Button>
  );
};
