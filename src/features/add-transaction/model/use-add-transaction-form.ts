import { FormEventHandler } from 'react';
import { IAddCategoryType } from '@/entities/main-category';
import { useValidatedForm } from '@/shared/hooks/form/use-validated-form';
import { required } from '@/shared/hooks/form/validators';
import { getSumWithSign } from '../lib/get-sum-with-sign';
import { getUTCDate } from '../lib/get-utc-date';
import { useAddTransaction } from '../api/use-add-transaction';

interface IAddTransactionFormInputs {
  date: Date | undefined;
  sum: number;
  cashAccountId: string;
  categoryId: string;
  comment: string;
}

export function useAddTransactionForm({
  categoryType,
}: {
  categoryType: IAddCategoryType;
}) {
  const { addTransaction, isLoading } = useAddTransaction();
  const form = useValidatedForm<IAddTransactionFormInputs>({
    initialState: {
      date: new Date(),
      sum: NaN,
      cashAccountId: '',
      categoryId: '',
      comment: '',
    },
    validators: {
      date: [required],
      sum: [required],
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
        sum: getSumWithSign(categoryType, sum),
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
