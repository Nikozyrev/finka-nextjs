import { Flex } from '@tremor/react';
import { Spinner } from '@/components/ui/spinner';

export const TransactionsTableLoading = () => {
  return (
    <Flex justifyContent="center" className="p-8">
      <Spinner />
    </Flex>
  );
};
