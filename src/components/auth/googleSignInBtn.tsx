'use client';

import { FC } from 'react';
import { Button } from '@tremor/react';
import { signIn } from 'next-auth/react';

export const GoogleSignInBtn: FC = () => {
  return <Button onClick={() => signIn('google')}>Sign In with Google</Button>;
};
