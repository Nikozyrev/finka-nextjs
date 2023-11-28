'use client';

import { Currency } from '@prisma/client';
import { AppSelect } from '@/shared/ui/select';
import { useAppSearchParams } from '@/shared/hooks/search-params';

interface ICurrencySelectProps {
  currencies: Currency[];
  currencyId: number;
}

export function CurrencySelect({
  currencies,
  currencyId,
}: ICurrencySelectProps) {
  const { setSearchParam } = useAppSearchParams();

  return (
    <AppSelect
      options={currencies.map(({ id, symbol }) => ({
        text: symbol,
        value: `${id}`,
      }))}
      value={`${currencyId}`}
      onValueChange={(v) => setSearchParam('currency', v)}
    />
  );
}
