import { ROUTES } from '@/constants/routes';
import { redirect } from 'next/navigation';

export default function UserPage() {
  return redirect(ROUTES.USER_TRANSACTIONS);
}
