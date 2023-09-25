'use client';

import { Button } from '@tremor/react';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export const AppButton = () => {
  return (
    <Link href={ROUTES.USER}>
      <Button>App</Button>
    </Link>
  );
};
