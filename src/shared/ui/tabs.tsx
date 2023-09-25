import { FC, ReactNode } from 'react';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@tremor/react';

export interface ITab {
  name: string;
  component: ReactNode;
}

interface IAppTabsProps {
  tabs: ITab[];
}

export const AppTabs: FC<IAppTabsProps> = ({ tabs }) => {
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
};
