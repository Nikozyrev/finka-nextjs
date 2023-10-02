import { getTransactionsCount } from '@/entities/transaction';
import { getUserId } from '@/shared/utils/get-user-info';

export const getUserTransactionsCount = async () => {
  const userId = await getUserId();

  const count = await getTransactionsCount(userId);

  return count;
};
