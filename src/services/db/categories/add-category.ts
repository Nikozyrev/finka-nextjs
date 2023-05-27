import { queryBuilder } from '../../../lib/planetscale';
import { ICategory } from '../../../models/category.model';

export const addCategory = async ({ userId, name }: ICategory) => {
  if (!name || !userId) return;

  return queryBuilder
    .insertInto('categories')
    .values({ user_id: userId, name: name })
    .executeTakeFirst();
};
