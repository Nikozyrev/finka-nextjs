'use client';

import { Currency } from '@prisma/client';
import { ReactNode, createContext, useContext } from 'react';

export const currencyContext = createContext<Currency[]>([]);

export function useCurrencies() {
  const currencies = useContext(currencyContext);
  return currencies;
}

export function CurrencyContextProvider({
  children,
  currencies,
}: {
  children: ReactNode;
  currencies: Currency[];
}) {
  return (
    <currencyContext.Provider value={currencies}>
      {children}
    </currencyContext.Provider>
  );
}
