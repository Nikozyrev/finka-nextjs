'use client';

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

export default function AppSelect({
  options,
  value,
  onValueChange,
  className,
  placeholder
}: IAppSelectProps) {
  return (
    <div className={className ?? ''}>
      <SearchSelect
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
    </div>
  );
}
