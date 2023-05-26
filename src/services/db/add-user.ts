import { queryBuilder } from '../../lib/planetscale';
import { IUser } from '../../models/user.model';

export const addUser = async ({ email, name }: IUser) => {
  if (!email) return;

  return queryBuilder
    .insertInto('users')
    .values({ email, name: name ?? '' })
    .executeTakeFirst();
};
