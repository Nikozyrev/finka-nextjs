'use client';

import { signOut } from 'next-auth/react';
import { AppButton } from '@/shared/ui/button';

export function SignOutBtn() {
  return <AppButton label="Sign Out" onClick={() => signOut()} />;
}
