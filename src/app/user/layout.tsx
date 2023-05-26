import { Suspense } from 'react';
import ServerProfile from '../../components/auth/server-profile';
import { AuthGuard } from '../../guards/auth-guard';

export default async function UserLayout({
  children
}: {
  children: React.ReactNode;
}) {
  await AuthGuard();

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
