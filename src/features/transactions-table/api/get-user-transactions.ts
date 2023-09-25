import { getUserInfo } from '@/entities/user';
import { IUserTransaction, getTransactions } from '@/entities/transaction';

export const getUserTransactions = async ({
  page,
}: {
  page?: number | undefined;
}): Promise<IUserTransaction[]> => {
  const user = await getUserInfo();

  if (!user) throw new Error('Not Authorized');

  const take = 10;
  const pageNum = page || 0;
  const skip = (pageNum < 0 ? 0 : pageNum) * take;

  const transactions = await getTransactions({ skip, take, userId: user.id });

  return transactions;
};
