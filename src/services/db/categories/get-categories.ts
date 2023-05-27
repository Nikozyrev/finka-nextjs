import { queryBuilder } from '../../../lib/planetscale';

export const getCategories = async (userId: number) => {
  const data = await queryBuilder
    .selectFrom('categories')
    .selectAll()
    .where('user_id', '=', userId)
    .execute();

  return data.map(({ id, name, user_id }) => ({ id, name, userId: user_id }));
};
