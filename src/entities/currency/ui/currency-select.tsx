'use client';

import { AppSelect } from '@/shared/ui/select';
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
    <AppSelect
      options={currencies.map(({ id, name, symbol }) => ({
        text: `${name} (${symbol})`,
        value: id.toString(),
      }))}
      placeholder="Currency"
      name={name}
      value={value}
      onValueChange={onValueChange}
      className={className}
    />
  );
}
