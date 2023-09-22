'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/constants/routes';
import { DashboardIcon } from '../ui/icons/dashboard-icon';

export const NavBar = () => {
  const path = usePathname();
  const currentRoute = routes.find(({ link }) => link === path);

  return (
    <ul className="space-y-2 font-medium">
      {routes.map(({ link, text }) => (
        <li key={link}>
          <Link
            href={link}
            className={`flex items-center p-2 rounded-lg 
            dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group 
            ${link === currentRoute?.link ? 'text-blue-500' : 'text-gray-900'}`}
          >
            <DashboardIcon />

            <span className="ml-3">{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
