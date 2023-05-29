import { NextResponse } from 'next/server';
import { getUserInfo } from '../../../services/user/get-user-info';
import { addCashAccount } from '../../../services/db/cash-accounts/add-cash-account';

export async function POST(req: Request) {
  const body = await req.json();
  const name = body.name;
  const startBalance = body.startBalance || 0;

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
    startBalance
  });

  return NextResponse.json({ dbRes });
}
