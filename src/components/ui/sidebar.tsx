'use client';

import { ReactNode, useState } from 'react';
import { MenuIcon } from './icons/menu-icon';

interface ISidebarProps {
  contentTop?: ReactNode;
  contentBottom?: ReactNode;
}

export const Sidebar = ({ contentTop, contentBottom }: ISidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 bg-white border-r-gray-200 p-2 sm:p-0">
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <MenuIcon />
      </button>

      <aside
        className={`fixed top-0 left-0 z-20 w-fit h-screen border-r-gray-200
        border-r-2 transition-transform -translate-x-full sm:translate-x-0
        sm:static ${isOpen ? 'transform-none' : ''}`}
      >
        <div
          className="h-full px-4 py-4 flex flex-col justify-between overflow-y-auto bg-white
        dark:bg-gray-800"
        >
          <div onClick={() => setIsOpen(false)}>{contentTop}</div>
          <div>{contentBottom}</div>
        </div>
      </aside>

      {isOpen && (
        <div
          className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
