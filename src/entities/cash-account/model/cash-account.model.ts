import { Decimal } from '@prisma/client/runtime/library';
import { Currency } from '@prisma/client';

export interface ICashAccount {
  id?: string;
  name: string;
  startBalance: Decimal;
  currencyId: number;
  userId: string;
}

export interface ICashAccountData {
  id: string;
  name: string;
  currencyId: number;
  startBalance: number;
  userId: string;
}

export interface ICashAccountFromDb {
  id: string;
  name: string;
  currency: Currency;
  startBalance: number;
  currentBalance: number;
}
