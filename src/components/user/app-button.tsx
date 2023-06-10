'use client';

import { Button } from '@tremor/react';
import Link from 'next/link';
import { ROUTES } from '../../constants/routes';

export default function AppButton() {
  return (
    <Link href={ROUTES.USER}>
      <Button>App</Button>
    </Link>
  );
}
