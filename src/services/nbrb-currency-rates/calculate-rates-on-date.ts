import { Currency } from '@prisma/client';
import { ICurrencyRate } from '@/entities/currency-rate';
import { ICurrencyRateResponse } from './rate-response.model';

export const calculateRatesOnDate = (
  date: Date,
  currencies: Currency[],
  ratesData: ICurrencyRateResponse[]
) => {
  const source = 'nbrb';

  const ratesToBYN = currencies.reduce((acc, { id, symbol }) => {
    const baseCurrencyId = 2;

    if (symbol === 'BYN')
      return [
        ...acc,
        { date, rate: 1, currencyId: id, source, baseCurrencyId },
      ];

    const rateData = ratesData.find(
      ({ Cur_Abbreviation }) => Cur_Abbreviation === symbol
    );
    if (!rateData) throw new Error('Failed to get rate');

    const rate = rateData.Cur_OfficialRate / rateData.Cur_Scale;

    return [...acc, { date, rate, currencyId: id, source, baseCurrencyId }];
  }, [] as ICurrencyRate[]);

  const rates = ratesToBYN.reduce((acc, { rate, currencyId }, _, arr) => {
    arr.forEach((val) => {
      acc.push({
        ...val,
        rate: val.rate / rate,
        currencyId: val.currencyId,
        baseCurrencyId: currencyId,
      });
    });
    return acc;
  }, [] as ICurrencyRate[]);

  return rates;
};
