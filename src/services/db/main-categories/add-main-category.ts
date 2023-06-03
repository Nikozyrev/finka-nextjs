import { MainCategory } from '@prisma/client';
import { prisma } from '../../../lib/prisma';

export const addMainCategory = async ({
  userId,
  name,
  categoryType,
  cashFlowSection
}: MainCategory) => {
  if (!name || !categoryType || !userId) return;

  return prisma.mainCategory.create({
    data: { name, userId, categoryType, cashFlowSection }
  });
};
