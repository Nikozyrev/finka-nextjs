'use client';

import { useState } from 'react';
import { useForm } from 'relidate';
import { required } from 'relidate/validators';

import { AppButton } from '@/shared/ui/button';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { saveRatesHistory } from '../api/save-rates-history';

export function FetchRatesForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { isValid, register, getState } = useForm({
    initialState: {
      daysCount: 0,
    },
    validators: {
      daysCount: [required, (v) => v > 0],
    },
  });

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={async (e) => {
        e.preventDefault();
        if (isLoading) return;
        setIsLoading(true);
        await saveRatesHistory(Math.ceil(getState().daysCount));
        setIsLoading(false);
      }}
    >
      <AppNumberInput
        step="1"
        placeholder="Days count"
        {...register('daysCount')}
      />
      <AppButton
        className="w-fit"
        type="submit"
        loading={isLoading}
        disabled={!isValid}
      >
        Fetch rates
      </AppButton>
    </form>
  );
}
