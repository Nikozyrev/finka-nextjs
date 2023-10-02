import { Currency } from '@prisma/client';

export interface ICashAccountFromDb {
  id: string;
  name: string;
  currency: Currency;
  startBalance: number;
  currentBalance: number;
}
