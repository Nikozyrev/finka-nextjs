import { prisma } from '../../../lib/prisma';
import { getUserInfo } from '../../user/get-user-info';

export const getCashAccounts = async () => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

  const data = await prisma.cashAccount.findMany({
    select: { id: true, name: true, startBalance: true },
    where: { userId }
  });

  return data;
};
