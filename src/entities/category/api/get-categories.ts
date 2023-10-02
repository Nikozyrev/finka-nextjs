import { cache } from 'react';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';

export const getCategories = cache(async () => {
  const userId = await getUserId();

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
});
