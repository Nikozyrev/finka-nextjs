import { getServerSession } from 'next-auth';
import UserProfile from './profile';

export default async function ServerProfile() {
  const session = await getServerSession();
  return <UserProfile user={session?.user}></UserProfile>;
}
