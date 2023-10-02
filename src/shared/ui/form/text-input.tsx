'use client';

import { TextInput, TextInputProps } from '@tremor/react';

export function AppTextInput(props: TextInputProps) {
  const { ...rest } = props;

  return <TextInput {...rest} />;
}
