'use client';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useAddTransferForm } from '../model/use-add-transfer-form';
import { AppNumberInput } from '@/shared/ui/form/number-input';
import { AppDatePicker } from '@/shared/ui/form/date-picker';
import { ICashAccountFromDb } from '@/entities/cash-account';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

interface IAddTransferFormProps {
  cashAccounts: ICashAccountFromDb[];
}

export function AddTransferForm({ cashAccounts }: IAddTransferFormProps) {
  const {
    fields,
    update,
    handleSubmit,
    isLoading,
    isValid,
    isSameCurrencies,
    register,
    touch,
  } = useAddTransferForm({
    cashAccounts,
  });
  const { fromCashAccountId, toCashAccountId, fromSum } = fields;

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <Calendar
        dateFormat='dd.mm.yy'
        value={fields.date.value}
        onChange={({ value }) => update('date', value ?? undefined)}
      />
      <Dropdown
        filter
        options={cashAccounts.filter(({ id }) => id !== toCashAccountId.value)}
        optionLabel='name'
        optionValue='id'
        value={fields.fromCashAccountId.value}
        onChange={(e) => update('fromCashAccountId', e.value)}
        placeholder="From Account"
      />
      <Dropdown
        filter
        options={cashAccounts.filter(({ id }) => id !== fromCashAccountId.value)}
        optionLabel='name'
        optionValue='id'
        value={fields.toCashAccountId.value}
        onChange={(e) => update('toCashAccountId', e.value)}
        placeholder="To Account"
      />
      <AppNumberInput
        placeholder={isSameCurrencies ? 'Sum' : 'Sum From'}
        invalid={fromSum.touched && !fromSum.isValid}
        tooltip={fromSum.errors[0]}
        value={fields.fromSum.value}
        onChange={(e) => update('fromSum', e.value)}
        onBlur={() => touch('fromSum')}
      />
      {!isSameCurrencies && (
        <AppNumberInput
          placeholder="Sum To"
          value={fields.toSum.value}
          onChange={(e) => update('toSum', e.value)}
        />
      )}
      <InputText placeholder="Comment" {...register('comment')} />
      <Button
        className="w-fit"
        type="submit"
        label="Add transfer"
        disabled={!isValid}
        loading={isLoading}
      />
    </form>
  );
}
