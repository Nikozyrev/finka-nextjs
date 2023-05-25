import { Title } from '@tremor/react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import GoogleSignInBtn from '../../components/auth/googleSignInBtn';

export default async function AuthPage() {
  const session = await getServerSession();
  if (session) {
    redirect('/');
  }

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Auth page</Title>
      <GoogleSignInBtn />
    </main>
  );
}
