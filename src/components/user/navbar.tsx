'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { text: 'Accounts', link: '/user/accounts' },
  { text: 'Transactions', link: '/user/transactions' },
  { text: 'Categories', link: '/user/categories' }
];

export default function NavBar() {
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
}
