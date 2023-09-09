'use client';

import { FC } from 'react';
import { SearchSelect, SearchSelectItem } from '@tremor/react';

interface ISelectOption {
  value: string;
  text: string;
}

interface IAppSelectProps {
  options: ISelectOption[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export const AppSelect: FC<IAppSelectProps> = ({
  options,
  value,
  onValueChange,
  className,
  placeholder,
}) => {
  return (
    <SearchSelect
      className={`${className ?? ''}`}
      value={value}
      onValueChange={onValueChange}
      placeholder={placeholder}
    >
      {options.map(({ text, value }) => (
        <SearchSelectItem key={value} value={value}>
          {text}
        </SearchSelectItem>
      ))}
    </SearchSelect>
  );
};
