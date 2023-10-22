import { FormEventHandler } from 'react';
import { useValidatedForm } from '@nikozyrev/relidate';
import { notNaN, required } from '@nikozyrev/relidate/validators';
import { IAddCategoryType } from '@/entities/main-category';
import { getSumWithSign } from '../lib/get-sum-with-sign';
import { getUTCDate } from '../lib/get-utc-date';
import { useAddTransaction } from '../api/use-add-transaction';

type state = {
  date: Date | undefined;
  sum: string;
  cashAccountId: string;
  categoryId: string;
  comment: string;
};

export function useAddTransactionForm({
  categoryType,
}: {
  categoryType: IAddCategoryType;
}) {
  const { addTransaction, isLoading } = useAddTransaction();
  const form = useValidatedForm<state>({
    initialState: {
      date: new Date(),
      sum: '',
      cashAccountId: '',
      categoryId: '',
      comment: '',
    },
    validators: {
      date: [required],
      sum: [required, notNaN],
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
