import { NextResponse } from 'next/server';
import { addCategory } from '../../../services/db/categories/add-category';
import { getUserInfo } from '../../../services/user/get-user-info';

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name) {
    return new Response('Bad request', { status: 400 });
  }

  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) {
    return new Response('Not Authorized', { status: 403 });
  }

  const dbRes = await addCategory({
    name: body.name,
    userId
  });

  return NextResponse.json({ dbRes });
}
