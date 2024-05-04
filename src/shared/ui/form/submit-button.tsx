'use client';

import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from 'primereact/button';

type SubmitButtonProps = Omit<ButtonProps, 'type' | 'loading'>;

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return <Button type="submit" loading={pending} {...props} />;
}
