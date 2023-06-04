import { NextResponse } from 'next/server';
import { CashFlowSection, CategoryType } from '@prisma/client';
import { getUserInfo } from '../../../services/user/get-user-info';
import { addMainCategory } from '../../../services/db/main-categories/add-main-category';

export async function POST(req: Request) {
  const body = await req.json();
  const name = body.name;
  const categoryType = body.categoryType;
  const cashFlowSection = body.cashFlowSection;

  if (!name || !categoryType || !cashFlowSection) {
    return new Response('Bad request', { status: 400 });
  }

  if (!(categoryType in CategoryType)) {
    return new Response('Bad request', { status: 400 });
  }

  if (!(cashFlowSection in CashFlowSection)) {
    return new Response('Bad request', { status: 400 });
  }

  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) {
    return new Response('Not Authorized', { status: 403 });
  }

  try {
    const dbRes = await addMainCategory({
      name,
      categoryType,
      cashFlowSection,
      userId
    });
    return NextResponse.json(dbRes);
  } catch (error) {
    let message = '';
    if (error instanceof Error) {
      message = error.message;
    }
    return new Response(JSON.stringify({ error: message }), {
      status: 400
    });
  }
}
