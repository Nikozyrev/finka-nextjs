import 'server-only';
import { Generated, Kysely } from 'kysely';
import { PlanetScaleDialect } from 'kysely-planetscale';

interface User {
  id: Generated<number>;
  email: string;
  name?: string;
}

interface Category {
  id: Generated<number>;
  name: string;
  user_id: number;
}

interface Database {
  users: User;
  categories: Category;
}

export const queryBuilder = new Kysely<Database>({
  dialect: new PlanetScaleDialect({
    url: process.env.DATABASE_URL
  })
});
