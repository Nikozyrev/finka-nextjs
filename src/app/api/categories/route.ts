import { NextResponse } from 'next/server';
import { addCategory } from '../../../services/db/categories/add-category';
import { getUserInfo } from '@/entities/user';

export async function POST(req: Request) {
  const body = await req.json();
  const name = body.name;
  const mainCategoryId = body.mainCategoryId;

  if (!name || !mainCategoryId) {
    return new Response('Bad request', { status: 400 });
  }

  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) {
    return new Response('Not Authorized', { status: 403 });
  }

  const dbRes = await addCategory({
    name,
    mainCategoryId,
    userId,
  });

  return NextResponse.json({ dbRes });
}
