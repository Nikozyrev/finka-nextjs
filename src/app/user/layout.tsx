import { Suspense } from 'react';
import ServerProfile from '../../components/auth/server-profile';
import NavBar from '../../components/user/navbar';

export default async function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex w-full justify-between p-2">
        <NavBar />
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          <ServerProfile />
        </Suspense>
      </div>
      {children}
    </>
  );
}
