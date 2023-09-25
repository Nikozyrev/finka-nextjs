import { Flex } from '@tremor/react';
import { Spinner } from '@/shared/ui/spinner';

export function CategoriesTableLoading() {
  return (
    <Flex justifyContent="center" className="p-6">
      <Spinner />
    </Flex>
  );
}
