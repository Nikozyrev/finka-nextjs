'use client';

import { forwardRef } from 'react';
import { NumberInput, NumberInputProps } from '@tremor/react';

export const AppNumberInput = forwardRef<
  HTMLInputElement | null,
  NumberInputProps
>(function AppNumberInput(props, ref) {
  const { enableStepper, step, ...rest } = props;

  return (
    <NumberInput ref={ref} enableStepper={false} step={'0.01'} {...rest} />
  );
});
