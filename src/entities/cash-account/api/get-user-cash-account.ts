import { getCashAccount } from '@/entities/cash-account';
import { getUserId } from '@/shared/utils/get-user-info';

export const getUserCashAccount = async (id: string) => {
  const userId = await getUserId();

  const account = await getCashAccount(userId, id);

  if (!account) throw new Error('Account not found');

  return account;
};
