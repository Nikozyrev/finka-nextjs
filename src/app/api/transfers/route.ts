import { NextResponse } from 'next/server';
import { Decimal } from '@prisma/client/runtime/library';
import { getUserInfo } from '@/entities/user';
import { ITransferBody } from '../../../models/transfer.model';
import { addTransfer } from '../../../services/db/transfers/add-transfer';

export async function POST(req: Request) {
  const body: ITransferBody = await req.json();
  const { date, fromCashAccountId, toCashAccountId, fromSum, toSum, comment } =
    body;

  if (!date || !fromCashAccountId || !toCashAccountId || !fromSum || !toSum) {
    return new Response('Bad request', { status: 400 });
  }

  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) {
    return new Response('Not Authorized', { status: 403 });
  }

  const dbRes = await addTransfer({
    date,
    fromCashAccountId,
    toCashAccountId,
    fromSum: new Decimal(fromSum),
    toSum: new Decimal(toSum),
    comment,
    userId,
  });

  return NextResponse.json({ status: 'OK' });
}
