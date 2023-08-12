import { getServerSession } from 'next-auth';
import { NavBar } from '../../components/user/navbar';
import { UserProfile } from '../../components/auth/profile';
import { routes } from '../../constants/routes';
import { AddTransactionModal } from '../../components/transactions/add-transaction-modal';

export default async function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <>
      <div className="flex w-full justify-between p-2 mb-2">
        <NavBar routes={routes} />
        <UserProfile user={session?.user} />
      </div>
      <main className="px-4 md:px-8 mx-auto max-w-7xl">{children}</main>
      {/* @ts-expect-error Server Component */}
      <AddTransactionModal />
    </>
  );
}
