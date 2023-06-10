import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/next-auth';

export const getUserInfo = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return user;
};
