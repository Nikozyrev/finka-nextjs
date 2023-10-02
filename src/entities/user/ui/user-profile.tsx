import { getUserInfo } from '@/shared/utils/get-user-info';

export const UserProfile = async () => {
  const user = await getUserInfo();

  if (!user) {
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <div>{user.name ?? 'User name'}</div>
    </div>
  );
};
