import { prisma } from '../../../lib/prisma';
import { IUserMainCategory } from '../../../models/main-category.model';
import { getUserInfo } from '../../user/get-user-info';

export const getMainCategories = async (): Promise<IUserMainCategory[]> => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

  const data = await prisma.mainCategory.findMany({
    select: { id: true, name: true, categoryType: true, cashFlowSection: true },
    where: { userId }
  });

  return data;
};
