import { FormEventHandler } from 'react';
import { useForm } from 'relidate';
import { notNaN, required } from 'relidate/validators';
import { IAddCategoryType } from '@/entities/main-category';
import { getSumWithSign } from '../lib/get-sum-with-sign';
import { getUTCDate } from '../lib/get-utc-date';
import { useAddTransaction } from '../api/use-add-transaction';
import { ICashAccountFromDb, isEnoughBalance } from '@/entities/cash-account';

type state = {
  date: Date | undefined;
  sum: string;
  cashAccountId: string;
  categoryId: string;
  comment: string;
};

const checkBalance =
  (categoryType: IAddCategoryType, cashAccounts: ICashAccountFromDb[]) =>
  (v: string, { cashAccountId }: state) =>
    categoryType === 'INCOME'
      ? true
      : isEnoughBalance(cashAccounts, cashAccountId, v);

export function useAddTransactionForm({
  categoryType,
  cashAccounts,
}: {
  categoryType: IAddCategoryType;
  cashAccounts: ICashAccountFromDb[];
}) {
  const { addTransaction, isLoading } = useAddTransaction();
  const form = useForm<state>({
    initialState: {
      date: new Date(),
      sum: '',
      cashAccountId: '',
      categoryId: '',
      comment: '',
    },
    validators: {
      date: [required],
      sum: [required, notNaN, checkBalance(categoryType, cashAccounts)],
      cashAccountId: [required],
      categoryId: [required],
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { date, sum, cashAccountId, categoryId, comment } = form.getState();
    if (form.isValid) {
      await addTransaction({
        date: getUTCDate(date!),
        sum: getSumWithSign(categoryType, Number(sum)),
        cashAccountId,
        categoryId,
        comment,
      });
      form.reset();
    }
  };

  return {
    handleSubmit,
    isLoading,
    ...form,
  };
}
