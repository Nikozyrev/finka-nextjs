import { getUserId } from '@/shared/utils/get-user-info';
import { IUserTransaction, getTransactions } from '@/entities/transaction';

export const getUserTransactions = async ({
  perPage,
  page,
}: {
  perPage: number;
  page?: number;
}): Promise<IUserTransaction[]> => {
  const userId = await getUserId();

  const take = perPage;
  const pageNum = page ? page - 1 : 0;
  const skip = (pageNum < 0 ? 0 : pageNum) * take;

  const transactions = await getTransactions({ skip, take, userId });

  return transactions;
};
