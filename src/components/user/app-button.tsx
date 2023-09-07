'use client';

import { FC } from 'react';
import { Button } from '@tremor/react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export const AppButton: FC = () => {
  return (
    <Link href={ROUTES.USER}>
      <Button>App</Button>
    </Link>
  );
};
