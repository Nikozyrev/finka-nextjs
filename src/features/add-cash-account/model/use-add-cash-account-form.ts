import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useValidatedForm } from '@nikozyrev/relidate';
import { required } from '@nikozyrev/relidate/validators';
import { addCashAccount } from '../api/add-cash-account';

export function useAddCashAccountForm() {
  const Router = useRouter();

  const form = useValidatedForm({
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
    await addCashAccount({ name, startBalance, currencyId });
    form.reset();
    Router.refresh();
  };

  return { handleSubmit, ...form };
}
