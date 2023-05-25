'use client';

import { Button } from '@tremor/react';
import { signIn } from 'next-auth/react';

export default function GoogleSignInBtn() {
  return <Button onClick={() => signIn('google')}>Sign In with Google</Button>;
}
