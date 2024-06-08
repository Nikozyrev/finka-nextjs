'use client';

import { Currency } from '@prisma/client';
import { useAppSearchParams } from '@/shared/hooks/search-params';
import { Dropdown } from 'primereact/dropdown';

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
    <Dropdown
      options={currencies}
      optionLabel='name'
      optionValue='id'
      value={currencyId}
      onChange={(e) => setSearchParam('currency', e.value)}
    />
  );
}
