'use client';

import { useAppSearchParams } from '@/shared/hooks/search-params';
import { AppPagination } from '@/shared/ui/pagination';

export function SetPagePagination({
  currentPage,
  pagesNum,
}: {
  pagesNum: number;
  currentPage: number;
}) {
  const { setSearchParam } = useAppSearchParams();

  const setPage = (page: number) => {
    if (page >= 0 && page <= pagesNum - 1) {
      setSearchParam('page', page.toString());
    }
  };

  return (
    <AppPagination
      setPage={setPage}
      pagesNum={pagesNum}
      currentPage={currentPage}
    />
  );
}
