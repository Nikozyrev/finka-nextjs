import { FC } from 'react';
import { IUser } from '@/models/user.model';
import { SignOutBtn } from './signOutBtn';

interface UserProfileProps {
  user?: IUser;
}

export const UserProfile: FC<UserProfileProps> = ({ user }) => {
  return (
    <>
      {user && (
        <div className="flex items-center">
          <div className="mr-3">{user.name ?? 'User name'}</div>
          <SignOutBtn></SignOutBtn>
        </div>
      )}
    </>
  );
};
