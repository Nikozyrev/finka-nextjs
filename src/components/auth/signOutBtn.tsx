'use client';

import { FC } from 'react';
import { Button } from '@tremor/react';
import { signOut } from 'next-auth/react';

export const SignOutBtn: FC = () => {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
};
