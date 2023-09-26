import { NextResponse } from 'next/server';
import { Decimal } from '@prisma/client/runtime/library';
import { getUserInfo } from '@/entities/user';
import { addTransaction } from '@/entities/transaction';
import { ITransactionBody } from '@/entities/transaction';
import { revalidateTag } from 'next/cache';

export async function POST(req: Request) {
  const body: ITransactionBody = await req.json();
  const { date, sum, cashAccountId, categoryId, comment } = body;

  if (!date || !cashAccountId || !categoryId) {
    return new Response('Bad request', { status: 400 });
  }

  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) {
    return new Response('Not Authorized', { status: 403 });
  }

  const dbRes = await addTransaction({
    date,
    sum: new Decimal(sum),
    cashAccountId,
    categoryId,
    comment: comment || undefined,
    userId,
  });

  revalidateTag('user_tr_count');

  return NextResponse.json({ dbRes });
}
