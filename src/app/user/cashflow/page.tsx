import { Suspense } from 'react';
import { getCurrencies } from '../../../services/db/currencies/get-currencies';
import { getTransactionsYears } from '../../../services/db/transactions/get-years';
import { CashFlowTable } from '../../../components/cash-flow/cash-flow-table';
import { CurrencySelect } from '../../../components/cash-flow/currency-select';
import { YearSelect } from '../../../components/cash-flow/year-select';
import { Spinner } from '@/components/ui/spinner';

interface ICashFlowPageProps {
  searchParams?: {
    year?: string;
    currency?: string;
  };
}

export default async function CashFlowPage({
  searchParams,
}: ICashFlowPageProps) {
  const currencies = await getCurrencies();
  const years = await getTransactionsYears();

  const defaultYear = new Date().getFullYear();
  const defaultCurrencyId = 1;
  const year = Number(searchParams?.year) || defaultYear;
  const currencyId = Number(searchParams?.currency) || defaultCurrencyId;

  return (
    <>
      <div className="flex w-fit mb-2 gap-1">
        <CurrencySelect currencies={currencies} currencyId={currencyId} />
        <YearSelect years={years} year={year} />
      </div>
      <Suspense fallback={<Spinner />}>
        <CashFlowTable currencyId={currencyId} year={year} />
      </Suspense>
    </>
  );
}
