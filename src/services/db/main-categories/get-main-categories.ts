import { prisma } from '../../../lib/prisma';
import { getUserInfo } from '../../user/get-user-info';

export const getMainCategories = async () => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

  const data = await prisma.mainCategory.findMany({
    select: { id: true, name: true, categoryType: true, cashFlowSection: true },
    where: { userId }
  });

  return data;
};
