import { Decimal } from '@prisma/client/runtime';

export interface ITransaction {
  id?: string;
  date: Date;
  sum: Decimal;
  comment?: string;
  transferId?: string;
  cashAccountId: string;
  categoryId: string;
  userId: string;
}
