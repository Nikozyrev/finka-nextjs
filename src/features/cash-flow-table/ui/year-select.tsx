'use client';

import { useAppSearchParams } from '@/shared/hooks/search-params';
import { Dropdown } from 'primereact/dropdown';

interface IYearSelectProps {
  years: number[];
  year: number;
}

export function YearSelect({ years, year }: IYearSelectProps) {
  const { setSearchParam } = useAppSearchParams();
  const yearsOptions = years.map(String);
  const allOption = 'All';

  return (
    <Dropdown
      options={[allOption, ...yearsOptions]}
      value={Number.isNaN(year) ? allOption : year.toString()}
      onChange={(e) => setSearchParam('year', e.value)}
    />
  );
}
