'use client';

import { ReactNode } from 'react';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@tremor/react';
import AddTransactionForm from './add-transaction-form';

interface IAddTransactionTabsProps {
  categories: { id: string; name: string }[];
  cashAccounts: { id: string; name: string }[];
}

interface ITab {
  name: string;
  component: ReactNode;
}

export default function AddTransactionTabs({
  cashAccounts,
  categories
}: IAddTransactionTabsProps) {
  const tabs: ITab[] = [
    {
      name: 'Income',
      component: (
        <AddTransactionForm
          cashAccounts={cashAccounts}
          categories={categories}
        />
      )
    },
    {
      name: 'Expenses',
      component: (
        <AddTransactionForm
          cashAccounts={cashAccounts}
          categories={categories}
        />
      )
    },
    {
      name: 'Transfer',
      component: (
        <AddTransactionForm
          cashAccounts={cashAccounts}
          categories={categories}
        />
      )
    }
  ];

  return (
    <TabGroup>
      <TabList className="w-full justify-center" variant="solid">
        {tabs.map((tab) => (
          <Tab
            className="flex-auto flex justify-center font-bold text-lg py-2"
            key={tab.name}
          >
            {tab.name}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((tab) => (
          <TabPanel key={tab.name}>{tab.component}</TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}
