import { queryBuilder } from '../../../lib/planetscale';

export const getUserByEmail = async (email: string) => {
  if (!email) return;

  return queryBuilder
    .selectFrom('users')
    .selectAll()
    .where('email', '=', email)
    .executeTakeFirst();
};
