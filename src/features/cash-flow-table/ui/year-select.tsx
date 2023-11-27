'use client';

import { useAppSearchParams } from '@/shared/hooks/search-params';
import { AppSelect } from '@/shared/ui/select';

interface IYearSelectProps {
  years: number[];
  year: number;
}

export function YearSelect({ years, year }: IYearSelectProps) {
  const { setSearchParam } = useAppSearchParams();

  return (
    <AppSelect
      options={years.map((year) => ({
        text: `${year}`,
        value: `${year}`,
      }))}
      value={`${year}`}
      onValueChange={(v) => setSearchParam('year', v)}
    />
  );
}
