'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { AppButton } from '@/shared/ui/button';

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <AppButton type="submit" loading={pending}>
      {label}
    </AppButton>
  );
}
