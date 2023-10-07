import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';

export const getCategories = cache(
  unstable_cache(
    async (userId: string) => {
      const data = await prisma.category.findMany({
        select: {
          id: true,
          name: true,
          mainCategory: {
            select: { categoryType: true, name: true, cashFlowSection: true },
          },
        },
        where: { userId },
        orderBy: [
          { mainCategory: { cashFlowSection: 'asc' } },
          { mainCategory: { categoryType: 'asc' } },
          { mainCategory: { name: 'asc' } },
        ],
      });
      console.log('categories', data.length);

      return data.map(
        ({
          id,
          name,
          mainCategory: {
            categoryType,
            cashFlowSection,
            name: mainCategoryName,
          },
        }) => ({
          id,
          name,
          mainCategoryName,
          categoryType,
          cashFlowSection,
        })
      );
    },
    ['user_categories'],
    { tags: ['categories'] }
  )
);

export const getUserCategories = async () => {
  const userId = await getUserId();
  return getCategories(userId);
};
