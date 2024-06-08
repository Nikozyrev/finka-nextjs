'use client';

import { Dropdown } from 'primereact/dropdown';
import { useCurrencies } from '../model/currency-context';

export function CurrencySelect({
  name,
  value,
  onValueChange,
  className,
}: {
  name?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}) {
  const currencies = useCurrencies();

  return (
    <Dropdown
      options={currencies}
      optionLabel='name'
      optionValue='id'
      name={name}
      value={value}
      onChange={(e) => onValueChange?.(e.value)}
      className={className}
      placeholder="Currency"
    />
  );
}
