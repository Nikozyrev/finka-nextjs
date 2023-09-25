import { prisma } from '@/shared/lib/prisma';
import { IUserMainCategory } from '../model/main-category.model';
import { getUserInfo } from '@/entities/user';

export const getMainCategories = async (): Promise<IUserMainCategory[]> => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

  const data = await prisma.mainCategory.findMany({
    select: { id: true, name: true, categoryType: true, cashFlowSection: true },
    where: { userId },
  });

  return data;
};
