'use client';

import { forwardRef } from 'react';
import { NumberInput, NumberInputProps } from '@tremor/react';

export const AppNumberInput = forwardRef<
  HTMLInputElement | null,
  NumberInputProps
>(function AppNumberInput(props, ref) {
  const { enableStepper, step, ...rest } = props;

  return (
    <div>
      <NumberInput
        ref={ref}
        enableStepper={false}
        step={step || '0.01'}
        {...rest}
      />
    </div>
  );
});
