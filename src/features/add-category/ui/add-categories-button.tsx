'use client';

import { Button } from '@tremor/react';

export function AddCategoriesButton({
  onClick,
  loading,
}: {
  onClick?: () => void;
  loading?: boolean;
}) {
  return (
    <Button className="p-2 mb-2 w-fit" onClick={onClick} loading={loading}>
      Add Categories
    </Button>
  );
}
