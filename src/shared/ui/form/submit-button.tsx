'use client';

import { useFormStatus } from 'react-dom';
import { AppButton } from '@/shared/ui/button';

type ButtonProps = Parameters<typeof AppButton>[0];

type SubmitButtonProps = Omit<ButtonProps, 'type' | 'loading'>;

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return <AppButton type="submit" loading={pending} {...props} />;
}
