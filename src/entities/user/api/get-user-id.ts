import { getUserInfo } from './get-user-info';

export const getUserId = async () => {
  const user = await getUserInfo();
  if (!user) throw new Error('Not authorized');
  return user.id;
};
