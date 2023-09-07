'use client';

import { FC } from 'react';
import { useAppSearchParams } from '../../hooks/search-params';
import { AppSelect } from '../ui/select';

interface IYearSelectProps {
  years: number[];
  year: number;
}

export const YearSelect: FC<IYearSelectProps> = ({ years, year }) => {
  const { setSearchParam } = useAppSearchParams();

  return (
    <AppSelect
      options={years.map((year) => ({
        text: `${year}`,
        value: `${year}`
      }))}
      value={`${year}`}
      onValueChange={(v) => setSearchParam('year', v)}
    />
  );
};
