import { Decimal } from '@prisma/client/runtime';

export interface ICashAccount {
  id?: string;
  name: string;
  startBalance: Decimal;
  currencyId: number;
  userId: string;
}
