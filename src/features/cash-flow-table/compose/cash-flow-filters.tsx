import { Flex } from '@tremor/react';
import { CurrencySelect } from '../ui/currency-select';
import { YearSelect } from '../ui/year-select';
import { getCurrencies } from '@/entities/currency';
import { getTransactionsYears } from '../api/get-years';
import { transformCFProps } from '../lib/transform-cf-props';

export async function CashFlowFilters(props: {
  currencyId?: string;
  year?: string;
}) {
  const { year, currencyId } = transformCFProps(props);
  const currencies = await getCurrencies();
  const years = await getTransactionsYears();

  return (
    <Flex className="w-fit gap-2">
      <CurrencySelect currencies={currencies} currencyId={currencyId} />
      <YearSelect years={years} year={year} />
    </Flex>
  );
}
