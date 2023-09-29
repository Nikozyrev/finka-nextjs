import { Currency } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export interface ICashAccountFromDb {
  id: string;
  name: string;
  currency: Currency;
  startBalance: Decimal;
  currentBalance: Decimal;
}
