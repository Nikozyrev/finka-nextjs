import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { addCashAccount } from '../api/add-cash-account';
import { useFormState } from '@/shared/hooks/form/use-form-state';

const initialState = {
  name: '',
  startBalance: '',
  currencyId: '',
};

export function useAddCashAccountForm() {
  const Router = useRouter();
  const { state, update, reset } = useFormState({ initialState });

  const isValid = !!(state.name && state.currencyId);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, currencyId, startBalance } = state;

    if (!name || !currencyId) return;
    await addCashAccount({ name, startBalance, currencyId });
    reset();
    Router.refresh();
  };

  return { state, handleSubmit, update, isValid };
}
