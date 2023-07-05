import { Suspense } from 'react';
import { Title } from '@tremor/react';
import { getCurrencies } from '../../../services/db/currencies/get-currencies';
import { getTransactionsYears } from '../../../services/db/transactions/get-years';
import CashFlowTable from '../../../components/cash-flow/cash-flow-table';
import CurrencySelect from '../../../components/cash-flow/currency-select';
import YearSelect from '../../../components/cash-flow/year-select';

interface ICashFlowPageProps {
  searchParams?: {
    year?: string;
    currency?: string;
  };
}

export default async function CashFlowPage({
  searchParams
}: ICashFlowPageProps) {
  const currencies = await getCurrencies();
  const years = await getTransactionsYears();

  const defaultYear = new Date().getFullYear();
  const defaultCurrencyId = 1;
  const year = Number(searchParams?.year) || defaultYear;
  const currencyId = Number(searchParams?.currency) || defaultCurrencyId;

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title className="mb-3">Cash Flow page</Title>
      <CurrencySelect currencies={currencies} currencyId={currencyId} />
      <YearSelect years={years} year={year} />
      <Suspense fallback={'Loading...'}>
        {/* @ts-expect-error Server Component */}
        <CashFlowTable currencyId={currencyId} year={year} />
      </Suspense>
    </main>
  );
}
