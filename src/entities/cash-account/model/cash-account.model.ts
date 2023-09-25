import { Decimal } from '@prisma/client/runtime/library';

export interface ICashAccount {
  id?: string;
  name: string;
  startBalance: Decimal;
  currencyId: number;
  userId: string;
}
