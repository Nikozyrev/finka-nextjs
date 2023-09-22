import { Suspense } from 'react';
import { UserProfile } from '../auth/profile';
import { Sidebar } from '../ui/sidebar';
import { SignOutBtn } from '../auth/signOutBtn';
import { Spinner } from '../ui/spinner';
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
          <Suspense fallback={<Spinner size="small"></Spinner>}>
            <UserProfile />
          </Suspense>
          <SignOutBtn />
        </>
      }
    />
  );
};