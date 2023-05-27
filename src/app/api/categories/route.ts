import { NextResponse } from 'next/server';
import { addCategory } from '../../../services/db/categories/add-category';

export async function POST(req: Request) {
  const body = await req.json();
  if (!body.name) {
    return new Response('Bad request', { status: 400 });
  }

  const dbRes = await addCategory({ name: body.name, userId: 1 });

  return NextResponse.json({ dbRes });
}
