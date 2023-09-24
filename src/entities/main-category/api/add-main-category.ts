import { prisma } from '@/shared/lib/prisma';
import { IMainCategory } from '../model/main-category.model';

export const addMainCategory = async ({
  userId,
  name,
  categoryType,
  cashFlowSection,
}: IMainCategory) => {
  if (!name || !categoryType || !userId) return;

  return prisma.mainCategory.create({
    data: { name, userId, categoryType, cashFlowSection },
  });
};
