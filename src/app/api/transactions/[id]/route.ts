import { NextResponse } from 'next/server';
import { getUserInfo } from '@/entities/user';
import { deleteTransaction } from '@/entities/transaction';

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return new Response('Bad request', { status: 400 });
  }

  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) {
    return new Response('Not Authorized', { status: 403 });
  }

  const dbRes = await deleteTransaction(id);

  return NextResponse.json({ dbRes });
}
