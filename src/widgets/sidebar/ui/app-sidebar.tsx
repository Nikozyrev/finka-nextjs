import { Suspense } from 'react';
import { UserProfile } from '@/entities/user';
import { SignOutBtn } from '@/features/auth';
import { NavBar } from '@/features/navigation';
import { Sidebar } from '@/shared/ui/sidebar';
import { Spinner } from '@/shared/ui/spinner';

export const AppSidebar = () => {
  return (
    <Sidebar
      contentTop={<NavBar />}
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
