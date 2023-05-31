import { NextResponse } from 'next/server';
import { getUserInfo } from '../../../services/user/get-user-info';
import { addTransaction } from '../../../services/db/transactions/add-transaction';
import { Decimal } from '@prisma/client/runtime';

interface ITransactionBody {
  date: Date;
  sum: number;
  cashAccountId: string;
  categoryId: string;
  comment?: string;
}

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
    userId
  });

  return NextResponse.json({ dbRes });
}
