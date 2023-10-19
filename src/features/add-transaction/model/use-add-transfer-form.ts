import { FormEventHandler, useEffect } from 'react';
import { useValidatedForm } from '@/shared/hooks/form/use-validated-form';
import { required } from '@/shared/hooks/form/validators';
import { useAddTransfer } from '../api/use-add-transfer';
import { getUTCDate } from '../lib/get-utc-date';
import { IsSameCurrenciesAccounts } from '../lib/is-same-currencies-accounts';

interface IAddTransferFormInputs {
  date: Date | undefined;
  fromCashAccountId: string;
  toCashAccountId: string;
  fromSum: number;
  toSum: number;
  comment: string;
}

export function useAddTransferForm({
  cashAccounts,
}: {
  cashAccounts: { id: string; name: string; currencyId: number }[];
}) {
  const { addTransfer, isLoading } = useAddTransfer();
  const form = useValidatedForm<IAddTransferFormInputs>({
    initialState: {
      date: new Date(),
      fromCashAccountId: '',
      toCashAccountId: '',
      fromSum: NaN,
      toSum: NaN,
      comment: '',
    },
    validators: {
      date: [required],
      fromSum: [required],
      toSum: [required],
      fromCashAccountId: [required],
      toCashAccountId: [required],
    },
  });

  const { fromCashAccountId, toCashAccountId, fromSum } = form.getState();

  const isSameCurrencies = IsSameCurrenciesAccounts(
    cashAccounts,
    fromCashAccountId,
    toCashAccountId
  );

  useEffect(() => {
    if (isSameCurrencies) {
      form.update('toSum', fromSum);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromSum, isSameCurrencies]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const {
      date,
      fromCashAccountId,
      fromSum,
      toCashAccountId,
      toSum,
      comment,
    } = form.getState();
    if (form.isValid) {
      await addTransfer({
        date: getUTCDate(date!),
        fromCashAccountId,
        toCashAccountId,
        fromSum: -Math.abs(fromSum),
        toSum: Math.abs(toSum),
        comment,
      });
      form.reset();
    }
  };

  return {
    ...form,
    handleSubmit,
    isLoading,
    isSameCurrencies,
    fromCashAccountId,
    toCashAccountId,
  };
}
