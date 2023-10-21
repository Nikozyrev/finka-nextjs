import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { useValidatedForm } from '@/shared/hooks/form/use-validated-form';
import { required } from '@/shared/hooks/form/validators';
import { addCategory } from '../api/add-category';

export function useAddCategoryForm() {
  const Router = useRouter();

  const form = useValidatedForm({
    initialState: {
      name: '',
      mainCategoryId: '',
    },
    validators: {
      name: [required],
      mainCategoryId: [required],
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, mainCategoryId } = form.getState();

    if (!name || !mainCategoryId) return;

    await addCategory({ name, mainCategoryId });
    form.reset();
    Router.refresh();
  };

  return { handleSubmit, ...form };
}