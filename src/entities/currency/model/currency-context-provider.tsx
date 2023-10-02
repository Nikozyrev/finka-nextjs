import { ReactNode } from 'react';
import { getCurrencies } from '../api/get-currencies';
import { CurrencyContextProvider } from './currency-context';

export async function CurrencyProvider({ children }: { children: ReactNode }) {
  const currencies = await getCurrencies();

  return (
    <CurrencyContextProvider currencies={currencies}>
      {children}
    </CurrencyContextProvider>
  );
}
