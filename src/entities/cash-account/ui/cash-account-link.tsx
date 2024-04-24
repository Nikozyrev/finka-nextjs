import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export function CashAccountLink({ id, name }: { id: string; name: string }) {
  return (
    <Link className="underline" href={`${ROUTES.USER_ACCOUNTS}/${id}`}>
      {name}
    </Link>
  );
}
