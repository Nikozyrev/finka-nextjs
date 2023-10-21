'use client';

import { forwardRef } from 'react';
import { DatePicker, DatePickerProps } from '@tremor/react';

export const AppDatePicker = forwardRef<HTMLDivElement | null, DatePickerProps>(
  function AppDatePicker(props, ref) {
    const { enableClear, weekStartsOn, ...rest } = props;

    return (
      <DatePicker
        ref={ref}
        {...rest}
        enableClear={enableClear ?? false}
        weekStartsOn={weekStartsOn ?? 1}
      />
    );
  }
);
