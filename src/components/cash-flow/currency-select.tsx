'use client';

import { FC } from 'react';
import { Currency } from '@prisma/client';
import { AppSelect } from '@/shared/ui/select';
import { useAppSearchParams } from '../../hooks/search-params';

interface ICurrencySelectProps {
  currencies: Currency[];
  currencyId: number;
}

export const CurrencySelect: FC<ICurrencySelectProps> = ({
  currencies,
  currencyId,
}) => {
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
};
