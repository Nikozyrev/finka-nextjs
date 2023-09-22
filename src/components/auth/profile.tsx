import { getUserInfo } from '@/services/user/get-user-info';

export const UserProfile = async () => {
  const user = await getUserInfo();

  return (
    <>
      {user && (
        <div>
          <div>{user.name ?? 'User name'}</div>
        </div>
      )}
    </>
  );
};
