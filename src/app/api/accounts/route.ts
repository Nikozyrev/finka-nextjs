import { NextResponse } from 'next/server';
import { getUserInfo } from '@/entities/user';
import { addCashAccount } from '@/entities/cash-account';

export async function POST(req: Request) {
  const body = await req.json();
  const name = body.name;
  const startBalance = body.startBalance || 0;
  const currencyId = body.currencyId;

  if (!name) {
    return new Response('Bad request', { status: 400 });
  }

  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) {
    return new Response('Not Authorized', { status: 403 });
  }

  const dbRes = await addCashAccount({
    name,
    userId,
    startBalance,
    currencyId,
  });

  return NextResponse.json({ dbRes });
}
