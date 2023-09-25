import { Flex } from '@tremor/react';
import { CurrencySelect } from '../ui/currency-select';
import { YearSelect } from '../ui/year-select';
import { getCurrencies } from '@/entities/currency';
import { getTransactionsYears } from '../api/get-years';

export async function CashFlowFilters(props: {
  currencyId?: number;
  year?: number;
}) {
  const year = props.year || new Date().getFullYear();
  const currencyId = props.currencyId || 1;
  const currencies = await getCurrencies();
  const years = await getTransactionsYears();

  return (
    <Flex className="w-fit gap-2">
      <CurrencySelect currencies={currencies} currencyId={currencyId} />
      <YearSelect years={years} year={year} />
    </Flex>
  );
}
