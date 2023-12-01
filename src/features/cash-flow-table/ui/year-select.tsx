'use client';

import { useAppSearchParams } from '@/shared/hooks/search-params';
import { AppSelect } from '@/shared/ui/select';

interface IYearSelectProps {
  years: number[];
  year: number;
}

export function YearSelect({ years, year }: IYearSelectProps) {
  const { setSearchParam } = useAppSearchParams();
  const yearsOptions = years.map((year) => ({
    text: `${year}`,
    value: `${year}`,
  }));
  const allOption = { text: 'All', value: 'All' };

  return (
    <AppSelect
      options={[allOption, ...yearsOptions]}
      value={`${year || allOption.value}`}
      onValueChange={(v) => setSearchParam('year', v)}
    />
  );
}
