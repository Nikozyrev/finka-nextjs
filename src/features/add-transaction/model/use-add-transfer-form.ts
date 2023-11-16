import { FormEventHandler, useEffect } from 'react';
import { useForm } from 'relidate';
import { notNaN, required } from 'relidate/validators';
import { useAddTransfer } from '../api/use-add-transfer';
import { getUTCDate } from '../lib/get-utc-date';
import { IsSameCurrenciesAccounts } from '../lib/is-same-currencies-accounts';

type state = {
  date: Date | undefined;
  fromCashAccountId: string;
  toCashAccountId: string;
  fromSum: string;
  toSum: string;
  comment: string;
};

export function useAddTransferForm({
  cashAccounts,
}: {
  cashAccounts: { id: string; name: string; currencyId: number }[];
}) {
  const { addTransfer, isLoading } = useAddTransfer();
  const form = useForm<state>({
    initialState: {
      date: new Date(),
      fromCashAccountId: '',
      toCashAccountId: '',
      fromSum: '',
      toSum: '',
      comment: '',
    },
    validators: {
      date: [required],
      fromSum: [required, notNaN],
      toSum: [required, notNaN],
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
        fromSum: -Math.abs(Number(fromSum)),
        toSum: Math.abs(Number(toSum)),
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
