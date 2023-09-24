import { getTransactions } from '@/services/db/transactions/get-transactions';
import { getUserInfo } from '@/entities/user';
import { IUserTransaction } from '@/models/transaction.model';

export const getUserTransactions = async (): Promise<IUserTransaction[]> => {
  const user = await getUserInfo();

  if (!user) throw new Error('Not Authorized');

  const transactions = await getTransactions({ userId: user.id });

  return transactions;
};
