import { Decimal } from '@prisma/client/runtime/library';

export interface ITransfer {
  date: Date;
  fromSum: Decimal;
  fromCashAccountId: string;
  toSum: Decimal;
  toCashAccountId: string;
  comment: string;
  userId: string;
}

export interface ITransferBody {
  date: Date;
  fromSum: number;
  fromCashAccountId: string;
  toSum: number;
  toCashAccountId: string;
  comment: string;
}
