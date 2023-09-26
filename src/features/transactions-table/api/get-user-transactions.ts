import { getUserInfo } from '@/entities/user';
import { IUserTransaction, getTransactions } from '@/entities/transaction';

export const getUserTransactions = async ({
  perPage,
  page,
}: {
  perPage: number;
  page?: number;
}): Promise<IUserTransaction[]> => {
  const user = await getUserInfo();

  if (!user) throw new Error('Not Authorized');

  const take = perPage;
  const pageNum = page ? page - 1 : 0;
  const skip = (pageNum < 0 ? 0 : pageNum) * take;

  const transactions = await getTransactions({ skip, take, userId: user.id });

  return transactions;
};
