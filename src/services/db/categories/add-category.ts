import { prisma } from '../../../lib/prisma';
import { ICategory } from '../../../models/category.model';

export const addCategory = async ({
  userId,
  name,
  mainCategoryId
}: ICategory) => {
  if (!name || !mainCategoryId || !userId) return;

  return prisma.category.create({ data: { name, mainCategoryId, userId } });
};
