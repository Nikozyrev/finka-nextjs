'use client';

import { InputNumber, InputNumberProps } from 'primereact/inputnumber';

export function AppNumberInput(props: InputNumberProps) {
  const { min, step, minFractionDigits, maxFractionDigits, ...rest } = props;

  return (
    <InputNumber
      min={min || 0}
      step={step || 0.01}
      minFractionDigits={minFractionDigits || 0}
      maxFractionDigits={maxFractionDigits || 2}
      {...rest}
    />
  );
}
