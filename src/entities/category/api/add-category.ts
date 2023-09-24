import { prisma } from '@/shared/lib/prisma';
import { ICategory } from '@/entities/category';

export const addCategory = async ({
  userId,
  name,
  mainCategoryId,
}: ICategory) => {
  if (!name || !mainCategoryId || !userId) return;

  return prisma.category.create({ data: { name, mainCategoryId, userId } });
};
