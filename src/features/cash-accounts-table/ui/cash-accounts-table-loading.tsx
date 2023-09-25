import { Flex } from '@tremor/react';
import { Spinner } from '@/shared/ui/spinner';

export const CashAccountsTableLoading = () => {
  return (
    <Flex className="p-9">
      <Spinner />
    </Flex>
  );
};
