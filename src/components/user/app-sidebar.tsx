import { Suspense } from 'react';
import { UserProfile } from '@/entities/user';
import { Sidebar } from '@/shared/ui/sidebar';
import { SignOutBtn } from '@/features/auth';
import { Spinner } from '@/shared/ui/spinner';
import { NavBar } from '@/features/navigation';

export const AppSidebar = () => {
  return (
    <Sidebar
      contentTop={
        <>
          <NavBar />
        </>
      }
      contentBottom={
        <>
          <Suspense fallback={<Spinner size="small" />}>
            <UserProfile />
          </Suspense>
          <SignOutBtn />
        </>
      }
    />
  );
};
