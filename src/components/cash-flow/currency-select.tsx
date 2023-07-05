'use client';

import { Currency } from '@prisma/client';
import AppSelect from '../ui/select';
import { useAppSearchParams } from '../../hooks/search-params';

interface ICurrencySelectProps {
  currencies: Currency[];
  currencyId: number;
}

export default function CurrencySelect({
  currencies,
  currencyId
}: ICurrencySelectProps) {
  const { setSearchParam } = useAppSearchParams();

  return (
    <AppSelect
      options={currencies.map(({ id, symbol }) => ({
        text: symbol,
        value: `${id}`
      }))}
      value={`${currencyId}`}
      onValueChange={(v) => setSearchParam('currency', v)}
    />
  );
}
