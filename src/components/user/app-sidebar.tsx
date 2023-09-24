import { Suspense } from 'react';
import { UserProfile } from '@/entities/user';
import { Sidebar } from '@/shared/ui/sidebar';
import { SignOutBtn } from '../auth/signOutBtn';
import { Spinner } from '@/shared/ui/spinner';
import { NavBar } from './navbar';

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
