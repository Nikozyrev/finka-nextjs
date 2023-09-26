import { NextResponse } from 'next/server';
import { Decimal } from '@prisma/client/runtime/library';
import { getUserInfo } from '@/entities/user';
import { ITransferBody } from '@/entities/transfer';
import { addTransfer } from '@/entities/transfer';
import { revalidateTag } from 'next/cache';

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

  revalidateTag('user_tr_count');

  return NextResponse.json({ status: 'OK' });
}
