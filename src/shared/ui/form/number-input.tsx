'use client';

import { NumberInput, NumberInputProps } from '@tremor/react';

export function AppNumberInput(props: NumberInputProps) {
  const { enableStepper, step, ...rest } = props;

  return <NumberInput enableStepper={false} step={'0.01'} {...rest} />;
}
