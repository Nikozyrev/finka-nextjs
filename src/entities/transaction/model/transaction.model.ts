import { Decimal } from '@prisma/client/runtime/library';
import { CashAccount, Category, TransactionType } from '@prisma/client';

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

export interface IUserTransaction {
  id: string;
  date: Date;
  sum: Decimal;
  comment: string | null;
  type: TransactionType;
  cashAccount: CashAccount;
  category: Category | null;
}
