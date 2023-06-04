import { Suspense } from 'react';
import { Title } from '@tremor/react';
import CashFlowTable from '../../../components/cash-flow/cash-flow-table';

export default async function CashFlowPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title className="mb-3">Cash Flow page</Title>
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CashFlowTable />
      </Suspense>
    </main>
  );
}
