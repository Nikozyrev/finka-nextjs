'use client';

import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { useForm } from 'relidate';
import { required } from 'relidate/validators';

import { saveRatesHistory } from '../api/save-rates-history';

export function FetchRatesForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    isValid,
    getState,
    update,
    fields: { daysCount },
  } = useForm({
    initialState: {
      daysCount: 30,
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
      <InputNumber
        step={1}
        placeholder="Days count"
        suffix=" days"
        value={daysCount.value}
        onChange={(e) => update('daysCount', e.value ?? 0)}
      />
      <Button
        className="w-fit"
        type="submit"
        label="Fetch rates"
        loading={isLoading}
        disabled={!isValid}
      />
    </form>
  );
}
