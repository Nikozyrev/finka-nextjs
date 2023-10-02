import { NextResponse } from 'next/server';
import { getUserInfo } from '@/shared/utils/get-user-info';
import { deleteTransaction } from '@/entities/transaction';
import { revalidateTag } from 'next/cache';

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

  revalidateTag('user_tr_count');

  return NextResponse.json({ dbRes });
}
