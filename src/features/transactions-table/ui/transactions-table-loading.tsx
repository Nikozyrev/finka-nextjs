import { Flex } from '@tremor/react';
import { Spinner } from '@/shared/ui/spinner';

export const TransactionsTableLoading = () => {
  return (
    <Flex justifyContent="center" className="p-8">
      <Spinner />
    </Flex>
  );
};
