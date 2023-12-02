'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/shared/constants/routes';
import { DashboardIcon } from '@/shared/ui/icons/dashboard-icon';

export function NavBar() {
  const path = usePathname();
  const currentRoute = routes.find(({ link }) => path.startsWith(link));

  return (
    <ul className="space-y-2 font-medium">
      {routes.map(({ link, text }) => (
        <li key={link}>
          <Link
            href={link}
            className={clsx(
              'flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
              link === currentRoute?.link ? 'text-blue-500' : 'text-gray-900'
            )}
          >
            <DashboardIcon />

            <span className="ml-3">{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
