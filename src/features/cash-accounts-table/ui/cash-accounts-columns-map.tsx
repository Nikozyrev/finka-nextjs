import { ReactNode } from 'react';
import { ICashAccountFromDb } from '@/entities/cash-account';
import { CurrencyBadge } from '@/entities/currency';
import { CashAccountLink } from '@/entities/cash-account/';

type CashAccountRenderCell = (cashAccount: ICashAccountFromDb) => ReactNode;

export const cashAccountsColumnsMap = new Map<string, CashAccountRenderCell>([
  ['Account', ({ id, name }) => <CashAccountLink id={id} name={name} />],
  ['Currency', ({ currency }) => <CurrencyBadge symbol={currency.symbol} />],
  ['Balance', ({ currentBalance }) => currentBalance],
]);
