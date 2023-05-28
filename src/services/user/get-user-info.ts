import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

export const getUserInfo = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return user;
};
