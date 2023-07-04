import { Suspense } from 'react';
import { Title } from '@tremor/react';
import CashFlowTable from '../../../components/cash-flow/cash-flow-table';

interface ICashFlowPageProps {
  searchParams?: {
    year?: string;
    currency?: string;
  };
}

export default async function CashFlowPage({
  searchParams
}: ICashFlowPageProps) {
  const defaultYear = new Date().getFullYear();
  const defaultCurrencyId = 1;
  const year = Number(searchParams?.year);
  const currencyId = Number(searchParams?.currency);

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title className="mb-3">Cash Flow page</Title>
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CashFlowTable
          currencyId={currencyId || defaultCurrencyId}
          year={year || defaultYear}
        />
      </Suspense>
    </main>
  );
}
