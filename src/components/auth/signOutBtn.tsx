'use client';

import { Button } from '@tremor/react';
import { signOut } from 'next-auth/react';

export default function SignOutBtn() {
  return <Button onClick={() => signOut()}>Sign Out</Button>;
}
