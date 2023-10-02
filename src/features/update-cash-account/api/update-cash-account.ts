'use server';

import { revalidateTag } from 'next/cache';
import { getUserId } from '@/entities/user';
import { updateCashAccount } from '@/entities/cash-account';
import { formFields } from '../model/update-cash-account.model';

export async function updateCashAccountAction(formData: FormData) {
  const userId = await getUserId();
  const id = formData.get(formFields.id) as string;
  const name = formData.get(formFields.name) as string;
  const startBalanceStr = formData.get(formFields.startBalance) as string;
  const currencyIdStr = formData.get(formFields.currencyId) as string;

  const startBalance = Number(startBalanceStr);
  const currencyId = Number(currencyIdStr);
  console.log(startBalanceStr);

  await updateCashAccount({ name, startBalance, currencyId, userId, id });
  revalidateTag('accounts');
}
