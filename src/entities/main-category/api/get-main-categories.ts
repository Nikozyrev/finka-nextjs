import { cache } from 'react';
import { unstable_cache } from 'next/cache';
import { prisma } from '@/shared/lib/prisma';
import { getUserId } from '@/shared/utils/get-user-info';
import { IUserMainCategory } from '../model/main-category.model';

export const getMainCategories = cache(
  unstable_cache(
    async (userId: string): Promise<IUserMainCategory[]> => {
      const data = await prisma.mainCategory.findMany({
        select: {
          id: true,
          name: true,
          categoryType: true,
          cashFlowSection: true,
        },
        where: { userId },
      });
      console.log('main categories', data.length);

      return data;
    },
    ['user_main_categories'],
    { tags: ['main_categories'] }
  )
);

export const getUserMainCategories = async () => {
  const userId = await getUserId();
  return getMainCategories(userId);
};
