import { prisma } from '@/shared/lib/prisma';
import { getUserInfo } from '@/entities/user';

export const getCategories = async () => {
  const user = await getUserInfo();
  const userId = user?.id;

  if (!userId) return [];

  const data = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      mainCategory: {
        select: { categoryType: true, name: true, cashFlowSection: true },
      },
    },
    where: { userId },
  });

  return data.map(
    ({
      id,
      name,
      mainCategory: { categoryType, cashFlowSection, name: mainCategoryName },
    }) => ({
      id,
      name,
      mainCategoryName,
      categoryType,
      cashFlowSection,
    })
  );
};
