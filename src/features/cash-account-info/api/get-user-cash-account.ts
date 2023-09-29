import { getCashAccount } from '@/entities/cash-account';
import { getUserInfo } from '@/entities/user';

export const getUserCashAccount = async (id: string) => {
  const user = await getUserInfo();

  if (!user) throw new Error('Not authorized');

  const account = await getCashAccount(user.id, id);

  if (!account) throw new Error('Account not found');

  return account;
};
