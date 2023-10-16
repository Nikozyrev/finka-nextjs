'use client';

import { FC, useEffect, useState } from 'react';
import { SearchSelect, SearchSelectItem } from '@tremor/react';

interface ISelectOption {
  value: string;
  text: string;
}

interface IAppSelectProps {
  options: ISelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
  name?: string;
}

export const AppSelect: FC<IAppSelectProps> = ({
  options,
  value,
  onValueChange,
  className,
  placeholder,
  name,
}) => {
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  return (
    <>
      <SearchSelect
        className={`${className ?? ''}`}
        value={innerValue}
        onValueChange={(v) => {
          setInnerValue(v);
          onValueChange && onValueChange(v);
        }}
        placeholder={placeholder}
      >
        {options.map(({ text, value }) => (
          <SearchSelectItem key={value} value={value}>
            {text}
          </SearchSelectItem>
        ))}
      </SearchSelect>
      <input hidden readOnly name={name} value={innerValue} />
    </>
  );
};
