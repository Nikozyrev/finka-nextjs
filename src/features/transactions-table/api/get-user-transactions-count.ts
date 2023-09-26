import { getTransactionsCount } from '@/entities/transaction';
import { getUserInfo } from '@/entities/user';

export const getUserTransactionsCount = async () => {
  const user = await getUserInfo();

  if (!user) throw new Error('Not Authorized');

  const count = await getTransactionsCount(user.id);

  return count;
};
