import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { addCashAccount } from '../api/add-cash-account';
import { useValidatedForm } from '@/shared/hooks/form/use-validated-form';
import { required } from '@/shared/hooks/form/validators';

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