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

export interface ITransactionBody {
  date: Date;
  sum: number;
  cashAccountId: string;
  categoryId: string;
  comment?: string;
}
