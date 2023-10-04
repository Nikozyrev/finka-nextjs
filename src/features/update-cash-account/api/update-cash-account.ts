'use server';

import { revalidateTag } from 'next/cache';
import { ZodError } from 'zod';
import { getUserId } from '@/shared/utils/get-user-info';
import { updateCashAccount } from '@/entities/cash-account';
import { updateCashAccountSchema } from '../model/update-cash-account.model';

export async function updateCashAccountAction(formData: FormData) {
  const userId = await getUserId();

  try {
    const formPayload = Object.fromEntries(formData);
    const data = updateCashAccountSchema.parse(formPayload);

    await updateCashAccount({ ...data, userId });
    revalidateTag('accounts');
  } catch (e) {
    if (e instanceof ZodError) {
      return { errors: e.errors };
    }
    return { errors: ['Failed to create'] };
  }
}
