import { getServerSession } from 'next-auth';
import { NavBar } from '../../components/user/navbar';
import { UserProfile } from '../../components/auth/profile';
import { routes } from '../../constants/routes';

export default async function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <>
      <div className="flex w-full justify-between p-2">
        <NavBar routes={routes} />
        <UserProfile user={session?.user} />
      </div>
      {children}
    </>
  );
}
