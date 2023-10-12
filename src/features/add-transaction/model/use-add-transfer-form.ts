import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAddTransfer } from '../api/use-add-transfer';
import { getUTCDate } from '../lib/get-utc-date';
import { IsSameCurrenciesAccounts } from '../lib/is-same-currencies-accounts';

interface IAddTransferFormInputs {
  date: Date;
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
  const { register, handleSubmit, watch, reset, formState, control, setValue } =
    useForm<IAddTransferFormInputs>({
      defaultValues: {
        date: new Date(),
        fromCashAccountId: '',
        toCashAccountId: '',
      },
    });

  const fromCashAccountId = watch('fromCashAccountId');
  const toCashAccountId = watch('toCashAccountId');
  const fromSum = watch('fromSum');

  const isSameCurrencies = IsSameCurrenciesAccounts(
    cashAccounts,
    fromCashAccountId,
    toCashAccountId
  );

  const onSubmit: SubmitHandler<IAddTransferFormInputs> = async (formData) => {
    const {
      date,
      fromCashAccountId,
      fromSum,
      toCashAccountId,
      toSum,
      comment,
    } = formData;
    if (formState.isValid) {
      await addTransfer({
        date: getUTCDate(date),
        fromCashAccountId,
        toCashAccountId,
        fromSum: -Math.abs(fromSum),
        toSum: Math.abs(toSum),
        comment,
      });
      reset();
      return;
    }
  };

  useEffect(() => {
    if (isSameCurrencies) {
      setValue('toSum', fromSum);
    }
  }, [fromSum, isSameCurrencies, setValue, watch]);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    isValid: formState.isValid,
    control,
    isSameCurrencies,
    fromCashAccountId,
    toCashAccountId,
  };
}
