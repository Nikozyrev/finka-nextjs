import { useForm, SubmitHandler } from 'react-hook-form';
import { getSumWithSign } from '../lib/get-sum-with-sign';
import { getUTCDate } from '../lib/get-utc-date';
import { useAddTransaction } from '../api/use-add-transaction';
import { IAddCategoryType } from '@/entities/main-category';

interface IAddTransactionFormInputs {
  date: Date;
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
  const { register, handleSubmit, reset, formState, control } =
    useForm<IAddTransactionFormInputs>({
      defaultValues: { date: new Date() },
    });

  const onSubmit: SubmitHandler<IAddTransactionFormInputs> = async (
    formData
  ) => {
    const { date, sum, cashAccountId, categoryId, comment } = formData;
    if (formState.isValid) {
      await addTransaction({
        date: getUTCDate(date),
        sum: getSumWithSign(categoryType, sum),
        cashAccountId,
        categoryId,
        comment,
      });
      reset();
      return;
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    isLoading,
    control,
    isValid: formState.isValid,
  };
}
