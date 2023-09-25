import { getUserInfo } from '@/entities/user';
import { IUserTransaction } from '@/entities/transaction';
import { getTransactions } from '@/entities/transaction';

export const getUserTransactions = async (): Promise<IUserTransaction[]> => {
  const user = await getUserInfo();

  if (!user) throw new Error('Not Authorized');

  const transactions = await getTransactions({ userId: user.id });

  return transactions;
};
