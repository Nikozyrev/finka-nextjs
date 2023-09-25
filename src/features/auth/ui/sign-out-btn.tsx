'use client';

import { Button } from '@tremor/react';
import { signOut } from 'next-auth/react';

export const SignOutBtn = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
