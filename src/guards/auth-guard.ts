import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const AuthGuard = async () => {
  const session = await getServerSession();
  if (!session) {
    return redirect('/auth');
  }
  return;
};
