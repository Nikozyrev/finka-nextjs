'use client';

export function AppPagination(props: {
  pagesNum: number;
  currentPage: number;
  setPage?: (pageNum: number) => void;
}) {
  const pages = Array.from(new Array(props.pagesNum), (_, i) => i);
  const currentPage = props.currentPage || 0;
  const { setPage } = props;

  return (
    <div>
      <ul className="flex items-center -space-x-px h-8 text-sm">
        <li>
          <span
            onClick={setPage && (() => setPage(currentPage - 1))}
            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </li>

        {pages.map((page) => (
          <li key={page} onClick={setPage && (() => setPage(page))}>
            <span
              className={`${
                page === currentPage ? 'text-blue-500' : 'text-gray-500'
              } flex items-center justify-center px-3 h-8 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer`}
            >
              {page + 1}
            </span>
          </li>
        ))}

        <li>
          <span
            onClick={setPage && (() => setPage(currentPage + 1))}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>
  );
}
