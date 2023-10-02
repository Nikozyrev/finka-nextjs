import { Decimal } from '@prisma/client/runtime/library';

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
