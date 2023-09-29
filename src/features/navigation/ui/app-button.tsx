import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export const AppButton = () => {
  return (
    <Link href={ROUTES.USER_ACCOUNTS}>
      <button className="py-2 px-3 text-lg bg-blue-500 text-white rounded">
        App
      </button>
    </Link>
  );
};
