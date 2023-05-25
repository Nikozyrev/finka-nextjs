import { IUser } from '../../models/user.model';
import SignOutBtn from './signOutBtn';

interface UserProfileProps {
  user?: IUser;
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <>
      {user && (
        <div className="profile">
          <div>{user.name ?? 'User name'}</div>
          <SignOutBtn></SignOutBtn>
        </div>
      )}
    </>
  );
}
