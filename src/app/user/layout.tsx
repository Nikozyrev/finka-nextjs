import { Suspense } from 'react';
import ServerProfile from '../../components/auth/server-profile';

export default async function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback="...">
        {/* @ts-expect-error Server Component */}
        <ServerProfile />
      </Suspense>
      {children}
    </>
  );
}
