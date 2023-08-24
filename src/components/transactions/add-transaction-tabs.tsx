'use client';

import { CategoryType } from '@prisma/client';
import { FC } from 'react';
import { AddTransactionForm } from './add-transaction-form';
import { AddTransferForm } from './add-transfer-form';
import { AppTabs, ITab } from '../ui/tabs';

interface IAddTransactionTabsProps {
  categories: { id: string; name: string; categoryType: CategoryType }[];
  cashAccounts: { id: string; name: string; currencyId: number }[];
}

export const AddTransactionTabs: FC<IAddTransactionTabsProps> = ({
  cashAccounts,
  categories
}) => {
  const tabs: ITab[] = [
    {
      name: 'Income',
      component: (
        <AddTransactionForm
          cashAccounts={cashAccounts}
          categories={categories}
          categoryType="INCOME"
        />
      )
    },
    {
      name: 'Expenses',
      component: (
        <AddTransactionForm
          cashAccounts={cashAccounts}
          categories={categories}
          categoryType="EXPENSE"
        />
      )
    },
    {
      name: 'Transfer',
      component: <AddTransferForm cashAccounts={cashAccounts} />
    }
  ];

  return <AppTabs tabs={tabs} />;
};
