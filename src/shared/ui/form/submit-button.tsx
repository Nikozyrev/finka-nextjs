'use client';

import { useFormStatus } from 'react-dom';
import { AppButton } from '@/shared/ui/button';

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return <AppButton type="submit" label={label} loading={pending} />;
}
