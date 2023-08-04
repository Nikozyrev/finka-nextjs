'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '../../constants/routes';

const routes = [
  { text: 'Cash Flow', link: ROUTES.USER_CASH_FLOW },
  { text: 'Accounts', link: ROUTES.USER_ACCOUNTS },
  { text: 'Transactions', link: ROUTES.USER_TRANSACTIONS },
  { text: 'Categories', link: ROUTES.USER_CATEGORIES }
];

export const NavBar: FC = () => {
  const path = usePathname();

  return (
    <nav className="p-2">
      <ul className="flex gap-2">
        {routes.map(({ text, link }) => {
          const isActive = path?.startsWith(link);
          const activeClass = isActive ? 'text-sky-600 ' : 'text-inherit';

          return (
            <li key={link} className={activeClass}>
              <Link href={link}>
                <span className="p-2 text-lg">{text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
