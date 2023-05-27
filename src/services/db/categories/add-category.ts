import { prisma } from '../../../lib/prisma';
import { ICategory } from '../../../models/category.model';

export const addCategory = async ({ userId, name }: ICategory) => {
  if (!name || !userId) return;

  return prisma.category.create({ data: { name, userId } });
};
