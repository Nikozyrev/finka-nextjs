'use client';

import { FC } from 'react';
import { Button, Icon } from '@tremor/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { IAppModalButtonProps } from '../ui/modal';

export const AddTransactionButton: FC<IAppModalButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="p-1 fixed bottom-4 right-4 rounded-full"
      onClick={onClick}
      size="xs"
    >
      <Icon
        icon={PlusIcon}
        size="md"
        variant="simple"
        tooltip="Add tx"
        color="amber"
      />
    </Button>
  );
};
