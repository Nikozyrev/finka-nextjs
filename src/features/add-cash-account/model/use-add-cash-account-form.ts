import { FormEvent } from 'react';
import { useForm } from 'relidate';
import { required } from 'relidate/validators';
import { addCashAccountAction } from '../api/add-cash-account';

export function useAddCashAccountForm() {
  const form = useForm({
    initialState: {
      name: '',
      startBalance: '',
      currencyId: '',
    },
    validators: {
      name: [required],
      currencyId: [required],
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, currencyId, startBalance } = form.getState();

    if (!name || !currencyId) return;
    await addCashAccountAction({ name, startBalance, currencyId });
    form.reset();
  };

  return { handleSubmit, ...form };
}
