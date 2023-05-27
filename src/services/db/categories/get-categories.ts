import { prisma } from '../../../lib/prisma';

export const getCategories = async (userId: string) => {
  const data = await prisma.category.findMany({
    select: { id: true, name: true },
    where: { userId }
  });

  return data;
};
