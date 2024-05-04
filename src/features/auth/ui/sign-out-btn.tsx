'use client';

import { signOut } from 'next-auth/react';
import { Button } from 'primereact/button';

export function SignOutBtn() {
  return <Button label="Sign Out" onClick={() => signOut()} />;
}
