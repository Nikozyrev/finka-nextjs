import { getServerSession } from 'next-auth';
import { NavBar } from '../../components/user/navbar';
import { UserProfile } from '../../components/auth/profile';

export default async function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <>
      <div className="flex w-full justify-between p-2">
        <NavBar />
        <UserProfile user={session?.user} />
      </div>
      {children}
    </>
  );
}
