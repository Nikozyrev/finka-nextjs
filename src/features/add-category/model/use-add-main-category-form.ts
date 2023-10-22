import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { CashFlowSection, CategoryType } from '@prisma/client';
import { useValidatedForm } from '@nikozyrev/relidate';
import { required } from '@nikozyrev/relidate/validators';
import { addMainCategory } from '../api/add-main-category';

const initialState: {
  name: string;
  categoryType: CategoryType;
  cashFlowSection: CashFlowSection;
} = {
  name: '',
  categoryType: CategoryType.INCOME,
  cashFlowSection: CashFlowSection.OPERATIONAL,
};

export function useAddMainCategoryForm() {
  const Router = useRouter();

  const form = useValidatedForm({
    initialState,
    validators: {
      name: [required],
      categoryType: [required],
      cashFlowSection: [required],
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, categoryType, cashFlowSection } = form.getState();

    if (!name || !categoryType || !cashFlowSection) return;

    await addMainCategory({ name, categoryType, cashFlowSection });
    form.reset();
    Router.refresh();
  };

  return {
    handleSubmit,
    ...form,
  };
}
